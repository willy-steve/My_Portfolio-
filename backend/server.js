/**
 * server.js - Community API for the public architecture board and private proposals
 */

const http = require('http');
const db = require('./database');
const communityBoard = require('./community-board');

const PORT = process.env.PORT || 3001;
const ALLOWED_ORIGIN = process.env.COMMUNITY_ALLOWED_ORIGIN || '*';

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(JSON.stringify(payload));
}

function readJsonBody(req, maxBytes = 51200) {
  return new Promise((resolve, reject) => {
    let body = '';
    let exceededLimit = false;
    req.setEncoding('utf8');
    req.on('data', chunk => {
      if (exceededLimit) return;
      body += chunk;
      if (Buffer.byteLength(body) > maxBytes) {
        exceededLimit = true;
        const error = new Error('Payload too large');
        error.statusCode = 413;
        reject(error);
        req.resume();
      }
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        const error = new Error('Request body must be valid JSON.');
        error.statusCode = 400;
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const requestUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  try {
    if (req.method === 'GET' && requestUrl.pathname === '/api/health') {
      sendJson(res, 200, { status: 'healthy', service: 'DJIDJOU STEVE Community API' });
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/api/community/board') {
      sendJson(res, 200, communityBoard.getBoard());
      return;
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/community/vote') {
      const result = communityBoard.castVote(await readJsonBody(req, 4096));
      sendJson(res, 200, result);
      return;
    }

    if (requestUrl.pathname === '/api/community/discussions' && req.method === 'GET') {
      const topicId = requestUrl.searchParams.get('topicId');
      sendJson(res, 200, { discussions: communityBoard.getDiscussions(topicId) });
      return;
    }

    if (requestUrl.pathname === '/api/community/discussions' && req.method === 'POST') {
      const entry = communityBoard.addDiscussion(await readJsonBody(req, 4096));
      sendJson(res, 201, { discussion: entry });
      return;
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/community') {
      const payload = await readJsonBody(req);
      const { name, email, topic, details } = payload;

      if (typeof topic !== 'string' || !topic.trim() || topic.trim().length > 120) {
        sendJson(res, 400, { error: 'Topic proposal must be between 1 and 120 characters.' });
        return;
      }
      if ((name !== undefined && typeof name !== 'string')
        || (email !== undefined && typeof email !== 'string')
        || (details !== undefined && typeof details !== 'string')
        || (name || '').length > 80
        || (email || '').length > 254
        || (details || '').length > 2000) {
        sendJson(res, 400, { error: 'Proposal details exceed the allowed length.' });
        return;
      }

      const result = await db.saveProposal({
        name: typeof name === 'string' ? name.trim() : '',
        email: typeof email === 'string' ? email.trim() : '',
        topic: topic.trim(),
        details: typeof details === 'string' ? details.trim() : ''
      });

      sendJson(res, 201, {
        success: true,
        message: 'Encrypted proposal stored securely for review.',
        id: result.anonymousId
      });
      return;
    }

    sendJson(res, 404, { error: 'Endpoint not found.' });
  } catch (error) {
    if (error.statusCode) {
      sendJson(res, error.statusCode, { error: error.message });
      return;
    }
    console.error('[API Error]', error);
    sendJson(res, 500, { error: 'The community service could not complete this request.' });
  }
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`[DsKode Server] Community API running at http://localhost:${PORT}`);
  });
}

module.exports = server;
