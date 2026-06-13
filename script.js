const TIMER_MAX = 15;
const allQuestions = {
  lvbp: {
    name: "LVBP",
    icon: "🦁",
    desc: "Todo sobre los equipos, estadios y rivalidades de la Liga Venezolana de Béisbol Profesional.",
    questions: [
      { q: "¿Cuántos equipos conforman actualmente la LVBP?", opts: ["6", "7", "8", "10"], a: 2, fact: "La LVBP tiene 8 equipos: Cardenales, Leones, Tiburones, Magallanes, Caracas, Lara, Aragua y Margarita." },
      { q: "¿Qué equipo es conocido como 'El Equipo del Pueblo'?", opts: ["Leones del Caracas", "Navegantes del Magallanes", "Cardenales de Lara", "Tiburones de La Guaira"], a: 1, fact: "Magallanes es el equipo con mayor número de seguidores en Venezuela, conocido como el Equipo del Pueblo." },
      { q: "¿En qué ciudad juegan los Leones del Caracas?", opts: ["Maracaibo", "Valencia", "Caracas", "Barquisimeto"], a: 2, fact: "Los Leones del Caracas juegan en el Estadio Universitario de Caracas." },
      { q: "¿Qué equipo juega sus partidos en Maracaibo?", opts: ["Águilas del Zulia", "Tigres de Aragua", "Cardenales de Lara", "Bravos de Margarita"], a: 0, fact: "Las Águilas del Zulia tienen su sede en Maracaibo, en el Estadio Luis Aparicio El Grande." },
      { q: "¿Cuál es el color representativo de los Tiburones de La Guaira?", opts: ["Rojo y azul", "Verde y blanco", "Azul y blanco", "Amarillo y negro"], a: 2, fact: "Los Tiburones de La Guaira visten azul y blanco, representando al estado La Guaira." },
      { q: "¿Qué equipo tiene como mascota un pájaro rojo?", opts: ["Leones del Caracas", "Cardenales de Lara", "Tigres de Aragua", "Navegantes del Magallanes"], a: 1, fact: "Los Cardenales de Lara tienen como símbolo al cardenal, pájaro rojo muy común en Venezuela." },
      { q: "¿Cuál es el estadio de los Navegantes del Magallanes?", opts: ["Estadio Monumental", "Estadio Universitario", "Estadio José Bernardo Pérez", "Estadio Luis Aparicio"], a: 2, fact: "El Estadio José Bernardo Pérez en Valencia es la casa de los Navegantes del Magallanes." },
      { q: "¿Qué equipo representa al estado Aragua?", opts: ["Leones", "Tiburones", "Tigres", "Cardenales"], a: 2, fact: "Los Tigres de Aragua representan ese estado, con sede en Maracay." },
    ]
  },
  grandesligas: {
    name: "Grandes Ligas",
    icon: "🌟",
    desc: "Peloteros venezolanos que triunfaron en la MLB: sus logros, equipos y récords históricos.",
    questions: [
      { q: "¿En qué posición jugó Omar Vizquel durante casi toda su carrera?", opts: ["Segunda base", "Tercera base", "Campo corto", "Centro del jardín"], a: 2, fact: "Omar Vizquel es considerado uno de los mejores campocortos defensivos de la historia." },
      { q: "¿De qué estado venezolano es originario Miguel Cabrera?", opts: ["Aragua", "Zulia", "Miranda", "Carabobo"], a: 0, fact: "Miguel Cabrera nació en Maracay, estado Aragua, el 18 de abril de 1983." },
      { q: "¿Qué pitcher venezolano ganó dos veces el Cy Young Award?", opts: ["Félix Hernández", "Johan Santana", "Carlos Zambrano", "Wilson Ramos"], a: 1, fact: "Johan Santana ganó el Cy Young en 2004 y 2006, ambas veces con los Minnesota Twins." },
      { q: "¿Qué venezolano fue elegido al Salón de la Fama de Baseball en 2024?", opts: ["Omar Vizquel", "Bobby Abreu", "Johan Santana", "Carlos Guillén"], a: 1, fact: "Bobby Abreu fue elegido al Salón de la Fama de Baseball en 2024." },
      { q: "¿Con qué equipo debutó en MLB el lanzador Félix Hernández?", opts: ["Los Angeles Dodgers", "Seattle Mariners", "New York Yankees", "Boston Red Sox"], a: 1, fact: "Félix 'King' Hernández debutó con Seattle Mariners en 2005 y pasó toda su carrera allí." },
      { q: "¿Cuántos Golden Glove ganó Omar Vizquel en su carrera?", opts: ["7", "9", "11", "13"], a: 2, fact: "Omar Vizquel ganó 11 Guantes de Oro, todos como campocorto, récord en esa posición." },
      { q: "¿Qué logro histórico consiguió Miguel Cabrera en 2012?", opts: ["MVP de la Serie Mundial", "Triple Corona", "Cy Young Award", "Récord de jonrones"], a: 1, fact: "Miguel Cabrera ganó la Triple Corona en 2012, siendo el primero en lograrlo desde 1967." },
      { q: "¿Cuántos jonrones conectó Andrés Galarraga en su mejor temporada?", opts: ["42", "47", "44", "39"], a: 2, fact: "El 'Gato Grande' Andrés Galarraga conectó 44 jonrones en 1996 con los Colorado Rockies." },
    ]
  },
  historia: {
    name: "Historia",
    icon: "📖",
    desc: "Los orígenes del béisbol en Venezuela, sus pioneros y los momentos que marcaron la historia del deporte criollo.",
    questions: [
      { q: "¿En qué año se fundó la Liga Venezolana de Béisbol?", opts: ["1922", "1945", "1951", "1960"], a: 1, fact: "La LVBP fue fundada en 1945, siendo una de las ligas más antiguas de América Latina." },
      { q: "¿Quién fue el primer venezolano en jugar en las Grandes Ligas?", opts: ["Chico Carrasquel", "Luis Aparicio", "Pompeyo Davalillo", "Alex Carrasquel"], a: 0, fact: "Chico Carrasquel fue el primer venezolano en las Grandes Ligas, debutando con los Chicago White Sox en 1950." },
      { q: "¿Cuándo Venezuela ganó por primera vez el Clásico Mundial de Béisbol?", opts: ["No lo ha ganado", "2009", "2013", "2017"], a: 0, fact: "Venezuela aún no ha ganado el Clásico Mundial, aunque ha llegado a rondas avanzadas varias veces." },
      { q: "¿Qué ciudad venezolana tiene el estadio 'Luis Aparicio El Grande'?", opts: ["Caracas", "Valencia", "Maracaibo", "Barcelona"], a: 2, fact: "El Estadio Luis Aparicio El Grande está en Maracaibo, estado Zulia, en honor al gran pelotero." },
      { q: "¿A qué edad debutó Luis Aparicio en las Grandes Ligas?", opts: ["17 años", "19 años", "22 años", "25 años"], a: 2, fact: "Luis Aparicio debutó con los Chicago White Sox en 1956 a los 22 años." },
      { q: "¿En qué año fue inaugurado el Estadio Universitario de Caracas?", opts: ["1948", "1951", "1955", "1962"], a: 1, fact: "El Estadio Universitario de Caracas fue inaugurado en 1951, siendo el más icónico del béisbol venezolano." },
      { q: "¿Qué jugador fue el primer venezolano en llegar al Salón de la Fama de Cooperstown?", opts: ["Omar Vizquel", "Andrés Galarraga", "Luis Aparicio", "Chico Carrasquel"], a: 2, fact: "Luis Aparicio fue inducido al Salón de la Fama de Cooperstown en 1984, el primero de Venezuela." },
      { q: "¿En qué país se originó el béisbol antes de llegar a Venezuela?", opts: ["Cuba", "Estados Unidos", "República Dominicana", "Puerto Rico"], a: 1, fact: "El béisbol llegó a Venezuela desde Estados Unidos a finales del siglo XIX, traído por trabajadores petroleros." },
    ]
  },
  cultura: {
    name: "Cultura",
    icon: "🇻🇪",
    desc: "La relación entre el béisbol y la identidad venezolana: tradiciones, términos criollos y curiosidades del fanático.",
    questions: [
      { q: "¿Cuál es el deporte nacional de Venezuela según la ley?", opts: ["Fútbol", "Béisbol", "Boxeo", "Ciclismo"], a: 1, fact: "El béisbol es el deporte nacional de Venezuela, declarado así oficialmente." },
      { q: "¿Cómo se le llama popularmente al béisbol en Venezuela?", opts: ["La pelota fría", "El pasatiempo nacional", "La pelota caliente", "El juego del pueblo"], a: 2, fact: "En Venezuela al béisbol se le llama 'la pelota caliente', diferenciándolo del fútbol que es 'pelota fría'." },
      { q: "¿Cuál es el rival clásico más famoso de la LVBP?", opts: ["Leones vs Magallanes", "Tiburones vs Caracas", "Lara vs Aragua", "Zulia vs Margarita"], a: 0, fact: "El clásico Leones del Caracas vs Navegantes del Magallanes es el derbi más apasionante del béisbol venezolano." },
      { q: "¿Cuántos venezolanos han ganado el premio Cy Young en MLB?", opts: ["1", "2", "3", "4"], a: 1, fact: "Dos venezolanos han ganado el Cy Young: Johan Santana (2 veces) y Félix Hernández (1 vez)." },
      { q: "¿Cuál de estos términos NO es del béisbol?", opts: ["Jonrón", "Ponche", "Tubey", "Offside"], a: 3, fact: "El offside es del fútbol. En béisbol se usan jonrón, ponche, tubey, triplete, entre otros." },
      { q: "¿Cómo se le llama al 'home run' en Venezuela?", opts: ["Cuadrangular", "Jonrón", "Cuadro completo", "Las dos anteriores son correctas"], a: 3, fact: "En Venezuela se usa tanto 'jonrón' como 'cuadrangular' para referirse al home run." },
      { q: "¿Qué estado venezolano es más famoso por producir peloteros de MLB?", opts: ["Carabobo", "Miranda", "Zulia", "Aragua"], a: 2, fact: "Zulia es históricamente el estado venezolano que más peloteros ha aportado a las Grandes Ligas." },
      { q: "¿Cómo se llama la posición 'shortstop' en Venezuela?", opts: ["Receptor", "Campocorto", "Inicialista", "Jardinero"], a: 1, fact: "El campocorto es una de las posiciones más valoradas. Venezuela ha producido muchos de los mejores del mundo." },
    ]
  }
};

