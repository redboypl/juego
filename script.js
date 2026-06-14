const TIMER_MAX = 15;

// --- Puntos base por dificultad ---
const POINTS_BY_DIFFICULTY = { facil: 10, media: 20, dificil: 30 };
const DIFF_INFO = {
  facil:   { label: '🟢 Fácil',   cls: 'facil' },
  media:   { label: '🟡 Media',   cls: 'media' },
  dificil: { label: '🔴 Difícil', cls: 'dificil' },
};
const allQuestions = {
  lvbp: {
    name: "LVBP", icon: "🦁", mult: 1.5,
    desc: "Todo sobre los equipos, estadios y rivalidades de la Liga Venezolana de Béisbol Profesional.",
    questions: [
      { q: "¿Cuántos equipos conforman actualmente la LVBP?", opts: ["6", "7", "8", "10"], a: 2, fact: "La LVBP tiene 8 equipos: Cardenales, Leones, Tiburones, Magallanes, Caracas, Lara, Aragua y Margarita." , dif: "facil" },
      { q: "¿Qué equipo es conocido como 'El Equipo del Pueblo'?", opts: ["Leones del Caracas", "Navegantes del Magallanes", "Cardenales de Lara", "Tiburones de La Guaira"], a: 1, fact: "Magallanes es el equipo con mayor número de seguidores en Venezuela, conocido como el Equipo del Pueblo." , dif: "media" },
      { q: "¿En qué ciudad juegan los Leones del Caracas?", opts: ["Maracaibo", "Valencia", "Caracas", "Barquisimeto"], a: 2, fact: "Los Leones del Caracas juegan en el Estadio Universitario de Caracas." , dif: "facil" },
      { q: "¿Qué equipo juega sus partidos en Maracaibo?", opts: ["Águilas del Zulia", "Tigres de Aragua", "Cardenales de Lara", "Bravos de Margarita"], a: 0, fact: "Las Águilas del Zulia tienen su sede en Maracaibo, en el Estadio Luis Aparicio El Grande." , dif: "facil" },
      { q: "¿Cuál es el color representativo de los Tiburones de La Guaira?", opts: ["Rojo y azul", "Verde y blanco", "Azul y blanco", "Amarillo y negro"], a: 2, fact: "Los Tiburones de La Guaira visten azul y blanco, representando al estado La Guaira." , dif: "media" },
      { q: "¿Qué equipo tiene como mascota un pájaro rojo?", opts: ["Leones del Caracas", "Cardenales de Lara", "Tigres de Aragua", "Navegantes del Magallanes"], a: 1, fact: "Los Cardenales de Lara tienen como símbolo al cardenal, pájaro rojo muy común en Venezuela." , dif: "facil" },
      { q: "¿Cuál es el estadio de los Navegantes del Magallanes?", opts: ["Estadio Monumental", "Estadio Universitario", "Estadio José Bernardo Pérez", "Estadio Luis Aparicio"], a: 2, fact: "El Estadio José Bernardo Pérez en Valencia es la casa de los Navegantes del Magallanes." , dif: "dificil" },
      { q: "¿Qué equipo representa al estado Aragua?", opts: ["Leones", "Tiburones", "Tigres", "Cardenales"], a: 2, fact: "Los Tigres de Aragua representan ese estado, con sede en Maracay." , dif: "facil" },
    ]
  },
  grandesligas: {
    name: "Grandes Ligas", icon: "🌟", mult: 1.5,
    desc: "Peloteros venezolanos que triunfaron en la MLB: sus logros, equipos y récords históricos.",
    questions: [
      { q: "¿En qué posición jugó Omar Vizquel durante casi toda su carrera?", opts: ["Segunda base", "Tercera base", "Campo corto", "Centro del jardín"], a: 2, fact: "Omar Vizquel es considerado uno de los mejores campocortos defensivos de la historia." , dif: "facil" },
      { q: "¿De qué estado venezolano es originario Miguel Cabrera?", opts: ["Aragua", "Zulia", "Miranda", "Carabobo"], a: 0, fact: "Miguel Cabrera nació en Maracay, estado Aragua, el 18 de abril de 1983." , dif: "media" },
      { q: "¿Qué pitcher venezolano ganó dos veces el Cy Young Award?", opts: ["Félix Hernández", "Johan Santana", "Carlos Zambrano", "Wilson Ramos"], a: 1, fact: "Johan Santana ganó el Cy Young en 2004 y 2006, ambas veces con los Minnesota Twins." , dif: "media" },
      { q: "¿Qué venezolano fue elegido al Salón de la Fama de Baseball en 2024?", opts: ["Omar Vizquel", "Bobby Abreu", "Johan Santana", "Carlos Guillén"], a: 1, fact: "Bobby Abreu fue elegido al Salón de la Fama de Baseball en 2024." , dif: "dificil" },
      { q: "¿Con qué equipo debutó en MLB el lanzador Félix Hernández?", opts: ["Los Angeles Dodgers", "Seattle Mariners", "New York Yankees", "Boston Red Sox"], a: 1, fact: "Félix 'King' Hernández debutó con Seattle Mariners en 2005 y pasó toda su carrera allí." , dif: "media" },
      { q: "¿Cuántos Golden Glove ganó Omar Vizquel en su carrera?", opts: ["7", "9", "11", "13"], a: 2, fact: "Omar Vizquel ganó 11 Guantes de Oro, todos como campocorto, récord en esa posición." , dif: "dificil" },
      { q: "¿Qué logro histórico consiguió Miguel Cabrera en 2012?", opts: ["MVP de la Serie Mundial", "Triple Corona", "Cy Young Award", "Récord de jonrones"], a: 1, fact: "Miguel Cabrera ganó la Triple Corona en 2012, siendo el primero en lograrlo desde 1967." , dif: "media" },
      { q: "¿Cuántos jonrones conectó Andrés Galarraga en su mejor temporada?", opts: ["42", "47", "44", "39"], a: 2, fact: "El 'Gato Grande' Andrés Galarraga conectó 44 jonrones en 1996 con los Colorado Rockies." , dif: "dificil" },
    ]
  },
  historia: {
    name: "Historia", icon: "📖", mult: 2,
    desc: "Los orígenes del béisbol en Venezuela, sus pioneros y los momentos que marcaron la historia del deporte criollo.",
    questions: [
      { q: "¿En qué año se fundó la Liga Venezolana de Béisbol?", opts: ["1922", "1945", "1951", "1960"], a: 1, fact: "La LVBP fue fundada en 1945, siendo una de las ligas más antiguas de América Latina." , dif: "media" },
      { q: "¿Quién fue el primer venezolano en jugar en las Grandes Ligas?", opts: ["Chico Carrasquel", "Luis Aparicio", "Pompeyo Davalillo", "Alex Carrasquel"], a: 0, fact: "Chico Carrasquel fue el primer venezolano en las Grandes Ligas, debutando con los Chicago White Sox en 1950." , dif: "media" },
      { q: "¿Cuándo Venezuela ganó por primera vez el Clásico Mundial de Béisbol?", opts: ["No lo ha ganado", "2009", "2013", "2017"], a: 0, fact: "Venezuela aún no ha ganado el Clásico Mundial, aunque ha llegado a rondas avanzadas varias veces." , dif: "facil" },
      { q: "¿Qué ciudad venezolana tiene el estadio 'Luis Aparicio El Grande'?", opts: ["Caracas", "Valencia", "Maracaibo", "Barcelona"], a: 2, fact: "El Estadio Luis Aparicio El Grande está en Maracaibo, estado Zulia, en honor al gran pelotero." , dif: "facil" },
      { q: "¿A qué edad debutó Luis Aparicio en las Grandes Ligas?", opts: ["17 años", "19 años", "22 años", "25 años"], a: 2, fact: "Luis Aparicio debutó con los Chicago White Sox en 1956 a los 22 años." , dif: "dificil" },
      { q: "¿En qué año fue inaugurado el Estadio Universitario de Caracas?", opts: ["1948", "1951", "1955", "1962"], a: 1, fact: "El Estadio Universitario de Caracas fue inaugurado en 1951, siendo el más icónico del béisbol venezolano." , dif: "dificil" },
      { q: "¿Qué jugador fue el primer venezolano en llegar al Salón de la Fama de Cooperstown?", opts: ["Omar Vizquel", "Andrés Galarraga", "Luis Aparicio", "Chico Carrasquel"], a: 2, fact: "Luis Aparicio fue inducido al Salón de la Fama de Cooperstown en 1984, el primero de Venezuela." , dif: "media" },
      { q: "¿En qué país se originó el béisbol antes de llegar a Venezuela?", opts: ["Cuba", "Estados Unidos", "República Dominicana", "Puerto Rico"], a: 1, fact: "El béisbol llegó a Venezuela desde Estados Unidos a finales del siglo XIX, traído por trabajadores petroleros." , dif: "facil" },
    ]
  },
  cultura: {
    name: "Cultura", icon: "🇻🇪", mult: 1,
    desc: "La relación entre el béisbol y la identidad venezolana: tradiciones, términos criollos y curiosidades del fanático.",
    questions: [
      { q: "¿Cuál es el deporte nacional de Venezuela según la ley?", opts: ["Fútbol", "Béisbol", "Boxeo", "Ciclismo"], a: 1, fact: "El béisbol es el deporte nacional de Venezuela, declarado así oficialmente." , dif: "facil" },
      { q: "¿Cómo se le llama popularmente al béisbol en Venezuela?", opts: ["La pelota fría", "El pasatiempo nacional", "La pelota caliente", "El juego del pueblo"], a: 2, fact: "En Venezuela al béisbol se le llama 'la pelota caliente', diferenciándolo del fútbol que es 'pelota fría'." , dif: "media" },
      { q: "¿Cuál es el rival clásico más famoso de la LVBP?", opts: ["Leones vs Magallanes", "Tiburones vs Caracas", "Lara vs Aragua", "Zulia vs Margarita"], a: 0, fact: "El clásico Leones del Caracas vs Navegantes del Magallanes es el derbi más apasionante del béisbol venezolano." , dif: "facil" },
      { q: "¿Cuántos venezolanos han ganado el premio Cy Young en MLB?", opts: ["1", "2", "3", "4"], a: 1, fact: "Dos venezolanos han ganado el Cy Young: Johan Santana (2 veces) y Félix Hernández (1 vez)." , dif: "media" },
      { q: "¿Cuál de estos términos NO es del béisbol?", opts: ["Jonrón", "Ponche", "Tubey", "Offside"], a: 3, fact: "El offside es del fútbol. En béisbol se usan jonrón, ponche, tubey, triplete, entre otros." , dif: "facil" },
      { q: "¿Cómo se le llama al 'home run' en Venezuela?", opts: ["Cuadrangular", "Jonrón", "Cuadro completo", "Las dos anteriores son correctas"], a: 3, fact: "En Venezuela se usa tanto 'jonrón' como 'cuadrangular' para referirse al home run." , dif: "media" },
      { q: "¿Qué estado venezolano es más famoso por producir peloteros de MLB?", opts: ["Carabobo", "Miranda", "Zulia", "Aragua"], a: 2, fact: "Zulia es históricamente el estado venezolano que más peloteros ha aportado a las Grandes Ligas." , dif: "dificil" },
      { q: "¿Cómo se llama la posición 'shortstop' en Venezuela?", opts: ["Receptor", "Campocorto", "Inicialista", "Jardinero"], a: 1, fact: "El campocorto es una de las posiciones más valoradas. Venezuela ha producido muchos de los mejores del mundo." , dif: "facil" },
    ]
  }
};

