# 🎉 PartyInvites

Create beautiful, customizable party invitation cards — right in your browser. No sign-up, no server, no fuss.

**[Launch the app →](https://sjodilson.github.io/partyinvites/)**

![Made with HTML/CSS/JS](https://img.shields.io/badge/Built%20with-HTML%20%2F%20CSS%20%2F%20JS-orange)
![No backend](https://img.shields.io/badge/Backend-None-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## ✨ Features

### 🎨 54 Ready-Made Templates
Browse templates across 9 categories — kids, birthdays, sports, activities, holidays, events, garden parties, dinners, and minimalist designs. Search by name or keyword to find the perfect starting point.

### ✏️ Full Editor
- **Text fields** — Title, subtitle, date, location, RSVP, message, and sender
- **Inline emoji insertion** — Drop emojis from 10 categories directly into any text field
- **Typography** — 11 Google Fonts, adjustable heading and body sizes, text alignment
- **Colors** — Background, text, heading, and accent color pickers
- **Borders** — Radius, width, style (solid / dashed / dotted / double), and color
- **Gradient backgrounds** — 8 preset gradients
- **Decorations** — 20+ decoration styles (confetti, stars, hearts, balloons, and more)

### 🖼️ Images & Stickers
- **Upload images** (including transparent PNGs) — freely drag, resize, and rotate them on the card
- **120+ emoji stickers** across 10 categories — place, move, resize, and rotate freely
- Upload multiple images at once via file picker or drag-and-drop

### 📤 Export
- **PNG** — High-resolution (2×) with pixel-perfect rounded corner clipping
- **PDF** — A6 portrait format, ready for printing

### 🌐 Bilingual
Full Swedish and English UI — auto-detects browser language, switchable anytime.

### 📱 Responsive
Works on desktop and mobile. The card maintains a consistent 360px design canvas, scaled smoothly on smaller screens.

---

## 🚀 Getting Started

No build step required. Just serve the files:

```bash
# Clone the repo
git clone https://github.com/Sjodilson/partyinvites.git
cd partyinvites

# Serve locally (Python)
python -m http.server 8080

# Or with Node
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

Or simply visit the live version at **[sjodilson.github.io/partyinvites](https://sjodilson.github.io/partyinvites/)**.

---

## 🏗️ Architecture

Pure client-side — no frameworks, no build tools, no dependencies to install.

```
partyinvites/
├── index.html          # Single-page app shell
├── css/
│   ├── style.css       # Gallery & global styles
│   └── editor.css      # Editor & card styles
└── js/
    ├── i18n.js         # Swedish + English translations
    ├── templates.js    # 54 template definitions
    ├── editor.js       # Card editor, stickers, images, all controls
    ├── export.js       # PNG & PDF export with style inlining
    └── app.js          # Gallery, search, view management
```

Each module is an IIFE assigned to a global (`PartyI18n`, `PartyTemplates`, `PartyEditor`, `PartyExport`, `PartyApp`).

### External Libraries (CDN)
- [html2canvas](https://html2canvas.hertzen.com/) v1.4.1 — DOM-to-canvas rendering
- [jsPDF](https://github.com/parallax/jsPDF) v2.5.1 — PDF generation
- [Google Fonts](https://fonts.google.com/) — 11 font families

---

## 📋 Template Categories

| Category | Examples |
|----------|---------|
| 🧒 Kids | Dinosaur, unicorn, pirate, space, princess, superhero |
| 🎂 Birthday | Classic, elegant, neon glow, retro, tropical |
| ⚽ Sports | Football, bowling, swimming, gymnastics, martial arts |
| 🎯 Activity | Gaming, movie night, art party, science, baking |
| 🎄 Holiday | Christmas, Halloween, Easter, Midsummer, New Year's |
| 🎪 Events | Graduation, baby shower, engagement, carnival |
| 🌿 Garden | Botanical, picnic, BBQ, tea party |
| 🍽️ Dinner | Wine dinner, cocktail, brunch |
| ✨ Simple | Minimalist, pastel, monochrome |

---

## 🤝 Contributing

Contributions are welcome! Some ideas:

- Add more templates
- Add more sticker categories
- Improve mobile touch interactions
- Add new export formats

---

## 📄 License

MIT
