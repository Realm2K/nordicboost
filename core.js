/* =========================================================
   core.js — Спільна логіка прогресу (localStorage), XP, рівнів
   =========================================================
   Структура збереження в localStorage (ключ "nazar_da_progress"):

   {
     totalXP: 120,              // загальний досвід
     lang: "uk",               // мова інтерфейсу: "uk" або "da"
     smart: {                   // розумні картки (система Лейтнера)
       "intro_01": { box: 2, streak: 1, lastSeen: 1698000000 }
     },
     mastery: {                  // скільки разів слово перекладено ПРАВИЛЬНО
       "intro_01": 3,            // якщо >= MASTERY_TO_LEARN (3) — слово «Вивчено»
       "tech_02": 1
     }
   }

   Як змінити XP або складність:
   ➜ Зміни константи CONFIG нижче. Більше нічого чіпати не треба.
   ========================================================= */

// ------------------------- CONFIG -------------------------
const CONFIG = {
  XP_PER_CORRECT: 10,   // XP за правильну відповідь (квіз та Blast)
  MASTERY_TO_LEARN: 3, // скільки правильних відповідей, щоб слово стало «Вивченим»
  XP_PER_LEVEL: 100,   // скільки XP потрібно на один рівень

  // ---- Налаштування гри Word Blast (blast.html) ----
  BLAST: {
    FALL_SPEED_START: 30,   // початкова швидкість падіння (пікселів за секунду)
    FALL_SPEED_MAX: 120,    // максимальна швидкість падіння
    FALL_SPEED_RAMP: 1.05,  // наскільки швидкість зростає за кожне правильне слово
    SPAWN_INTERVAL_START: 2600, // початковий інтервал появи слів (мс)
    SPAWN_INTERVAL_MIN: 1000,    // мінімальний інтервал (мс)
    SPAWN_RAMP: 0.96,      // множник інтервалу після кожного правильного слова
    START_LIVES: 3,        // скільки життів на початку гри
  },
};
// ----------------------------------------------------------

const STORAGE_KEY = "nazar_da_progress";

/* Завантажує прогрес із localStorage. Якщо нічого нема — створює порожній. */
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        totalXP: Number(p.totalXP) || 0,
        lang: (p.lang === "da") ? "da" : "uk",
        smart: (p.smart && typeof p.smart === "object") ? p.smart : {},
        mastery: (p.mastery && typeof p.mastery === "object") ? p.mastery : {},
      };
    }
  } catch (e) {
    console.warn("Не вдалося прочитати прогрес, створюю новий.", e);
  }
  return { totalXP: 0, lang: "uk", smart: {}, mastery: {} };
}

/* Зберігає прогрес у localStorage. */
function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Не вдалося зберегти прогрес!", e);
  }
}

/* Повертає кількість правильних відповідей для конкретного слова (за id). */
function getMastery(wordId) {
  return loadProgress().mastery[wordId] || 0;
}

/*
  Реєструє правильну відповідь:
  1) додає XP до загальної кількості
  2) збільшує лічильник вивченості слова на 1
  Повертає ОНОВЛЕНЕ значення mastery цього слова.
*/
function recordCorrectAnswer(wordId) {
  const progress = loadProgress();
  progress.totalXP += CONFIG.XP_PER_CORRECT;
  progress.mastery[wordId] = (progress.mastery[wordId] || 0) + 1;
  saveProgress(progress);
  return progress.mastery[wordId];
}

/* Чи слово вже «Вивчено» (>= MASTERY_TO_LEARN правильних відповідей)? */
function isLearned(wordId) {
  return getMastery(wordId) >= CONFIG.MASTERY_TO_LEARN;
}

/* Кількість вивчених слів (для прогрес-бара на дашборді). */
function getLearnedCount() {
  const m = loadProgress().mastery;
  return WORDS.filter(w => (m[w.id] || 0) >= CONFIG.MASTERY_TO_LEARN).length;
}

/* Обчислює рівень на основі totalXP. */
function getLevel() {
  return Math.floor(loadProgress().totalXP / CONFIG.XP_PER_LEVEL) + 1;
}

/* Скільки XP вже накопичено всередині поточного рівня (для прогрес-бара XP). */
function getLevelProgress() {
  const xp = loadProgress().totalXP;
  return xp % CONFIG.XP_PER_LEVEL;
}

/* Скинути весь прогрес (для кнопки «Скинути прогрес» на дашборді). */
function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

/* Датський голосовий синтез (Web Speech API).
   Використовується на flashcards та у квізі. */
function speakDanish(text) {
  if (!("speechSynthesis" in window)) {
    alert("Вибач, твій браузер не підтримує озвучення :(");
    return;
  }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "da-DK";      // датська мова
  u.rate = 0.85;         // трохи повільніше, щоб легше сприймати
  const voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith("da"));
  if (voices.length) u.voice = voices[0];
  speechSynthesis.cancel(); // зупиняємо попереднє озвучення
  speechSynthesis.speak(u);
}

