const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dataPath = process.env.COMMUNITY_BOARD_PATH || path.join(__dirname, '..', 'data', 'community-board.json');
const topicSeeds = [
  { id: 'offline-pwas', title: 'Designing Offline PWAs for Low Bandwidth', category: 'Offline-first systems' },
  { id: 'github-actions', title: 'Building Zero-Downtime GitHub Actions CI/CD', category: 'DevOps & delivery' },
  { id: 'relational-nosql', title: 'Relational vs NoSQL for School ERPs', category: 'Architecture decisions' }
];

function readBoard() {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    writeBoard({ topics: topicSeeds, votes: {}, discussions: [] });
  }
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
}

function writeBoard(board) {
  const temporaryPath = `${dataPath}.tmp`;
  fs.writeFileSync(temporaryPath, JSON.stringify(board, null, 2), { mode: 0o600 });
  fs.renameSync(temporaryPath, dataPath);
}

function getBoard() {
  const board = readBoard();
  const counts = Object.fromEntries(board.topics.map(topic => [topic.id, 0]));
  Object.values(board.votes).forEach(topicId => {
    if (Object.hasOwn(counts, topicId)) counts[topicId] += 1;
  });
  return {
    topics: board.topics.map(topic => ({ ...topic, votes: counts[topic.id] || 0 })),
    totalVotes: Object.values(counts).reduce((total, count) => total + count, 0)
  };
}

function castVote({ topicId, voterId }) {
  const board = readBoard();
  if (!board.topics.some(topic => topic.id === topicId)) {
    const error = new Error('Choose a topic on the board.');
    error.statusCode = 400;
    throw error;
  }
  if (typeof voterId !== 'string' || !/^[a-f0-9-]{32,36}$/i.test(voterId)) {
    const error = new Error('A valid community voter ID is required.');
    error.statusCode = 400;
    throw error;
  }
  if (board.votes[voterId]) {
    const error = new Error('You have already voted in this poll.');
    error.statusCode = 409;
    throw error;
  }
  board.votes[voterId] = topicId;
  writeBoard(board);
  return getBoard();
}

function getDiscussions(topicId) {
  const board = readBoard();
  if (!board.topics.some(topic => topic.id === topicId)) {
    const error = new Error('Choose a topic on the board.');
    error.statusCode = 400;
    throw error;
  }
  return board.discussions
    .filter(entry => entry.topicId === topicId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

function addDiscussion({ topicId, displayName, message }) {
  const board = readBoard();
  if (!board.topics.some(topic => topic.id === topicId)) {
    const error = new Error('Choose a topic on the board.');
    error.statusCode = 400;
    throw error;
  }
  if (typeof displayName !== 'string' || !displayName.trim() || displayName.trim().length > 40) {
    const error = new Error('Enter a display name of 1–40 characters.');
    error.statusCode = 400;
    throw error;
  }
  if (typeof message !== 'string' || !message.trim() || message.trim().length > 1000) {
    const error = new Error('Write a discussion message of 1–1,000 characters.');
    error.statusCode = 400;
    throw error;
  }
  const entry = {
    id: crypto.randomUUID(),
    topicId,
    displayName: displayName.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString()
  };
  board.discussions.push(entry);
  writeBoard(board);
  return entry;
}

module.exports = { getBoard, castVote, getDiscussions, addDiscussion };
