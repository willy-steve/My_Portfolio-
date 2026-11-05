(function () {
  'use strict';

  const apiBase = (window.COMMUNITY_API_BASE || '/api').replace(/\/$/, '');
  const topicKeys = ['offline-pwas', 'github-actions', 'relational-nosql'];
  const topicGrid = document.getElementById('topicGrid');
  const boardStatus = document.getElementById('boardStatus');
  const totalVotes = document.getElementById('totalVotes');
  const discussionList = document.getElementById('discussionList');
  const discussionForm = document.getElementById('discussionForm');
  const discussionStatus = document.getElementById('discussionStatus');
  const displayNameInput = document.getElementById('displayName');
  const privateContactLink = document.getElementById('privateContactLink');
  const voteLabel = document.getElementById('voteLabel');
  const communityTabs = document.querySelectorAll('[data-community-tab]');
  let board;
  let selectedTopicId = '';
  let voterId = '';

  if (!topicGrid) return;

  communityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      selectTab(tab);
    });
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const currentIndex = Array.from(communityTabs).indexOf(tab);
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? communityTabs.length - 1
          : (currentIndex + (event.key === 'ArrowRight' ? 1 : communityTabs.length - 1)) % communityTabs.length;
      const nextTab = communityTabs[nextIndex];
      selectTab(nextTab);
      nextTab.focus();
    });
  });

  function selectTab(tab) {
    communityTabs.forEach(item => {
      const isSelected = item === tab;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-selected', String(isSelected));
      item.tabIndex = isSelected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !isSelected;
    });
    if (tab.dataset.communityTab === 'suggest') document.getElementById('commTopic').focus();
  }

  function t(key) {
    return window.i18n ? window.i18n.t(key) : key;
  }

  function showStatus(element, message, isError) {
    if (!element) return;
    element.textContent = message;
    element.classList.toggle('is-error', Boolean(isError));
    element.hidden = false;
  }

  function localizeTopic(topic, field, key) {
    if (key) return t(`communityBoard.topics.${key}.${field}`);
    const frenchField = `${field}Fr`;
    return window.i18n?.currentLang === 'fr' ? (topic[frenchField] || topic[field] || '') : (topic[field] || '');
  }

  function getVoterId() {
    const storageKey = 'dskode_community_voter';
    let id = localStorage.getItem(storageKey);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(storageKey, id);
    }
    return id;
  }

  async function request(path, options) {
    const response = await fetch(`${apiBase}${path}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(options && options.headers) }
    });
    if (!response.headers.get('content-type')?.includes('application/json')) {
      throw new Error(t('communityBoard.requestError'));
    }
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || t('communityBoard.requestError'));
    return payload;
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderBoard() {
    if (!board) return;
    const savedVote = localStorage.getItem('dskode_community_vote');
    totalVotes.textContent = String(board.totalVotes);
    if (voteLabel) {
      voteLabel.textContent = t(board.totalVotes === 1 ? 'communityBoard.singleVoteCast' : 'communityBoard.votesCast');
    }
    topicGrid.replaceChildren();

    board.topics.forEach(topic => {
      const key = topicKeys.includes(topic.id) ? topic.id : '';
      const card = createElement('article', 'community-topic-card');
      const category = createElement('span', 'topic-category', localizeTopic(topic, 'category', key));
      const title = createElement('h3', '', localizeTopic(topic, 'title', key));
      const description = createElement('p', 'topic-description', localizeTopic(topic, 'description', key));
      const results = createElement('div', 'topic-results');
      const resultsLabel = createElement('div', 'topic-results-label');
      const percentage = board.totalVotes ? Math.round((topic.votes / board.totalVotes) * 100) : 0;
      const voteLabel = topic.votes === 1 ? t('communityBoard.singleVote') : t('communityBoard.voteCount');
      const voteCount = createElement('span', '', `${topic.votes} ${voteLabel}`);
      const percent = createElement('strong', '', `${percentage}%`);
      const meter = document.createElement('div');
      meter.className = 'topic-vote-meter';
      meter.setAttribute('role', 'progressbar');
      meter.setAttribute('aria-label', `${t('communityBoard.voteShare')}: ${percentage}%`);
      meter.setAttribute('aria-valuemin', '0');
      meter.setAttribute('aria-valuemax', '100');
      meter.setAttribute('aria-valuenow', String(percentage));
      const fill = document.createElement('span');
      fill.style.width = `${percentage}%`;
      meter.append(fill);
      resultsLabel.append(voteCount, percent);
      results.append(resultsLabel, meter);

      const actions = createElement('div', 'topic-card-actions');
      const voteButton = createElement('button', 'btn btn-primary topic-vote-button', savedVote ? t('communityBoard.voted') : t('communityBoard.vote'));
      voteButton.type = 'button';
      voteButton.disabled = Boolean(savedVote);
      voteButton.setAttribute('aria-pressed', String(savedVote === topic.id));
      voteButton.addEventListener('click', () => vote(topic.id, voteButton));
      const discussButton = createElement('button', 'topic-discuss-button', t('communityBoard.discuss'));
      discussButton.type = 'button';
      discussButton.addEventListener('click', () => loadDiscussion(topic.id, true));
      actions.append(voteButton, discussButton);
      card.append(category, title, description, results, actions);
      topicGrid.append(card);
    });
    boardStatus.hidden = true;
  }

  async function loadBoard() {
    try {
      board = await request('/community/board');
      renderBoard();
    } catch (error) {
      showStatus(boardStatus, `${t('communityBoard.loadError')} ${error.message}`, true);
    }
  }

  async function vote(topicId, button) {
    button.disabled = true;
    try {
      board = await request('/community/vote', {
        method: 'POST',
        body: JSON.stringify({ topicId, voterId })
      });
      localStorage.setItem('dskode_community_vote', topicId);
      renderBoard();
    } catch (error) {
      await loadBoard();
      showStatus(boardStatus, error.message, true);
    }
  }

  function renderDiscussions(entries) {
    discussionList.replaceChildren();
    if (!entries.length) {
      discussionList.append(createElement('p', 'discussion-empty', t('communityBoard.emptyThread')));
      return;
    }
    entries.forEach(entry => {
      const article = createElement('article', 'discussion-entry');
      const heading = createElement('div', 'discussion-entry-heading');
      const author = createElement('h3', '', entry.displayName);
      const date = createElement('time', 'discussion-date');
      date.dateTime = entry.createdAt;
      date.textContent = new Intl.DateTimeFormat(window.i18n?.currentLang || 'en', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }).format(new Date(entry.createdAt));
      const message = createElement('p', 'discussion-entry-message', entry.message);
      heading.append(author, date);
      article.append(heading, message);
      discussionList.append(article);
    });
  }

  async function loadDiscussion(topicId, focusDiscussion) {
    selectedTopicId = topicId;
    const key = topicKeys.includes(topicId) ? topicId : '';
    const topic = board?.topics.find(item => item.id === topicId);
    const topicTitle = topic ? localizeTopic(topic, 'title', key) : '';
    document.getElementById('discussionTitle').textContent = key
      ? topicTitle
      : t('communityBoard.chooseTopic');
    if (privateContactLink && topicTitle) {
      privateContactLink.href = `index.html?topic=${encodeURIComponent(topicTitle)}#contact`;
    }
    discussionForm.hidden = false;
    discussionStatus.hidden = true;
    discussionList.replaceChildren(createElement('p', 'discussion-empty', t('communityBoard.loadingDiscussion')));
    try {
      const result = await request(`/community/discussions?topicId=${encodeURIComponent(topicId)}`);
      renderDiscussions(result.discussions);
      if (focusDiscussion) {
        document.getElementById('discussion').scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          block: 'start'
        });
        displayNameInput.focus({ preventScroll: true });
      }
    } catch (error) {
      renderDiscussions([]);
      showStatus(discussionStatus, `${t('communityBoard.discussionLoadError')} ${error.message}`, true);
    }
  }

  discussionForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!selectedTopicId) return;
    const submitButton = discussionForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    const displayName = displayNameInput.value.trim();
    const messageInput = document.getElementById('discussionMessage');
    try {
      await request('/community/discussions', {
        method: 'POST',
        body: JSON.stringify({
          topicId: selectedTopicId,
          displayName,
          message: messageInput.value.trim()
        })
      });
      localStorage.setItem('dskode_community_display_name', displayName);
      messageInput.value = '';
      await loadDiscussion(selectedTopicId, false);
      showStatus(discussionStatus, t('communityBoard.replySuccess'), false);
    } catch (error) {
      showStatus(discussionStatus, error.message, true);
    } finally {
      submitButton.disabled = false;
    }
  });

  window.addEventListener('languageChanged', () => {
    renderBoard();
    if (selectedTopicId) loadDiscussion(selectedTopicId, false);
  });

  try {
    voterId = getVoterId();
    displayNameInput.value = localStorage.getItem('dskode_community_display_name') || '';
  } catch (error) {
    showStatus(boardStatus, t('communityBoard.storageError'), true);
  }
  loadBoard();

  window.setInterval(() => {
    if (document.visibilityState !== 'visible') return;
    loadBoard();
    if (selectedTopicId) loadDiscussion(selectedTopicId, false);
  }, 15000);
})();
