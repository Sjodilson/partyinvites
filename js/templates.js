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
    },

    // ── Birthday ────────────────────────────
    {
      id: 'birthday',
      i18nPrefix: 'template.birthday',
      category: 'birthday',
      colors: {
        background: '#FFF8E1',
        accent: '#FFD54F',
        text: '#3E2723',
        heading: '#F57F17',
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2.1rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'elegant',
        borderStyle: '2px solid #FFD54F',
        borderRadius: '16px',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 50%, #FFE082 100%)',
    },
    {
      id: 'birthday-rainbow',
      i18nPrefix: 'template.birthday-rainbow',
      category: 'birthday',
      colors: {
        background: '#FFFDE7',
        accent: '#FF6F00',
        text: '#E65100',
        heading: '#D50000',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '2.2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'rainbow',
        borderStyle: '4px solid #FF6F00',
        borderRadius: '20px',
        emoji: '🌈🎨🎉✨',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FF6F00 0%, #FDD835 25%, #66BB6A 50%, #42A5F5 75%, #AB47BC 100%)',
    },
    {
      id: 'birthday-disco',
      i18nPrefix: 'template.birthday-disco',
      category: 'birthday',
      colors: {
        background: '#12002E',
        accent: '#E040FB',
        text: '#E8E8E8',
        heading: '#EA80FC',
      },
      fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2.2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'neon',
        borderStyle: '2px solid #E040FB',
        borderRadius: '12px',
        emoji: '🪩🕺💃✨',
      },
      thumbnailGradient: 'linear-gradient(135deg, #12002E 0%, #1A0044 50%, #4A0072 100%)',
    },
    {
      id: 'birthday-rose',
      i18nPrefix: 'template.birthday-rose',
      category: 'birthday',
      colors: {
        background: '#FFF0F5',
        accent: '#F06292',
        text: '#880E4F',
        heading: '#C2185B',
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'floral',
        borderStyle: '2px solid #F8BBD0',
        borderRadius: '20px',
        emoji: '🌹✨💕🌸',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFF0F5 0%, #FCE4EC 50%, #F8BBD0 100%)',
    },

    // ── Garden ──────────────────────────────
    {
      id: 'garden',
      i18nPrefix: 'template.garden',
      category: 'garden',
      colors: {
        background: '#E8F5E9',
        accent: '#66BB6A',
        text: '#1B5E20',
        heading: '#2E7D32',
      },
      fonts: {
        heading: "'Cormorant Garamond', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2.2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'botanical',
        borderStyle: '2px solid #A5D6A7',
        borderRadius: '16px',
        emoji: '🌿🌸🍃🌺',
      },
      thumbnailGradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)',
    },
    {
      id: 'garden-sunflower',
      i18nPrefix: 'template.garden-sunflower',
      category: 'garden',
      colors: {
        background: '#FFFDE7',
        accent: '#F9A825',
        text: '#33691E',
        heading: '#F57F17',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '2.1rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'sunny',
        borderStyle: '3px solid #FFD54F',
        borderRadius: '20px',
        emoji: '🌻🌞🍋🌾',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 50%, #FFF176 100%)',
    },
    {
      id: 'garden-autumn',
      i18nPrefix: 'template.garden-autumn',
      category: 'garden',
      colors: {
        background: '#FBE9E7',
        accent: '#E64A19',
        text: '#3E2723',
        heading: '#BF360C',
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'autumn',
        borderStyle: '2px solid #FFAB91',
        borderRadius: '16px',
        emoji: '🍂🍁🍄🌰',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FBE9E7 0%, #FFCCBC 50%, #FFAB91 100%)',
    },

    // ── Dinner ──────────────────────────────
    {
      id: 'dinner',
      i18nPrefix: 'template.dinner',
      category: 'dinner',
      colors: {
        background: '#1A1A2E',
        accent: '#C9A84C',
        text: '#E8E8E8',
        heading: '#C9A84C',
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'minimal-dark',
        borderStyle: '1px solid #C9A84C',
        borderRadius: '8px',
      },
      thumbnailGradient: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
    },
    {
      id: 'dinner-champagne',
      i18nPrefix: 'template.dinner-champagne',
      category: 'dinner',
      colors: {
        background: '#0D1B2A',
        accent: '#FFD700',
        text: '#F0E6D3',
        heading: '#FFD700',
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2.1rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'luxe',
        borderStyle: '2px solid #FFD700',
        borderRadius: '12px',
        emoji: '🥂✨🌙⭐',
      },
      thumbnailGradient: 'linear-gradient(135deg, #0D1B2A 0%, #1B2838 50%, #2C3E50 100%)',
    },
    {
      id: 'dinner-casual',
      i18nPrefix: 'template.dinner-casual',
      category: 'dinner',
      colors: {
        background: '#FFF3E0',
        accent: '#26A69A',
        text: '#37474F',
        heading: '#00897B',
      },
      fonts: {
        heading: "'Fredoka', cursive",
        body: "'Nunito', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'relaxed',
        borderStyle: '3px solid #80CBC4',
        borderRadius: '20px',
        emoji: '🍕🎮🎲🎵',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFF3E0 0%, #E0F2F1 50%, #B2DFDB 100%)',
    },

    // ── Simple ──────────────────────────────
    {
      id: 'simple',
      i18nPrefix: 'template.simple',
      category: 'simple',
      colors: {
        background: '#FFFFFF',
        accent: '#6C5CE7',
        text: '#2D3436',
        heading: '#6C5CE7',
      },
      fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'clean',
        borderStyle: '2px solid #DFE6E9',
        borderRadius: '12px',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 50%, #DFE6E9 100%)',
    },
    {
      id: 'simple-mono',
      i18nPrefix: 'template.simple-mono',
      category: 'simple',
      colors: {
        background: '#FFFFFF',
        accent: '#000000',
        text: '#1A1A1A',
        heading: '#000000',
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'mono',
        borderStyle: '2px solid #1A1A1A',
        borderRadius: '4px',
      },
      thumbnailGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #E0E0E0 100%)',
    },
    {
      id: 'simple-pastel',
      i18nPrefix: 'template.simple-pastel',
      category: 'simple',
      colors: {
        background: '#F3E5F5',
        accent: '#CE93D8',
        text: '#4A148C',
        heading: '#7B1FA2',
      },
      fonts: {
        heading: "'Cormorant Garamond', serif",
        body: "'Inter', sans-serif",
      },
      headingSize: '2.1rem',
      bodySize: '0.95rem',
      textAlign: 'center',
      decorations: {
        type: 'soft',
        borderStyle: '2px solid #E1BEE7',
        borderRadius: '20px',
        emoji: '🌸💜✨🦋',
      },
      thumbnailGradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 50%, #CE93D8 100%)',
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
    return ['all', 'kids', 'birthday', 'garden', 'dinner', 'simple'];
  }

  function getDefaultTexts(template) {
    const t = PartyI18n.t;
    const p = template.i18nPrefix;
    return {
      title: t(`${p}.title`),
      subtitle: t(`${p}.subtitle`),
      date: t(`${p}.date`),
      location: t(`${p}.location`),
      message: t(`${p}.message`),
      sender: t(`${p}.sender`),
    };
  }

  return { getAll, getById, getByCategory, getCategories, getDefaultTexts };
})();