// Деякі браузери завантажують голоси асинхронно — прогріваємо список.
if ("speechSynthesis" in window) {
  speechSynthesis.getVoices();
}

/* =========================================================
   ІНТЕРНАЦІЙНАЛІЗАЦІЯ (UA / DA) — перемикання мови сайту
   =========================================================
   I18N.uk — українські тексти, I18N.da — данські.
   У HTML текст-елементи позначаються data-i18n="ключ",
   а placeholder'и — data-i18n-ph="ключ".
   Щоб додати новий текст: додай ключ в обидва об'єкти.
   ========================================================= */
const I18N = {
  uk: {
    "nav.home": "Головна", "nav.cards": "Картки", "nav.quiz": "Квіз", "nav.blast": "Word Blast",
    "dash.hello": "Привіт", "dash.ready": "Готовий вивчати данську сьогодні? Обери режим нижче.",
    "dash.level": "Рівень", "dash.xp": "Всього XP", "dash.learned": "Вивчено слів",
    "dash.nextlevel": "До наступного рівня", "dash.wordsdb": "Слова з бази",
    "dash.learnedwords": "Вивчено слів: ",
    "dash.cards_title": "Картки", "dash.cards_desc": "Вивчай слова — тапни, щоб перевернути",
    "dash.quiz_title": "Квіз", "dash.quiz_desc": "Тест з вибором відповіді + XP",
    "dash.blast_title": "Word Blast", "dash.blast_desc": "Арканоїд зі словами: друкуй, поки не впало!",
    "dash.reset": "Скинути прогрес",
    "dash.reset_confirm": "Точно скинути весь прогрес? Це видалить XP і вивчені слова!",
    "fc.sub": "Тапни картку, щоб перевернути. Оціни себе чесно — система запам'ятає!",
    "fc.filter": "Фільтр:", "fc.all": "Усі слова", "fc.unlearned": "Тільки невивчені", "fc.smart": "🎯 Розумний режим",
    "fc.shuffle": "🔀 Перемішати", "fc.speak": "🔊 Озвучити",
    "fc.flip_hint": "Тапни, щоб побачити переклад", "fc.back_hint": "Тапни, щоб повернутись",
    "fc.know": "✓ Знаю", "fc.dontknow": "✗ Не знаю",
    "fc.progress": "Прогрес: ", "fc.learned": "✅ Вивчено (",
    "fc.done_title": "🎉 Круг пройдено!",
    "fc.done_text": "Слова з «Не знаю» повернуться найближчими. Грай далі або спробуй квіз!",
    "fc.need_flip": "Спершу переглянь картку, потім оціни себе!",
    "fc.box": "Складність слова: ",
    "quiz.sub": "Обери правильний данський переклад. За кожну правильну відповідь — ",
    "quiz.pick": "Обери данський переклад:",
    "quiz.ok": "✅ Rigtigt! (Правильно!) +", "quiz.bad": "❌ Desværre! Правильно: «",
    "quiz.next": "Наступне питання →", "quiz.streak": "Правильних підряд",
    "quiz.session": "XP за сесію", "quiz.word_learned": " 🎉 Слово вивчено!",
    "blast.sub1": "Друкуй український переклад слова, що падає, і натисни",
    "blast.sub2": ". Якщо слово впаде внизу — втратиш життя!",
    "blast.score": "Рахунок", "blast.start": "▶ Почати гру",
    "blast.over": "💥 Гра закінчена!", "blast.score_label": "Рахунок: ",
    "blast.xp_label": "Зароблено XP: ", "blast.again": "Грати ще раз 🔄",
    "blast.input_ph": "Введи переклад і натисни Enter…",
    "blast.nice": "💪 Влучно! Наступне слово…", "blast.miss": "❌ Мимо! Спробуй ще…",
    "common.lang": "Мова"
  },
  da: {
    "nav.home": "Hjem", "nav.cards": "Kort", "nav.quiz": "Quiz", "nav.blast": "Word Blast",
    "dash.hello": "Hej", "dash.ready": "Klar til at lære dansk i dag? Vælg en tilstand nedenfor.",
    "dash.level": "Niveau", "dash.xp": "Samlet XP", "dash.learned": "Lærte ord",
    "dash.nextlevel": "Til næste niveau", "dash.wordsdb": "Ord fra databasen",
    "dash.learnedwords": "Lærte ord: ",
    "dash.cards_title": "Kort", "dash.cards_desc": "Studér ordene — tryk for at vende",
    "dash.quiz_title": "Quiz", "dash.quiz_desc": "Multiple choice test + XP",
    "dash.blast_title": "Word Blast", "dash.blast_desc": "Ord-arkade: skriv, før ordet falder!",
    "dash.reset": "Nulstil fremdrift",
    "dash.reset_confirm": "Sikker på, at du vil nulstille alt? XP og lærte ord slettes!",
    "fc.sub": "Tryk på kortet for at vende. Bedøm dig selv ærligt — systemet husker det!",
    "fc.filter": "Filter:", "fc.all": "Alle ord", "fc.unlearned": "Kun ulærte", "fc.smart": "🎯 Smart tilstand",
    "fc.shuffle": "🔀 Bland", "fc.speak": "🔊 Udtal",
    "fc.flip_hint": "Tryk for at se oversættelsen", "fc.back_hint": "Tryk for at vende tilbage",
    "fc.know": "✓ Jeg kan det", "fc.dontknow": "✗ Jeg kan det ikke",
    "fc.progress": "Fremdrift: ", "fc.learned": "✅ Lært (",
    "fc.done_title": "🎉 Runde færdig!",
    "fc.done_text": "«Jeg kan det ikke»-ord kommer først næste gang. Fortsæt eller prøv quizzen!",
    "fc.need_flip": "Se kortet først, og bedøm dig selv derefter!",
    "fc.box": "Ordets sværhedsgrad: ",
    "quiz.sub": "Vælg den rigtige danske oversættelse. For hvert rigtigt svar — ",
    "quiz.pick": "Vælg den danske oversættelse:",
    "quiz.ok": "✅ Rigtigt! +", "quiz.bad": "❌ Desværre! Rigtigt: «",
    "quiz.next": "Næste spørgsmål →", "quiz.streak": "Rigtige i træk",
    "quiz.session": "XP i denne session", "quiz.word_learned": " 🎉 Ord lært!",
    "blast.sub1": "Skriv den ukrainske oversættelse af det faldende ord og tryk på",
    "blast.sub2": ". Hvis ordet falder til bunden, mister du et liv!",
    "blast.score": "Score", "blast.start": "▶ Start spillet",
    "blast.over": "💥 Spillet er slut!", "blast.score_label": "Score: ",
    "blast.xp_label": "Optjent XP: ", "blast.again": "Spil igen 🔄",
    "blast.input_ph": "Skriv oversættelsen og tryk Enter…",
    "blast.nice": "💪 Ramt! Næste ord…", "blast.miss": "❌ Forbi! Prøv igen…",
    "common.lang": "Sprog"
  }
};