// --- Estado del juego ---
let selectedCat = null, questions = [], current = 0, score = 0, correct = 0,
    streak = 0, bestStreak = 0, totalBonus = 0, timeLeft = TIMER_MAX,
    timerInterval = null, answered = false;

// --- Helpers DOM ---
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

function showScreen(id) {
  const curr = document.querySelector('.screen.active');
  const next = $(id);

  if (!curr || curr === next) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    next.classList.add('active');
    return;
  }

  curr.classList.add('screen-exit');
  setTimeout(() => {
    curr.classList.remove('active', 'screen-exit');
    next.classList.add('active', 'screen-enter');
    next.offsetHeight; // reflow
    next.classList.add('screen-enter-active');
    setTimeout(() => next.classList.remove('screen-enter', 'screen-enter-active'), 400);
  }, 300);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const calcBonus = elapsed => elapsed < 5 ? 25 : elapsed < 10 ? 15 : 10;

// --- Rangos del jugador según puntaje total ---
const RANKS = [
  { min: 0,   name: "Novato",          icon: "🌱" },
  { min: 120, name: "Refuerzo",        icon: "🧢" },
  { min: 280, name: "Titular",         icon: "⚾" },
  { min: 480, name: "Estrella",        icon: "⭐" },
  { min: 700, name: "Salón de la Fama", icon: "🏆" },
];

