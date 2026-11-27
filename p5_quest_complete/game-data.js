/* Quest Complete! language data.
   Student-facing strings follow ENGLISH-MASTER-game-lock-2026-11-27.
   Distractors are generated from that lock (type-a, contrasts, rank walk, mix rule). */
(function (root) {
  'use strict';

  var VERB_ROWS = [
  [1, 'be', 'been', 'was'],
  [2, 'have', 'had', ''],
  [3, 'do', 'done', 'did'],
  [4, 'say', 'said', ''],
  [5, 'go', 'gone', 'went'],
  [6, 'know', 'known', 'knew'],
  [7, 'get', 'got', ''],
  [8, 'like', 'liked', ''],
  [9, 'think', 'thought', ''],
  [10, 'make', 'made', ''],
  [11, 'see', 'seen', 'saw'],
  [12, 'take', 'taken', 'took'],
  [13, 'come', 'come', 'came'],
  [14, 'work', 'worked', ''],
  [15, 'use', 'used', ''],
  [16, 'look', 'looked', ''],
  [17, 'want', 'wanted', ''],
  [18, 'give', 'given', 'gave'],
  [19, 'find', 'found', ''],
  [20, 'need', 'needed', ''],
  [21, 'mean', 'meant', ''],
  [22, 'tell', 'told', ''],
  [23, 'call', 'called', ''],
  [24, 'show', 'shown', 'showed'],
  [25, 'feel', 'felt', ''],
  [26, 'write', 'written', 'wrote'],
  [27, 'try', 'tried', ''],
  [28, 'leave', 'left', ''],
  [29, 'own', 'owned', ''],
  [30, 'point', 'pointed', ''],
  [31, 'help', 'helped', ''],
  [32, 'ask', 'asked', ''],
  [33, 'meet', 'met', ''],
  [34, 'start', 'started', ''],
  [35, 'talk', 'talked', ''],
  [36, 'put', 'put', ''],
  [37, 'become', 'become', 'became'],
  [38, 'live', 'lived', ''],
  [39, 'play', 'played', ''],
  [40, 'include', 'included', ''],
  [41, 'book', 'booked', ''],
  [42, 'let', 'let', ''],
  [43, 'keep', 'kept', ''],
  [44, 'hear', 'heard', ''],
  [45, 'set', 'set', ''],
  [46, 'study', 'studied', ''],
  [47, 'run', 'run', 'ran'],
  [48, 'turn', 'turned', ''],
  [49, 'bring', 'brought', ''],
  [50, 'read', 'read', ''],
  [51, 'pay', 'paid', ''],
  [52, 'hold', 'held', ''],
  [53, 'love', 'loved', ''],
  [54, 'happen', 'happened', ''],
  [55, 'hope', 'hoped', ''],
  [56, 'cost', 'cost', ''],
  [57, 'learn', 'learnt', ''],
  [58, 'present', 'presented', ''],
  [59, 'speak', 'spoken', 'spoke'],
  [60, 'train', 'trained', '']
  ];

  var SENTENCE_ROWS = [
  ['Ken ____ been at the library since three o’clock.', 'has'],
  ['I ____ had this schoolbag for two years.', 'have'],
  ['The students ____ not done the writing task yet.', 'have'],
  ['Mum ____ said no to a new computer game already.', 'has'],
  ['Dad ____ gone to the wet market. He is not at home now.', 'has'],
  ['We ____ known our neighbour, Mrs Lam, for a long time.', 'have'],
  ['May ____ just got a postcard from her cousin.', 'has'],
  ['They ____ always liked drawing more than singing.', 'have'],
  ['He ____ thought of a better title for the story.', 'has'],
  ['Ken and May ____ made a card for Ms Chan already.', 'have'],
  ['____ you ever seen a wild boar in the country park?', 'Have'],
  ['She ____ taken my umbrella by mistake.', 'has'],
  ['My parents ____ just come home from work.', 'have'],
  ['Ms Chan ____ worked at this school since 2019.', 'has'],
  ['Tom ____ used this dictionary since last month.', 'has'],
  ['You ____ not looked at the last page yet.', 'have'],
  ['I ____ wanted a new set of colour pencils since my birthday.', 'have'],
  ['Mum ____ already given me the lunch money.', 'has'],
  ['The children ____ found a lost kitten near the park.', 'have'],
  ['We ____ needed more chairs in the hall since Monday.', 'have'],
  ['This sign ____ meant ‘keep quiet’ since the start of term.', 'has'],
  ['He ____ told the teacher about the broken window already.', 'has'],
  ['My parents ____ called the office twice today.', 'have'],
  ['Ms Chan ____ just shown us a map of Hong Kong.', 'has'],
  ['I ____ felt tired since the morning PE lesson.', 'have'],
  ['Ken ____ written three pages already.', 'has'],
  ['____ they ever tried making mango pudding at home?', 'Have'],
  ['She ____ left her water bottle on the MTR.', 'has'],
  ['They ____ owned that little shop for ten years.', 'have'],
  ['Mr Wong ____ already pointed to the correct exit.', 'has'],
  ['Ken and May ____ helped Mum with the housework today.', 'have'],
  ['You ____ asked that question already.', 'have'],
  ['I ____ never met my uncle from Canada.', 'have'],
  ['The show ____ not started yet.', 'has'],
  ['We ____ talked about the outing for two weeks.', 'have'],
  ['He ____ put the keys on the shoe cabinet already.', 'has'],
  ['May ____ become much faster at swimming this term.', 'has'],
  ['My grandparents ____ lived near the harbour since they retired.', 'have'],
  ['The boys ____ just played a game of table tennis.', 'have'],
  ['Ms Chan ____ included a song in today’s lesson.', 'has'],
  ['Mum ____ already booked a table at the restaurant.', 'has'],
  ['Dad ____ never let us eat ice cream before dinner.', 'has'],
  ['I ____ kept this ticket since the concert.', 'have'],
  ['You ____ not heard the fire-drill bell yet.', 'have'],
  ['She ____ set the table for dinner already.', 'has'],
  ['The students ____ studied the poem since Tuesday.', 'have'],
  ['He ____ run five laps already.', 'has'],
  ['We ____ already turned off the lights in the classroom.', 'have'],
  ['Ken and May ____ brought fruit for the class party.', 'have'],
  ['I ____ read this story twice already.', 'have'],
  ['Mum and Dad ____ paid the MTR fares already.', 'have'],
  ['Ken ____ held the class flag since the parade began.', 'has'],
  ['They ____ loved this park since they were small.', 'have'],
  ['This problem ____ happened twice this week already.', 'has'],
  ['I ____ always hoped to join the school choir.', 'have'],
  ['The school trip ____ cost two hundred dollars already.', 'has'],
  ['You ____ learnt a lot of new words this month.', 'have'],
  ['She ____ just presented her travel diary to the class.', 'has'],
  ['Mr Cheung ____ spoken to our class about road safety.', 'has'],
  ['The runners ____ trained in the park since September.', 'have']
  ];

  var REGULAR = {
    liked: 1, worked: 1, used: 1, looked: 1, wanted: 1, needed: 1, called: 1,
    tried: 1, owned: 1, pointed: 1, helped: 1, asked: 1, started: 1, talked: 1,
    lived: 1, played: 1, included: 1, booked: 1, studied: 1, turned: 1, loved: 1,
    happened: 1, hoped: 1, presented: 1, trained: 1
  };

  var CONTRAST = {
    be: ['gone'],
    go: ['been'],
    do: ['made'],
    make: ['done'],
    see: ['looked', 'shown'],
    show: ['seen'],
    come: ['gone'],
    write: ['read'],
    read: ['written'],
    speak: ['talked'],
    talk: ['spoken'],
    know: ['thought'],
    think: ['known'],
    get: ['given'],
    give: ['got'],
    take: ['brought'],
    bring: ['taken'],
    say: ['told'],
    tell: ['said'],
    leave: ['put'],
    learn: ['known'],
    feel: ['thought']
  };

  var ART = { write: 1, go: 1, make: 1 };

  /* Measured signboard boxes on the painted maps. Visible board = hit target.
     1280: [x, y, w, h] on map-overview-1280x800.png
     1920: same on map-overview.png
     Island-name signs are not places and are not listed. */
  var PLACES = [
    { slug: 'harbour', name: 'Harbour', route: 1, level: 1, box: { 1280: [59, 270, 193, 42], 1920: [94, 346, 278, 60] } },
    { slug: 'market', name: 'Market', route: 2, level: 1, box: { 1280: [122, 167, 176, 43], 1920: [190, 192, 251, 61] } },
    { slug: 'ferry-pier', name: 'Ferry Pier', route: 3, level: 1, box: { 1280: [86, 446, 229, 50], 1920: [136, 610, 329, 71] } },
    { slug: 'beach', name: 'Beach', route: 4, level: 1, box: { 1280: [132, 610, 157, 42], 1920: [202, 855, 227, 61] } },
    { slug: 'park', name: 'Park', route: 5, level: 1, box: { 1280: [404, 519, 134, 43], 1920: [610, 720, 192, 61] } },
    { slug: 'school', name: 'School', route: 6, level: 1, box: { 1280: [417, 130, 167, 42], 1920: [630, 135, 241, 61] } },
    { slug: 'hill', name: 'Hill', route: 1, level: 2, box: { 1280: [744, 119, 113, 43], 1920: [1120, 120, 161, 61] } },
    { slug: 'farm', name: 'Farm', route: 2, level: 2, box: { 1280: [831, 168, 139, 40], 1920: [1250, 194, 200, 58] } },
    { slug: 'library', name: 'Library', route: 3, level: 2, box: { 1280: [927, 366, 187, 50], 1920: [1397, 490, 267, 71] } },
    { slug: 'sports-ground', name: 'Sports Ground', route: 4, level: 2, box: { 1280: [920, 224, 301, 49], 1920: [1389, 278, 433, 70] } },
    { slug: 'country-park', name: 'Country Park', route: 5, level: 2, box: { 1280: [708, 570, 285, 50], 1920: [1070, 798, 410, 71] } },
    { slug: 'village', name: 'Village', route: 6, level: 2, box: { 1280: [1050, 466, 182, 50], 1920: [1582, 640, 258, 70] } }
  ];

  function isRegular(form) {
    return !!REGULAR[form];
  }

  function buildDistractors(verbs, index) {
    var verb = verbs[index];
    var correct = verb.pp;
    var chosen = [];
    if (verb.typeA) chosen.push(verb.typeA);
    (CONTRAST[verb.base] || []).forEach(function (form) {
      if (chosen.length >= 3) return;
      if (form !== correct && chosen.indexOf(form) < 0 && form !== 'have' && form !== 'has') {
        chosen.push(form);
      }
    });
    var walk = [];
    var n = verbs.length;
    var k;
    for (k = 0; k < n; k++) {
      var form = verbs[(index + 1 + k) % n].pp;
      if (form === correct || form === 'have' || form === 'has') continue;
      walk.push(form);
    }
    walk.forEach(function (form) {
      if (chosen.length >= 3) return;
      if (chosen.indexOf(form) < 0) chosen.push(form);
    });
    function mixOk(forms) {
      var reg = false;
      var irr = false;
      forms.forEach(function (form) {
        if (isRegular(form)) reg = true;
        else irr = true;
      });
      return reg && irr;
    }
    if (!mixOk(chosen)) {
      var lastB = -1;
      var i;
      for (i = chosen.length - 1; i >= 0; i--) {
        if (!verb.typeA || chosen[i] !== verb.typeA) { lastB = i; break; }
      }
      var hasReg = chosen.some(isRegular);
      var wantReg = !hasReg;
      var startAt = 0;
      if (lastB >= 0) {
        var at = walk.indexOf(chosen[lastB]);
        if (at >= 0) startAt = at + 1;
      }
      var blocked = {};
      chosen.forEach(function (form) { blocked[form] = 1; });
      var order = walk.slice(startAt).concat(walk.slice(0, startAt));
      var repl = null;
      order.forEach(function (form) {
        if (repl) return;
        if (lastB >= 0 && form === chosen[lastB]) return;
        if (blocked[form]) return;
        if (isRegular(form) === wantReg) repl = form;
      });
      if (repl && lastB >= 0) chosen[lastB] = repl;
    }
    return chosen.slice(0, 3);
  }

  var verbs = VERB_ROWS.map(function (row, index) {
    return { rank: row[0], base: row[1], pp: row[2], typeA: row[3] || '', index: index };
  });

  var items = verbs.map(function (verb, index) {
    var sent = SENTENCE_ROWS[index];
    var distractors = buildDistractors(verbs, index);
    var pos = (verb.rank - 1) % 4;
    var options = [null, null, null, null];
    options[pos] = verb.pp;
    var d = 0;
    var s;
    for (s = 0; s < 4; s++) {
      if (options[s] == null) options[s] = distractors[d++];
    }
    var aux = sent[1];
    return {
      rank: verb.rank,
      base: verb.base,
      pp: verb.pp,
      typeA: verb.typeA,
      options: options,
      answer: pos,
      sentence: sent[0],
      aux: aux,
      cap: aux.charAt(0) === 'H',
      art: ART[verb.base] ? verb.base : ''
    };
  });

  function boxesOverlap(a, b) {
    return a[0] < b[0] + b[2] && a[0] + a[2] > b[0] && a[1] < b[1] + b[3] && a[1] + a[3] > b[1];
  }

  function selfTest() {
    var errors = [];
    var allowed = {};
    verbs.forEach(function (verb) {
      allowed[verb.pp] = 1;
      if (verb.typeA) allowed[verb.typeA] = 1;
    });
    if (items.length !== 60) errors.push('expected 60 items');
    var letters = [];
    var haveCount = 0;
    var hasCount = 0;
    items.forEach(function (item) {
      var set = {};
      item.options.forEach(function (form) {
        if (set[form]) errors.push(item.base + ' duplicate ' + form);
        set[form] = 1;
        if (!allowed[form]) errors.push(item.base + ' form outside lock: ' + form);
        if (form === 'have' || form === 'has' || form === 'Have' || form === 'Has') {
          errors.push(item.base + ' auxiliary used as participle option');
        }
        if (/gotten|learned|goed|writed|putted|eated|haved/.test(form)) {
          errors.push(item.base + ' banned form ' + form);
        }
      });
      if (item.options.length !== 4) errors.push(item.base + ' option count');
      if (item.options[item.answer] !== item.pp) errors.push(item.base + ' answer slot');
      if (item.options.indexOf(item.pp) !== item.answer) errors.push(item.base + ' pp not only at answer');
      var regs = 0;
      var irrs = 0;
      item.options.forEach(function (form, i) {
        if (i === item.answer) return;
        if (REGULAR[form]) regs++;
        else irrs++;
      });
      if (!regs || !irrs) errors.push(item.base + ' mix rule ' + item.options.join('/'));
      if (item.typeA && item.options.indexOf(item.typeA) < 0) errors.push(item.base + ' missing type-a');
      if (!item.typeA && item.base !== 'read') {
        /* same-spelling and got/had have no type-a of themselves */
      }
      letters.push('ABCD'[item.answer]);
      if (item.sentence.indexOf('____') < 0) errors.push(item.base + ' missing blank');
      if (/gotten|learned/.test(item.sentence)) errors.push(item.base + ' american form in sentence');
      var key = item.aux.toLowerCase();
      if (key === 'have') haveCount++;
      else if (key === 'has') hasCount++;
      else errors.push(item.base + ' bad aux ' + item.aux);
      if (item.cap !== (item.sentence.indexOf('____') === 0)) errors.push(item.base + ' cap flag');
    });
    var i;
    for (i = 2; i < letters.length; i++) {
      if (letters[i] === letters[i - 1] && letters[i] === letters[i - 2]) {
        errors.push('correct letter three times at ' + (i + 1));
      }
    }
    if (haveCount !== 32 || hasCount !== 28) errors.push('aux counts ' + haveCount + '/' + hasCount);
    var learn = items[56];
    if (learn.base !== 'learn' || learn.pp !== 'learnt') errors.push('learn lock');
    var get = items[6];
    if (get.base !== 'get' || get.pp !== 'got') errors.push('get lock');
    if (items[49].pp !== 'read') errors.push('read lock');
    ['1280', '1920'].forEach(function (key) {
      var limit = key === '1280' ? [1280, 800] : [1920, 1080];
      var i2, j2;
      for (i2 = 0; i2 < PLACES.length; i2++) {
        var box = PLACES[i2].box[key];
        if (box[0] < 0 || box[1] < 0 || box[0] + box[2] > limit[0] || box[1] + box[3] > limit[1]) {
          errors.push(PLACES[i2].slug + ' outside ' + key);
        }
        for (j2 = i2 + 1; j2 < PLACES.length; j2++) {
          if (boxesOverlap(box, PLACES[j2].box[key])) {
            errors.push('overlap ' + key + ' ' + PLACES[i2].slug + ' ' + PLACES[j2].slug);
          }
        }
      }
    });
    var names = PLACES.map(function (p) { return p.name; });
    ['Harbour', 'Market', 'Ferry Pier', 'Beach', 'Park', 'School', 'Hill', 'Farm', 'Library', 'Sports Ground', 'Country Park', 'Village'].forEach(function (name) {
      if (names.indexOf(name) < 0) errors.push('missing place ' + name);
    });
    return errors;
  }

  root.QC = {
    items: items,
    places: PLACES,
    item: function (route, qIndex) { return items[(route - 1) * 10 + qIndex]; },
    selfTest: selfTest
  };
})(typeof globalThis !== 'undefined' ? globalThis : this);
