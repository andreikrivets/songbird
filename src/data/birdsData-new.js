const birdsData = [
  [
    {
      id: 1, // !
      name: 'Чомга',
      species: 'Podiceps cristatus',
      description:
        'Гнездящийся, перелетный и транзитно мигрирующий и в небольшом количестве зимующий вид. Распространена на всей территории Беларуси. Наиболее обычная и самая крупная из 5 видов наших поганок. Обычна на гнездовье и на пролетах во всех областях республики, где имеются подходящие стации.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Podiceps_cristatus_2_%28Lukasz_Lukasik%29.jpg/500px-Podiceps_cristatus_2_%28Lukasz_Lukasik%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC280990-099%201%20Fuut%201%20Roep.mp3',
    },
    {
      id: 2, //!
      name: 'Большой баклан',
      species: 'Phalacrocorax carbo',
      description:
        'Баклан заселяет практически всю территорию Беларуси, гнездование отмечено во всех областях, за исключением Могилевской. В 2012 г. в республике выявлено 20 относительно постоянных мест гнездования, где гнездилось от 1850 до 2900 пар.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Cormorant_%28Phalacrocorax_carbo%29_%2817%29.jpg/275px-Cormorant_%28Phalacrocorax_carbo%29_%2817%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC400490-20180121-143734STORSKARV-SKAVBERGET.mp3',
    },
    {
      id: 3, //!
      name: 'Кудрявый пеликан',
      species: 'Pelecanus crispus',
      description:
        'Исключительно рыбоядные птицы. Обитают только на богатых рыбой водоемах или недалеко от них. Нырять не могут, ловят рыбу, искусно пользуясь клювом-сачком. В отличие от розового пеликана, кудрявый добывает рыбу не только на мелководье, но и на глубокой воде; медленно плавая, пеликан высматривает подплывающую к поверхности рыбу и быстрым  движением схватывает ее.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/ComputerHotline_-_Pelecanus_crispus_%28by%29_%281%29.jpg/266px-ComputerHotline_-_Pelecanus_crispus_%28by%29_%281%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331137-call1.mp3',
    },
    {
      id: 4, //!
      name: 'Северная олуша',
      species: 'Morus bassanus',
      description:
        'Довольно крупная (с гуся) водоплавающая птица с длинными узкими крыльями и длинным прямым клювом. Взрослая птица белая с желтоватой головой и черными вершинами крыльев, молодая серовато-бурая в густых белесых пятнышках. Ноги и клюв серые.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Morus_bassanus_adu.jpg/275px-Morus_bassanus_adu.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TYEQKORVXJ/XC316085-Gannets%2030%20Aug%202015%201748hrs.mp3',
    },
    {
      id: 5, //!
      name: 'Гуменник',
      species: 'Anser fabalis',
      description:
        'Гуменники, как и многие гуси, не сильно привязаны к воде. Они даже меньше привязаны к воде, чем серые гуси. Гуменники пасутся на лугах днём, иногда в значительном удалении от воды, возвращаясь к воде только вечером. Эти гуси прекрасно ходят и даже бегают по суше. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bean.goose.600pix.jpg/275px-Bean.goose.600pix.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC366298-170415_ansfab_kirkkojarvi_1126.mp3',
    },
    {
      id: 6, //!
      name: 'Канадская казарка',
      species: 'Branta canadensis',
      description:
        'Родиной канадской казарки является Северная Америка, где в настоящее время птица гнездится главным образом на территории Аляски и Канады, в том числе на арктических побережьях и островах Канадского Арктического архипелага. Некогда птица была многочислена в северных штатах США, где гнездилась к югу до северо-восточной Калифорнии, Юты, Канзаса и Массачусетса. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Canada_goose_flight_cropped_and_NR.jpg/275px-Canada_goose_flight_cropped_and_NR.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC473254-Branta%20canadensis_flight_call-2019.04.21_08.20_01.mp3',
    },
  ],
  [
    {
      id: 1, //!
      name: 'Кряква',
      species: 'Anas platyrhynchos',
      description:
        'Частично перелётная птица. Населяет пресные и слегка солоноватые водоёмы. В последние годы многие птицы зимуют на незамерзающих водоёмах в крупных городах и их окрестностях. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/240px-Anas_platyrhynchos_male_female_quadrat.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC522605-2019-12-29%20Gif%20Canard%20colvert%20cris%20de%20vol%20++.mp3',
    },
    {
      id: 2, //!
      name: 'Морянка',
      species: 'Clangula hyemalis',
      description:
        'одна из наиболее распространённых северных уток — по оценкам специалистов, только вдоль арктического побережья Северной Европы и России западнее Таймыра ежегодно гнездится 3,8—4,3 млн птиц. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Long-tailed-duck.jpg/275px-Long-tailed-duck.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/KZQAYURRFG/XC514046-Clahye_Zackenberg_183405jul2018.mp3',
    },
    {
      id: 3, //!
      name: 'Кобчик',
      species: 'Falco vespertinus',
      description:
        'Мелкий сокол, пропорциями и поведением сходный с пустельгой, но менее ширококрылый. Длина птицы 28—33 см, длина крыла 23—35 см, размах крыльев 65—77 см, масса 130—197 г. Клюв короткий, относительно слабый. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg/275px-Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC493726-Falco%20vespertinus%20190821_001,AAAA%20begging%20call.MP3',
    },
    {
      id: 4, //!
      name: 'Луговой лунь',
      species: 'Circus pygargus',
      description:
        'Охотится над открытыми пространствами - полями, лугами, речными поймами. Населяет влажные луга в долинах рек, заболоченные низменности, поросшие разреженными кустами ивы, ольхи, березовым мелколесьем, низинные болота, реже - осушенные торфяники, обширные лесные вырубки.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Montagu%27s_Harrier%2C_juvenile%2C_Bangalore%2C_India_%28edit%29.jpg/240px-Montagu%27s_Harrier%2C_juvenile%2C_Bangalore%2C_India_%28edit%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/DXYUSANLSN/XC433719-circus%20pygargus%2025%20mina%20de%20las%20cruces%2006-04-2017.mp3',
    },
    {
      id: 5, //!
      name: 'Фазан',
      species: 'Phasianus colchicus',
      description:
        'На голове обыкновенного фазана, в отличие от остальных родов фазанов, остаётся неоперённым лишь кольцо вокруг глаз. Очень длинный, клинообразный хвост — из 18 суживающихся к концу перьев. Вершину коротких, округлённых крыльев образуют четвёртое и пятое маховые перья. Самцы со шпорами на ногах и с блестящим оперением. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Phasianus_colchicus_2_tom_%28Lukasz_Lukasik%29.jpg/240px-Phasianus_colchicus_2_tom_%28Lukasz_Lukasik%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/AQQJDJAORG/XC495665-Fasan.mp3',
    },
    {
      id: 6, //!
      name: 'Глухарь',
      species: 'Tetrao urogallus',
      description:
        'Размер самцов достигает 110 см и более, размах крыльев — 1,4 м, а масса — 4,1—6,5 кг. Самки заметно меньше — на 1⁄3, весит в среднем 2 кг. Половой диморфизм не ограничивается величиной, а касается и окраски.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Capercaillie_%288751340764%29.jpg/275px-Capercaillie_%288751340764%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WDTGKKSKNG/XC469024-Western%20Capercaillie%20Lek.mp3',
    },
  ],
  [
    {
      id: 1, //!
      name: 'Серый журавль',
      species: 'Grus grus',
      description:
        'Серые журавли моногамны, держатся вместе и сохраняют пару в течение жизни. Если самец или самка погибает, то оставшаяся птица находит себе другую пару. Другая пара образуется также в случае продолжительных неудачных попыток завести потомство. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Grus_grus_1_%28Marek_Szczepanek%29.jpg/275px-Grus_grus_1_%28Marek_Szczepanek%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC521498-Grullas%20en%20vuelo%20migratorio.mp3',
    },
    {
      id: 2, //!
      name: 'Камышница',
      species: 'Gallinula chloropus',
      description:
        'Камышница — обычно молчаливая птица, однако способна издавать ряд громких и резких звуков. Среди них можно выделить низкочастотный стрекочущий крик, несколько напоминающий щебет сороки — нечто вроде «кик-ик-ик» или «крррук». ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kokoszka%28Grzecho_Lukasik%29.jpg/275px-Kokoszka%28Grzecho_Lukasik%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SHDHTEQQKR/XC524425-Gallinule.mp3',
    },
    {
      id: 3, //!
      name: 'Лысуха',
      species: 'Fulica atra',
      description:
        'Лысуха гнездится на обширной территории Евразии от Атлантического океана до Тихого океана, а также в Северной Африке, Папуа-Новой Гвинее, Австралии и Новой Зеландии. В Европе распространена почти повсеместно, за исключением высокогорных районов и северной Скандинавии. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/2006-06-05_blaesshuhn.jpg/275px-2006-06-05_blaesshuhn.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HMJIMVISCP/XC523375-713_0636.MP3',
    },
    {
      id: 4, //!
      name: 'Авдотка',
      species: 'Burhinus oedicnemus',
      description:
        ' У авдотки сильные и мускулистые ноги, на каждой из них по три коротких пальца, которые соединены между собой тонкими перепонками. Характерной внешней особенностью являются её глаза - большие, окруженные черным контуром и ярко-желтые внутри.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Occhione_Lazio_2015.jpg/275px-Occhione_Lazio_2015.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JYPQCEFKAM/XC464874-190323-191805alcaravao.mp3',
    },
    {
      id: 5, //!
      name: 'Галстучник',
      species: 'Charadrius hiaticula',
      description:
        'Гнездо галстучника выглядит как небольшое углубление в песке, иногда с валиком из камушков. Самка откладывает 4 желтоватых с тёмными пятнышками яйца.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Charadrius_hiaticula_He.jpg/275px-Charadrius_hiaticula_He.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC523058-Ringed%20Plover,%20flight%20calls,%20Ille%20de%20Jata,%20GB,%20160120,%201330%20uur.mp3',
    },
    {
      id: 6, //!
      name: 'Золотистая ржанка',
      species: 'Pluvialis apricaria',
      description:
        'Звук, издаваемый золотистыми ржанками, слышится как однотонный «трююют», который они произносят с одинаковой частотой. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Kapustarinta.jpg/275px-Kapustarinta.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC523614-20190519_018HEILO-sang-A-slettnes.mp3',
    },
  ],
  [
    {
      id: 1, //!
      name: 'Ходулочник',
      species: 'Himantopus himantopus',
      description:
        'Ходулочник обитает на открытых водоёмах с пресной, солоноватой или солёной водой в лагунах, солеварнях и степях. Его длинные лапы позволяют искать корм в глубоководных местах. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Himantopus_himantopus.jpg/275px-Himantopus_himantopus.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500339-2019.08.27_18.51_01.mp3',
    },
    {
      id: 2, //!
      name: 'Кулик-сорока',
      species: 'Haematopus ostralegus',
      description:
        'Хорошо бегает и плавает. Полёт прямой, стремительный, с частыми взмахами крыльев, напоминает полёт уток. Суетливая и шумная птица. Основной крик, издаваемый как на земле, так и в воздухе — далеко слышная трель «квирррррр». ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Haematopus_ostralegus_He.jpg/275px-Haematopus_ostralegus_He.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/TQDVYGAIMX/XC494743-Mist1_tr10_int%20prob%20beccaccia%20di%20mare_rum%20rid.mp3',
    },
    {
      id: 3, //!
      name: 'Вальдшнеп',
      species: 'Sturnus vulgaris',
      description:
        'Обычно молчаливая птица, за исключением брачного периода, когда во время «тяги» (токования) самец на лету издаёт негромкие хрюкающие, скорее благозвучные звуки, называемые охотниками «хорканье». ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/European_Starling_2006.jpg/266px-European_Starling_2006.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485195-Becasse%20des%20bois%20croule%20+.mp3',
    },
    {
      id: 4, //!
      name: 'Камнешарка',
      species: 'Arenaria interpres',
      description:
        'Камнешарка является перелётной птицей, гнездящейся на севере Евразии и Северной Америки. Во время перелёта её можно встретить почти на всех побережьях Европы. Зимует на обширном пространстве от Исландии до Южной Африки, Южного Китая и Японии, встречается даже к югу от Тасмании и Новой Зеландии. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Arenaria_interpres_%28habitus%29.jpg/275px-Arenaria_interpres_%28habitus%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/AYKHDFBYIH/XC447140-Turnstone%202012%2003%2023%20call%20very%20good%20Southend%20Pier_0056%20v2%20stereo.mp3',
    },
    {
      id: 5, //!
      name: 'Песчанка',
      species: 'Calidris alba',
      description:
        'При общении издаёт короткие плавные звуки, передаваемые как «плит», «крит», «квё» или «тюк». Брачная песня, исполняемая в полёте на высоте 2—3 м над землёй — мелодичная трель вроде «кёрррр..кёрррр».',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Calidris-alba-001.jpg/275px-Calidris-alba-001.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526216-2019-10-23%20Cap%20Ferret%20Becasseau%20sanderling%20vol%20un%20cri.mp3',
    },
    {
      id: 6, //!
      name: 'Травник',
      species: 'Tringa totanus',
      description:
        'Продолжительность жизни травника достигает 17 лет. Началу размножения весной предшествуют токовые полеты, во время которых самец издает очень мелодичный свист. В остальное время его можно узнать по приятной песне «тю-ли, тю-ли, те-лиее». ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Ecomare_-_tureluur_%28pcd03036-tureluur%29.jpg/275px-Ecomare_-_tureluur_%28pcd03036-tureluur%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JXZFXAZWHY/XC493976-ZOOM0004.wavRydzyan.totanus.17.08.19.mp3',
    },
  ],
  [
    {
      id: 1, //!
      name: 'Бородатая неясыть',
      species: 'Strix nebulosa',
      description:
        'Длина тела птицы достигает 80 см, размах крыльев — 1,5 м. Голова совы визуально кажется очень крупной, окраска дымчато-серая без рыжих тонов. Глаза жёлтые с тёмными концентрическими полосами вокруг. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Strix_nebulosaRB.jpg/275px-Strix_nebulosaRB.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC483006-Great%20Gray%20Owl%204222019.mp3',
    },
    {
      id: 2, //!
      name: 'Болотная сова',
      species: 'Asio flammeus',
      description:
        'Пищей болотной сове служат мелкие грызуны, болотные и водяные птицы, насекомые и даже рыба. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Asio-flammeus-001.jpg/266px-Asio-flammeus-001.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC522576-Hibou%20des%20marais%20cris%20longs%20et%20cri%20mysterieux%20tres%20rapeux.mp3',
    },
    {
      id: 3, //!
      name: 'Обыкновенная сипуха',
      species: 'Tyto alba',
      description:
        'От представителей семейства совиных сипух можно легко определить по форме лицевого диска, который у них имеет явно выраженные очертания в виде сердца. От остальных сипух обыкновенные выделяются более светлым оперением. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Tyto_alba_tylluan_wen_detail.jpg/275px-Tyto_alba_tylluan_wen_detail.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/WKRPJOTUED/XC518955-Barn_Owl_Tyto_alba_07_Jan_2020_07_24_PM_IST.mp3',
    },
    {
      id: 4, //!
      name: 'Сплюшка',
      species: 'Otus scops',
      description:
        'Крик сплюшки — печальный мелодичный посвист «сплюю» или «тьёёв». Повторяется с интервалом 2—3 секунды. За крик птица и получила название. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Centro_provinciale_%282%29.jpg/275px-Centro_provinciale_%282%29.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CIKPPWNKWL/XC503131-media.io_Voce080.mp3',
    },
    {
      id: 5, //!
      name: 'Филин',
      species: 'Bubo bubo',
      description:
        'Наибольшая голосовая активность проявляется в предрассветный час в брачный период (на северо-западе России с февраля до конца апреля), в меньшей степени во время распада выводков (в августе — сентябре). ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Bubo_bubo_winter_1.jpg/275px-Bubo_bubo_winter_1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OGZZVVEHKU/XC522351-Berguv-20200125.mp3',
    },
    {
      id: 6, //!
      name: 'Воробьиный сыч',
      species: 'Glaucidium passerinum',
      description:
        'Воробьиный сыч распространён только в Европе и Азии. Он обитает в центре и на юге Скандинавии (до полярного круга), в горах Центральной и Восточной Европы (Сербия, Северная Италия и Пиренеи), в России, а также в северной части Монголии и в Маньчжурии. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/V%C3%A4rbkakk.JPG/275px-V%C3%A4rbkakk.JPG',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC477365-180812_0790_GP-spont.mp3',
    },
  ],
  [
    {
      id: 1, //!
      name: 'Вертишейка',
      species: 'Jynx torquilla',
      description:
        'Основной корм — муравьи и их куколки, а также другие мелкие насекомые. Свои гнёзда не выдалбливает, а занимает брошенные дупла дятлов либо выгоняет из них уже начавших гнездиться воробьиных птиц.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wryneck_by_Pepe_Reigada.jpg/275px-Wryneck_by_Pepe_Reigada.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/UTCLOBFQPH/XC507255-Jynx.mp3',
    },
    {
      id: 2, //!
      name: 'Зелёный дятел',
      species: 'Picus viridis',
      description:
        'Кричат птицы обоих полов в течение года, при этом их репертуар друг от друга не отличается. Голос более резкий по сравнению с седым дятлом, в отличие от последнего нередко характеризуется как «хохот» или «клёкот».',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/03_vgrue-10-11.jpg/275px-03_vgrue-10-11.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC497755-PICVIR_190219_4544_Reholiere49.mp3',
    },
    {
      id: 3, //!
      name: 'Желна',
      species: 'Dryocopus martius',
      description:
        'Криклив в течение всего года; обладает звучным голосом, слышным на большом расстоянии. Сигнал общения либо привлечения внимания — серия высоких мелодичных криков «крю-крю-крю-крю», в конце которых нередко звучит более низкое по тону долгое ноющее «клии», похожее на крик канюка. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Schwarzspecht.jpg/263px-Schwarzspecht.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC519602-202001_04_12.00h_zwarte%20specht_nieuwkerk_bos_roep_1__roepend_niet%20gezien_.mp3',
    },
    {
      id: 4, //!
      name: 'Седой дятел',
      species: 'Picus canus',
      description:
        'При возбуждении издаёт серию захлёбывающихся звуков («чк..чк..чк»). Весенняя песня — ряд однообразных, но мелодичных, несколько меланхоличных свистов, которые можно описать как «кью..кью..кью» или «киль..киль..киль».',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/6/60/Picus_canus_%28%D0%A1%D0%B5%D0%B4%D0%BE%D0%B9_%D0%B4%D1%8F%D1%82%D0%B5%D0%BB%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/OKSKESEOLP/XC499508-LS103455_grey-headed_woodpecker_emei_feng_1500m.mp3',
    },
    {
      id: 5, //!
      name: 'Трёхпалый дятел',
      species: 'Picoides tridactylus',
      description:
        'Достаточно молчалив и в сравнении с другими дятлами обладает более бедным репертуаром. Обычная позывка, издаваемая в течение года — мягкое «тюк» или «тик» — ниже, чем у большого пёстрого дятла, но выше, чем у белоспинного. ',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Three-toed_Woodpecker_-_Finlandia_0005_%283%29.jpg/240px-Three-toed_Woodpecker_-_Finlandia_0005_%283%29.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/VCROLXMVLX/XC411266-picoides_tridactylus_podlaskie_17.04.2018_0554.mp3',
    },
    {
      id: 6, //!
      name: 'Белоспинный дятел',
      species: 'Dendrocopos leucotos',
      description:
        'Кричит относительно редко, преимущественно в сезон размножения и иногда осенью. По сравнению с большим пёстрым дятлом голос не такой резкий, относительно тихий и более низкий.',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Dendrocopos_leucotos_2.jpg/275px-Dendrocopos_leucotos_2.jpg',
      audio:
        'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485929-Pic%20a%20dos%20blanc%20divers%20cris.mp3',
    },
  ],
];

export default birdsData;