function getRank(pts) {
  let rank = RANKS[0];
  for (const r of RANKS) if (pts >= r.min) rank = r;
  return rank;
}

function streakLabel() {
  if (streak >= 5) return `🔥 Racha de ${streak} (×2)`;
  if (streak >= 3) return `🔥 Racha de ${streak} (×1.5)`;
  if (streak >= 2) return `🔥 Racha de ${streak}`;
  return '';
}

// --- Timer ---
const TIMER_STYLES = [
  { min: 11, barBg: '#639922', numColor: '#3B6D11', cls: 'fast', label: '⚡ Responde rápido — bonus +25 pts' },
  { min: 6,  barBg: '#BA7517', numColor: '#854F0B', cls: 'normal', label: '🟢 Todavía puedes ganar +15 pts' },
  { min: 0,  barBg: '#E24B4A', numColor: '#A32D2D', cls: 'slow', label: '⏱ Apúrate — bonus +10 pts' },
];

function getTimerStyle(t) {
  return TIMER_STYLES.find(s => t > s.min) || TIMER_STYLES[2];
}

function updateTimerUI() {
  const bar = $('timer-bar'), num = $('timer-num'), banner = $('bonus-banner');
  const style = getTimerStyle(timeLeft);
  num.textContent = timeLeft;
  bar.style.width = ((timeLeft / TIMER_MAX) * 100) + '%';
  bar.style.background = style.barBg;
  num.style.color = style.numColor;
  if (!answered) {
    banner.className = 'bonus-banner ' + style.cls;
    banner.textContent = style.label;
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIMER_MAX;
  updateTimerUI();
  timerInterval = setInterval(() => {
    if (--timeLeft <= 0) { clearInterval(timerInterval); timeoutQuestion(); }
    else updateTimerUI();
  }, 1000);
}

// --- Botón siguiente ---
function setNextBtn(isLast) {
  const btn = $('btn-next');
  btn.textContent = isLast ? 'Ver resultado →' : 'Siguiente →';
  btn.className = 'btn-next show';
}

function setBanner(cls, text) {
  const b = $('bonus-banner');
  b.className = 'bonus-banner ' + cls;
  b.textContent = text;
}

// --- Timeout ---
function timeoutQuestion() {
  if (answered) return;
  answered = true;
  streak = 0;
  const q = questions[current];
  $$('.opt-btn').forEach(b => { b.disabled = true; b.classList.add('timeout'); });
  $$('.opt-btn')[q.a].classList.replace('timeout', 'correct');
  $('feedback').textContent = `⏱ Tiempo agotado. ${q.fact}`;
  $('feedback').className = 'feedback show';
  setBanner('slow', '⏱ Sin puntos esta vez');
  setNextBtn(current + 1 >= questions.length);
}

// --- Respuesta ---
function answer(idx, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  const elapsed = TIMER_MAX - timeLeft;
  const q = questions[current];
  const isLast = current + 1 >= questions.length;
  $$('.opt-btn').forEach(b => b.disabled = true);
  $$('.opt-btn')[q.a].classList.add('correct');

  if (idx === q.a) {
    const basePts = POINTS_BY_DIFFICULTY[q.dif] || 10;
    const speedBonus = calcBonus(elapsed);
    const catMult = allQuestions[selectedCat].mult || 1;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    const streakMult = streak >= 5 ? 2 : streak >= 3 ? 1.5 : 1;
    const subtotal = basePts + speedBonus;
    const pts = Math.round(subtotal * streakMult * catMult);
    const extra = pts - subtotal;
    score += pts; totalBonus += (speedBonus + extra); correct++;

    const speedCls = elapsed < 5 ? 'fast' : elapsed < 10 ? 'normal' : 'slow';
    const speedIcon = elapsed < 5 ? '⚡ ¡Rapidísimo!' : elapsed < 10 ? '🟢 ¡Correcto!' : '🟡 ¡Correcto!';
    let bannerText = `${speedIcon} +${basePts} base`;
    if (speedBonus > 0) bannerText += ` +${speedBonus} vel.`;
    if (catMult !== 1) bannerText += ` ×${catMult} ${allQuestions[selectedCat].icon}`;
    if (streakMult > 1) bannerText += ` ×${streakMult} 🔥`;
    bannerText += ` = ${pts} pts`;
    setBanner(streakMult > 1 ? 'streak' : speedCls, bannerText);
    $('feedback').textContent = `✅ ${q.fact}`;
  } else {
    btn.classList.add('wrong');
    streak = 0;
    setBanner('slow', '❌ Incorrecto — 0 pts');
    $('feedback').textContent = `❌ ${q.fact}`;
  }

  $('feedback').className = 'feedback show';
  $('q-score').textContent = `${score} pts`;
  $('q-streak').textContent = streakLabel();
  setNextBtn(isLast);
}

// --- Render pregunta ---
function renderQuestion() {
  answered = false;
  const q = questions[current], total = questions.length;
  $('progress').style.width = ((current / total) * 100) + '%';
  $('q-num').textContent = `Pregunta ${current + 1} de ${total}`;
  $('q-score').textContent = `${score} pts`;
  $('q-streak').textContent = streakLabel();
  const diff = DIFF_INFO[q.dif] || DIFF_INFO.facil;
  const diffPts = POINTS_BY_DIFFICULTY[q.dif] || 10;
  const catMult = allQuestions[selectedCat].mult || 1;
  $('q-diff').textContent = catMult !== 1
    ? `${diff.label} · vale ${diffPts} pts ×${catMult}`
    : `${diff.label} · vale ${diffPts} pts`;
  $('q-diff').className = 'q-diff ' + diff.cls;
  $('q-text').textContent = q.q;
  $('feedback').textContent = '';
  $('feedback').className = 'feedback';
  $('btn-next').className = 'btn-next';
  $('bonus-banner').textContent = '';
  $('bonus-banner').className = 'bonus-banner';

  const opts = $('options');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt;
    btn.onclick = () => answer(i, btn);
    opts.appendChild(btn);
  });
  startTimer();
}