let selectedCat = null;
let questions = [];
let current = 0, score = 0, correct = 0, streak = 0, bestStreak = 0, totalBonus = 0;
let timeLeft = TIMER_MAX;
let timerInterval = null;
let answered = false;

function buildCatGrid() {
  const grid = document.getElementById('cat-grid');
  grid.innerHTML = '';
  Object.entries(allQuestions).forEach(([key, cat]) => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (selectedCat === key ? ' selected' : '');
    btn.innerHTML = `<div class="cat-icon">${cat.icon}</div><div class="cat-name">${cat.name}</div><div class="cat-desc">${cat.desc}</div>`;
    btn.onclick = () => { selectedCat = key; buildCatGrid(); };
    grid.appendChild(btn);
  });
}

function startGame() {
  if (!selectedCat) {
    const keys = Object.keys(allQuestions);
    selectedCat = keys[Math.floor(Math.random() * keys.length)];
  }
  questions = shuffle([...allQuestions[selectedCat].questions]).slice(0, 8);
  current = 0; score = 0; correct = 0; streak = 0; bestStreak = 0; totalBonus = 0; answered = false;
  showScreen('screen-game');
  renderQuestion();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIMER_MAX;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeoutQuestion();
    }
  }, 1000);
}

function updateTimerUI() {
  const pct = (timeLeft / TIMER_MAX) * 100;
  const bar = document.getElementById('timer-bar');
  const num = document.getElementById('timer-num');
  num.textContent = timeLeft;
  bar.style.width = pct + '%';
  if (timeLeft > 10) {
    bar.style.background = '#639922';
    num.style.color = '#3B6D11';
  } else if (timeLeft > 5) {
    bar.style.background = '#BA7517';
    num.style.color = '#854F0B';
  } else {
    bar.style.background = '#E24B4A';
    num.style.color = '#A32D2D';
  }

  const banner = document.getElementById('bonus-banner');
  if (!answered) {
    if (timeLeft > 10) {
      banner.className = 'bonus-banner fast';
      banner.textContent = '⚡ Responde rápido — bonus +25 pts';
    } else if (timeLeft > 5) {
      banner.className = 'bonus-banner normal';
      banner.textContent = '🟢 Todavía puedes ganar +15 pts';
    } else {
      banner.className = 'bonus-banner slow';
      banner.textContent = '⏱ Apúrate — bonus +10 pts';
    }
  }
}

