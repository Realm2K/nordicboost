/* =========================================================
   core.js — Спільна логіка прогресу (localStorage), XP, рівнів
   =========================================================
   Структура збереження в localStorage (ключ "nazar_da_progress"):

   {
     totalXP: 120,              // загальний досвід
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
        mastery: (p.mastery && typeof p.mastery === "object") ? p.mastery : {},
      };
    }
  } catch (e) {
    console.warn("Не вдалося прочитати прогрес, створюю новий.", e);
  }
  return { totalXP: 0, mastery: {} };
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