// --- Categorías ---
function buildCatGrid() {
  const grid = $('cat-grid');
  grid.innerHTML = '';
  Object.entries(allQuestions).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (selectedCat === key ? ' selected' : '');
    const multBadge = cat.mult !== 1 ? `<div class="cat-mult">×${cat.mult} puntos</div>` : '';
    btn.innerHTML = `<div class="cat-icon">${cat.icon}</div><div class="cat-name">${cat.name}</div><div class="cat-desc">${cat.desc}</div>${multBadge}`;
    btn.onclick = () => { selectedCat = key; buildCatGrid();

function openCredits() { showScreen('screen-credits'); }
function openShop() { showScreen('screen-shop'); } };
    grid.appendChild(btn);
  });
}

// --- Flujo del juego ---
function startGame() {
  if (!selectedCat) {
    const keys = Object.keys(allQuestions);
    selectedCat = keys[Math.floor(Math.random() * keys.length)];
  }
  questions = shuffle([...allQuestions[selectedCat].questions]).slice(0, 8);
  current = score = correct = streak = bestStreak = totalBonus = 0;
  answered = false;
  showScreen('screen-game');
  renderQuestion();
}

function nextQuestion() {
  if (++current >= questions.length) showResult();
  else renderQuestion();
}

function showResult() {
  clearInterval(timerInterval);
  showScreen('screen-result');
  const pct = Math.round((correct / questions.length) * 100);
  const [trophy, title, sub] =
    pct === 100 ? ['🏆', '¡Eres una leyenda!', 'Perfecto. Mereces un lugar en el Salón de la Fama.'] :
    pct >= 75  ? ['⭐', '¡Muy buen trabajo!', 'Claramente eres un verdadero fanático del béisbol venezolano.'] :
    pct >= 50  ? ['⚾', '¡Buen intento!', 'Sabes bastante, pero hay más historia por aprender.'] :
                 ['📖', 'Sigue estudiando', 'El béisbol venezolano tiene mucha historia. ¡Inténtalo de nuevo!'];
  $('result-trophy').textContent = trophy;
  $('result-title').textContent = title;
  $('result-sub').textContent = sub;
  $('res-score').textContent = score;
  $('res-correct').textContent = `${correct}/${questions.length}`;
  $('res-streak').textContent = bestStreak;
  $('res-bonus').textContent = totalBonus;

  const rank = getRank(score);
  $('result-rank').textContent = `${rank.icon} Rango: ${rank.name}`;
  const next = RANKS[RANKS.indexOf(rank) + 1];
  $('result-rank-progress').textContent = next
    ? `Te faltan ${next.min - score} pts para ${next.icon} ${next.name}`
    : '¡Alcanzaste el rango máximo! 🎉';
}