function calcBonus(elapsed) {
  if (elapsed < 5) return 25;
  if (elapsed < 10) return 15;
  return 10;
}

function timeoutQuestion() {
  if (answered) return;
  answered = true;
  streak = 0;
  const q = questions[current];
  document.querySelectorAll('.opt-btn').forEach(b => { b.disabled = true; b.classList.add('timeout'); });
  document.querySelectorAll('.opt-btn')[q.a].classList.remove('timeout');
  document.querySelectorAll('.opt-btn')[q.a].classList.add('correct');
  document.getElementById('feedback').textContent = `⏱ Tiempo agotado. ${q.fact}`;
  document.getElementById('feedback').className = 'feedback show';
  const banner = document.getElementById('bonus-banner');
  banner.className = 'bonus-banner slow';
  banner.textContent = '⏱ Sin puntos esta vez';
  const nextBtn = document.getElementById('btn-next');
  nextBtn.textContent = current + 1 < questions.length ? 'Siguiente →' : 'Ver resultado →';
  nextBtn.className = 'btn-next show';
}

function answer(idx, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);
  const elapsed = TIMER_MAX - timeLeft;
  const q = questions[current];
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
  document.querySelectorAll('.opt-btn')[q.a].classList.add('correct');

  const banner = document.getElementById('bonus-banner');

  if (idx === q.a) {
    const speedBonus = calcBonus(elapsed);
    const streakBonus = streak >= 1 ? 5 : 0;
    streak++;
    if (streak > bestStreak) bestStreak = streak;
    const pts = speedBonus + streakBonus;
    score += pts;
    totalBonus += pts;
    correct++;

    let bannerText = '';
    if (elapsed < 5) { banner.className = 'bonus-banner fast'; bannerText = `⚡ ¡Rapidísimo! +${speedBonus} pts`; }
    else if (elapsed < 10) { banner.className = 'bonus-banner normal'; bannerText = `🟢 ¡Correcto! +${speedBonus} pts`; }
    else { banner.className = 'bonus-banner slow'; bannerText = `🟡 ¡Correcto! +${speedBonus} pts`; }
    if (streakBonus > 0) { banner.className = 'bonus-banner streak'; bannerText += ` + 🔥 racha +${streakBonus}`; }
    banner.textContent = bannerText;

    document.getElementById('feedback').textContent = `✅ ${q.fact}`;
  } else {
    btn.classList.add('wrong');
    streak = 0;
    banner.className = 'bonus-banner slow';
    banner.textContent = '❌ Incorrecto — 0 pts';
    document.getElementById('feedback').textContent = `❌ ${q.fact}`;
  }

  document.getElementById('feedback').className = 'feedback show';
  document.getElementById('q-score').textContent = `${score} pts`;
  document.getElementById('q-streak').textContent = streak >= 2 ? `🔥 Racha de ${streak}` : '';

  const nextBtn = document.getElementById('btn-next');
  nextBtn.textContent = current + 1 < questions.length ? 'Siguiente →' : 'Ver resultado →';
  nextBtn.className = 'btn-next show';
}

