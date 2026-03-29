/* ============================================
   PartyInvites – Theme Generator
   Smart keyword-based template generation
   ============================================ */

const PartyThemeGenerator = (() => {

  /* ---------- Theme Database ---------- */
  const themes = [
    // --- Sports & Activities ---
    {
      keywords: ['bowling'],
      emoji: ['🎳', '🏆', '🎯', '✨'],
      colors: { background: '#1A1A2E', accent: '#FF4757', text: '#F0F0F0', heading: '#FF6B81' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'energetic',
      svTitle: 'Bowlingkalas! 🎳', enTitle: 'Bowling Party! 🎳',
      svMsg: 'Snöra på dig bowlingskorna och gör dig redo att slå alla kägel! Det blir strikes, skratt och snacks – bästa kvällen! 🎳🎉',
      enMsg: "Lace up your bowling shoes and get ready to knock down all the pins! There'll be strikes, laughs and snacks – best night ever! 🎳🎉",
    },
    {
      keywords: ['fotboll', 'soccer', 'football'],
      emoji: ['⚽', '🏆', '🥅', '🏃'],
      colors: { background: '#E8F5E9', accent: '#2E7D32', text: '#1B5E20', heading: '#1B5E20' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'energetic',
      svTitle: 'Fotbollskalas! ⚽', enTitle: 'Soccer Party! ⚽',
      svMsg: 'Vi sparkar igång festen på fotbollsplanen! Ta med skor och benskydd – det blir match, prisutdelning och tårta! 🏆',
      enMsg: "We're kicking off the party on the soccer field! Bring your boots and shin guards – there'll be a match, awards and cake! 🏆",
    },
    {
      keywords: ['simning', 'pool', 'bad', 'swim', 'vatten', 'water'],
      emoji: ['🏊', '💦', '🌊', '🐬'],
      colors: { background: '#E3F2FD', accent: '#039BE5', text: '#0D47A1', heading: '#01579B' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'fun',
      svTitle: 'Poolparty! 🏊💦', enTitle: 'Pool Party! 🏊💦',
      svMsg: 'Plask! Hoppa i poolen och häng med oss för en blöt och vild fest! Ta med badkläder och handduk! 🌊',
      enMsg: 'Splash! Jump in the pool and join us for a wet and wild party! Bring your swimsuit and towel! 🌊',
    },
    {
      keywords: ['dans', 'dance', 'disco', 'danskalas'],
      emoji: ['💃', '🕺', '🪩', '🎵'],
      colors: { background: '#12002E', accent: '#E040FB', text: '#E8E8E8', heading: '#EA80FC' },
      fonts: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
      mood: 'party',
      svTitle: 'DANSPARTY! 💃🕺', enTitle: 'DANCE PARTY! 💃🕺',
      svMsg: 'Dra på dig dansskorna och gör dig redo för en kväll på dansgolvet! Vi dansar, skrattar och har det grymt! 🪩✨',
      enMsg: 'Put on your dancing shoes and get ready for a night on the dance floor! We dance, laugh and have an amazing time! 🪩✨',
    },
    {
      keywords: ['klättring', 'climb', 'bouldering', 'klätter'],
      emoji: ['🧗', '🏔️', '💪', '🎯'],
      colors: { background: '#FFF8E1', accent: '#FF6F00', text: '#3E2723', heading: '#E65100' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'adventure',
      svTitle: 'Klätterkalas! 🧗', enTitle: 'Climbing Party! 🧗',
      svMsg: 'Nå nya höjder med oss! Vi klättrar, har kul och firar med fika efteråt. Ta med bekväma kläder! 💪',
      enMsg: 'Reach new heights with us! We climb, have fun and celebrate with snacks afterwards. Wear comfy clothes! 💪',
    },
    {
      keywords: ['laser', 'lasertag', 'laserdome'],
      emoji: ['🔫', '🎯', '💥', '🌟'],
      colors: { background: '#0A0A1A', accent: '#00E676', text: '#E0E0E0', heading: '#00E676' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      mood: 'action',
      svTitle: 'Lasertag-kalas! 🔫💥', enTitle: 'Laser Tag Party! 🔫💥',
      svMsg: 'Pew pew! Gör dig redo för det ultimata laserstrids-kalaset! Ta med ditt bästa strategisinne! ⚡',
      enMsg: 'Pew pew! Get ready for the ultimate laser battle party! Bring your best strategy game! ⚡',
    },
    {
      keywords: ['skridskor', 'skridsko', 'is', 'ice', 'skating'],
      emoji: ['⛸️', '❄️', '🧊', '✨'],
      colors: { background: '#E3F2FD', accent: '#90CAF9', text: '#1565C0', heading: '#0D47A1' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'cool',
      svTitle: 'Skridskokalas! ⛸️❄️', enTitle: 'Ice Skating Party! ⛸️❄️',
      svMsg: 'Glid med oss på isen! Vi åker skridskor, dricker varm choklad och har det mysigt! Ta med varma kläder! 🧣',
      enMsg: "Glide with us on the ice! We'll skate, drink hot chocolate and have a cozy time! Bring warm clothes! 🧣",
    },
    {
      keywords: ['karate', 'kampsport', 'judo', 'taekwondo', 'martial'],
      emoji: ['🥋', '💪', '🔥', '🏅'],
      colors: { background: '#FFFFFF', accent: '#D32F2F', text: '#212121', heading: '#B71C1C' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'energetic',
      svTitle: 'Kampsportskalas! 🥋', enTitle: 'Martial Arts Party! 🥋',
      svMsg: 'Hajja! Ta på dig dräkten och gör dig redo för sparkar, slag och massor av skoj! Alla nivåer välkomna! 🔥',
      enMsg: 'Hi-ya! Put on your gear and get ready for kicks, punches and tons of fun! All levels welcome! 🔥',
    },

    // --- Creative & Chill ---
    {
      keywords: ['pyjamasparty', 'pyjamas', 'sleepover', 'övernattning', 'sovmorgon'],
      emoji: ['🛏️', '🧸', '🌙', '⭐'],
      colors: { background: '#EDE7F6', accent: '#7E57C2', text: '#311B92', heading: '#4527A0' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'cozy',
      svTitle: 'Pyjamasparty! 🌙🧸', enTitle: 'Sleepover Party! 🌙🧸',
      svMsg: 'Ta med din kudde, pyjamas och gosedjur! Vi kollar film, äter popcorn och myser hela natten! ⭐',
      enMsg: "Bring your pillow, pajamas and stuffed animal! We'll watch movies, eat popcorn and have a cozy all-nighter! ⭐",
    },
    {
      keywords: ['film', 'bio', 'movie', 'filmkväll'],
      emoji: ['🎬', '🍿', '🎥', '⭐'],
      colors: { background: '#1A1A2E', accent: '#E50914', text: '#E0E0E0', heading: '#FFFFFF' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'cozy',
      svTitle: 'Filmkväll! 🎬🍿', enTitle: 'Movie Night! 🎬🍿',
      svMsg: 'Popcorn? Check! Filt? Check! Bästa filmen? Vi väljer tillsammans! Gör dig redo för en episk filmkväll! 🎥',
      enMsg: "Popcorn? Check! Blanket? Check! Best movie? We'll pick together! Get ready for an epic movie night! 🎥",
    },
    {
      keywords: ['karaoke', 'sjunga', 'sing'],
      emoji: ['🎤', '🎵', '🎶', '⭐'],
      colors: { background: '#FCE4EC', accent: '#E91E63', text: '#880E4F', heading: '#AD1457' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'party',
      svTitle: 'Karaokeparty! 🎤🎶', enTitle: 'Karaoke Party! 🎤🎶',
      svMsg: 'Gör dig redo att sjunga ut! Det spelar ingen roll om du sjunger som en ängel eller en kråka – vi har kul! 🎵',
      enMsg: "Get ready to sing your heart out! It doesn't matter if you sing like an angel or a crow – we're having fun! 🎵",
    },
    {
      keywords: ['spel', 'gaming', 'tv-spel', 'datorspel', 'lan', 'minecraft', 'roblox', 'fortnite'],
      emoji: ['🎮', '🕹️', '🏆', '💥'],
      colors: { background: '#0D1117', accent: '#58A6FF', text: '#C9D1D9', heading: '#58A6FF' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      mood: 'energetic',
      svTitle: 'Gamingkalas! 🎮', enTitle: 'Gaming Party! 🎮',
      svMsg: 'Controllers laddade, snacks redo – det är dags för det ultimata gaming-kalaset! GG! 🏆💥',
      enMsg: "Controllers charged, snacks ready – it's time for the ultimate gaming party! GG! 🏆💥",
    },
    {
      keywords: ['pyssel', 'craft', 'konst', 'art', 'måla', 'paint'],
      emoji: ['🎨', '🖌️', '✨', '🌈'],
      colors: { background: '#FFFDE7', accent: '#FF6F00', text: '#4E342E', heading: '#E65100' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'creative',
      svTitle: 'Pysselkalas! 🎨🖌️', enTitle: 'Art & Craft Party! 🎨🖌️',
      svMsg: 'Penslar, glitter och fantasi! Vi skapar, målar och har det kreativt! Ta med ditt konstnärshjärta! ✨',
      enMsg: 'Brushes, glitter and imagination! We create, paint and get creative! Bring your inner artist! ✨',
    },
    {
      keywords: ['bak', 'baka', 'baking', 'tårta', 'cake', 'cupcake'],
      emoji: ['🧁', '🎂', '🍰', '👩‍🍳'],
      colors: { background: '#FFF3E0', accent: '#F4511E', text: '#3E2723', heading: '#BF360C' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'cozy',
      svTitle: 'Bakkalas! 🧁🎂', enTitle: 'Baking Party! 🧁🎂',
      svMsg: 'Mjöl, socker och kärlek! Vi bakar, dekorerar och smakar – var och en tar med sig sin skapelse hem! 👩‍🍳',
      enMsg: 'Flour, sugar and love! We bake, decorate and taste – everyone takes their creation home! 👩‍🍳',
    },

    // --- Themes ---
    {
      keywords: ['prinsess', 'princess', 'slott', 'castle'],
      emoji: ['👸', '👑', '🏰', '✨'],
      colors: { background: '#FDE4F2', accent: '#E040FB', text: '#4A148C', heading: '#AA00FF' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'magical',
      svTitle: 'Prinsesskalas! 👸✨', enTitle: 'Princess Party! 👸✨',
      svMsg: 'Alla prinsessor och prinsar kallas till slottet! Vi dansar, klär ut oss och äter kunglig tårta! 👑🏰',
      enMsg: "All princesses and princes are called to the castle! We'll dance, dress up and eat royal cake! 👑🏰",
    },
    {
      keywords: ['dinosaurie', 'dino', 'dinosaur', 'jurassic'],
      emoji: ['🦕', '🦖', '🌋', '🥚'],
      colors: { background: '#E8F5E9', accent: '#558B2F', text: '#1B5E20', heading: '#33691E' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'adventure',
      svTitle: 'Dinokalas! 🦖🌋', enTitle: 'Dino Party! 🦖🌋',
      svMsg: 'ROAR! Gör dig redo för ett förhistoriskt äventyr! Vi gräver fossil, äter dinotårta och har JURRASISKT kul! 🦕',
      enMsg: "ROAR! Get ready for a prehistoric adventure! We'll dig fossils, eat dino cake and have a JURASSIC time! 🦕",
    },
    {
      keywords: ['rymd', 'space', 'astronaut', 'raket', 'rocket', 'planet'],
      emoji: ['🚀', '🌟', '🪐', '👨‍🚀'],
      colors: { background: '#0D1B2A', accent: '#4FC3F7', text: '#E0E0E0', heading: '#4FC3F7' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      mood: 'adventure',
      svTitle: 'Rymdkalas! 🚀🌟', enTitle: 'Space Party! 🚀🌟',
      svMsg: '3... 2... 1... LIFTOFF! Vi reser till stjärnorna med rymdlekar, galaxgodis och en tårta som är out of this world! 🪐',
      enMsg: '3... 2... 1... LIFTOFF! We travel to the stars with space games, galaxy candy and a cake that is out of this world! 🪐',
    },
    {
      keywords: ['safari', 'djungel', 'jungle', 'zoo', 'djurpark'],
      emoji: ['🦁', '🐘', '🌴', '🦒'],
      colors: { background: '#FFF8E1', accent: '#F9A825', text: '#3E2723', heading: '#E65100' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'adventure',
      svTitle: 'Safarikalas! 🦁🌴', enTitle: 'Safari Party! 🦁🌴',
      svMsg: 'Kikare redo? Vi beger oss ut på safari! Djurjakt (med kamera!), djungellekar och tropisk tårta väntar! 🐘',
      enMsg: "Binoculars ready? We're heading out on safari! Animal hunt (with cameras!), jungle games and tropical cake await! 🐘",
    },
    {
      keywords: ['cirkus', 'circus', 'clown'],
      emoji: ['🎪', '🤡', '🎭', '🎠'],
      colors: { background: '#FFF3E0', accent: '#D32F2F', text: '#212121', heading: '#C62828' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'fun',
      svTitle: 'Cirkuskalas! 🎪🤡', enTitle: 'Circus Party! 🎪🤡',
      svMsg: 'Välkommen till cirkusen! Det blir trollkonster, balansgång, popcorn och massor av skratt! 🎭✨',
      enMsg: "Welcome to the circus! There'll be magic tricks, balancing acts, popcorn and tons of laughter! 🎭✨",
    },
    {
      keywords: ['halloween', 'skräck', 'horror', 'spöke', 'ghost', 'monster'],
      emoji: ['🎃', '👻', '🦇', '🕷️'],
      colors: { background: '#1A1A1A', accent: '#FF6F00', text: '#E0E0E0', heading: '#FF9800' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'spooky',
      svTitle: 'Halloweenparty! 🎃👻', enTitle: 'Halloween Party! 🎃👻',
      svMsg: 'Muahahaha! Klä ut dig i din läskigaste dräkt och kom – om du vågar! Det blir skräck, godis och spökjakt! 🦇',
      enMsg: 'Muahahaha! Put on your scariest costume and come – if you dare! There will be scares, candy and ghost hunting! 🦇',
    },
    {
      keywords: ['jul', 'christmas', 'xmas', 'tomte', 'santa'],
      emoji: ['🎄', '🎅', '⭐', '🎁'],
      colors: { background: '#1B5E20', accent: '#F44336', text: '#FFFFFF', heading: '#FFD54F' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'festive',
      svTitle: 'Julfest! 🎄⭐', enTitle: 'Christmas Party! 🎄⭐',
      svMsg: 'Ho ho ho! Fira julen med oss! Glögg, pepparkakor, julmusik och kanske ett besök av tomten! 🎅🎁',
      enMsg: 'Ho ho ho! Celebrate Christmas with us! Mulled wine, gingerbread, holiday music and maybe a visit from Santa! 🎅🎁',
    },
    {
      keywords: ['midsommar', 'midsummer'],
      emoji: ['🌻', '🌸', '🌿', '☀️'],
      colors: { background: '#E8F5E9', accent: '#FFD54F', text: '#1B5E20', heading: '#2E7D32' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      mood: 'festive',
      svTitle: 'Midsommarfest! 🌻🌸', enTitle: 'Midsummer Party! 🌻🌸',
      svMsg: 'Dansa runt stången, plocka blommor och njut av den ljusaste kvällen! Jordgubbar och sill ingår! 🇸🇪☀️',
      enMsg: 'Dance around the maypole, pick flowers and enjoy the brightest evening! Strawberries and herring included! 🇸🇪☀️',
    },
    {
      keywords: ['nyår', 'new year', 'nyårsafton'],
      emoji: ['🎆', '🥂', '🎉', '🕛'],
      colors: { background: '#0D1B2A', accent: '#FFD700', text: '#F0E6D3', heading: '#FFD700' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'party',
      svTitle: 'Nyårsfest! 🎆🥂', enTitle: "New Year's Party! 🎆🥂",
      svMsg: 'Räkna ner till midnatt med oss! Bubbel, fyrverkerier och goda löften – vi startar det nya året med stil! 🎉',
      enMsg: "Count down to midnight with us! Bubbles, fireworks and resolutions – we're starting the new year in style! 🎉",
    },
    {
      keywords: ['påsk', 'easter'],
      emoji: ['🐣', '🥚', '🐰', '🌷'],
      colors: { background: '#FFFDE7', accent: '#FFB300', text: '#4E342E', heading: '#F57F17' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'fun',
      svTitle: 'Påskkalas! 🐣🥚', enTitle: 'Easter Party! 🐣🥚',
      svMsg: 'Påskharen har gömt ägg överallt! Kom på äggletning, pysselstuga och ät godis tills du inte kan mer! 🐰🌷',
      enMsg: "The Easter bunny has hidden eggs everywhere! Come for an egg hunt, crafts and eat candy until you can't anymore! 🐰🌷",
    },
    {
      keywords: ['valborg', 'walpurgis'],
      emoji: ['🔥', '🌸', '🎵', '🌅'],
      colors: { background: '#FFF3E0', accent: '#FF6D00', text: '#3E2723', heading: '#E65100' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'festive',
      svTitle: 'Valborgsfest! 🔥🌸', enTitle: 'Walpurgis Party! 🔥🌸',
      svMsg: 'Välkomna våren runt brasan! Vi sjunger, grillar och njuter av den första riktiga vårkvällen! 🌅',
      enMsg: "Welcome spring around the bonfire! We'll sing, grill and enjoy the first real spring evening! 🌅",
    },

    // --- Social & Adult ---
    {
      keywords: ['grillkväll', 'grill', 'bbq', 'barbecue'],
      emoji: ['🍖', '🔥', '🌽', '🍻'],
      colors: { background: '#FBE9E7', accent: '#E64A19', text: '#3E2723', heading: '#BF360C' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'relaxed',
      svTitle: 'Grillkväll! 🍖🔥', enTitle: 'BBQ Party! 🍖🔥',
      svMsg: 'Grillen är varm och vi har marinerat allt! Kom hungrig – det blir burgare, korv, sallad och gott sällskap! 🌽🍻',
      enMsg: "The grill is hot and we've marinated everything! Come hungry – there'll be burgers, sausages, salad and great company! 🌽🍻",
    },
    {
      keywords: ['spelkväll', 'brädspel', 'board game', 'game night'],
      emoji: ['🎲', '🃏', '🏆', '🧩'],
      colors: { background: '#263238', accent: '#26A69A', text: '#ECEFF1', heading: '#80CBC4' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      mood: 'fun',
      svTitle: 'Spelkväll! 🎲🃏', enTitle: 'Game Night! 🎲🃏',
      svMsg: 'Tärningarna är kastade! Vi spelar, bluffar, strategiserar och har det fantastiskt! Ta med ditt favoritspel! 🧩',
      enMsg: "The dice are cast! We'll play, bluff, strategize and have a blast! Bring your favorite game! 🧩",
    },
    {
      keywords: ['student', 'graduation', 'examen'],
      emoji: ['🎓', '🎉', '🍾', '🎊'],
      colors: { background: '#FFFFFF', accent: '#1565C0', text: '#0D47A1', heading: '#0D47A1' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'celebration',
      svTitle: 'Studentfest! 🎓🎉', enTitle: 'Graduation Party! 🎓🎉',
      svMsg: 'Mösspåtagning och champagne! Fira denna milstolpe med oss – det blir tal, skratt och minnen för livet! 🍾',
      enMsg: "Caps on and champagne popping! Celebrate this milestone with us – there'll be speeches, laughter and memories for life! 🍾",
    },
    {
      keywords: ['möhippa', 'hen party', 'bachelorette'],
      emoji: ['💍', '👰', '🥂', '💖'],
      colors: { background: '#FFF0F5', accent: '#FF4081', text: '#880E4F', heading: '#C2185B' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'party',
      svTitle: 'Möhippa! 💍🥂', enTitle: 'Bachelorette Party! 💍🥂',
      svMsg: 'Vi firar bruden! En oförglömlig kväll med lekar, bubbel och massor av kärlek väntar! 💖👰',
      enMsg: "We're celebrating the bride! An unforgettable evening with games, bubbles and lots of love awaits! 💖👰",
    },
    {
      keywords: ['svensexa', 'bachelor', 'stag'],
      emoji: ['🎩', '🍺', '🎉', '🏆'],
      colors: { background: '#263238', accent: '#FFD54F', text: '#ECEFF1', heading: '#FFD54F' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'party',
      svTitle: 'Svensexa! 🎩🍺', enTitle: 'Bachelor Party! 🎩🍺',
      svMsg: 'Sista kvällen som fri man! Vi gör den oförglömlig med äventyr, skratt och brödraskapet! 🏆🎉',
      enMsg: "Last night of freedom! We're making it unforgettable with adventure, laughs and brotherhood! 🏆🎉",
    },
    {
      keywords: ['baby shower', 'babyshower', 'bebis'],
      emoji: ['👶', '🍼', '🧸', '💕'],
      colors: { background: '#FFF8E1', accent: '#FFB74D', text: '#4E342E', heading: '#EF6C00' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      mood: 'tender',
      svTitle: 'Baby Shower! 👶🍼', enTitle: 'Baby Shower! 👶🍼',
      svMsg: 'En liten stjärna är på väg! Fira med oss med lekar, presenter och massor av kärlek! 🧸💕',
      enMsg: 'A little star is on the way! Celebrate with us with games, gifts and lots of love! 🧸💕',
    },
    {
      keywords: ['picknick', 'picnic'],
      emoji: ['🧺', '🌻', '🥪', '☀️'],
      colors: { background: '#F1F8E9', accent: '#7CB342', text: '#33691E', heading: '#558B2F' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      mood: 'relaxed',
      svTitle: 'Picknick! 🧺🌻', enTitle: 'Picnic Party! 🧺🌻',
      svMsg: 'Packa filten och kom till parken! Vi delar goda mackor, frukt och sol – den perfekta dagen! ☀️🥪',
      enMsg: "Pack your blanket and come to the park! We'll share delicious sandwiches, fruit and sunshine – the perfect day! ☀️🥪",
    },
    {
      keywords: ['maskerad', 'masquerade', 'mask', 'utklädnad', 'kostym'],
      emoji: ['🎭', '✨', '🦹', '🎩'],
      colors: { background: '#1A1A2E', accent: '#C9A84C', text: '#E8E8E8', heading: '#C9A84C' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      mood: 'mysterious',
      svTitle: 'Maskeradfest! 🎭✨', enTitle: 'Masquerade Party! 🎭✨',
      svMsg: 'Ta på dig din mask och kliv in i mystiken! En kväll av hemligheter, elegans och magiska möten väntar! 🎩',
      enMsg: 'Put on your mask and step into the mystery! An evening of secrets, elegance and magical encounters awaits! 🎩',
    },
    {
      keywords: ['quiz', 'frågesport', 'trivia', 'pub'],
      emoji: ['🧠', '❓', '🏆', '📝'],
      colors: { background: '#1A237E', accent: '#FFD740', text: '#E8EAF6', heading: '#FFD740' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      mood: 'fun',
      svTitle: 'Quizkväll! 🧠❓', enTitle: 'Quiz Night! 🧠❓',
      svMsg: 'Testa dina kunskaper! Samla ditt lag och gör dig redo för den ultimata frågesportskvällen! 🏆📝',
      enMsg: 'Test your knowledge! Gather your team and get ready for the ultimate quiz night! 🏆📝',
    },

    // --- Nature / Outdoor ---
    {
      keywords: ['strand', 'beach', 'hav', 'sea', 'ocean'],
      emoji: ['🏖️', '🌊', '🐚', '☀️'],
      colors: { background: '#E0F7FA', accent: '#00ACC1', text: '#006064', heading: '#00838F' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'relaxed',
      svTitle: 'Strandparty! 🏖️🌊', enTitle: 'Beach Party! 🏖️🌊',
      svMsg: 'Sanden mellan tårna och solen i ansiktet! Vi badar, bygger sandslott och chillar vid havet! 🐚☀️',
      enMsg: "Sand between your toes and sun on your face! We'll swim, build sandcastles and chill by the ocean! 🐚☀️",
    },
    {
      keywords: ['camping', 'tält', 'läger', 'camp', 'scout'],
      emoji: ['🏕️', '🔥', '🌲', '⭐'],
      colors: { background: '#2E3B2E', accent: '#FF8F00', text: '#E8E8E0', heading: '#FFB74D' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      mood: 'adventure',
      svTitle: 'Campingfest! 🏕️🔥', enTitle: 'Camping Party! 🏕️🔥',
      svMsg: 'Tält, lägereld och stjärnhimmel! Vi grillar korv, berättar spökhistorier och sover under stjärnorna! 🌲⭐',
      enMsg: "Tents, campfire and starry sky! We'll grill sausages, tell ghost stories and sleep under the stars! 🌲⭐",
    },

    // --- Vehicles ---
    {
      keywords: ['bil', 'car', 'racing', 'go-kart', 'gokart', 'formel'],
      emoji: ['🏎️', '🏁', '🏆', '💨'],
      colors: { background: '#212121', accent: '#F44336', text: '#E0E0E0', heading: '#FF5252' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      mood: 'energetic',
      svTitle: 'Racingkalas! 🏎️🏁', enTitle: 'Racing Party! 🏎️🏁',
      svMsg: 'Starta motorerna! Vi kör go-kart, tävlar om segern och firar som riktiga racerförare! 🏆💨',
      enMsg: "Start your engines! We're racing go-karts, competing for the win and celebrating like real racers! 🏆💨",
    },
  ];

  /* ---------- Mood-based fallback palettes ---------- */
  const moodPalettes = {
    energetic: { background: '#FFF3E0', accent: '#FF6F00', text: '#3E2723', heading: '#E65100' },
    fun:       { background: '#FFFDE7', accent: '#FF6F00', text: '#4E342E', heading: '#E65100' },
    party:     { background: '#12002E', accent: '#E040FB', text: '#E8E8E8', heading: '#EA80FC' },
    cozy:      { background: '#EDE7F6', accent: '#7E57C2', text: '#311B92', heading: '#4527A0' },
    adventure: { background: '#E8F5E9', accent: '#FF6F00', text: '#1B5E20', heading: '#E65100' },
    magical:   { background: '#FDE4F2', accent: '#E040FB', text: '#4A148C', heading: '#AA00FF' },
    cool:      { background: '#E3F2FD', accent: '#42A5F5', text: '#0D47A1', heading: '#1565C0' },
    festive:   { background: '#FFF8E1', accent: '#FFD54F', text: '#3E2723', heading: '#F57F17' },
    relaxed:   { background: '#E8F5E9', accent: '#66BB6A', text: '#1B5E20', heading: '#2E7D32' },
    action:    { background: '#0A0A1A', accent: '#00E676', text: '#E0E0E0', heading: '#00E676' },
    spooky:    { background: '#1A1A1A', accent: '#FF6F00', text: '#E0E0E0', heading: '#FF9800' },
    tender:    { background: '#FFF8E1', accent: '#FFB74D', text: '#4E342E', heading: '#EF6C00' },
    celebration: { background: '#FFFFFF', accent: '#6C5CE7', text: '#2D3436', heading: '#6C5CE7' },
    mysterious: { background: '#1A1A2E', accent: '#C9A84C', text: '#E8E8E8', heading: '#C9A84C' },
    creative:  { background: '#FFFDE7', accent: '#FF6F00', text: '#4E342E', heading: '#E65100' },
  };

  /* ---------- Generate Theme ---------- */
  function generate(input) {
    if (!input || !input.trim()) return null;

    const normalized = input.toLowerCase()
      .replace(/kalas|fest|party|kväll|night|dag|day/g, '')
      .replace(/[^a-zåäö0-9\s-]/g, '')
      .trim();

    // Find best matching theme
    const match = findBestMatch(normalized, input.toLowerCase());

    const lang = PartyI18n.getLanguage();

    if (match) {
      return buildTemplate(match, input, lang);
    }

    // Fallback: generate a generic fun template with the user's input
    return buildFallbackTemplate(input, normalized, lang);
  }

  function findBestMatch(normalized, original) {
    let bestMatch = null;
    let bestScore = 0;

    for (const theme of themes) {
      for (const kw of theme.keywords) {
        // Exact match
        if (normalized === kw || original.includes(kw)) {
          return theme;
        }
        // Partial match
        if (normalized.includes(kw) || kw.includes(normalized)) {
          const score = Math.min(normalized.length, kw.length) / Math.max(normalized.length, kw.length);
          if (score > bestScore) {
            bestScore = score;
            bestMatch = theme;
          }
        }
        // Fuzzy: check if most characters match
        if (normalized.length >= 3) {
          const dist = levenshtein(normalized, kw);
          const similarity = 1 - dist / Math.max(normalized.length, kw.length);
          if (similarity > 0.6 && similarity > bestScore) {
            bestScore = similarity;
            bestMatch = theme;
          }
        }
      }
    }

    return bestScore > 0.4 ? bestMatch : null;
  }

  function buildTemplate(theme, userInput, lang) {
    const decorType = getDecorationType(theme.mood);
    const title = lang === 'sv' ? theme.svTitle : theme.enTitle;
    const message = lang === 'sv' ? theme.svMsg : theme.enMsg;
    const t = PartyI18n.t;

    return {
      id: '_custom_' + Date.now(),
      i18nPrefix: null,
      category: 'custom',
      colors: { ...theme.colors },
      fonts: { ...theme.fonts },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: decorType,
        borderStyle: `3px solid ${theme.colors.accent}`,
        borderRadius: '20px',
        emoji: theme.emoji.join(''),
      },
      defaultTexts: {
        title: title,
        subtitle: lang === 'sv' ? 'Du är inbjuden till' : "You're invited to",
        date: lang === 'sv' ? 'Datum och tid' : 'Date and time',
        location: lang === 'sv' ? 'Plats' : 'Location',
        message: message,
        sender: lang === 'sv' ? 'Varma hälsningar' : 'Warm regards',
      },
    };
  }

  function buildFallbackTemplate(userInput, normalized, lang) {
    const capitalizedInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
    // Pick a cheerful default palette
    const palette = moodPalettes.fun;
    const emoji = ['🎉', '✨', '⭐', '🎊'];

    return {
      id: '_custom_' + Date.now(),
      i18nPrefix: null,
      category: 'custom',
      colors: { ...palette },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'confetti',
        borderStyle: `3px solid ${palette.accent}`,
        borderRadius: '20px',
        emoji: emoji.join(''),
      },
      defaultTexts: {
        title: `${capitalizedInput}! 🎉`,
        subtitle: lang === 'sv' ? 'Du är inbjuden till' : "You're invited to",
        date: lang === 'sv' ? 'Datum och tid' : 'Date and time',
        location: lang === 'sv' ? 'Plats' : 'Location',
        message: lang === 'sv'
          ? `Vi firar med ${normalizeForSentence(userInput)}! Det blir en riktigt kul dag med massor av skratt och gemenskap. Vi hoppas att just DU kan komma! 🎉✨`
          : `We're celebrating with ${normalizeForSentence(userInput)}! It'll be a really fun day with lots of laughter and togetherness. We hope YOU can make it! 🎉✨`,
        sender: lang === 'sv' ? 'Varma hälsningar' : 'Warm regards',
      },
    };
  }

  function normalizeForSentence(input) {
    return input.toLowerCase().replace(/kalas|fest|party/g, '').trim() || input.toLowerCase();
  }

  function getDecorationType(mood) {
    const map = {
      energetic: 'confetti', fun: 'confetti', party: 'neon',
      cozy: 'soft', adventure: 'treasure', magical: 'sparkle',
      cool: 'clean', festive: 'elegant', relaxed: 'botanical',
      action: 'comic', spooky: 'minimal-dark', tender: 'floral',
      celebration: 'elegant', mysterious: 'luxe', creative: 'rainbow',
    };
    return map[mood] || 'confetti';
  }

  /* ---------- Levenshtein Distance ---------- */
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
    return dp[m][n];
  }

  /* ---------- Get available theme keywords (for suggestions) ---------- */
  function getSuggestions() {
    return themes.map(t => ({
      keyword: t.keywords[0],
      title: PartyI18n.getLanguage() === 'sv' ? t.svTitle : t.enTitle,
    }));
  }

  return { generate, getSuggestions };
})();
