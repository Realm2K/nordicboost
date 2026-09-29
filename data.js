/* =========================================================
   data.js — База даних слів (Danish → Ukrainian), рівень A2–B1
   =========================================================
   Оновлена версія: складніші слова для підлітка, який вже
   знає базу. Категорії: почуття, школа, технології/ігри,
   суспільство, природа/подорожі, час/планування, фрази.
   Кожне слово має УНІКАЛЬНИЙ id. Хочеш додати слово?
   Просто додай об'єкт у масив WORDS.
   ========================================================= */

const WORDS = [
  // ---------- 1. ПОЧУТТЯ ТА ХАРАКТЕР (Følelser & personlighed) ----------
  { id: "feel_01", da: "begejstret",        uk: "захоплений",              category: "Почуття" },
  { id: "feel_02", da: "skuffet",          uk: "розчарований",            category: "Почуття" },
  { id: "feel_03", da: "nervøs",           uk: "нервовий / хвилювальний",  category: "Почуття" },
  { id: "feel_04", da: "stolt af",         uk: "гордий із (чогось)",      category: "Почуття" },
  { id: "feel_05", da: "jaloux",           uk: "ревнивий / заздрісний",   category: "Почуття" },
  { id: "feel_06", da: "tryg",            uk: "у безпеці / спокійний",    category: "Почуття" },
  { id: "feel_07", da: "tålmodighed",     uk: "терпіння",                 category: "Почуття" },
  { id: "feel_08", da: "mod",              uk: "смілість",                category: "Почуття" },
  { id: "feel_09", da: "ansvar",           uk: "відповідальність",        category: "Почуття" },
  { id: "feel_10", da: "pålidelig",        uk: "надійний",                category: "Почуття" },
  { id: "feel_11", da: "selvstændig",      uk: "самостійний",             category: "Почуття" },
  { id: "feel_12", da: "træthed",          uk: "втома",                   category: "Почуття" },
  { id: "feel_13", da: "humør",           uk: "настрій",                 category: "Почуття" },
  { id: "feel_14", da: "venskab",         uk: "дружба",                  category: "Почуття" },
  { id: "feel_15", da: "at stole på",     uk: "довіряти",                category: "Почуття" },
  { id: "feel_16", da: "at bekymre sig",   uk: "переживати / хвилюватися", category: "Почуття" },
  { id: "feel_17", da: "misundelse",       uk: "заздрість",               category: "Почуття" },
  { id: "feel_18", da: "egen",            uk: "власний",                 category: "Почуття" },

  // ---------- 2. ШКОЛА ТА НАВЧАННЯ (Skole & læring) ----------
  { id: "school_01", da: "udfordring",     uk: "виклик / складне завдання", category: "Школа" },
  { id: "school_02", da: "beslutning",     uk: "рішення",                 category: "Школа" },
  { id: "school_03", da: "erfaring",       uk: "досвід",                  category: "Школа" },
  { id: "school_04", da: "færdighed",     uk: "навичка",                 category: "Школа" },
  { id: "school_05", da: "karakter",       uk: "оцінка",                  category: "Школа" },
  { id: "school_06", da: "forelæsning",    uk: "лекція",                  category: "Школа" },
  { id: "school_07", da: "opgave",        uk: "завдання",                category: "Школа" },
  { id: "school_08", da: "at aflevere",    uk: "здавати (роботу)",        category: "Школа" },
  { id: "school_09", da: "at forbedre",    uk: "покращувати",             category: "Школа" },
  { id: "school_10", da: "koncentration",  uk: "концентрація",            category: "Школа" },
  { id: "school_11", da: "eksamen",        uk: "екзамен",                 category: "Школа" },
  { id: "school_12", da: "at gentage",     uk: "повторювати",            category: "Школа" },
  { id: "school_13", da: "viden",          uk: "знання",                  category: "Школа" },
  { id: "school_14", da: "emne",          uk: "тема / предмет",          category: "Школа" },
  { id: "school_15", da: "at forklare",    uk: "пояснювати",              category: "Школа" },
  { id: "school_16", da: "noter",         uk: "записи / нотатки",       category: "Школа" },

  // ---------- 3. ТЕХНОЛОГІЇ ТА ІГРИ (Tech & gaming) ----------
  { id: "tech_01", da: "at opgradere",     uk: "оновлювати / апгрейдити", category: "Технології" },
  { id: "tech_02", da: "strategi",         uk: "стратегія",               category: "Технології" },
  { id: "tech_03", da: "modstander",       uk: "суперник",                category: "Технології" },
  { id: "tech_04", da: "fejl",            uk: "помилка / баг",           category: "Технології" },
  { id: "tech_05", da: "at gemme",        uk: "зберігати / зберегти",    category: "Технології" },
  { id: "tech_06", da: "server",          uk: "сервер",                  category: "Технології" },
  { id: "tech_07", da: "netværk",         uk: "мережа",                  category: "Технології" },
  { id: "tech_08", da: "batteri",         uk: "батарея",                 category: "Технології" },
  { id: "tech_09", da: "indstillinger",   uk: "налаштування",            category: "Технології" },
  { id: "tech_10", da: "at hente",        uk: "завантажувати",          category: "Технології" },
  { id: "tech_11", da: "streaming",       uk: "трансляція / стрім",      category: "Технології" },
  { id: "tech_12", da: "virtuel",         uk: "віртуальний",             category: "Технології" },
  { id: "tech_13", da: "skærm",           uk: "екран",                   category: "Технології" },
  { id: "tech_14", da: "adfærd",          uk: "поведінка (ігрового персонажа)", category: "Технології" },
  { id: "tech_15", da: "kontrol",         uk: "керування (в грі)",       category: "Технології" },
  { id: "tech_16", da: "at deltage",      uk: "брати участь",            category: "Технології" },

  // ---------- 4. СУСПІЛЬСТВО ТА ПОБУТ (Samfund & hverdag) ----------
  { id: "soc_01", da: "miljø",            uk: "довкілля / екологія",     category: "Суспільство" },
  { id: "soc_02", da: "samfund",          uk: "суспільство",             category: "Суспільство" },
  { id: "soc_03", da: "rettigheder",      uk: "права",                   category: "Суспільство" },
  { id: "soc_04", da: "pligter",          uk: "обов'язки",               category: "Суспільство" },
  { id: "soc_05", da: "bolig",            uk: "житло / помешкання",      category: "Суспільство" },
  { id: "soc_06", da: "løn",              uk: "зарплата",                category: "Суспільство" },
  { id: "soc_07", da: "budget",           uk: "бюджет",                  category: "Суспільство" },
  { id: "soc_08", da: "at spare",         uk: "економити",               category: "Суспільство" },
  { id: "soc_09", da: "offentlig transport", uk: "громадський транспорт", category: "Суспільство" },
  { id: "soc_10", da: "madlavning",       uk: "готування їжі",           category: "Суспільство" },
  { id: "soc_11", da: "tøj",              uk: "одяг",                    category: "Суспільство" },
  { id: "soc_12", da: "pris",            uk: "ціна",                    category: "Суспільство" },
  { id: "soc_13", da: "rabat",           uk: "знижка",                  category: "Суспільство" },
  { id: "soc_14", da: "at handle",        uk: "робити покупки",          category: "Суспільство" },
  { id: "soc_15", da: "naboen",           uk: "сусід",                   category: "Суспільство" },

  // ---------- 5. ПРИРОДА ТА ПОДОРОЖІ (Natur & rejser) ----------
  { id: "nat_01", da: "vejr",            uk: "погода",                  category: "Природа" },
  { id: "nat_02", da: "temperatur",      uk: "температура",             category: "Природа" },
  { id: "nat_03", da: "regnvejr",        uk: "дощова погода",           category: "Природа" },
  { id: "nat_04", da: "skov",            uk: "ліс",                     category: "Природа" },
  { id: "nat_05", da: "strand",          uk: "пляж",                    category: "Природа" },
  { id: "nat_06", da: "landskab",        uk: "пейзаж / ландшафт",       category: "Природа" },
  { id: "nat_07", da: "at rejse",        uk: "подорожувати",            category: "Природа" },
  { id: "nat_08", da: "billet",          uk: "квиток",                  category: "Природа" },
  { id: "nat_09", da: "afgang",          uk: "відправлення",            category: "Природа" },
  { id: "nat_10", da: "ankomst",         uk: "прибуття",                category: "Природа" },
  { id: "nat_11", da: "forsinket",       uk: "із запізненням / затриманий", category: "Природа" },
  { id: "nat_12", da: "at opleve",       uk: "відчувати / переживати (досвід)", category: "Природа" },
  { id: "nat_13", da: "eventyr",         uk: "пригода",                 category: "Природа" },
  { id: "nat_14", da: "sollys",          uk: "сонячне світло",          category: "Природа" },

  // ---------- 6. ЧАС ТА ПЛАНИ (Tid & planer) ----------
  { id: "time_01", da: "aftale",          uk: "домовленість / зустріч",  category: "Час" },
  { id: "time_02", da: "at planlægge",    uk: "планувати",               category: "Час" },
  { id: "time_03", da: "frist",          uk: "кінцевий термін (дедлайн)", category: "Час" },
  { id: "time_04", da: "i løbet af",     uk: "протягом",                category: "Час" },
  { id: "time_05", da: "snart",          uk: "незабаром",               category: "Час" },
  { id: "time_06", da: "for nylig",      uk: "нещодавно",               category: "Час" },
  { id: "time_07", da: "af og til",      uk: "час від часу",            category: "Час" },
  { id: "time_08", da: "senere hen",      uk: "згодом / пізніше",        category: "Час" },
  { id: "time_09", da: "måske",          uk: "можливо",                 category: "Час" },
  { id: "time_10", da: "for altid",      uk: "назавжди",                category: "Час" },

  // ---------- 7. ФРАЗИ ТА ВИРАЗИ (Faste udtryk, A2–B1) ----------
  { id: "expr_01", da: "det afhænger af",     uk: "це залежить від",        category: "Фрази" },
  { id: "expr_02", da: "hvad synes du om?",  uk: "що ти думаєш про...?",   category: "Фрази" },
  { id: "expr_03", da: "er du enig?",       uk: "ти згоден?",             category: "Фрази" },
  { id: "expr_04", da: "det er det værd",   uk: "це того варте",          category: "Фрази" },
  { id: "expr_05", da: "tag det roligt",    uk: "заспокойся / не хвилюйся", category: "Фрази" },
  { id: "expr_06", da: "det lyder godt",    uk: "звучить добре",           category: "Фрази" },
  { id: "expr_07", da: "jeg er stolt af dig", uk: "я горджуся тобою",      category: "Фрази" },
  { id: "expr_08", da: "det giver mening",  uk: "це має сенс",             category: "Фрази" },
  { id: "expr_09", da: "på en måde",        uk: "певним чином",           category: "Фрази" },
  { id: "expr_10", da: "jeg er i tvivl",    uk: "я сумніваюся",            category: "Фрази" },
  { id: "expr_11", da: "det kommer an på",  uk: "це залежить від (обставин)", category: "Фрази" },
  { id: "expr_12", da: "selvfølgelig",      uk: "звісно / звичайно",       category: "Фрази" },
];

// Загальна кількість слів у базі (використовується на дашборді)
const TOTAL_WORDS = WORDS.length;

// Унікальні категорії (можна використати для фільтрів)
const CATEGORIES = [...new Set(WORDS.map(w => w.category))];
