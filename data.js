/* =========================================================
   data.js — База слів NordicBoost (Danish → Ukrainian)
   =========================================================
   СТРУКТУРА ПАКІВ (v2):
   Слова організовані в ПАКИ (PACKS) за темами. Користувач
   обирає пакет перед грою/вивченням.

   Нові слова додаються ОДНИМ РЯДКОМ у масив пар:
     ["dansk ord", "укр. переклад"]
   id генерується автоматично: <packId>_<номер>.

   Старі 101 слово (A2–B1) збережені зі СТАРИМИ id,
   щоб прогрес у localStorage не зник.
   ========================================================= */

/* ---- Метадані пак (назви: uk + da) ---- */
const PACK_META = [
  { id: "everyday", uk: "🏠 Дім і побут",        da: "🏠 Hjem & hverdag" },
  { id: "food",     uk: "🍎 Їжа і напої",         da: "🍎 Mad & drikke" },
  { id: "family",   uk: "👨‍👩‍👧 Родина і друзі",    da: "👨‍👩‍👧 Familie & venner" },
  { id: "body",     uk: "🩺 Тіло і здоров'я",     da: "🩺 Krop & sundhed" },
  { id: "city",     uk: "🚌 Місто і транспорт",   da: "🚌 By & transport" },
  { id: "work",     uk: "💼 Робота і гроші",      da: "💼 Arbejde & penge" },
  { id: "feelings", uk: "😊 Почуття",              da: "😊 Følelser" },
  { id: "politics", uk: "🏛️ Політика і суспільство", da: "🏛️ Politik & samfund" },
  { id: "nature",   uk: "🌲 Природа і погода",     da: "🌲 Natur & vejr" },
  { id: "travel",   uk: "✈️ Подорожі",             da: "✈️ Rejser" },
  { id: "free",     uk: "⚽ Вільний час і спорт",  da: "⚽ Fritid & sport" },
  { id: "school",   uk: "🎓 Школа і навчання",    da: "🎓 Skole & uddannelse" },
  { id: "tech",     uk: "🎮 Технології та ігри",   da: "🎮 Tech & gaming" },
  { id: "time",     uk: "⏰ Час і плани",          da: "⏰ Tid & planer" },
  { id: "phrases",  uk: "💬 Фрази і вирази",       da: "💬 Faste udtryk" },
];