function shareResult() {
  const cat = allQuestions[selectedCat].name;
  const rank = getRank(score);
  const text = `Jugué la Trivia Beisbolera Venezolana (${cat}) y saqué ${score} pts (${rank.icon} ${rank.name}) con ${correct}/${questions.length} correctas y mejor racha de ${bestStreak}! ⚾🇻🇪`;
  if (navigator.share) navigator.share({ title: 'Trivia Beisbolera', text });
  else navigator.clipboard.writeText(text).then(() => alert('Resultado copiado al portapapeles!'));
}

function confirmBack() {
  if (confirm('¿Seguro que quieres salir? Perderás el progreso actual.')) {
    clearInterval(timerInterval);
    selectedCat = null;
    showScreen('screen-home');
    buildCatGrid();

function openCredits() { showScreen('screen-credits'); }
function openShop() { showScreen('screen-shop'); }
  }
}

function goHome() {
  clearInterval(timerInterval);
  selectedCat = null;
  showScreen('screen-home');
  buildCatGrid();

function openCredits() { showScreen('screen-credits'); }
function openShop() { showScreen('screen-shop'); }
}

function toggleSettings() {
  const panel = $('settings-panel'), overlay = $('settings-overlay');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
}

function closeSettings() {
  $('settings-panel').classList.remove('open');
  $('settings-overlay').classList.remove('open');
}

function toggleMusic() {
  const audio = $("bg-music"), btn = $("music-switch");
  if (!audio.src || !audio.src.includes('Cita_de_Bases')) audio.src = "Cita_de_Bases.mp3";
  if (audio.paused) {
    audio.play();
    btn.textContent = "ON";
    btn.classList.add("on");
  } else {
    audio.pause();
    btn.textContent = "OFF";
    btn.classList.remove("on");
  }
}

function setVolume(val) {
  const audio = $("bg-music");
  audio.volume = val / 100;
}

buildCatGrid();

function openCredits() { showScreen('screen-credits'); }
function openShop() { showScreen('screen-shop'); }
