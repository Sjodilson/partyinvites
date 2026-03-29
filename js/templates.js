/* ============================================
   PartyInvites – Template Definitions
   ============================================ */

const PartyTemplates = (() => {
  const templates = [
    // ── Kids ────────────────────────────────
    {
      id: 'kids',
      i18nPrefix: 'template.kids',
      category: 'kids',
      colors: {
        background: '#FFF3E0',
        accent: '#FF6F00',
        text: '#4E342E',
        heading: '#E65100',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'confetti',
        borderStyle: '4px dashed #FFAB40',
        borderRadius: '24px',
        emoji: '🎈🎉🎊🎁',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 50%, #FFCC80 100%)',
      searchKeywords: ['barn', 'barnkalas', 'kids', 'children', 'kalas', 'party'],
    },
    {
      id: 'kids-unicorn',
      i18nPrefix: 'template.kids-unicorn',
      category: 'kids',
      colors: {
        background: '#FDE4F2',
        accent: '#E040FB',
        text: '#4A148C',
        heading: '#AA00FF',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '1.9rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'sparkle',
        borderStyle: '3px solid #EA80FC',
        borderRadius: '24px',
        emoji: '🦄✨💖🌈',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FDE4F2 0%, #F8BBD0 50%, #EA80FC 100%)',
      searchKeywords: ['enhörning', 'unicorn', 'regnbåge', 'rainbow', 'magi', 'magic'],
    },
    {
      id: 'kids-superhero',
      i18nPrefix: 'template.kids-superhero',
      category: 'kids',
      colors: {
        background: '#E3F2FD',
        accent: '#F44336',
        text: '#0D47A1',
        heading: '#D32F2F',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '2.1rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'comic',
        borderStyle: '4px solid #1565C0',
        borderRadius: '16px',
        emoji: '🦸💥⚡🛡️',
      },
      thumbnailGradient: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 40%, #FFE0B2 100%)',
      searchKeywords: ['superhjälte', 'superhero', 'hjälte', 'hero', 'cape'],
    },
    {
      id: 'kids-pirate',
      i18nPrefix: 'template.kids-pirate',
      category: 'kids',
      colors: {
        background: '#FFF8E1',
        accent: '#795548',
        text: '#3E2723',
        heading: '#4E342E',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'treasure',
        borderStyle: '3px dashed #A1887F',
        borderRadius: '12px',
        emoji: '🏴‍☠️⚓💎🗺️',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFE0B2 40%, #D7CCC8 100%)',
      searchKeywords: ['pirat', 'pirate', 'skatt', 'treasure', 'sjörövare'],
    },
    {
      id: 'kids-princess',
      category: 'kids',
      colors: { background: '#FDE4F2', accent: '#E040FB', text: '#4A148C', heading: '#AA00FF' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'sparkle', borderStyle: '3px solid #E040FB', borderRadius: '20px', emoji: '👸👑🏰✨' },
      searchKeywords: ['prinsess', 'princess', 'slott', 'castle', 'prinsessa', 'tiara'],
      texts: {
        sv: { name: 'Prinsesskalas', title: 'Prinsesskalas! 👸✨', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Alla prinsessor och prinsar kallas till slottet! Vi dansar, klär ut oss och äter kunglig tårta! 👑🏰', sender: 'Varma hälsningar' },
        en: { name: 'Princess Party', title: 'Princess Party! 👸✨', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "All princesses and princes are called to the castle! We'll dance, dress up and eat royal cake! 👑🏰", sender: 'Warm regards' },
      },
    },
    {
      id: 'kids-dino',
      category: 'kids',
      colors: { background: '#E8F5E9', accent: '#558B2F', text: '#1B5E20', heading: '#33691E' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'treasure', borderStyle: '3px solid #558B2F', borderRadius: '20px', emoji: '🦕🦖🌋🥚' },
      searchKeywords: ['dinosaurie', 'dino', 'dinosaur', 'jurassic', 'förhistorisk'],
      texts: {
        sv: { name: 'Dinokalas', title: 'Dinokalas! 🦖🌋', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'ROAR! Gör dig redo för ett förhistoriskt äventyr! Vi gräver fossil, äter dinotårta och har JURRASISKT kul! 🦕', sender: 'Varma hälsningar' },
        en: { name: 'Dino Party', title: 'Dino Party! 🦖🌋', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "ROAR! Get ready for a prehistoric adventure! We'll dig fossils, eat dino cake and have a JURASSIC time! 🦕", sender: 'Warm regards' },
      },
    },
    {
      id: 'kids-space',
      category: 'kids',
      colors: { background: '#0D1B2A', accent: '#4FC3F7', text: '#E0E0E0', heading: '#4FC3F7' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'treasure', borderStyle: '3px solid #4FC3F7', borderRadius: '20px', emoji: '🚀🌟🪐👨‍🚀' },
      searchKeywords: ['rymd', 'space', 'astronaut', 'raket', 'rocket', 'planet'],
      texts: {
        sv: { name: 'Rymdkalas', title: 'Rymdkalas! 🚀🌟', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: '3... 2... 1... LIFTOFF! Vi reser till stjärnorna med rymdlekar, galaxgodis och en tårta som är out of this world! 🪐', sender: 'Varma hälsningar' },
        en: { name: 'Space Party', title: 'Space Party! 🚀🌟', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: '3... 2... 1... LIFTOFF! We travel to the stars with space games, galaxy candy and a cake that is out of this world! 🪐', sender: 'Warm regards' },
      },
    },
    {
      id: 'kids-safari',
      category: 'kids',
      colors: { background: '#FFF8E1', accent: '#F9A825', text: '#3E2723', heading: '#E65100' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'treasure', borderStyle: '3px solid #F9A825', borderRadius: '20px', emoji: '🦁🐘🌴🦒' },
      searchKeywords: ['safari', 'djungel', 'jungle', 'zoo', 'djurpark', 'djur', 'animals'],
      texts: {
        sv: { name: 'Safarikalas', title: 'Safarikalas! 🦁🌴', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Kikare redo? Vi beger oss ut på safari! Djurjakt (med kamera!), djungellekar och tropisk tårta väntar! 🐘', sender: 'Varma hälsningar' },
        en: { name: 'Safari Party', title: 'Safari Party! 🦁🌴', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Binoculars ready? We're heading out on safari! Animal hunt (with cameras!), jungle games and tropical cake await! 🐘", sender: 'Warm regards' },
      },
    },
    {
      id: 'kids-circus',
      category: 'kids',
      colors: { background: '#FFF3E0', accent: '#D32F2F', text: '#212121', heading: '#C62828' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #D32F2F', borderRadius: '20px', emoji: '🎪🤡🎭🎠' },
      searchKeywords: ['cirkus', 'circus', 'clown', 'trolleri', 'magic show'],
      texts: {
        sv: { name: 'Cirkuskalas', title: 'Cirkuskalas! 🎪🤡', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Välkommen till cirkusen! Det blir trollkonster, balansgång, popcorn och massor av skratt! 🎭✨', sender: 'Varma hälsningar' },
        en: { name: 'Circus Party', title: 'Circus Party! 🎪🤡', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Welcome to the circus! There'll be magic tricks, balancing acts, popcorn and tons of laughter! 🎭✨", sender: 'Warm regards' },
      },
    },

    // ── Birthday ────────────────────────────
    {
      id: 'birthday',
      i18nPrefix: 'template.birthday',
      category: 'birthday',
      colors: { background: '#FFF8E1', accent: '#FFD54F', text: '#3E2723', heading: '#F57F17' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2.1rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'elegant', borderStyle: '2px solid #FFD54F', borderRadius: '16px' },
      thumbnailGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 50%, #FFE082 100%)',
      searchKeywords: ['födelsedag', 'birthday', 'fest', 'party', 'fira', 'celebrate'],
    },
    {
      id: 'birthday-rainbow',
      i18nPrefix: 'template.birthday-rainbow',
      category: 'birthday',
      colors: { background: '#FFFDE7', accent: '#FF6F00', text: '#E65100', heading: '#D50000' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2.2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'rainbow', borderStyle: '4px solid #FF6F00', borderRadius: '20px', emoji: '🌈🎨🎉✨' },
      thumbnailGradient: 'linear-gradient(135deg, #FF6F00 0%, #FDD835 25%, #66BB6A 50%, #42A5F5 75%, #AB47BC 100%)',
      searchKeywords: ['regnbåge', 'rainbow', 'färger', 'colors', 'födelsedag'],
    },
    {
      id: 'birthday-disco',
      i18nPrefix: 'template.birthday-disco',
      category: 'birthday',
      colors: { background: '#12002E', accent: '#E040FB', text: '#E8E8E8', heading: '#EA80FC' },
      fonts: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
      headingSize: '2.2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '2px solid #E040FB', borderRadius: '12px', emoji: '🪩🕺💃✨' },
      thumbnailGradient: 'linear-gradient(135deg, #12002E 0%, #1A0044 50%, #4A0072 100%)',
      searchKeywords: ['disco', 'dans', 'dance', 'natt', 'night', 'disko'],
    },
    {
      id: 'birthday-rose',
      i18nPrefix: 'template.birthday-rose',
      category: 'birthday',
      colors: { background: '#FFF0F5', accent: '#F06292', text: '#880E4F', heading: '#C2185B' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'floral', borderStyle: '2px solid #F8BBD0', borderRadius: '20px', emoji: '🌹✨💕🌸' },
      thumbnailGradient: 'linear-gradient(135deg, #FFF0F5 0%, #FCE4EC 50%, #F8BBD0 100%)',
      searchKeywords: ['rosa', 'rose', 'blommor', 'flowers', 'romantisk'],
    },

    // ── Sport ────────────────────────────────
    {
      id: 'sport-bowling',
      category: 'sport',
      colors: { background: '#1A1A2E', accent: '#FF4757', text: '#F0F0F0', heading: '#FF6B81' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #FF4757', borderRadius: '20px', emoji: '🎳🏆🎯✨' },
      searchKeywords: ['bowling', 'bowlingkalas', 'kägel', 'pins', 'strike'],
      texts: {
        sv: { name: 'Bowlingkalas', title: 'Bowlingkalas! 🎳', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Snöra på dig bowlingskorna och gör dig redo att slå alla kägel! Det blir strikes, skratt och snacks – bästa kvällen! 🎳🎉', sender: 'Varma hälsningar' },
        en: { name: 'Bowling Party', title: 'Bowling Party! 🎳', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Lace up your bowling shoes and get ready to knock down all the pins! There'll be strikes, laughs and snacks – best night ever! 🎳🎉", sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-soccer',
      category: 'sport',
      colors: { background: '#E8F5E9', accent: '#2E7D32', text: '#1B5E20', heading: '#1B5E20' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #2E7D32', borderRadius: '20px', emoji: '⚽🏆🥅🏃' },
      searchKeywords: ['fotboll', 'soccer', 'football', 'match', 'boll'],
      texts: {
        sv: { name: 'Fotbollskalas', title: 'Fotbollskalas! ⚽', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Vi sparkar igång festen på fotbollsplanen! Ta med skor och benskydd – det blir match, prisutdelning och tårta! 🏆', sender: 'Varma hälsningar' },
        en: { name: 'Soccer Party', title: 'Soccer Party! ⚽', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "We're kicking off the party on the soccer field! Bring your boots and shin guards – there'll be a match, awards and cake! 🏆", sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-swimming',
      category: 'sport',
      colors: { background: '#E3F2FD', accent: '#039BE5', text: '#0D47A1', heading: '#01579B' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #039BE5', borderRadius: '20px', emoji: '🏊💦🌊🐬' },
      searchKeywords: ['simning', 'pool', 'bad', 'swim', 'vatten', 'water', 'poolparty'],
      texts: {
        sv: { name: 'Poolparty', title: 'Poolparty! 🏊💦', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Plask! Hoppa i poolen och häng med oss för en blöt och vild fest! Ta med badkläder och handduk! 🌊', sender: 'Varma hälsningar' },
        en: { name: 'Pool Party', title: 'Pool Party! 🏊💦', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Splash! Jump in the pool and join us for a wet and wild party! Bring your swimsuit and towel! 🌊', sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-climbing',
      category: 'sport',
      colors: { background: '#FFF8E1', accent: '#FF6F00', text: '#3E2723', heading: '#E65100' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'treasure', borderStyle: '3px solid #FF6F00', borderRadius: '20px', emoji: '🧗🏔️💪🎯' },
      searchKeywords: ['klättring', 'climb', 'bouldering', 'klätter', 'climbing'],
      texts: {
        sv: { name: 'Klätterkalas', title: 'Klätterkalas! 🧗', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Nå nya höjder med oss! Vi klättrar, har kul och firar med fika efteråt. Ta med bekväma kläder! 💪', sender: 'Varma hälsningar' },
        en: { name: 'Climbing Party', title: 'Climbing Party! 🧗', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Reach new heights with us! We climb, have fun and celebrate with snacks afterwards. Wear comfy clothes! 💪', sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-laser',
      category: 'sport',
      colors: { background: '#0A0A1A', accent: '#00E676', text: '#E0E0E0', heading: '#00E676' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '3px solid #00E676', borderRadius: '20px', emoji: '🔫🎯💥🌟' },
      searchKeywords: ['laser', 'lasertag', 'laserdome', 'laserkalas'],
      texts: {
        sv: { name: 'Lasertag-kalas', title: 'Lasertag-kalas! 🔫💥', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Pew pew! Gör dig redo för det ultimata laserstrids-kalaset! Ta med ditt bästa strategisinne! ⚡', sender: 'Varma hälsningar' },
        en: { name: 'Laser Tag Party', title: 'Laser Tag Party! 🔫💥', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Pew pew! Get ready for the ultimate laser battle party! Bring your best strategy game! ⚡', sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-skating',
      category: 'sport',
      colors: { background: '#E3F2FD', accent: '#90CAF9', text: '#1565C0', heading: '#0D47A1' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'clean', borderStyle: '3px solid #90CAF9', borderRadius: '20px', emoji: '⛸️❄️🧊✨' },
      searchKeywords: ['skridskor', 'skridsko', 'is', 'ice', 'skating', 'skridskokalas'],
      texts: {
        sv: { name: 'Skridskokalas', title: 'Skridskokalas! ⛸️❄️', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Glid med oss på isen! Vi åker skridskor, dricker varm choklad och har det mysigt! Ta med varma kläder! 🧣', sender: 'Varma hälsningar' },
        en: { name: 'Ice Skating Party', title: 'Ice Skating Party! ⛸️❄️', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Glide with us on the ice! We'll skate, drink hot chocolate and have a cozy time! Bring warm clothes! 🧣", sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-karate',
      category: 'sport',
      colors: { background: '#FFFFFF', accent: '#D32F2F', text: '#212121', heading: '#B71C1C' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #D32F2F', borderRadius: '20px', emoji: '🥋💪🔥🏅' },
      searchKeywords: ['karate', 'kampsport', 'judo', 'taekwondo', 'martial'],
      texts: {
        sv: { name: 'Kampsportskalas', title: 'Kampsportskalas! 🥋', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Hajja! Ta på dig dräkten och gör dig redo för sparkar, slag och massor av skoj! Alla nivåer välkomna! 🔥', sender: 'Varma hälsningar' },
        en: { name: 'Martial Arts Party', title: 'Martial Arts Party! 🥋', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Hi-ya! Put on your gear and get ready for kicks, punches and tons of fun! All levels welcome! 🔥', sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-gokart',
      category: 'sport',
      colors: { background: '#212121', accent: '#F44336', text: '#E0E0E0', heading: '#FF5252' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #F44336', borderRadius: '20px', emoji: '🏎️🏁🏆💨' },
      searchKeywords: ['go-kart', 'gokart', 'racing', 'bil', 'car', 'formel'],
      texts: {
        sv: { name: 'Racingkalas', title: 'Racingkalas! 🏎️🏁', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Starta motorerna! Vi kör go-kart, tävlar om segern och firar som riktiga racerförare! 🏆💨', sender: 'Varma hälsningar' },
        en: { name: 'Racing Party', title: 'Racing Party! 🏎️🏁', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Start your engines! We're racing go-karts, competing for the win and celebrating like real racers! 🏆💨", sender: 'Warm regards' },
      },
    },
    {
      id: 'sport-dance',
      category: 'sport',
      colors: { background: '#12002E', accent: '#E040FB', text: '#E8E8E8', heading: '#EA80FC' },
      fonts: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '3px solid #E040FB', borderRadius: '20px', emoji: '💃🕺🪩🎵' },
      searchKeywords: ['dans', 'dance', 'disco', 'danskalas', 'dansparty'],
      texts: {
        sv: { name: 'Dansparty', title: 'DANSPARTY! 💃🕺', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Dra på dig dansskorna och gör dig redo för en kväll på dansgolvet! Vi dansar, skrattar och har det grymt! 🪩✨', sender: 'Varma hälsningar' },
        en: { name: 'Dance Party', title: 'DANCE PARTY! 💃🕺', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Put on your dancing shoes and get ready for a night on the dance floor! We dance, laugh and have an amazing time! 🪩✨', sender: 'Warm regards' },
      },
    },

    // ── Activity ─────────────────────────────
    {
      id: 'activity-sleepover',
      category: 'activity',
      colors: { background: '#EDE7F6', accent: '#7E57C2', text: '#311B92', heading: '#4527A0' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'soft', borderStyle: '3px solid #7E57C2', borderRadius: '20px', emoji: '🛏️🧸🌙⭐' },
      searchKeywords: ['pyjamasparty', 'pyjamas', 'sleepover', 'övernattning', 'sovmorgon'],
      texts: {
        sv: { name: 'Pyjamasparty', title: 'Pyjamasparty! 🌙🧸', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Ta med din kudde, pyjamas och gosedjur! Vi kollar film, äter popcorn och myser hela natten! ⭐', sender: 'Varma hälsningar' },
        en: { name: 'Sleepover Party', title: 'Sleepover Party! 🌙🧸', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Bring your pillow, pajamas and stuffed animal! We'll watch movies, eat popcorn and have a cozy all-nighter! ⭐", sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-movie',
      category: 'activity',
      colors: { background: '#1A1A2E', accent: '#E50914', text: '#E0E0E0', heading: '#FFFFFF' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'soft', borderStyle: '3px solid #E50914', borderRadius: '20px', emoji: '🎬🍿🎥⭐' },
      searchKeywords: ['film', 'bio', 'movie', 'filmkväll', 'cinema'],
      texts: {
        sv: { name: 'Filmkväll', title: 'Filmkväll! 🎬🍿', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Popcorn? Check! Filt? Check! Bästa filmen? Vi väljer tillsammans! Gör dig redo för en episk filmkväll! 🎥', sender: 'Varma hälsningar' },
        en: { name: 'Movie Night', title: 'Movie Night! 🎬🍿', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Popcorn? Check! Blanket? Check! Best movie? We'll pick together! Get ready for an epic movie night! 🎥", sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-karaoke',
      category: 'activity',
      colors: { background: '#FCE4EC', accent: '#E91E63', text: '#880E4F', heading: '#AD1457' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '3px solid #E91E63', borderRadius: '20px', emoji: '🎤🎵🎶⭐' },
      searchKeywords: ['karaoke', 'sjunga', 'sing', 'musik', 'music'],
      texts: {
        sv: { name: 'Karaokeparty', title: 'Karaokeparty! 🎤🎶', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Gör dig redo att sjunga ut! Det spelar ingen roll om du sjunger som en ängel eller en kråka – vi har kul! 🎵', sender: 'Varma hälsningar' },
        en: { name: 'Karaoke Party', title: 'Karaoke Party! 🎤🎶', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Get ready to sing your heart out! It doesn't matter if you sing like an angel or a crow – we're having fun! 🎵", sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-gaming',
      category: 'activity',
      colors: { background: '#0D1117', accent: '#58A6FF', text: '#C9D1D9', heading: '#58A6FF' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #58A6FF', borderRadius: '20px', emoji: '🎮🕹️🏆💥' },
      searchKeywords: ['spel', 'gaming', 'tv-spel', 'datorspel', 'lan', 'minecraft', 'roblox', 'fortnite'],
      texts: {
        sv: { name: 'Gamingkalas', title: 'Gamingkalas! 🎮', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Controllers laddade, snacks redo – det är dags för det ultimata gaming-kalaset! GG! 🏆💥', sender: 'Varma hälsningar' },
        en: { name: 'Gaming Party', title: 'Gaming Party! 🎮', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Controllers charged, snacks ready – it's time for the ultimate gaming party! GG! 🏆💥", sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-craft',
      category: 'activity',
      colors: { background: '#FFFDE7', accent: '#FF6F00', text: '#4E342E', heading: '#E65100' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'rainbow', borderStyle: '3px solid #FF6F00', borderRadius: '20px', emoji: '🎨🖌️✨🌈' },
      searchKeywords: ['pyssel', 'craft', 'konst', 'art', 'måla', 'paint', 'pysselkalas'],
      texts: {
        sv: { name: 'Pysselkalas', title: 'Pysselkalas! 🎨🖌️', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Penslar, glitter och fantasi! Vi skapar, målar och har det kreativt! Ta med ditt konstnärshjärta! ✨', sender: 'Varma hälsningar' },
        en: { name: 'Art & Craft Party', title: 'Art & Craft Party! 🎨🖌️', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Brushes, glitter and imagination! We create, paint and get creative! Bring your inner artist! ✨', sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-baking',
      category: 'activity',
      colors: { background: '#FFF3E0', accent: '#F4511E', text: '#3E2723', heading: '#BF360C' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'soft', borderStyle: '3px solid #F4511E', borderRadius: '20px', emoji: '🧁🎂🍰👩‍🍳' },
      searchKeywords: ['bak', 'baka', 'baking', 'tårta', 'cake', 'cupcake', 'bakkalas'],
      texts: {
        sv: { name: 'Bakkalas', title: 'Bakkalas! 🧁🎂', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Mjöl, socker och kärlek! Vi bakar, dekorerar och smakar – var och en tar med sig sin skapelse hem! 👩‍🍳', sender: 'Varma hälsningar' },
        en: { name: 'Baking Party', title: 'Baking Party! 🧁🎂', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Flour, sugar and love! We bake, decorate and taste – everyone takes their creation home! 👩‍🍳', sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-gamenight',
      category: 'activity',
      colors: { background: '#263238', accent: '#26A69A', text: '#ECEFF1', heading: '#80CBC4' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #26A69A', borderRadius: '20px', emoji: '🎲🃏🏆🧩' },
      searchKeywords: ['spelkväll', 'brädspel', 'board game', 'game night', 'spel'],
      texts: {
        sv: { name: 'Spelkväll', title: 'Spelkväll! 🎲🃏', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Tärningarna är kastade! Vi spelar, bluffar, strategiserar och har det fantastiskt! Ta med ditt favoritspel! 🧩', sender: 'Varma hälsningar' },
        en: { name: 'Game Night', title: 'Game Night! 🎲🃏', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "The dice are cast! We'll play, bluff, strategize and have a blast! Bring your favorite game! 🧩", sender: 'Warm regards' },
      },
    },
    {
      id: 'activity-quiz',
      category: 'activity',
      colors: { background: '#1A237E', accent: '#FFD740', text: '#E8EAF6', heading: '#FFD740' },
      fonts: { heading: "'Fredoka', cursive", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #FFD740', borderRadius: '20px', emoji: '🧠❓🏆📝' },
      searchKeywords: ['quiz', 'frågesport', 'trivia', 'pub', 'quizkväll'],
      texts: {
        sv: { name: 'Quizkväll', title: 'Quizkväll! 🧠❓', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Testa dina kunskaper! Samla ditt lag och gör dig redo för den ultimata frågesportskvällen! 🏆📝', sender: 'Varma hälsningar' },
        en: { name: 'Quiz Night', title: 'Quiz Night! 🧠❓', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Test your knowledge! Gather your team and get ready for the ultimate quiz night! 🏆📝', sender: 'Warm regards' },
      },
    },

    // ── Holiday ──────────────────────────────
    {
      id: 'holiday-halloween',
      category: 'holiday',
      colors: { background: '#1A1A1A', accent: '#FF6F00', text: '#E0E0E0', heading: '#FF9800' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'minimal-dark', borderStyle: '3px solid #FF6F00', borderRadius: '20px', emoji: '🎃👻🦇🕷️' },
      searchKeywords: ['halloween', 'skräck', 'horror', 'spöke', 'ghost', 'monster', 'pumpa'],
      texts: {
        sv: { name: 'Halloweenparty', title: 'Halloweenparty! 🎃👻', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Muahahaha! Klä ut dig i din läskigaste dräkt och kom – om du vågar! Det blir skräck, godis och spökjakt! 🦇', sender: 'Varma hälsningar' },
        en: { name: 'Halloween Party', title: 'Halloween Party! 🎃👻', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Muahahaha! Put on your scariest costume and come – if you dare! There will be scares, candy and ghost hunting! 🦇', sender: 'Warm regards' },
      },
    },
    {
      id: 'holiday-christmas',
      category: 'holiday',
      colors: { background: '#1B5E20', accent: '#F44336', text: '#FFFFFF', heading: '#FFD54F' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'elegant', borderStyle: '3px solid #F44336', borderRadius: '20px', emoji: '🎄🎅⭐🎁' },
      searchKeywords: ['jul', 'christmas', 'xmas', 'tomte', 'santa', 'julfest'],
      texts: {
        sv: { name: 'Julfest', title: 'Julfest! 🎄⭐', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Ho ho ho! Fira julen med oss! Glögg, pepparkakor, julmusik och kanske ett besök av tomten! 🎅🎁', sender: 'Varma hälsningar' },
        en: { name: 'Christmas Party', title: 'Christmas Party! 🎄⭐', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Ho ho ho! Celebrate Christmas with us! Mulled wine, gingerbread, holiday music and maybe a visit from Santa! 🎅🎁', sender: 'Warm regards' },
      },
    },
    {
      id: 'holiday-midsummer',
      category: 'holiday',
      colors: { background: '#E8F5E9', accent: '#FFD54F', text: '#1B5E20', heading: '#2E7D32' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'elegant', borderStyle: '3px solid #FFD54F', borderRadius: '20px', emoji: '🌻🌸🌿☀️' },
      searchKeywords: ['midsommar', 'midsummer', 'sommar', 'summer', 'midsommarstång'],
      texts: {
        sv: { name: 'Midsommarfest', title: 'Midsommarfest! 🌻🌸', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Dansa runt stången, plocka blommor och njut av den ljusaste kvällen! Jordgubbar och sill ingår! 🇸🇪☀️', sender: 'Varma hälsningar' },
        en: { name: 'Midsummer Party', title: 'Midsummer Party! 🌻🌸', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Dance around the maypole, pick flowers and enjoy the brightest evening! Strawberries and herring included! 🇸🇪☀️', sender: 'Warm regards' },
      },
    },
    {
      id: 'holiday-newyear',
      category: 'holiday',
      colors: { background: '#0D1B2A', accent: '#FFD700', text: '#F0E6D3', heading: '#FFD700' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '3px solid #FFD700', borderRadius: '20px', emoji: '🎆🥂🎉🕛' },
      searchKeywords: ['nyår', 'new year', 'nyårsafton', 'fyrverkeri', 'fireworks'],
      texts: {
        sv: { name: 'Nyårsfest', title: 'Nyårsfest! 🎆🥂', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Räkna ner till midnatt med oss! Bubbel, fyrverkerier och goda löften – vi startar det nya året med stil! 🎉', sender: 'Varma hälsningar' },
        en: { name: "New Year's Party", title: "New Year's Party! 🎆🥂", subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Count down to midnight with us! Bubbles, fireworks and resolutions – we're starting the new year in style! 🎉", sender: 'Warm regards' },
      },
    },
    {
      id: 'holiday-easter',
      category: 'holiday',
      colors: { background: '#FFFDE7', accent: '#FFB300', text: '#4E342E', heading: '#F57F17' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'confetti', borderStyle: '3px solid #FFB300', borderRadius: '20px', emoji: '🐣🥚🐰🌷' },
      searchKeywords: ['påsk', 'easter', 'påskhare', 'ägg', 'eggs'],
      texts: {
        sv: { name: 'Påskkalas', title: 'Påskkalas! 🐣🥚', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Påskharen har gömt ägg överallt! Kom på äggletning, pysselstuga och ät godis tills du inte kan mer! 🐰🌷', sender: 'Varma hälsningar' },
        en: { name: 'Easter Party', title: 'Easter Party! 🐣🥚', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "The Easter bunny has hidden eggs everywhere! Come for an egg hunt, crafts and eat candy until you can't anymore! 🐰🌷", sender: 'Warm regards' },
      },
    },
    {
      id: 'holiday-walpurgis',
      category: 'holiday',
      colors: { background: '#FFF3E0', accent: '#FF6D00', text: '#3E2723', heading: '#E65100' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'elegant', borderStyle: '3px solid #FF6D00', borderRadius: '20px', emoji: '🔥🌸🎵🌅' },
      searchKeywords: ['valborg', 'walpurgis', 'vår', 'spring', 'brasa', 'bonfire'],
      texts: {
        sv: { name: 'Valborgsfest', title: 'Valborgsfest! 🔥🌸', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Välkomna våren runt brasan! Vi sjunger, grillar och njuter av den första riktiga vårkvällen! 🌅', sender: 'Varma hälsningar' },
        en: { name: 'Walpurgis Party', title: 'Walpurgis Party! 🔥🌸', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Welcome spring around the bonfire! We'll sing, grill and enjoy the first real spring evening! 🌅", sender: 'Warm regards' },
      },
    },

    // ── Event ────────────────────────────────
    {
      id: 'event-graduation',
      category: 'event',
      colors: { background: '#FFFFFF', accent: '#1565C0', text: '#0D47A1', heading: '#0D47A1' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'elegant', borderStyle: '3px solid #1565C0', borderRadius: '20px', emoji: '🎓🎉🍾🎊' },
      searchKeywords: ['student', 'graduation', 'examen', 'studenten', 'mössa'],
      texts: {
        sv: { name: 'Studentfest', title: 'Studentfest! 🎓🎉', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Mösspåtagning och champagne! Fira denna milstolpe med oss – det blir tal, skratt och minnen för livet! 🍾', sender: 'Varma hälsningar' },
        en: { name: 'Graduation Party', title: 'Graduation Party! 🎓🎉', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Caps on and champagne popping! Celebrate this milestone with us – there'll be speeches, laughter and memories for life! 🍾", sender: 'Warm regards' },
      },
    },
    {
      id: 'event-bachelorette',
      category: 'event',
      colors: { background: '#FFF0F5', accent: '#FF4081', text: '#880E4F', heading: '#C2185B' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '3px solid #FF4081', borderRadius: '20px', emoji: '💍👰🥂💖' },
      searchKeywords: ['möhippa', 'hen party', 'bachelorette', 'brud', 'bride'],
      texts: {
        sv: { name: 'Möhippa', title: 'Möhippa! 💍🥂', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Vi firar bruden! En oförglömlig kväll med lekar, bubbel och massor av kärlek väntar! 💖👰', sender: 'Varma hälsningar' },
        en: { name: 'Bachelorette Party', title: 'Bachelorette Party! 💍🥂', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "We're celebrating the bride! An unforgettable evening with games, bubbles and lots of love awaits! 💖👰", sender: 'Warm regards' },
      },
    },
    {
      id: 'event-bachelor',
      category: 'event',
      colors: { background: '#263238', accent: '#FFD54F', text: '#ECEFF1', heading: '#FFD54F' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'neon', borderStyle: '3px solid #FFD54F', borderRadius: '20px', emoji: '🎩🍺🎉🏆' },
      searchKeywords: ['svensexa', 'bachelor', 'stag', 'brudgum', 'groom'],
      texts: {
        sv: { name: 'Svensexa', title: 'Svensexa! 🎩🍺', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Sista kvällen som fri man! Vi gör den oförglömlig med äventyr, skratt och brödraskapet! 🏆🎉', sender: 'Varma hälsningar' },
        en: { name: 'Bachelor Party', title: 'Bachelor Party! 🎩🍺', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Last night of freedom! We're making it unforgettable with adventure, laughs and brotherhood! 🏆🎉", sender: 'Warm regards' },
      },
    },
    {
      id: 'event-babyshower',
      category: 'event',
      colors: { background: '#FFF8E1', accent: '#FFB74D', text: '#4E342E', heading: '#EF6C00' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'floral', borderStyle: '3px solid #FFB74D', borderRadius: '20px', emoji: '👶🍼🧸💕' },
      searchKeywords: ['baby shower', 'babyshower', 'bebis', 'baby', 'nyfödda'],
      texts: {
        sv: { name: 'Baby Shower', title: 'Baby Shower! 👶🍼', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'En liten stjärna är på väg! Fira med oss med lekar, presenter och massor av kärlek! 🧸💕', sender: 'Varma hälsningar' },
        en: { name: 'Baby Shower', title: 'Baby Shower! 👶🍼', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'A little star is on the way! Celebrate with us with games, gifts and lots of love! 🧸💕', sender: 'Warm regards' },
      },
    },
    {
      id: 'event-masquerade',
      category: 'event',
      colors: { background: '#1A1A2E', accent: '#C9A84C', text: '#E8E8E8', heading: '#C9A84C' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'luxe', borderStyle: '3px solid #C9A84C', borderRadius: '20px', emoji: '🎭✨🦹🎩' },
      searchKeywords: ['maskerad', 'masquerade', 'mask', 'utklädnad', 'kostym'],
      texts: {
        sv: { name: 'Maskeradfest', title: 'Maskeradfest! 🎭✨', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Ta på dig din mask och kliv in i mystiken! En kväll av hemligheter, elegans och magiska möten väntar! 🎩', sender: 'Varma hälsningar' },
        en: { name: 'Masquerade Party', title: 'Masquerade Party! 🎭✨', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: 'Put on your mask and step into the mystery! An evening of secrets, elegance and magical encounters awaits! 🎩', sender: 'Warm regards' },
      },
    },
    {
      id: 'event-bbq',
      category: 'event',
      colors: { background: '#FBE9E7', accent: '#E64A19', text: '#3E2723', heading: '#BF360C' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'botanical', borderStyle: '3px solid #E64A19', borderRadius: '20px', emoji: '🍖🔥🌽🍻' },
      searchKeywords: ['grillkväll', 'grill', 'bbq', 'barbecue', 'grilla'],
      texts: {
        sv: { name: 'Grillkväll', title: 'Grillkväll! 🍖🔥', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Grillen är varm och vi har marinerat allt! Kom hungrig – det blir burgare, korv, sallad och gott sällskap! 🌽🍻', sender: 'Varma hälsningar' },
        en: { name: 'BBQ Party', title: 'BBQ Party! 🍖🔥', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "The grill is hot and we've marinated everything! Come hungry – there'll be burgers, sausages, salad and great company! 🌽🍻", sender: 'Warm regards' },
      },
    },
    {
      id: 'event-picnic',
      category: 'event',
      colors: { background: '#F1F8E9', accent: '#7CB342', text: '#33691E', heading: '#558B2F' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'botanical', borderStyle: '3px solid #7CB342', borderRadius: '20px', emoji: '🧺🌻🥪☀️' },
      searchKeywords: ['picknick', 'picnic', 'park', 'utomhus', 'outdoor'],
      texts: {
        sv: { name: 'Picknick', title: 'Picknick! 🧺🌻', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Packa filten och kom till parken! Vi delar goda mackor, frukt och sol – den perfekta dagen! ☀️🥪', sender: 'Varma hälsningar' },
        en: { name: 'Picnic Party', title: 'Picnic Party! 🧺🌻', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Pack your blanket and come to the park! We'll share delicious sandwiches, fruit and sunshine – the perfect day! ☀️🥪", sender: 'Warm regards' },
      },
    },
    {
      id: 'event-beach',
      category: 'event',
      colors: { background: '#E0F7FA', accent: '#00ACC1', text: '#006064', heading: '#00838F' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'botanical', borderStyle: '3px solid #00ACC1', borderRadius: '20px', emoji: '🏖️🌊🐚☀️' },
      searchKeywords: ['strand', 'beach', 'hav', 'sea', 'ocean', 'strandparty'],
      texts: {
        sv: { name: 'Strandparty', title: 'Strandparty! 🏖️🌊', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Sanden mellan tårna och solen i ansiktet! Vi badar, bygger sandslott och chillar vid havet! 🐚☀️', sender: 'Varma hälsningar' },
        en: { name: 'Beach Party', title: 'Beach Party! 🏖️🌊', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Sand between your toes and sun on your face! We'll swim, build sandcastles and chill by the ocean! 🐚☀️", sender: 'Warm regards' },
      },
    },
    {
      id: 'event-camping',
      category: 'event',
      colors: { background: '#2E3B2E', accent: '#FF8F00', text: '#E8E8E0', heading: '#FFB74D' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'treasure', borderStyle: '3px solid #FF8F00', borderRadius: '20px', emoji: '🏕️🔥🌲⭐' },
      searchKeywords: ['camping', 'tält', 'läger', 'camp', 'scout', 'campingfest'],
      texts: {
        sv: { name: 'Campingfest', title: 'Campingfest! 🏕️🔥', subtitle: 'Du är inbjuden till', date: 'Datum och tid', location: 'Plats', message: 'Tält, lägereld och stjärnhimmel! Vi grillar korv, berättar spökhistorier och sover under stjärnorna! 🌲⭐', sender: 'Varma hälsningar' },
        en: { name: 'Camping Party', title: 'Camping Party! 🏕️🔥', subtitle: "You're invited to", date: 'Date and time', location: 'Location', message: "Tents, campfire and starry sky! We'll grill sausages, tell ghost stories and sleep under the stars! 🌲⭐", sender: 'Warm regards' },
      },
    },

    // ── Garden ──────────────────────────────
    {
      id: 'garden',
      i18nPrefix: 'template.garden',
      category: 'garden',
      colors: { background: '#E8F5E9', accent: '#66BB6A', text: '#1B5E20', heading: '#2E7D32' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      headingSize: '2.2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'botanical', borderStyle: '2px solid #A5D6A7', borderRadius: '16px', emoji: '🌿🌸🍃🌺' },
      thumbnailGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)',
      searchKeywords: ['trädgård', 'garden', 'blommor', 'flowers', 'sommar', 'summer'],
    },
    {
      id: 'garden-sunflower',
      i18nPrefix: 'template.garden-sunflower',
      category: 'garden',
      colors: { background: '#FFFDE7', accent: '#F9A825', text: '#33691E', heading: '#F57F17' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2.1rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'sunny', borderStyle: '3px solid #FFD54F', borderRadius: '20px', emoji: '🌻🌞🍋🌾' },
      thumbnailGradient: 'linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 50%, #FFF176 100%)',
      searchKeywords: ['solros', 'sunflower', 'sommar', 'summer', 'sol', 'sun'],
    },
    {
      id: 'garden-autumn',
      i18nPrefix: 'template.garden-autumn',
      category: 'garden',
      colors: { background: '#FBE9E7', accent: '#E64A19', text: '#3E2723', heading: '#BF360C' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'autumn', borderStyle: '2px solid #FFAB91', borderRadius: '16px', emoji: '🍂🍁🍄🌰' },
      thumbnailGradient: 'linear-gradient(135deg, #FBE9E7 0%, #FFCCBC 50%, #FFAB91 100%)',
      searchKeywords: ['höst', 'autumn', 'fall', 'löv', 'leaves'],
    },

    // ── Dinner ──────────────────────────────
    {
      id: 'dinner',
      i18nPrefix: 'template.dinner',
      category: 'dinner',
      colors: { background: '#1A1A2E', accent: '#C9A84C', text: '#E8E8E8', heading: '#C9A84C' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'minimal-dark', borderStyle: '1px solid #C9A84C', borderRadius: '8px' },
      thumbnailGradient: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
      searchKeywords: ['middag', 'dinner', 'fest', 'party', 'elegans'],
    },
    {
      id: 'dinner-champagne',
      i18nPrefix: 'template.dinner-champagne',
      category: 'dinner',
      colors: { background: '#0D1B2A', accent: '#FFD700', text: '#F0E6D3', heading: '#FFD700' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2.1rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'luxe', borderStyle: '2px solid #FFD700', borderRadius: '12px', emoji: '🥂✨🌙⭐' },
      thumbnailGradient: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 50%, #2C3E50 100%)',
      searchKeywords: ['champagne', 'bubbel', 'bubbles', 'fest', 'celebration'],
    },
    {
      id: 'dinner-casual',
      i18nPrefix: 'template.dinner-casual',
      category: 'dinner',
      colors: { background: '#FFF3E0', accent: '#26A69A', text: '#37474F', heading: '#00897B' },
      fonts: { heading: "'Fredoka', cursive", body: "'Nunito', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'relaxed', borderStyle: '3px solid #80CBC4', borderRadius: '20px', emoji: '🍕🎮🎲🎵' },
      thumbnailGradient: 'linear-gradient(135deg, #FFF3E0 0%, #E0F2F1 50%, #B2DFDB 100%)',
      searchKeywords: ['casual', 'häng', 'hangout', 'pizza', 'chill'],
    },

    // ── Simple ──────────────────────────────
    {
      id: 'simple',
      i18nPrefix: 'template.simple',
      category: 'simple',
      colors: { background: '#FFFFFF', accent: '#6C5CE7', text: '#2D3436', heading: '#6C5CE7' },
      fonts: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'clean', borderStyle: '2px solid #DFE6E9', borderRadius: '12px' },
      thumbnailGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #DFE6E9 100%)',
      searchKeywords: ['enkel', 'simple', 'ren', 'clean', 'minimalist'],
    },
    {
      id: 'simple-mono',
      i18nPrefix: 'template.simple-mono',
      category: 'simple',
      colors: { background: '#FFFFFF', accent: '#000000', text: '#1A1A1A', heading: '#000000' },
      fonts: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
      headingSize: '2rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'mono', borderStyle: '2px solid #1A1A1A', borderRadius: '4px' },
      thumbnailGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E0E0E0 100%)',
      searchKeywords: ['monokrom', 'monochrome', 'svart', 'black', 'vit', 'white'],
    },
    {
      id: 'simple-pastel',
      i18nPrefix: 'template.simple-pastel',
      category: 'simple',
      colors: { background: '#F3E5F5', accent: '#CE93D8', text: '#4A148C', heading: '#7B1FA2' },
      fonts: { heading: "'Cormorant Garamond', serif", body: "'Inter', sans-serif" },
      headingSize: '2.1rem', bodySize: '0.95rem', textAlign: 'center',
      decorations: { type: 'soft', borderStyle: '2px solid #E1BEE7', borderRadius: '20px', emoji: '🌸💜✨🦋' },
      thumbnailGradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 50%, #CE93D8 100%)',
      searchKeywords: ['pastell', 'pastel', 'mjuk', 'soft', 'lila', 'purple'],
    },
  ];

  function getAll() {
    return templates;
  }

  function getById(id) {
    return templates.find(t => t.id === id) || null;
  }

  function getByCategory(category) {
    if (!category || category === 'all') return templates;
    return templates.filter(t => t.category === category);
  }

  function getCategories() {
    return ['all', 'kids', 'birthday', 'sport', 'activity', 'holiday', 'event', 'garden', 'dinner', 'simple'];
  }

  function getDefaultTexts(template) {
    if (template.texts) {
      const lang = PartyI18n.getLanguage();
      const txt = template.texts[lang] || template.texts.sv;
      return { ...txt, rsvp: txt.rsvp || '' };
    }
    const t = PartyI18n.t;
    const p = template.i18nPrefix;
    return {
      title: t(`${p}.title`),
      subtitle: t(`${p}.subtitle`),
      date: t(`${p}.date`),
      location: t(`${p}.location`),
      rsvp: '',
      message: t(`${p}.message`),
      sender: t(`${p}.sender`),
    };
  }

  function getName(template) {
    if (template.texts) {
      const lang = PartyI18n.getLanguage();
      return (template.texts[lang] || template.texts.sv).name;
    }
    return PartyI18n.t(`${template.i18nPrefix}.name`);
  }

  function search(query) {
    if (!query || !query.trim()) return templates;
    const q = query.toLowerCase().trim();
    return templates.filter(t => {
      if (t.searchKeywords && t.searchKeywords.some(kw => kw.includes(q) || q.includes(kw))) return true;
      const name = getName(t).toLowerCase();
      if (name.includes(q)) return true;
      return false;
    });
  }

  return { getAll, getById, getByCategory, getCategories, getDefaultTexts, getName, search };
})();