/* ---- Слова пакетів: [dansk, українська] ---- */
const PACK_WORDS = {
  everyday: [
    ["hus", "будинок"], ["lejlighed", "квартира"], ["værelse", "кімната"],
    ["køkken", "кухня"], ["badeværelse", "ванна кімната"], ["hoveddør", "вхідні двері"],
    ["vindue", "вікно"], ["gulv", "підлога"], ["loft", "стеля"],
    ["væg", "стіна"], ["møbel", "меблі"], ["stol", "стілець"],
    ["bord", "стіл"], ["seng", "ліжко"], ["lampe", "лампа"],
    ["tæppe", "килим"], ["spejl", "дзеркало"], ["gardin", "штора"],
    ["nøgle", "ключ"], ["trappe", "сходи"], ["etage", "поверх"],
    ["opvask", "миття посуду"], ["rengøring", "прибирання"], ["tøjvask", "прання одягу"],
    ["skrald", "сміття"], ["postkasse", "поштова скринька"], ["nøglebundt", "зв'язка ключів"],
    ["håndklæde", "рушник"], ["pude", "подушка"], ["dyne", "ковдра"],
  ],
  food: [
    ["morgenmad", "сніданок"], ["frokost", "обід"], ["aftensmad", "вечеря"],
    ["mel", "борошно"], ["ost", "сир"], ["smør", "масло"],
    ["æg", "яйце"], ["kød", "м'ясо"], ["kylling", "курка"],
    ["fisk", "риба"], ["ris", "рис"], ["pasta", "пасти"],
    ["kartoffel", "картопля"], ["salat", "салат"], ["suppe", "суп"],
    ["kage", "торт"], ["chokolade", "шоколад"], ["snack", "перекуска"],
    ["sukker", "цукор"], ["salt", "сіль"], ["peber", "перець"],
    ["saft", "сік"], ["te", "чай"], ["kaffe", "кава"],
    ["vand", "вода"], ["mælk", "молоко"], ["brød", "хліб"],
    ["grøntsag", "овоч"], ["frugt", "фрукт"], ["is", "морозиво"],
  ],
  family: [
    ["familie", "родина"], ["mor", "мати"], ["far", "батько"],
    ["forældre", "батьки"], ["bror", "брат"], ["søster", "сестра"],
    ["barn", "дитина"], ["søn", "син"], ["datter", "донька"],
    ["bedstemor", "бабуся"], ["bedstefar", "дідусь"], ["onkel", "дядько"],
    ["tante", "тітка"], ["kusine", "двоюрідна сестра"], ["fætter", "двоюрідний брат"],
    ["kæreste", "кохана/коханий"], ["nabo", "сусід"], ["veninde", "подруга"],
    ["bedste ven", "найкращий друг"], ["par", "пара"], ["bryllup", "весілля"],
    ["skilsmisse", "розлучення"], ["baby", "немовля"], ["voksen", "доросла людина"],
    ["ung", "молодий"], ["oldemor", "прабабуся"], ["oldefar", "прадідусь"],
    ["barndom", "дитинство"], ["slægt", "рід"], ["svigerforældre", "свати"],
  ],
  body: [
    ["krop", "тіло"], ["hoved", "голова"], ["hals", "шия"],
    ["hånd", "рука"], ["finger", "палець"], ["arm", "рука (від плеча)"],
    ["ben", "нога"], ["fod", "ступня"], ["knæ", "коліно"],
    ["øje", "око"], ["øre", "вухо"], ["næse", "ніс"],
    ["mund", "рот"], ["tand", "зуб"], ["hår", "волосся"],
    ["ryg", "спина"], ["mave", "живіт"], ["hjerte", "серце"],
    ["blod", "кров"], ["hud", "шкіра"], ["læge", "лікар"],
    ["syg", "хворий"], ["sund", "здоровий"], ["ondt i halsen", "біль у горлі"],
    ["hovedpine", "головний біль"], ["feber", "температура/жар"], ["medicin", "ліки"],
    ["apotek", "аптека"], ["hvile", "відпочинок"], ["smerte", "біль"],
  ],
  city: [
    ["by", "місто"], ["landsby", "село"], ["gade", "вулиця"],
    ["vej", "дорога"], ["plads", "площа"], ["park", "парк"],
    ["bibliotek", "бібліотека"], ["biograf", "кінотеатр"], ["teater", "театр"],
    ["museum", "музей"], ["svømmehal", "басейн"], ["indkøbscenter", "торговий центр"],
    ["station", "станція"], ["bus", "автобус"], ["tog", "потяг"],
    ["metro", "метро"], ["cykel", "велосипед"], ["bil", "машина"],
    ["lufthavn", "аеропорт"], ["lyskryds", "світлофор"], ["fortov", "тротуар"],
    ["retning", "напрямок"], ["kort", "карта"], ["hjørne", "кут"],
    ["bro", "міст"], ["midt i byen", "центр міста"], ["forstad", "передмістя"],
    ["posthus", "пошта"], ["kirke", "церква"], ["rådhus", "ратуша"],
  ],
  work: [
    ["arbejde", "робота"], ["job", "робоче місце"], ["chef", "начальник"],
    ["kollega", "колега"], ["møde", "зустріч/нарада"], ["kontor", "офіс"],
    ["virksomhed", "компанія"], ["kunde", "клієнт"], ["løn", "зарплата"],
    ["konto", "рахунок"], ["betaling", "оплата"], ["mønt", "монета"],
    ["seddel", "купюра"], ["skat", "податок"], ["dyrt", "дорогий"],
    ["billigt", "дешевий"], ["gratis", "безкоштовний"], ["rabat", "знижка"],
    ["prøvejob", "пробний період"], ["ansøgning", "заява"], ["CV", "резюме"],
    ["lørdag", "субота"], ["søndag", "неділя"], ["arbejdsdag", "робочий день"],
    ["ferie", "відпустка"], ["overarbejde", "понаднормова робота"], ["kollega", "співробітник"],
    ["aftale", "угода"], ["udgift", "витрата"], ["indtægt", "дохід"],
  ],
  feelings: [
    ["glad", "щасливий"], ["trist", "сумний"], ["vred", "злий"],
    ["bange", "наляканий"], ["overrasket", "здивований"], ["træt", "втомлений"],
    ["ensom", "самотній"], ["forelsket", "закоханий"], ["ked af det", "засмучений"],
    ["tilfreds", "задоволений"], ["nervøs", "нервовий"], ["stolt", "гордий"],
    ["jaloux", "ревнивий"], ["tryg", "у безпеці"], ["mod", "сміливість"],
    ["hensynsfuld", "уважний до інших"], ["ærlig", "чесний"], ["dum", "дурний"],
    ["klog", "розумний"], ["flink", "милий"], ["sur", "роздратований"],
    ["lettere", "легший"], ["svær", "складний"], ["lettet", "полегшений"],
    ["skuffet", "розчарований"], ["begejstret", "захоплений"], ["heldig", "щасливчик"],
    ["uheldig", "невдаха"], ["håb", "надія"], ["frygt", "страх"],
  ],
  politics: [
    ["politik", "політика"], ["regering", "уряд"], ["valg", "вибори"],
    ["stemme", "голос (на виборах)"], ["parti", "партія"], ["minister", "міністр"],
    ["lov", "закон"], ["domstol", "суд"], ["politiet", "поліція"],
    ["soldat", "солдат"], ["konge", "король"], ["dronning", "королева"],
    ["demokrati", "демократія"], ["frihed", "свобода"], ["fred", "мир"],
    ["krig", "війна"], ["grænse", "кордон"], ["flygtning", "біженець"],
    ["asyl", "притулок"], ["borger", "громадянин"], ["pas", "закордонний паспорт"],
    ["stat", "держава"], ["samfund", "суспільство"], ["rettigheder", "права"],
    ["pligter", "обов'язки"], ["avis", "газета"], ["nyheder", "новини"],
    ["journalist", "журналіст"], ["demonstration", "демонстрація"], ["miljø", "екологія"],
  ],
  nature: [
    ["sol", "сонце"], ["måne", "місяць"], ["stjerne", "зірка"],
    ["himmel", "небо"], ["sky", "хмара"], ["regn", "дощ"],
    ["sne", "сніг"], ["storm", "буря"], ["vind", "вітер"],
    ["torden", "грім"], ["tåge", "туман"], ["varm", "спекотний"],
    ["kold", "холодний"], ["kølig", "прохолодний"], ["forår", "весна"],
    ["sommer", "літо"], ["efterår", "осінь"], ["vinter", "зима"],
    ["blomst", "квітка"], ["træ", "дерево"], ["blad", "листок"],
    ["græs", "трава"], ["mark", "поле"], ["sø", "озеро"],
    ["flod", "річка"], ["hav", "море"], ["strand", "пляж"],
    ["skov", "ліс"], ["bakke", "пагорб"], ["landskab", "пейзаж"],
  ],
  travel: [
    ["kuffert", "валіза"], ["hotel", "готель"], ["booket", "заброньований"],
    ["afrejse", "від'їзд"], ["hjemrejse", "повернення"], ["billet", "квиток"],
    ["pas", "паспорт"], ["visum", "віза"], ["lufthavn", "аеропорт"],
    ["afgang", "відправлення"], ["ankomst", "прибуття"], ["forsinket", "затриманий"],
    ["udflugt", "екскурсія"], ["oplevelse", "враження"], ["seværdighed", "пам'ятка"],
    ["souvenir", "сувенір"], ["vandretur", "похід"], ["lejr", "табір"],
    ["kort over byen", "карта міста"], ["guide", "гід"], ["turist", "турист"],
    ["rejsende", "мандрівник"], ["overnatning", "нічліг"], ["rygsæk", "рюкзак"],
    ["enhed", "розетка/прилад"], ["vejkort", "автомобільна карта"], ["grænsekontrol", "прикордонний контроль"],
    ["togstation", "залізничний вокзал"], ["cykelsti", "велодоріжка"], ["stien", "стежка"],
  ],
  free: [
    ["hobby", "хобі"], ["musik", "музика"], ["guitar", "гітара"],
    ["sang", "пісня"], ["koncert", "концерт"], ["tegne", "малювати"],
    ["læse", "читати"], ["film", "фільм"], ["serie", "серіал"],
    ["fodbold", "футбол"], ["håndbold", "гандбол"], ["bold", "м'яч"],
    ["mål", "гол"], ["hold", "команда"], ["træning", "тренування"],
    ["konkurrence", "змагання"], ["medalje", "медаль"], ["sejr", "перемога"],
    ["nederlag", "поразка"], ["holdkaptajn", "капітан команди"], ["gymnastik", "гімнастика"],
    ["svømning", "плавання"], ["løb", "біг"], ["cykling", "покатушка"],
    ["skøjteløb", "ковзанярський спорт"], ["skitur", "гірськолижний тур"], ["badminton", "бадмінтон"],
    ["klatring", "скелелазіння"], ["skak", "шахи"], ["brætspil", "настільна гра"],
  ],
  school: [
    ["fag", "шкільний предмет"], ["time", "урок"], ["skema", "розклад"],
    ["pause", "перерва"], ["projekt", "проєкт"], ["præsentation", "презентація"],
    ["gruppe", "група"], ["geografi", "географія"], ["historie", "історія"],
    ["fysik", "фізика"], ["kemi", "хімія"], ["biologi", "біологія"],
    ["engelsk", "англійська"], ["danskfag", "данська (предмет)"], ["kunst", "мистецтво"],
    ["idræt", "фізкультура"], ["skolegård", "шкільне подвір'я"], ["kantine", "їдальня"],
    ["elev", "учень"], ["klasse", "клас"], ["eksamen", "іспит"],
    ["karakter", "оцінка"], ["lektier", "домашка"], ["opgave", "завдання"],
    ["viden", "знання"], ["færdighed", "навичка"], ["udfordring", "виклик"],
    ["noter", "конспекти"], ["linjal", "лінійка"], ["viskelæder", "гумка"],
  ],
  tech: [
    ["computer", "комп'ютер"], ["skærm", "екран"], ["tastatur", "клавіатура"],
    ["mus (til computer)", "миша"], ["telefon", "телефон"], ["internettet", "інтернет"],
    ["hovedtelefoner", "навушники"], ["batteri", "батарейка"], ["server", "сервер"],
    ["netværk", "мережа"], ["indstillinger", "налаштування"], ["fejl", "збій"],
    ["strategi", "стратегія"], ["modstander", "суперник"], ["niveau", "рівень"],
    ["point", "очки"], ["konsol", "ігрова приставка"], ["skjold", "щит"],
    ["tårn", "вежа"], ["tropper", "юніти"], ["kontrol", "керування"],
    ["opgradere", "апгрейдити"], ["gemme fil", "зберегти файл"], ["hente", "завантажити"],
    ["streaming", "стрімінг"], ["virtuel", "віртуальний"], ["spiller", "гравець"],
    ["holdkamp", "командний матч"], ["adfærd", "поведінка персонажа"], ["skyer", "хмари (графіка)"],
  ],
  time: [
    ["sekund", "секунда"], ["minut", "хвилина"], ["time (tid)", "година"],
    ["dag", "день"], ["uge", "тиждень"], ["måned", "місяць"],
    ["år", "рік"], ["i dag", "сьогодні"], ["i morgen (tid)", "завтра"],
    ["i går", "вчора"], ["nu", "зараз"], ["snart", "незабаром"],
    ["senere", "пізніше"], ["tidligt", "рано"], ["sent", "пізно"],
    ["aftale", "домовленість"], ["planlægge", "планувати"], ["frist", "дедлайн"],
    ["måske", "можливо"], ["for altid", "назавжди"], ["aldrig", "ніколи"],
    ["ofte", "часто"], ["nogle gange", "іноді"], ["altid", "завжди"],
    ["i sidste øjeblik", "в останню мить"], ["samtidig", "одночасно"], ["vore dage", "наші дні"],
    ["århundrede", "століття"], ["tiår", "десятиліття"], ["klokkeslæt", "час на годиннику"],
  ],
  phrases: [
    ["hvad betyder det?", "що це означає?"], ["kan du gentage?", "можеш повторити?"],
    ["jeg forstår ikke", "я не розумію"], ["jeg er enig", "я згоден"],
    ["jeg er ikke enig", "я не згоден"], ["hvad synes du?", "що думаєш?"],
    ["det giver mening", "це має сенс"], ["det er det værd", "це того варте"],
    ["tag det roligt", "заспокойся"], ["selvfølgelig", "звісно"],
    ["eller hvad?", "чи не так?"], ["vent lidt", "почекай трохи"],
    ["det afhænger af", "це залежить від"], ["det kommer an på", "це залежить від обставин"],
    ["på en måde", "певним чином"], ["jeg er i tvivl", "я сумніваюся"],
    ["ikke rigtig", "не зовсім"], ["helt sikkert", "точно"],
    ["det lyder godt", "звучить добре"], ["vær så snil", "будь ласка"],
    ["undskyld mig", "вибачте"], ["ingen problem", "без проблем"],
    ["godt klaret!", "молодець!"], ["held og lykke", "удачі"],
    ["skynd dig", "поспішай"], ["tag din tid", "не поспішай"],
    ["det er lige meget", "це неважливо"], ["aldrig i livet", "нізащо в житті"],
    ["hvad laver du?", "чим займаєшся?"], ["det ved jeg ikke", "цього я не знаю"],
  ],
};

