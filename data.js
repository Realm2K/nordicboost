/* =========================================================
   data.js — База даних слів (Danish → Ukrainian)
   =========================================================
   Кожне слово має УНІКАЛЬНИЙ id (рядок). За цим id ми
   зберігаємо прогрес у localStorage (скільки разів слово
   перекладено правильно).
   Категорії підібрані для 14-річного підлітка.
   Хочеш додати слово? Просто додай об'єкт у масив WORDS.
   ========================================================= */

const WORDS = [
  // ---------- 1. ЗНАЙОМСТВО (Introductions) ----------
  { id: "intro_01", da: "hej",           uk: "привіт",                 category: "Знайомство" },
  { id: "intro_02", da: "godmorgen",     uk: "добрий ранок",           category: "Знайомство" },
  { id: "intro_03", da: "god aften",     uk: "добрий вечір",            category: "Знайомство" },
  { id: "intro_04", da: "farvel",         uk: "до побачення",           category: "Знайомство" },
  { id: "intro_05", da: "mit navn er",    uk: "мене звати",             category: "Знайомство" },
  { id: "intro_06", da: "hvordan har du det?", uk: "як справи?",         category: "Знайомство" },
  { id: "intro_07", da: "jeg har det godt",   uk: "у мене все добре",   category: "Знайомство" },
  { id: "intro_08", da: "tak",           uk: "дякую",                  category: "Знайомство" },
  { id: "intro_09", da: "vær så snil",     uk: "будь ласка",             category: "Знайомство" },
  { id: "intro_10", da: "undskyld",       uk: "вибач",                  category: "Знайомство" },
  { id: "intro_11", da: "hvorfra kommer du?", uk: "звідки ти?",         category: "Знайомство" },
  { id: "intro_12", da: "jeg kommer fra Ukraine", uk: "я з України",    category: "Знайомство" },
  { id: "intro_13", da: "hvor gammel er du?", uk: "скільки тобі років?", category: "Знайомство" },
  { id: "intro_14", da: "jeg er fjorten år",     uk: "мені чотирнадцять років", category: "Знайомство" },
  { id: "intro_15", da: "ven",           uk: "друг",                   category: "Знайомство" },

  // ---------- 2. ІГРИ / ТЕХНОЛОГІЇ (Gaming & Tech) ----------
  { id: "tech_01", da: "computer",       uk: "комп'ютер",              category: "Ігри / Технології" },
  { id: "tech_02", da: "skærm",           uk: "екран",                  category: "Ігри / Технології" },
  { id: "tech_03", da: "tastatur",        uk: "клавіатура",             category: "Ігри / Технології" },
  { id: "tech_04", da: "mus",            uk: "миша",                   category: "Ігри / Технології" },
  { id: "tech_05", da: "spil",           uk: "гра",                    category: "Ігри / Технології" },
  { id: "tech_06", da: "at spille",      uk: "грати",                  category: "Ігри / Технології" },
  { id: "tech_07", da: "at vinde",       uk: "перемагати / виграти",   category: "Ігри / Технології" },
  { id: "tech_08", da: "at tabe",        uk: "програвати / програти",  category: "Ігри / Технології" },
  { id: "tech_09", da: "niveau",         uk: "рівень",                 category: "Ігри / Технології" },
  { id: "tech_10", da: "point",          uk: "очки",                   category: "Ігри / Технології" },
  { id: "tech_11", da: "telefon",        uk: "телефон",                category: "Ігри / Технології" },
  { id: "tech_12", da: "internettet",    uk: "інтернет",               category: "Ігри / Технології" },
  { id: "tech_13", da: "hovedtelefoner", uk: "навушники",              category: "Ігри / Технології" },
  { id: "tech_14", da: "konsol",         uk: "ігрова приставка",       category: "Ігри / Технології" },
  { id: "tech_15", da: "lyst på at spille?", uk: "хочеш пограти?",     category: "Ігри / Технології" },
  { id: "tech_16", da: "skjold",         uk: "щит",                    category: "Ігри / Технології" },
  { id: "tech_17", da: "tropper",        uk: "війська (юніти)",        category: "Ігри / Технології" },
  { id: "tech_18", da: "tårn",           uk: "вежа",                   category: "Ігри / Технології" },

  // ---------- 3. ШКОЛА (School) ----------
  { id: "school_01", da: "skole",         uk: "школа",                  category: "Школа" },
  { id: "school_02", da: "lærer",         uk: "вчитель",                category: "Школа" },
  { id: "school_03", da: "elev",          uk: "учень",                  category: "Школа" },
  { id: "school_04", da: "klasse",        uk: "клас",                   category: "Школа" },
  { id: "school_05", da: "bog",           uk: "книга",                  category: "Школа" },
  { id: "school_06", da: "lektier",       uk: "домашнє завдання",       category: "Школа" },
  { id: "school_07", da: "prøve",         uk: "контрольна / тест",      category: "Школа" },
  { id: "school_08", da: "pen",           uk: "ручка",                  category: "Школа" },
  { id: "school_09", da: "matematik",     uk: "математика",             category: "Школа" },
  { id: "school_10", da: "pause",         uk: "перерва",                category: "Школа" },
  { id: "school_11", da: "tavle",         uk: "дошка",                  category: "Школа" },
  { id: "school_12", da: "at lære",       uk: "вчитися / вивчати",      category: "Школа" },
  { id: "school_13", da: "at forstå",     uk: "розуміти",               category: "Школа" },
  { id: "school_14", da: "spørgsmål",    uk: "питання",                category: "Школа" },
  { id: "school_15", da: "svar",          uk: "відповідь",               category: "Школа" },
  { id: "school_16", da: "sprog",         uk: "мова",                   category: "Школа" },

  // ---------- 4. СПОРТ (Sports) ----------
  { id: "sport_01", da: "fodbold",        uk: "футбол",                 category: "Спорт" },
  { id: "sport_02", da: "bold",          uk: "м'яч",                   category: "Спорт" },
  { id: "sport_03", da: "mål",           uk: "гол / ворота",           category: "Спорт" },
  { id: "sport_04", da: "hold",          uk: "команда",                category: "Спорт" },
  { id: "sport_05", da: "kamp",          uk: "матч",                   category: "Спорт" },
  { id: "sport_06", da: "træne",         uk: "тренуватися",            category: "Спорт" },
  { id: "sport_07", da: "svømning",      uk: "плавання",               category: "Спорт" },
  { id: "sport_08", da: "løbe",          uk: "бігти / бігати",         category: "Спорт" },
  { id: "sport_09", da: "cykle",         uk: "їздити на велосипеді",   category: "Спорт" },
  { id: "sport_10", da: "håndbold",      uk: "гандбол",                category: "Спорт" },
  { id: "sport_11", da: "skøjter",       uk: "ковзани",                category: "Спорт" },
  { id: "sport_12", da: "vinder",        uk: "переможець",             category: "Спорт" },

  // ---------- 5. ЩОДЕННІ СПРАВИ (Daily Routine) ----------
  { id: "daily_01", da: "at stå op",      uk: "вставати",               category: "Щоденні справи" },
  { id: "daily_02", da: "at gå i seng",  uk: "ложитися спати",         category: "Щоденні справи" },
  { id: "daily_03", da: "at spise",      uk: "їсти",                   category: "Щоденні справи" },
  { id: "daily_04", da: "at drikke",     uk: "пити",                   category: "Щоденні справи" },
  { id: "daily_05", da: "at sove",       uk: "спати",                  category: "Щоденні справи" },
  { id: "daily_06", da: "at vaske sig",  uk: "умиватися",              category: "Щоденні справи" },
  { id: "daily_07", da: "vand",          uk: "вода",                   category: "Щоденні справи" },
  { id: "daily_08", da: "brød",          uk: "хліб",                   category: "Щоденні справи" },
  { id: "daily_09", da: "æble",          uk: "яблуко",                 category: "Щоденні справи" },
  { id: "daily_10", da: "mælk",          uk: "молоко",                  category: "Щоденні справи" },
  { id: "daily_11", da: "hjem",          uk: "додому / будинок",       category: "Щоденні справи" },
  { id: "daily_12", da: "butik",         uk: "магазин",                category: "Щоденні справи" },
  { id: "daily_13", da: "hund",          uk: "пес",                    category: "Щоденні справи" },
  { id: "daily_14", da: "kat",           uk: "кіт",                    category: "Щоденні справи" },
  { id: "daily_15", da: "penge",        uk: "гроші",                  category: "Щоденні справи" },

  // ---------- 6. ЧАС (Time) ----------
  { id: "time_01", da: "i dag",          uk: "сьогодні",               category: "Час" },
  { id: "time_02", da: "i morgen",       uk: "завтра",                 category: "Час" },
  { id: "time_03", da: "i går",          uk: "вчора",                  category: "Час" },
  { id: "time_04", da: "nu",             uk: "зараз",                  category: "Час" },
  { id: "time_05", da: "senere",         uk: "пізніше",                category: "Час" },
  { id: "time_06", da: "uge",            uk: "тиждень",                category: "Час" },
  { id: "time_07", da: "måned",          uk: "місяць",                 category: "Час" },
  { id: "time_08", da: "år",             uk: "рік",                    category: "Час" },
  { id: "time_09", da: "ur",             uk: "годинник",              category: "Час" },
  { id: "time_10", da: "klokken er otte", uk: "зараз восьма година",         category: "Час" },
  { id: "time_11", da: "mandag",         uk: "понеділок",              category: "Час" },
  { id: "time_12", da: "fredag",         uk: "п'ятниця",               category: "Час" },
  { id: "time_13", da: "weekend",        uk: "вихідні",                category: "Час" },
  { id: "time_14", da: "ferie",          uk: "канікули / відпустка",   category: "Час" },
];

// Загальна кількість слів у базі (використовується на дашборді)
const TOTAL_WORDS = WORDS.length;

// Унікальні категорії (можна використати для фільтрів)
const CATEGORIES = [...new Set(WORDS.map(w => w.category))];