function renderQuestion() {
  answered = false;
  const q = questions[current];
  const total = questions.length;
  document.getElementById('progress').style.width = ((current / total) * 100) + '%';
  document.getElementById('q-num').textContent = `Pregunta ${current + 1} de ${total}`;
  document.getElementById('q-score').textContent = `${score} pts`;
  document.getElementById('q-streak').textContent = streak >= 2 ? `🔥 Racha de ${streak}` : '';
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('feedback').textContent = '';
  document.getElementById('feedback').className = 'feedback';
  document.getElementById('btn-next').className = 'btn-next';
  document.getElementById('bonus-banner').textContent = '';
  document.getElementById('bonus-banner').className = 'bonus-banner';

  const opts = document.getElementById('options');
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

function nextQuestion() {
  current++;
  if (current >= questions.length) showResult();
  else renderQuestion();
}

function showResult() {
  clearInterval(timerInterval);
  showScreen('screen-result');
  const pct = Math.round((correct / questions.length) * 100);
  let trophy, title, sub;
  if (pct === 100) { trophy = '🏆'; title = '¡Eres una leyenda!'; sub = 'Perfecto. Mereces un lugar en el Salón de la Fama.'; }
  else if (pct >= 75) { trophy = '⭐'; title = '¡Muy buen trabajo!'; sub = 'Claramente eres un verdadero fanático del béisbol venezolano.'; }
  else if (pct >= 50) { trophy = '⚾'; title = '¡Buen intento!'; sub = 'Sabes bastante, pero hay más historia por aprender.'; }
  else { trophy = '📖'; title = 'Sigue estudiando'; sub = 'El béisbol venezolano tiene mucha historia. ¡Inténtalo de nuevo!'; }
  document.getElementById('result-trophy').textContent = trophy;
  document.getElementById('result-title').textContent = title;
  document.getElementById('result-sub').textContent = sub;
  document.getElementById('res-score').textContent = score;
  document.getElementById('res-correct').textContent = `${correct}/${questions.length}`;
  document.getElementById('res-streak').textContent = bestStreak;
  document.getElementById('res-bonus').textContent = totalBonus;
}

function shareResult() {
  const cat = allQuestions[selectedCat].name;
  const text = `Jugué la Trivia Beisbolera Venezolana (${cat}) y saqué ${score} pts con ${correct}/${questions.length} correctas y mejor racha de ${bestStreak}! ⚾🇻🇪`;
  if (navigator.share) navigator.share({ title: 'Trivia Beisbolera', text });
  else navigator.clipboard.writeText(text).then(() => alert('Resultado copiado al portapapeles!'));
}

function goHome() {
  clearInterval(timerInterval);
  selectedCat = null;
  showScreen('screen-home');
  buildCatGrid();
}

const BG_MUSIC_SRC = "Cita_de_Bases.mp3";

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");
  if (!audio.src) audio.src = BG_MUSIC_SRC;
  if (audio.paused) {
    audio.play();
    btn.textContent = "🔊";
  } else {
    audio.pause();
    btn.textContent = "🔇";
  }
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

buildCatGrid();
