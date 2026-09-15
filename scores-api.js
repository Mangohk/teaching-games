(function (global) {
  'use strict';

  var API_URL = 'https://script.google.com/macros/s/AKfycbzOnQtHFqiXKgNmnyTkajcqI9qOvL5wxfSwKm9oghUFIm3zsaVu6WyXbB7kzRdAlT1M/exec';
  var stylesReady = false;

  function queryString(params) {
    var parts = [];
    Object.keys(params).forEach(function (key) {
      var value = params[key];
      if (value == null || value === '') return;
      parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(value)));
    });
    return parts.join('&');
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[ch];
    });
  }

  function friendlyDate(value) {
    if (!value) return '';
    var date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString();
  }

  function formatScore(entry) {
    var score = Number(entry && entry.score);
    if (!isFinite(score)) return '—';
    if ((entry && entry.score_type) === 'seconds') {
      return score.toFixed(1) + 's';
    }
    return Math.round(score).toLocaleString();
  }

  async function requestJson(url) {
    var response = await fetch(url);
    var data = await response.json();
    if (!data || data.ok === false) {
      throw new Error((data && data.error) || 'Score service error');
    }
    return data;
  }

  async function loadScores(gameId, limit) {
    var data = await requestJson(API_URL + '?' + queryString({
      action: 'list',
      game: gameId || '',
      limit: limit || 20
    }));
    return data.scores || [];
  }

  async function saveScore(payload) {
    return requestJson(API_URL + '?' + queryString({
      action: 'submit',
      game_id: payload.game_id,
      player: payload.player,
      score: payload.score,
      score_type: payload.score_type || 'points',
      level: payload.level || '',
      extra: payload.extra || '',
      class_name: payload.class_name || '',
      notes: payload.notes || ''
    }));
  }

  function ensureStyles() {
    if (stylesReady || !document.head) return;
    stylesReady = true;
    var style = document.createElement('style');
    style.textContent = [
      '.tg-scores-box{margin:0.85rem 0 0;text-align:left;background:rgba(15,23,42,0.05);border:2px solid rgba(15,23,42,0.08);border-radius:14px;padding:0.7rem 0.8rem;}',
      '.tg-scores-box h3{margin:0 0 0.45rem;font-size:0.78rem;letter-spacing:0.04em;text-transform:uppercase;color:inherit;}',
      '.tg-scores-list{list-style:none;margin:0;padding:0;max-height:9.5rem;overflow:auto;}',
      '.tg-scores-list li{display:flex;align-items:center;gap:0.45rem;padding:0.28rem 0;border-bottom:1px solid rgba(15,23,42,0.07);font-size:0.82rem;}',
      '.tg-scores-list li:last-child{border-bottom:0;}',
      '.tg-scores-rank{width:1.35rem;flex:0 0 auto;font-weight:800;}',
      '.tg-scores-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}',
      '.tg-scores-val{font-weight:800;flex:0 0 auto;}',
      '.tg-scores-empty{margin:0;font-size:0.8rem;opacity:0.72;}',
      '.tg-scores-form{display:flex;gap:0.4rem;margin:0 0 0.5rem;}',
      '.tg-scores-form input{flex:1;min-width:0;border:2px solid rgba(15,23,42,0.16);border-radius:10px;padding:0.45rem 0.6rem;font:inherit;}',
      '.tg-scores-form button{border:0;border-radius:10px;padding:0.45rem 0.75rem;font:inherit;font-weight:800;cursor:pointer;background:#0ea5e9;color:#fff;}',
      '.tg-scores-form button:disabled{opacity:0.65;cursor:default;}',
      '.tg-scores-status{margin:0 0 0.4rem;font-size:0.75rem;font-weight:700;}'
    ].join('');
    document.head.appendChild(style);
  }

  function renderList(container, scores, options) {
    options = options || {};
    if (!container) return;
    ensureStyles();
    if (!scores || !scores.length) {
      container.innerHTML = '<p class="tg-scores-empty">' +
        escapeHtml(options.emptyText || 'No high scores yet. Be the first!') +
        '</p>';
      return;
    }
    var html = '<ol class="tg-scores-list">';
    scores.forEach(function (entry, index) {
      var bits = [entry.player];
      if (entry.level) bits.push(entry.level);
      if (entry.extra) bits.push(entry.extra);
      html += '<li><span class="tg-scores-rank">' + (index + 1) + '</span>' +
        '<span class="tg-scores-name">' + escapeHtml(bits.join(' · ')) + '</span>' +
        '<span class="tg-scores-val">' + escapeHtml(formatScore(entry)) + '</span></li>';
    });
    html += '</ol>';
    container.innerHTML = html;
  }

  async function fillList(container, gameId, options) {
    options = options || {};
    if (!container) return [];
    container.innerHTML = '<p class="tg-scores-empty">Loading class scores…</p>';
    try {
      var scores = await loadScores(gameId, options.limit || 10);
      renderList(container, scores, options);
      return scores;
    } catch (err) {
      container.innerHTML = '<p class="tg-scores-empty">Could not load class scores just now.</p>';
      return [];
    }
  }

  async function submitAndShow(options) {
    var player = String((options && options.player) || '').trim();
    if (!player || !options || options.score == null) return null;
    await saveScore({
      game_id: options.gameId,
      player: player.slice(0, 40),
      score: options.score,
      score_type: options.scoreType || 'points',
      level: options.level || '',
      extra: options.extra || '',
      class_name: options.className || ''
    });
    if (options.listEl) {
      return fillList(options.listEl, options.gameId, { limit: options.limit || 10 });
    }
    return loadScores(options.gameId, options.limit || 10);
  }

  function mountSaveBox(container, options) {
    if (!container) return;
    ensureStyles();
    options = options || {};
    container.innerHTML =
      '<div class="tg-scores-box">' +
        '<h3>' + escapeHtml(options.title || 'Save your class high score') + '</h3>' +
        '<div class="tg-scores-form">' +
          '<input type="text" maxlength="24" autocomplete="nickname" placeholder="Your name">' +
          '<button type="button">Save</button>' +
        '</div>' +
        '<p class="tg-scores-status" hidden></p>' +
        '<div class="tg-scores-board"></div>' +
      '</div>';

    var input = container.querySelector('input');
    var button = container.querySelector('button');
    var status = container.querySelector('.tg-scores-status');
    var board = container.querySelector('.tg-scores-board');
    if (options.defaultName) input.value = options.defaultName;

    fillList(board, options.gameId, { limit: options.limit || 8 });

    button.addEventListener('click', function () {
      var player = input.value.trim();
      var score = typeof options.getScore === 'function' ? options.getScore() : options.score;
      if (!player) {
        status.hidden = false;
        status.textContent = 'Please enter a name first.';
        return;
      }
      if (score == null || !isFinite(Number(score))) {
        status.hidden = false;
        status.textContent = 'No score to save yet.';
        return;
      }
      button.disabled = true;
      button.textContent = 'Saving…';
      status.hidden = false;
      status.textContent = 'Saving to the class sheet…';
      submitAndShow({
        gameId: options.gameId,
        player: player,
        score: score,
        scoreType: options.scoreType || 'points',
        level: typeof options.getLevel === 'function' ? options.getLevel() : (options.level || ''),
        extra: typeof options.getExtra === 'function' ? options.getExtra() : (options.extra || ''),
        listEl: board,
        limit: options.limit || 8
      }).then(function () {
        button.textContent = 'Saved';
        status.textContent = 'Saved ' + player + ' to the class leaderboard!';
      }).catch(function () {
        button.disabled = false;
        button.textContent = 'Save';
        status.textContent = 'Could not save just now. Try again.';
      });
    });
  }

  global.TeachingGamesScores = {
    API_URL: API_URL,
    loadScores: loadScores,
    saveScore: saveScore,
    formatScore: formatScore,
    friendlyDate: friendlyDate,
    renderList: renderList,
    fillList: fillList,
    submitAndShow: submitAndShow,
    mountSaveBox: mountSaveBox
  };
})(window);
