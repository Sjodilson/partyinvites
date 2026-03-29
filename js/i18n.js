/* ============================================
   PartyInvites – i18n Module
   Internationalization (Swedish / English)
   ============================================ */

const PartyI18n = (() => {
  const translations = {
    sv: {
      'app.title': 'Partyinvites',
      'app.subtitle': 'Skapa vackra inbjudningskort',

      'gallery.title': 'Välj en mall',
      'gallery.subtitle': 'Klicka på en mall för att börja designa ditt inbjudningskort',
      'gallery.category.all': 'Alla',
      'gallery.category.kids': 'Barnkalas',
      'gallery.category.birthday': 'Födelsedag',
      'gallery.category.sport': '🏆 Sport',
      'gallery.category.activity': '🎮 Aktiviteter',
      'gallery.category.holiday': '🎄 Högtider',
      'gallery.category.event': '🥂 Event',
      'gallery.category.garden': 'Trädgårdsfest',
      'gallery.category.dinner': 'Middag & Fest',
      'gallery.category.simple': 'Enkel',

      'gallery.search.placeholder': 'Sök mallar... t.ex. bowling, halloween, baby shower',
      'gallery.search.noResults': 'Inga mallar hittades. Prova ett annat sökord!',

      'editor.back': '← Tillbaka',
      'editor.export': 'Exportera',
      'editor.share': 'Dela',
      'editor.undo': 'Ångra',
      'editor.redo': 'Gör om',

      'editor.tab.text': 'Text',
      'editor.tab.design': 'Design',
      'editor.tab.image': 'Bild',
      'editor.tab.decor': 'Dekor',

      'editor.field.title': 'Rubrik',
      'editor.field.subtitle': 'Underrubrik',
      'editor.field.date': 'Datum & Tid',
      'editor.field.location': 'Plats',
      'editor.field.rsvp': 'OSA senast (valfritt)',
      'editor.field.message': 'Meddelande',
      'editor.field.sender': 'Avsändare',

      'editor.design.background': 'Bakgrundsfärg',
      'editor.design.accent': 'Accentfärg',
      'editor.design.textColor': 'Textfärg',
      'editor.design.presets': 'Snabbval',
      'editor.design.headingColor': 'Rubrikfärg',
      'editor.design.border': 'Ram',
      'editor.design.borderRadius': 'Hörnradie',
      'editor.design.borderColor': 'Ramfärg',
      'editor.design.borderStyle': 'Ramstil',
      'editor.design.borderWidth': 'Ramtjocklek',
      'editor.design.borderNone': 'Ingen',
      'editor.design.borderSolid': 'Heldragen',
      'editor.design.borderDashed': 'Streckad',
      'editor.design.borderDotted': 'Prickad',
      'editor.design.decorations': 'Dekorationsstil',
      'editor.design.gradients': 'Bakgrundsgradienter',

      'editor.font.family': 'Typsnitt',
      'editor.font.size': 'Storlek',
      'editor.font.align': 'Justering',
      'editor.font.bodyFamily': 'Brödtext typsnitt',
      'editor.font.bodySize': 'Brödtext storlek',

      'editor.image.upload': 'Ladda upp bilder',
      'editor.image.remove': 'Ta bort',
      'editor.image.drop': 'Dra och släpp eller klicka för att ladda upp',
      'editor.image.placed': 'Uppladdade bilder',
      'editor.image.clearAll': 'Ta bort alla bilder',
      'editor.image.none': 'Inga bilder tillagda',

      'editor.stickers.title': 'Dekoration',
      'editor.stickers.add': 'Klicka för att lägga till på kortet',
      'editor.stickers.placed': 'Placerade dekorationer',
      'editor.stickers.none': 'Inga dekorationer ännu – välj nedan!',
      'editor.stickers.remove': 'Ta bort',
      'editor.stickers.clear': 'Rensa alla',

      'stickers.category.party': '🎉 Fest',
      'stickers.category.hearts': '❤️ Hjärtan',
      'stickers.category.stars': '⭐ Stjärnor',
      'stickers.category.nature': '🌸 Natur',
      'stickers.category.food': '🎂 Mat',
      'stickers.category.animals': '🦄 Djur',
      'stickers.category.adventure': '🏴‍☠️ Äventyr',
      'stickers.category.music': '🎵 Musik',
      'stickers.category.sports': '🎳 Sport',
      'stickers.category.misc': '🎭 Övrigt',

      'export.title': 'Exportera ditt kort',
      'export.png': 'Ladda ner som PNG',
      'export.pdf': 'Ladda ner som PDF',
      'export.pngDesc': 'Högupplöst bild – perfekt att skicka digitalt',
      'export.pdfDesc': 'Utskriftsvänlig PDF i A6-format',
      'export.generating': 'Genererar…',

      'share.title': 'Dela ditt kort',
      'share.copyLink': 'Kopiera länk',
      'share.email': 'Skicka via e-post',
      'share.copied': 'Kopierat till urklipp!',
      'share.emailSubject': 'Du är inbjuden!',
      'share.emailBody': 'Kolla in min inbjudan',

      // ── Kids ─────────────────────────────────────
      'template.kids.name': 'Barnkalas',
      'template.kids.title': 'KALAS! 🎈🎈🎈',
      'template.kids.subtitle': 'Du är inbjuden till',
      'template.kids.date': 'Lördag 15 mars kl 14:00',
      'template.kids.location': 'Hemma hos oss, Solvägen 3',
      'template.kids.message': 'WOOHOO! Det blir tårta till tak, ballonger i alla färger och lekar som aldrig tar slut! Ta med ditt bästa humör – vi festar loss! 🎊',
      'template.kids.sender': 'Kram, Anna & Leo',

      'template.kids-unicorn.name': 'Enhörningskalas',
      'template.kids-unicorn.title': 'Magiskt Enhörningskalas! 🦄',
      'template.kids-unicorn.subtitle': 'Du är inbjuden till',
      'template.kids-unicorn.date': 'Lördag 22 mars kl 13:00',
      'template.kids-unicorn.location': 'Regnbågsvägen 7',
      'template.kids-unicorn.message': 'Glitter, magi och enhörningar! Kom i din finaste utklädnad – vi rider på regnbågar och äter stjärnformade kakor! ✨',
      'template.kids-unicorn.sender': 'Magiska kramar, Ella',

      'template.kids-superhero.name': 'Superhjältekalas',
      'template.kids-superhero.title': 'Superhjältekalas! 🦸',
      'template.kids-superhero.subtitle': 'Alla superhjältar kallas till',
      'template.kids-superhero.date': 'Söndag 5 april kl 14:00',
      'template.kids-superhero.location': 'Hemliga högkvarteret (Storgatan 15)',
      'template.kids-superhero.message': 'POW! BAM! Vi behöver DIG för ett hemligt uppdrag! Ta på dig din cape och kom – äventyret väntar! 💥',
      'template.kids-superhero.sender': 'Från Agent Leo',

      'template.kids-pirate.name': 'Piratkalas',
      'template.kids-pirate.title': 'Piratäventyr! 🏴‍☠️',
      'template.kids-pirate.subtitle': 'Arrr! Du är inbjuden till',
      'template.kids-pirate.date': 'Lördag 12 april kl 13:00',
      'template.kids-pirate.location': 'Piratskeppen vid Sjövägen 8',
      'template.kids-pirate.message': 'Hissa flaggan och gör dig redo för skattsökning, vattenlek och pirattårta! Ta med din bästa pirathatt! ⚓',
      'template.kids-pirate.sender': 'Kapten Sixten & besättningen',

      // ── Birthday ─────────────────────────────────
      'template.birthday.name': 'Födelsedagskalas',
      'template.birthday.title': '🎂 Födelsedagsfest! 🎂',
      'template.birthday.subtitle': 'Du är varmt välkommen till',
      'template.birthday.date': 'Fredag 20 mars kl 19:00',
      'template.birthday.location': 'Restaurang Gondolen, Stockholm',
      'template.birthday.message': 'Åren flyger – men det gör inget när man har så fantastiska vänner! Kom och fira, det blir dans, skratt och en tårta som tar andan ur dig!',
      'template.birthday.sender': 'Med kärlek, Erik',

      'template.birthday-rainbow.name': 'Regnbågsfest',
      'template.birthday-rainbow.title': 'Regnbågsfest! 🌈',
      'template.birthday-rainbow.subtitle': 'Fira med oss i alla färger',
      'template.birthday-rainbow.date': 'Fredag 28 mars kl 18:00',
      'template.birthday-rainbow.location': 'Festlokalen Prisma',
      'template.birthday-rainbow.message': 'Livet är för kort för tråkiga färger! Klä dig i regnbågens alla nyanser och kom och dansa natten lång! 🎨',
      'template.birthday-rainbow.sender': 'Puss & kram, Sofia',

      'template.birthday-disco.name': 'Discofest',
      'template.birthday-disco.title': 'DISCO NIGHT 🪩',
      'template.birthday-disco.subtitle': 'Gör dig redo för',
      'template.birthday-disco.date': 'Lördag 4 april kl 20:00',
      'template.birthday-disco.location': 'Studio 54, Drottninggatan 10',
      'template.birthday-disco.message': 'Dammiga beats, glittrande discokula och dansgolv som glöder! Dra på dig den mest fabulösa outfiten! 🕺',
      'template.birthday-disco.sender': 'DJ Marcus & gänget',

      'template.birthday-rose.name': 'Rosa Dröm',
      'template.birthday-rose.title': 'Rosa Dröm ✨',
      'template.birthday-rose.subtitle': 'Du är hjärtligt inbjuden till',
      'template.birthday-rose.date': 'Söndag 16 mars kl 16:00',
      'template.birthday-rose.location': 'Café Rosengården',
      'template.birthday-rose.message': 'En eftermiddag fylld av rosé, rosor och skratt. Finklädsel uppskattas – men mest av allt vill vi ha dig där! 🌹',
      'template.birthday-rose.sender': 'All kärlek, Hanna',

      // ── Garden ───────────────────────────────────
      'template.garden.name': 'Trädgårdsfest',
      'template.garden.title': 'Trädgårdsfest! 🌿🌸',
      'template.garden.subtitle': 'Välkommen till vår',
      'template.garden.date': 'Söndag 21 juni kl 15:00',
      'template.garden.location': 'Storgatan 12, trädgården',
      'template.garden.message': 'Blommorna blommar, solen skiner och vi har dukat upp drömmen av en trädgårdsfest. Lyxpicknick, kubb och kall lemonad väntar! 🍋',
      'template.garden.sender': 'Hälsningar, Maria & Per',

      'template.garden-sunflower.name': 'Solrosfest',
      'template.garden-sunflower.title': 'Solrosfest! 🌻',
      'template.garden-sunflower.subtitle': 'Kom och njut av sommaren på',
      'template.garden-sunflower.date': 'Lördag 28 juni kl 12:00',
      'template.garden-sunflower.location': 'Ängsvägen 5, bakgården',
      'template.garden-sunflower.message': 'Solsken, solrosor och sommarmat! Vi grillar, spelar kubb och njuter av sommaren tillsammans. 🌞',
      'template.garden-sunflower.sender': 'Sommarhälsningar, Karin & Ola',

      'template.garden-autumn.name': 'Höstfest',
      'template.garden-autumn.title': 'Höstfest 🍂',
      'template.garden-autumn.subtitle': 'Fira höstens ankomst med oss',
      'template.garden-autumn.date': 'Lördag 20 september kl 15:00',
      'template.garden-autumn.location': 'Skogsstugan, Ekbacken',
      'template.garden-autumn.message': 'Varmt äppelcider, kanelbullar och en promenad bland höstlöven. Ta med filtar – vi myser utomhus! 🍁',
      'template.garden-autumn.sender': 'Höstliga hälsningar, Lisa',

      // ── Dinner ───────────────────────────────────
      'template.dinner.name': 'Middag & Fest',
      'template.dinner.title': '✨ Middagsbjudning ✨',
      'template.dinner.subtitle': 'Du är inbjuden till en exklusiv',
      'template.dinner.date': 'Lördag 10 april kl 18:30',
      'template.dinner.location': 'Våningen, Kungsgatan 5',
      'template.dinner.message': 'Stearinljus, vit duk och fem rätter som tar dig runt världen. En kväll att minnas – vi hoppas du kan vara med. 🕯️',
      'template.dinner.sender': 'Varma hälsningar, Johan',

      'template.dinner-champagne.name': 'Champagnefest',
      'template.dinner-champagne.title': 'Champagnefest 🥂',
      'template.dinner-champagne.subtitle': 'Lyft glaset med oss på',
      'template.dinner-champagne.date': 'Fredag 17 april kl 19:00',
      'template.dinner-champagne.location': 'Terrassen, Grand Hotel',
      'template.dinner-champagne.message': 'En kväll av bubblor, skratt och elegans under stjärnorna. Klä dig i ditt finaste – det här blir magiskt! 🌙',
      'template.dinner-champagne.sender': 'Skål! / Johan & Linda',

      'template.dinner-casual.name': 'Casual Hangout',
      'template.dinner-casual.title': 'Häng med oss! 🍕',
      'template.dinner-casual.subtitle': 'Ingen dress code, bara bra stämning',
      'template.dinner-casual.date': 'Lördag 25 april kl 17:00',
      'template.dinner-casual.location': 'Hos mig, Bäckgatan 3',
      'template.dinner-casual.message': 'Pizza, brädspel och chill! Ta med din favoritsallad om du vill – resten fixar vi. Kom som du är! 🎮',
      'template.dinner-casual.sender': 'Vi ses! / Alex',

      // ── Simple ───────────────────────────────────
      'template.simple.name': 'Enkel & Ren',
      'template.simple.title': 'Du är inbjuden ♡',
      'template.simple.subtitle': 'Välkommen till vår fest',
      'template.simple.date': 'Datum och tid',
      'template.simple.location': 'Plats',
      'template.simple.message': 'Vi skulle bli otroligt glada om du vill fira detta speciella tillfälle med oss!',
      'template.simple.sender': 'Varma hälsningar',

      'template.simple-mono.name': 'Monokrom',
      'template.simple-mono.title': 'Du är inbjuden',
      'template.simple-mono.subtitle': 'En enkel inbjudan',
      'template.simple-mono.date': 'Datum och tid',
      'template.simple-mono.location': 'Plats',
      'template.simple-mono.message': 'Ibland behövs inte mer än svart och vitt. Du vet vad som gäller – vi ses där.',
      'template.simple-mono.sender': 'Hälsningar',

      'template.simple-pastel.name': 'Pastell',
      'template.simple-pastel.title': 'Välkommen! 🌸',
      'template.simple-pastel.subtitle': 'En mjuk inbjudan till',
      'template.simple-pastel.date': 'Datum och tid',
      'template.simple-pastel.location': 'Plats',
      'template.simple-pastel.message': 'Lugn, harmoni och gott sällskap väntar. Vi ser framemot att fira detta tillfälle med dig. 💜',
      'template.simple-pastel.sender': 'Med ömma hälsningar',

      'modal.close': 'Stäng',
      'cancel': 'Avbryt',
    },

    en: {
      'app.title': 'Partyinvites',
      'app.subtitle': 'Create beautiful invitation cards',

      'gallery.title': 'Choose a template',
      'gallery.subtitle': 'Click a template to start designing your invitation card',
      'gallery.category.all': 'All',
      'gallery.category.kids': 'Kids Party',
      'gallery.category.birthday': 'Birthday',
      'gallery.category.sport': '🏆 Sports',
      'gallery.category.activity': '🎮 Activities',
      'gallery.category.holiday': '🎄 Holidays',
      'gallery.category.event': '🥂 Events',
      'gallery.category.garden': 'Garden Party',
      'gallery.category.dinner': 'Dinner & Party',
      'gallery.category.simple': 'Simple',

      'gallery.search.placeholder': 'Search templates... e.g. bowling, halloween, baby shower',
      'gallery.search.noResults': 'No templates found. Try a different search term!',

      'editor.back': '← Back',
      'editor.export': 'Export',
      'editor.share': 'Share',
      'editor.undo': 'Undo',
      'editor.redo': 'Redo',

      'editor.tab.text': 'Text',
      'editor.tab.design': 'Design',
      'editor.tab.image': 'Image',
      'editor.tab.decor': 'Decor',

      'editor.field.title': 'Title',
      'editor.field.subtitle': 'Subtitle',
      'editor.field.date': 'Date & Time',
      'editor.field.location': 'Location',
      'editor.field.rsvp': 'RSVP by (optional)',
      'editor.field.message': 'Message',
      'editor.field.sender': 'From',

      'editor.design.background': 'Background color',
      'editor.design.accent': 'Accent color',
      'editor.design.textColor': 'Text color',
      'editor.design.presets': 'Presets',
      'editor.design.headingColor': 'Heading color',
      'editor.design.border': 'Border',
      'editor.design.borderRadius': 'Corner radius',
      'editor.design.borderColor': 'Border color',
      'editor.design.borderStyle': 'Border style',
      'editor.design.borderWidth': 'Border width',
      'editor.design.borderNone': 'None',
      'editor.design.borderSolid': 'Solid',
      'editor.design.borderDashed': 'Dashed',
      'editor.design.borderDotted': 'Dotted',
      'editor.design.decorations': 'Decoration style',
      'editor.design.gradients': 'Background gradients',

      'editor.font.family': 'Font',
      'editor.font.size': 'Size',
      'editor.font.align': 'Alignment',
      'editor.font.bodyFamily': 'Body font',
      'editor.font.bodySize': 'Body size',

      'editor.image.upload': 'Upload images',
      'editor.image.remove': 'Remove',
      'editor.image.drop': 'Drag and drop or click to upload',
      'editor.image.placed': 'Uploaded images',
      'editor.image.clearAll': 'Remove all images',
      'editor.image.none': 'No images added',

      'editor.stickers.title': 'Decorations',
      'editor.stickers.add': 'Click to add to card',
      'editor.stickers.placed': 'Placed decorations',
      'editor.stickers.none': 'No decorations yet – pick one below!',
      'editor.stickers.remove': 'Remove',
      'editor.stickers.clear': 'Clear all',

      'stickers.category.party': '🎉 Party',
      'stickers.category.hearts': '❤️ Hearts',
      'stickers.category.stars': '⭐ Stars',
      'stickers.category.nature': '🌸 Nature',
      'stickers.category.food': '🎂 Food',
      'stickers.category.animals': '🦄 Animals',
      'stickers.category.adventure': '🏴‍☠️ Adventure',
      'stickers.category.music': '🎵 Music',
      'stickers.category.sports': '🎳 Sports',
      'stickers.category.misc': '🎭 Other',

      'export.title': 'Export your card',
      'export.png': 'Download as PNG',
      'export.pdf': 'Download as PDF',
      'export.pngDesc': 'High-resolution image – perfect for digital sharing',
      'export.pdfDesc': 'Print-friendly PDF in A6 format',
      'export.generating': 'Generating…',

      'share.title': 'Share your card',
      'share.copyLink': 'Copy link',
      'share.email': 'Send via email',
      'share.copied': 'Copied to clipboard!',
      'share.emailSubject': "You're invited!",
      'share.emailBody': 'Check out my invitation',

      // ── Kids ─────────────────────────────────────
      'template.kids.name': 'Kids Party',
      'template.kids.title': 'PARTY TIME! 🎈🎈🎈',
      'template.kids.subtitle': "You're invited to",
      'template.kids.date': 'Saturday March 15 at 2:00 PM',
      'template.kids.location': 'Our house, Sunway Lane 3',
      'template.kids.message': "WOOHOO! There'll be cake galore, balloons in every color and games that never end! Bring your best mood – we're partying hard! 🎊",
      'template.kids.sender': 'Hugs, Anna & Leo',

      'template.kids-unicorn.name': 'Unicorn Party',
      'template.kids-unicorn.title': 'Magical Unicorn Party! 🦄',
      'template.kids-unicorn.subtitle': "You're invited to",
      'template.kids-unicorn.date': 'Saturday March 22 at 1:00 PM',
      'template.kids-unicorn.location': 'Rainbow Lane 7',
      'template.kids-unicorn.message': "Glitter, magic and unicorns! Wear your finest costume – we'll ride rainbows and eat star-shaped cookies! ✨",
      'template.kids-unicorn.sender': 'Magical hugs, Ella',

      'template.kids-superhero.name': 'Superhero Party',
      'template.kids-superhero.title': 'Superhero Party! 🦸',
      'template.kids-superhero.subtitle': 'All superheroes are called to',
      'template.kids-superhero.date': 'Sunday April 5 at 2:00 PM',
      'template.kids-superhero.location': 'Secret HQ (Main Street 15)',
      'template.kids-superhero.message': 'POW! BAM! We need YOU for a secret mission! Put on your cape and come – adventure awaits! 💥',
      'template.kids-superhero.sender': 'From Agent Leo',

      'template.kids-pirate.name': 'Pirate Party',
      'template.kids-pirate.title': 'Pirate Adventure! 🏴‍☠️',
      'template.kids-pirate.subtitle': "Arrr! You're invited to",
      'template.kids-pirate.date': 'Saturday April 12 at 1:00 PM',
      'template.kids-pirate.location': 'The Pirate Ship at Sea Lane 8',
      'template.kids-pirate.message': 'Hoist the flag and get ready for treasure hunts, water games and pirate cake! Bring your best pirate hat! ⚓',
      'template.kids-pirate.sender': 'Captain Sixten & the crew',

      // ── Birthday ─────────────────────────────────
      'template.birthday.name': 'Birthday Party',
      'template.birthday.title': '🎂 Birthday Bash! 🎂',
      'template.birthday.subtitle': "You're warmly welcome to",
      'template.birthday.date': 'Friday March 20 at 7:00 PM',
      'template.birthday.location': 'Restaurant Gondolen, Stockholm',
      'template.birthday.message': "Years fly by – but that's fine when you have such amazing friends! Come celebrate – there'll be dancing, laughter and a cake that'll blow your mind!",
      'template.birthday.sender': 'With love, Erik',

      'template.birthday-rainbow.name': 'Rainbow Party',
      'template.birthday-rainbow.title': 'Rainbow Party! 🌈',
      'template.birthday-rainbow.subtitle': 'Celebrate with us in every color',
      'template.birthday-rainbow.date': 'Friday March 28 at 6:00 PM',
      'template.birthday-rainbow.location': 'The Prism Venue',
      'template.birthday-rainbow.message': 'Life is too short for boring colors! Dress in every shade of the rainbow and come dance the night away! 🎨',
      'template.birthday-rainbow.sender': 'Hugs & kisses, Sofia',

      'template.birthday-disco.name': 'Disco Party',
      'template.birthday-disco.title': 'DISCO NIGHT 🪩',
      'template.birthday-disco.subtitle': 'Get ready for',
      'template.birthday-disco.date': 'Saturday April 4 at 8:00 PM',
      'template.birthday-disco.location': 'Studio 54, Queen Street 10',
      'template.birthday-disco.message': 'Dusty beats, glittering disco ball and a glowing dance floor! Put on your most fabulous outfit! 🕺',
      'template.birthday-disco.sender': 'DJ Marcus & the crew',

      'template.birthday-rose.name': 'Rose Dream',
      'template.birthday-rose.title': 'Rose Dream ✨',
      'template.birthday-rose.subtitle': "You're cordially invited to",
      'template.birthday-rose.date': 'Sunday March 16 at 4:00 PM',
      'template.birthday-rose.location': 'Café Rose Garden',
      'template.birthday-rose.message': "An afternoon filled with rosé, roses and laughter. Dressy attire appreciated – but most of all, we just want you there! 🌹",
      'template.birthday-rose.sender': 'All my love, Hanna',

      // ── Garden ───────────────────────────────────
      'template.garden.name': 'Garden Party',
      'template.garden.title': 'Garden Party! 🌿🌸',
      'template.garden.subtitle': 'Welcome to our',
      'template.garden.date': 'Sunday June 21 at 3:00 PM',
      'template.garden.location': 'Main Street 12, the garden',
      'template.garden.message': "The flowers are blooming, the sun is shining and we've set up the dream garden party. Luxury picnic, lawn games and cold lemonade await! 🍋",
      'template.garden.sender': 'Regards, Maria & Per',

      'template.garden-sunflower.name': 'Sunflower Party',
      'template.garden-sunflower.title': 'Sunflower Party! 🌻',
      'template.garden-sunflower.subtitle': 'Come enjoy summer at',
      'template.garden-sunflower.date': 'Saturday June 28 at 12:00 PM',
      'template.garden-sunflower.location': 'Meadow Lane 5, the backyard',
      'template.garden-sunflower.message': "Sunshine, sunflowers and summer food! We'll grill, play games and enjoy the sweet summer together. 🌞",
      'template.garden-sunflower.sender': 'Summer regards, Karin & Ola',

      'template.garden-autumn.name': 'Autumn Party',
      'template.garden-autumn.title': 'Autumn Party 🍂',
      'template.garden-autumn.subtitle': 'Celebrate the arrival of fall',
      'template.garden-autumn.date': 'Saturday September 20 at 3:00 PM',
      'template.garden-autumn.location': 'The Forest Cabin, Oak Hill',
      'template.garden-autumn.message': "Warm apple cider, cinnamon buns and a walk among autumn leaves. Bring blankets – we're cozying up outdoors! 🍁",
      'template.garden-autumn.sender': 'Autumn regards, Lisa',

      // ── Dinner ───────────────────────────────────
      'template.dinner.name': 'Dinner & Party',
      'template.dinner.title': '✨ Dinner Party ✨',
      'template.dinner.subtitle': "You're invited to an exclusive",
      'template.dinner.date': 'Saturday April 10 at 6:30 PM',
      'template.dinner.location': 'The Venue, King Street 5',
      'template.dinner.message': 'Candlelight, white linen and five courses that take you around the world. An evening to remember – we hope you can join. 🕯️',
      'template.dinner.sender': 'Warm regards, Johan',

      'template.dinner-champagne.name': 'Champagne Party',
      'template.dinner-champagne.title': 'Champagne Party 🥂',
      'template.dinner-champagne.subtitle': 'Raise your glass with us at',
      'template.dinner-champagne.date': 'Friday April 17 at 7:00 PM',
      'template.dinner-champagne.location': 'The Terrace, Grand Hotel',
      'template.dinner-champagne.message': 'An evening of bubbles, laughter and elegance under the stars. Dress your finest – this will be magical! 🌙',
      'template.dinner-champagne.sender': 'Cheers! / Johan & Linda',

      'template.dinner-casual.name': 'Casual Hangout',
      'template.dinner-casual.title': 'Hang with us! 🍕',
      'template.dinner-casual.subtitle': 'No dress code, just good vibes',
      'template.dinner-casual.date': 'Saturday April 25 at 5:00 PM',
      'template.dinner-casual.location': 'My place, Creek Street 3',
      'template.dinner-casual.message': "Pizza, board games and chill! Bring your favorite salad if you want – we'll handle the rest. Come as you are! 🎮",
      'template.dinner-casual.sender': 'See you! / Alex',

      // ── Simple ───────────────────────────────────
      'template.simple.name': 'Simple & Clean',
      'template.simple.title': "You're Invited ♡",
      'template.simple.subtitle': 'Welcome to our celebration',
      'template.simple.date': 'Date and time',
      'template.simple.location': 'Location',
      'template.simple.message': 'We would be incredibly happy if you would celebrate this special occasion with us!',
      'template.simple.sender': 'Warm regards',

      'template.simple-mono.name': 'Monochrome',
      'template.simple-mono.title': "You're Invited",
      'template.simple-mono.subtitle': 'A simple invitation',
      'template.simple-mono.date': 'Date and time',
      'template.simple-mono.location': 'Location',
      'template.simple-mono.message': 'Sometimes all you need is black and white. You know the deal – see you there.',
      'template.simple-mono.sender': 'Regards',

      'template.simple-pastel.name': 'Pastel',
      'template.simple-pastel.title': 'Welcome! 🌸',
      'template.simple-pastel.subtitle': 'A gentle invitation to',
      'template.simple-pastel.date': 'Date and time',
      'template.simple-pastel.location': 'Location',
      'template.simple-pastel.message': 'Calm, harmony and great company awaits. We look forward to celebrating this occasion with you. 💜',
      'template.simple-pastel.sender': 'With warm regards',

      'modal.close': 'Close',
      'cancel': 'Cancel',
    },
  };

  let currentLang = localStorage.getItem('partyinvites-lang') || 'sv';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
      || (translations.sv[key])
      || key;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('partyinvites-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.getAttribute('data-i18n-title'));
    });

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function getLanguage() {
    return currentLang;
  }

  function init() {
    document.documentElement.lang = currentLang;
  }

  return { t, setLanguage, getLanguage, init };
})();