/* ---- Старі A2–B1 слова (id збережено для сумісності прогресу) ---- */
const LEGACY_WORDS = [
  { id: "feel_01", da: "begejstret",        uk: "захоплений",              pack: "feelings" },
  { id: "feel_02", da: "skuffet",          uk: "розчарований",            pack: "feelings" },
  { id: "feel_03", da: "nervøs",           uk: "нервовий",                pack: "feelings" },
  { id: "feel_04", da: "stolt af",         uk: "гордий із",                pack: "feelings" },
  { id: "feel_05", da: "jaloux",           uk: "ревнивий",                pack: "feelings" },
  { id: "feel_06", da: "tryg",              uk: "спокійний",               pack: "feelings" },
  { id: "feel_07", da: "tålmodighed",      uk: "терпіння",                 pack: "feelings" },
  { id: "feel_08", da: "ansvar",           uk: "відповідальність",        pack: "feelings" },
  { id: "feel_09", da: "pålidelig",        uk: "надійний",                pack: "feelings" },
  { id: "feel_10", da: "selvstændig",      uk: "самостійний",             pack: "feelings" },
  { id: "feel_11", da: "træthed",          uk: "втома",                   pack: "feelings" },
  { id: "feel_12", da: "humør",            uk: "настрій",                 pack: "feelings" },
  { id: "feel_13", da: "venskab",          uk: "дружба",                  pack: "feelings" },
  { id: "feel_14", da: "at stole på",      uk: "довіряти",                pack: "feelings" },
  { id: "feel_15", da: "at bekymre sig",   uk: "переживати",              pack: "feelings" },
  { id: "feel_16", da: "misundelse",       uk: "заздрість",               pack: "feelings" },
  { id: "feel_17", da: "egen",             uk: "власний",                pack: "feelings" },
  { id: "feel_18", da: "mod",              uk: "сміливість",              pack: "feelings" },
  { id: "school_01", da: "beslutning",     uk: "рішення",                 pack: "school" },
  { id: "school_02", da: "erfaring",       uk: "досвід",                  pack: "school" },
  { id: "school_03", da: "forelæsning",    uk: "лекція",                  pack: "school" },
  { id: "school_04", da: "at aflevere",    uk: "здавати",                 pack: "school" },
  { id: "school_05", da: "at forbedre",    uk: "покращувати",             pack: "school" },
  { id: "school_06", da: "koncentration",  uk: "концентрація",            pack: "school" },
  { id: "school_07", da: "at gentage",     uk: "повторювати",             pack: "school" },
  { id: "school_08", da: "emne",           uk: "тема",                    pack: "school" },
  { id: "school_09", da: "at forklare",    uk: "пояснювати",              pack: "school" },
  { id: "tech_01", da: "at opgradere",     uk: "оновлювати",              pack: "tech" },
  { id: "tech_02", da: "spil",             uk: "гра",                     pack: "tech" },
  { id: "tech_03", da: "at spille",        uk: "грати",                   pack: "tech" },
  { id: "tech_04", da: "at vinde",         uk: "перемагати",              pack: "tech" },
  { id: "tech_05", da: "at tabe",          uk: "програвати",              pack: "tech" },
  { id: "soc_01", da: "bolig",             uk: "житло",                   pack: "politics" },
  { id: "soc_02", da: "budget",            uk: "бюджет",                  pack: "politics" },
  { id: "soc_03", da: "at spare",          uk: "економити",               pack: "politics" },
  { id: "soc_04", da: "offentlig transport", uk: "громадський транспорт", pack: "city" },
  { id: "soc_05", da: "madlavning",        uk: "готування їжі",           pack: "food" },
  { id: "soc_06", da: "tøj",               uk: "одяг",                    pack: "everyday" },
  { id: "soc_07", da: "pris",              uk: "ціна",                    pack: "work" },
  { id: "soc_08", da: "at handle",         uk: "робити покупки",          pack: "city" },
  { id: "soc_09", da: "naboen",            uk: "сусід",                   pack: "family" },
  { id: "nat_01", da: "vejr",              uk: "погода",                  pack: "nature" },
  { id: "nat_02", da: "temperatur",        uk: "температура",             pack: "nature" },
  { id: "nat_03", da: "regnvejr",          uk: "дощова погода",           pack: "nature" },
  { id: "nat_04", da: "at rejse",          uk: "подорожувати",            pack: "travel" },
  { id: "nat_05", da: "at opleve",         uk: "відчувати (досвід)",      pack: "travel" },
  { id: "nat_06", da: "eventyr",           uk: "пригода",                 pack: "travel" },
  { id: "nat_07", da: "sollys",           uk: "сонячне світло",          pack: "nature" },
  { id: "time_01", da: "i løbet af",      uk: "протягом",                pack: "time" },
  { id: "time_02", da: "for nylig",       uk: "нещодавно",               pack: "time" },
  { id: "time_03", da: "af og til",       uk: "час від часу",            pack: "time" },
  { id: "time_04", da: "senere hen",       uk: "згодом",                  pack: "time" },
  { id: "phr_01", da: "hvad synes du om?", uk: "що думаєш про...?",       pack: "phrases" },
  { id: "phr_02", da: "er du enig?",       uk: "ти згоден?",              pack: "phrases" },
  { id: "phr_03", da: "jeg er stolt af dig", uk: "я горджуся тобою",      pack: "phrases" },
];

/* ---- Збирання фінального масиву WORDS ----
   Нові слова отримують id виду <pack>_p<номер>.
   Дублікати данських слів усередині пака пропускаємо. */
function buildWords() {
  const out = [...LEGACY_WORDS];
  const seenDa = new Set(LEGACY_WORDS.map(w => w.da.toLowerCase()));
  for (const [packId, pairs] of Object.entries(PACK_WORDS)) {
    pairs.forEach((pair, i) => {
      const da = pair[0];
      if (seenDa.has(da.toLowerCase())) return;   // захист від дублів
      seenDa.add(da.toLowerCase());
      out.push({
        id: packId + "_p" + String(i + 1).padStart(2, "0"),
        da: da,
        uk: pair[1],
        pack: packId,
      });
    });
  }
  return out;
}

const WORDS = buildWords();
const TOTAL_WORDS = WORDS.length;

/* Список паків з кількістю слів (для вибору на сторінках) */
const PACKS = PACK_META.map(m => ({
  ...m,
  count: WORDS.filter(w => w.pack === m.id).length,
}));