/* Поточна мова інтерфейсу */
function getLang() {
  return loadProgress().lang;
}

/* Перемикає мову інтерфейсу (uk ↔ da) і перезавантажує сторінку */
function toggleLang() {
  const p = loadProgress();
  p.lang = (p.lang === "da") ? "uk" : "da";
  saveProgress(p);
  location.reload();
}

/*
  Застосовує мову до сторінки:
  - [data-i18n]      → textContent
  - [data-i18n-ph]   → placeholder
  - [data-lang-toggle] → кнопка мови (показує ДРУГУ мову)
*/
function applyI18n() {
  const lang = getLang();
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
    btn.textContent = (lang === "uk") ? "🇩🇰 DA" : "🇺🇦 UA";
  });
}

/* =========================================================
   РОЗУМНІ КАРТКИ — система ящиків Лейтнера
   =========================================================
   Кожне слово живе в «ящику» від 1 до SMART_MAX_BOX:
     «Не знаю» → слово падає в ящик 1 (найближча в черзі)
     «Знаю»    → слово піднімається на ящик вище (раніше повернеться)
   Нижчі ящики завжди показуються першими; всередині ящика —
   спочатку ті, що найдавніше бачили.
   ========================================================= */
const SMART_MAX_BOX = 5;

/* Стан картки слова (за замовчуванням — ящик 2, «новачок») */
function getSmartState(wordId) {
  const s = loadProgress().smart[wordId];
  return s || { box: 2, streak: 0, lastSeen: 0 };
}

/* Оцінює картку (knew = true/false) та зберігає у localStorage */
function rateSmartCard(wordId, knew) {
  const p = loadProgress();
  const s = p.smart[wordId] || { box: 2, streak: 0, lastSeen: 0 };
  if (knew) {
    s.box = Math.min(SMART_MAX_BOX, s.box + 1);
    s.streak += 1;
  } else {
    s.box = 1;
    s.streak = 0;
  }
  s.lastSeen = Date.now();
  p.smart[wordId] = s;
  saveProgress(p);
  return s;
}

/*
  Впорядковує список слів для «розумного» показу:
  ящик 1 → ящик 2 → ... → ящик 5, всередині — за давністю показу.
  Слова без оцінки вважаються ящиком 2.
*/
function smartOrder(wordList) {
  const smart = loadProgress().smart;
  return [...wordList].sort((a, b) => {
    const sa = smart[a.id] || { box: 2, lastSeen: 0 };
    const sb = smart[b.id] || { box: 2, lastSeen: 0 };
    if (sa.box !== sb.box) return sa.box - sb.box;
    return sa.lastSeen - sb.lastSeen;
  });
}
