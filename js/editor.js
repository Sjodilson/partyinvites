/* ============================================
   PartyInvites – Card Editor
   ============================================ */

const PartyEditor = (() => {
  let currentTemplate = null;
  let cardState = {};
  let historyStack = [];
  let historyIndex = -1;
  const MAX_HISTORY = 50;
  let selectedStickerId = null;
  let stickerIdCounter = 0;

  const cardEl = () => document.getElementById('invitation-card');

  /* ---------- Sticker Library ---------- */
  const stickerLibrary = [
    { id: 'party',     stickers: ['🎈','🎉','🎊','🪅','🎆','🎇','✨','🪩','🎁','🎀','🪄','🎗️'] },
    { id: 'hearts',    stickers: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','💖','💝','💕','💗'] },
    { id: 'stars',     stickers: ['⭐','🌟','💫','✨','🔆','☀️','🌙','💎','👑','🔮'] },
    { id: 'nature',    stickers: ['🌸','🌺','🌻','🌹','🌷','💐','🌿','🍃','🍀','🌱','🦋','🌈'] },
    { id: 'food',      stickers: ['🎂','🍰','🧁','🍭','🍬','🍫','🍪','🍕','🍔','🍷','🥂','🍹'] },
    { id: 'animals',   stickers: ['🦄','🦋','🐝','🐾','🦁','🐶','🐱','🐰','🦊','🐻','🐸','🦖'] },
    { id: 'adventure', stickers: ['🏴‍☠️','⚓','🗺️','💎','👑','⚔️','🛡️','🔮','🧙','🦸'] },
    { id: 'music',     stickers: ['🎵','🎶','🎸','🎤','🎷','🥁','🎹','🎧','🎺','🎻'] },
    { id: 'sports',    stickers: ['🎳','⚽','🏀','🏈','⚾','🎾','🏐','🏓','🏸','🏒','⛸️','🛹'] },
    { id: 'misc',      stickers: ['🎭','🎪','🎨','🖌️','📸','💌','🏠','❄️','🔥','💧','🫧','🪁'] },
  ];

  /* ---------- Initialize Editor ---------- */
  function init(templateIdOrObj) {
    let template;
    if (typeof templateIdOrObj === 'object' && templateIdOrObj !== null) {
      template = templateIdOrObj;
    } else {
      template = PartyTemplates.getById(templateIdOrObj);
    }
    if (!template) return;
    currentTemplate = template;

    const saved = (!template.defaultTexts) ? loadFromStorage(template.id) : null;
    if (saved) {
      cardState = saved;
    } else {
      const defaults = template.defaultTexts || PartyTemplates.getDefaultTexts(template);
      cardState = {
        templateId: template.id,
        texts: { ...defaults },
        colors: { ...template.colors },
        fonts: { ...template.fonts },
        headingSize: template.headingSize,
        bodySize: template.bodySize,
        textAlign: template.textAlign,
        image: null,
        stickers: [],
      };
    }

    historyStack = [JSON.parse(JSON.stringify(cardState))];
    historyIndex = 0;

    renderCard();
    buildPanels();
    updateUndoRedoButtons();
  }

  /* ---------- Render Card ---------- */

  // Decoration definitions: real DOM elements instead of CSS pseudo-elements
  const decorationDefs = {
    confetti: [
      { text: '🎈', style: 'position:absolute;font-size:2rem;opacity:0.2;top:12px;left:12px;transform:rotate(-15deg)' },
      { text: '🎉', style: 'position:absolute;font-size:2rem;opacity:0.2;bottom:12px;right:12px;transform:rotate(15deg)' },
    ],
    elegant: [
      { text: '✦', style: 'position:absolute;font-size:1.2rem;opacity:0.25;top:16px;left:50%;transform:translateX(-50%)' },
      { text: '✦', style: 'position:absolute;font-size:1.2rem;opacity:0.25;bottom:16px;left:50%;transform:translateX(-50%)' },
    ],
    botanical: [
      { text: '🌿', style: 'position:absolute;font-size:2rem;opacity:0.15;top:8px;right:8px;transform:rotate(45deg)' },
      { text: '🌸', style: 'position:absolute;font-size:2rem;opacity:0.15;bottom:8px;left:8px;transform:rotate(-20deg)' },
    ],
    'minimal-dark': [
      { text: '', style: 'position:absolute;top:20px;left:20px;right:20px;bottom:20px;border:1px solid rgba(201,168,76,0.2);border-radius:4px' },
    ],
    clean: [
      { text: '', style: 'position:absolute;left:25%;right:25%;height:2px;background:#6C5CE7;opacity:0.15;top:28px' },
      { text: '', style: 'position:absolute;left:25%;right:25%;height:2px;background:#6C5CE7;opacity:0.15;bottom:28px' },
    ],
    sparkle: [
      { text: '✨', style: 'position:absolute;font-size:1.4rem;opacity:0.3;top:10px;left:10px' },
      { text: '✨', style: 'position:absolute;font-size:1.4rem;opacity:0.3;bottom:10px;right:10px' },
    ],
    comic: [
      { text: '💥', style: 'position:absolute;font-size:2rem;opacity:0.12;top:8px;right:8px;transform:rotate(15deg)' },
      { text: '⚡', style: 'position:absolute;font-size:1.5rem;opacity:0.12;bottom:8px;left:12px' },
    ],
    treasure: [
      { text: '💎', style: 'position:absolute;font-size:1.5rem;opacity:0.15;top:12px;right:12px' },
      { text: '⚓', style: 'position:absolute;font-size:1.5rem;opacity:0.15;bottom:12px;left:12px' },
    ],
    rainbow: [
      { text: '', style: 'position:absolute;top:0;left:0;right:0;height:6px;background:linear-gradient(90deg,#FF6F00,#FDD835,#66BB6A,#42A5F5,#AB47BC);opacity:0.6' },
      { text: '', style: 'position:absolute;bottom:0;left:0;right:0;height:6px;background:linear-gradient(90deg,#AB47BC,#42A5F5,#66BB6A,#FDD835,#FF6F00);opacity:0.6' },
    ],
    neon: [
      { text: '', style: 'position:absolute;top:10px;left:10px;right:10px;bottom:10px;border:1px solid rgba(224,64,251,0.25);border-radius:8px' },
      { text: '🪩', style: 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:3rem;opacity:0.06' },
    ],
    floral: [
      { text: '🌹', style: 'position:absolute;font-size:1.5rem;opacity:0.15;top:10px;right:10px;transform:rotate(15deg)' },
      { text: '🌸', style: 'position:absolute;font-size:1.5rem;opacity:0.15;bottom:10px;left:10px;transform:rotate(-10deg)' },
    ],
    sunny: [
      { text: '🌻', style: 'position:absolute;font-size:2rem;opacity:0.15;top:8px;right:8px' },
      { text: '🌞', style: 'position:absolute;font-size:1.5rem;opacity:0.12;bottom:10px;left:10px' },
    ],
    autumn: [
      { text: '🍂', style: 'position:absolute;font-size:1.5rem;opacity:0.18;top:10px;left:10px;transform:rotate(-25deg)' },
      { text: '🍁', style: 'position:absolute;font-size:1.5rem;opacity:0.18;bottom:10px;right:10px;transform:rotate(20deg)' },
    ],
    luxe: [
      { text: '', style: 'position:absolute;top:16px;left:16px;right:16px;bottom:16px;border:1px solid rgba(255,215,0,0.25);border-radius:4px' },
      { text: '✨', style: 'position:absolute;top:8px;left:50%;transform:translateX(-50%);font-size:1rem;opacity:0.3' },
    ],
    relaxed: [
      { text: '🎵', style: 'position:absolute;font-size:1.3rem;opacity:0.12;top:10px;right:12px' },
    ],
    mono: [
      { text: '', style: 'position:absolute;left:20%;right:20%;height:1px;background:#1A1A1A;opacity:0.2;top:24px' },
      { text: '', style: 'position:absolute;left:20%;right:20%;height:1px;background:#1A1A1A;opacity:0.2;bottom:24px' },
    ],
    soft: [
      { text: '✨', style: 'position:absolute;font-size:1rem;opacity:0.2;top:12px;left:12px' },
      { text: '🌸', style: 'position:absolute;font-size:1rem;opacity:0.2;bottom:12px;right:12px' },
    ],
  };

  function renderCard() {
    const card = cardEl();
    if (!card) return;

    const s = cardState;
    card.style.background = s.colors.background;
    card.style.border = currentTemplate.decorations.borderStyle;
    card.style.borderRadius = currentTemplate.decorations.borderRadius;
    card.style.color = s.colors.text;
    card.style.textAlign = s.textAlign;

    card.innerHTML = '';

    // Decorations layer — real DOM elements for export fidelity
    const decoEl = document.createElement('div');
    decoEl.className = 'card-decorations';
    const decoType = currentTemplate.decorations.type;
    const defs = decorationDefs[decoType] || [];
    defs.forEach(d => {
      const span = document.createElement('span');
      span.setAttribute('style', d.style);
      span.style.pointerEvents = 'none';
      if (d.text) span.textContent = d.text;
      decoEl.appendChild(span);
    });
    card.appendChild(decoEl);

    // Inner content
    const inner = document.createElement('div');
    inner.className = 'card-inner';
    card.appendChild(inner);

    // Image (if uploaded)
    if (s.image) {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'card-image-container';
      const img = document.createElement('img');
      img.src = s.image;
      img.alt = '';
      imgContainer.appendChild(img);
      inner.appendChild(imgContainer);
    }

    // Text fields
    const fields = ['subtitle', 'title', 'date', 'location', 'message', 'sender'];
    const fieldIcons = { date: '📅 ', location: '📍 ' };
    fields.forEach(field => {
      const el = document.createElement('div');
      el.className = 'card-field';
      el.setAttribute('data-field', field);
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'false');

      // Add icon prefix for date/location as real DOM
      if (fieldIcons[field]) {
        const icon = document.createElement('span');
        icon.className = 'card-field-icon';
        icon.textContent = fieldIcons[field];
        el.appendChild(icon);
      }

      // Handle newlines in message field
      const text = s.texts[field] || '';
      if (field === 'message' && text.includes('\n')) {
        el.insertAdjacentHTML('beforeend', text.split('\n').map(line => escapeHtml(line)).join('<br>'));
      } else {
        el.appendChild(document.createTextNode(text));
      }

      // Apply fonts
      if (field === 'title' || field === 'subtitle') {
        el.style.fontFamily = s.fonts.heading;
        el.style.color = s.colors.heading;
      } else {
        el.style.fontFamily = s.fonts.body;
      }

      if (field === 'title') {
        el.style.fontSize = s.headingSize;
      }

      el.addEventListener('input', () => {
        // Get text content excluding the icon prefix
        let val = el.textContent;
        if (fieldIcons[field]) {
          const iconText = fieldIcons[field];
          if (val.startsWith(iconText)) val = val.slice(iconText.length);
        }
        s.texts[field] = val;
        syncPanelField(field, val);
        saveState();
      });

      el.addEventListener('focus', () => {
        el.parentElement.classList.add('field-active');
      });

      el.addEventListener('blur', () => {
        el.parentElement.classList.remove('field-active');
      });

      inner.appendChild(el);
    });

    // Render stickers on the card
    renderStickers(card);

    // Deselect sticker when clicking card background
    card.addEventListener('click', e => {
      if (e.target === card || e.target.classList.contains('card-inner') || e.target.classList.contains('card-decorations')) {
        deselectAllStickers();
      }
    });
  }

  /* ---------- Sticker Rendering & Drag ---------- */
  function renderStickers(card) {
    if (!cardState.stickers || !cardState.stickers.length) return;

    cardState.stickers.forEach(s => {
      const el = createStickerElement(s);
      card.appendChild(el);
    });
  }

  function createStickerElement(stickerData) {
    const el = document.createElement('span');
    el.className = 'card-sticker';
    el.setAttribute('data-sticker-id', stickerData.id);
    el.textContent = stickerData.emoji;
    el.style.left = stickerData.x + '%';
    el.style.top = stickerData.y + '%';
    el.style.fontSize = stickerData.size + 'px';
    if (stickerData.rotation) {
      el.style.transform = `rotate(${stickerData.rotation}deg)`;
    }

    // Delete button
    const delBtn = document.createElement('span');
    delBtn.className = 'sticker-delete';
    delBtn.textContent = '✕';
    delBtn.addEventListener('click', e => {
      e.stopPropagation();
      removeSticker(stickerData.id);
    });
    el.appendChild(delBtn);

    // Resize handle
    const resizeBtn = document.createElement('span');
    resizeBtn.className = 'sticker-resize';
    el.appendChild(resizeBtn);

    // Rotate handle
    const rotateBtn = document.createElement('span');
    rotateBtn.className = 'sticker-rotate';
    el.appendChild(rotateBtn);

    // Click to select
    el.addEventListener('mousedown', e => {
      if (e.target === delBtn) return;
      e.stopPropagation();
      e.preventDefault();
      selectSticker(stickerData.id);

      if (e.target === resizeBtn) {
        startResize(e, stickerData, el);
      } else if (e.target === rotateBtn) {
        startRotate(e, stickerData, el);
      } else {
        startDrag(e, stickerData, el);
      }
    });

    // Touch support
    el.addEventListener('touchstart', e => {
      if (e.target === delBtn) return;
      e.stopPropagation();
      selectSticker(stickerData.id);

      const touch = e.touches[0];
      if (e.target === resizeBtn) {
        startResize(touch, stickerData, el);
      } else if (e.target === rotateBtn) {
        startRotate(touch, stickerData, el);
      } else {
        startDrag(touch, stickerData, el);
      }
    }, { passive: false });

    return el;
  }

  function startDrag(startEvent, stickerData, el) {
    const card = cardEl();
    const rect = card.getBoundingClientRect();
    const startX = (startEvent.clientX || startEvent.pageX) - rect.left;
    const startY = (startEvent.clientY || startEvent.pageY) - rect.top;
    const startPctX = stickerData.x;
    const startPctY = stickerData.y;

    el.classList.add('dragging');

    function onMove(e) {
      e.preventDefault();
      const ev = e.touches ? e.touches[0] : e;
      const dx = ev.clientX - rect.left - startX;
      const dy = ev.clientY - rect.top - startY;
      const newX = Math.max(0, Math.min(95, startPctX + (dx / rect.width) * 100));
      const newY = Math.max(0, Math.min(95, startPctY + (dy / rect.height) * 100));
      el.style.left = newX + '%';
      el.style.top = newY + '%';
      stickerData.x = Math.round(newX * 10) / 10;
      stickerData.y = Math.round(newY * 10) / 10;
    }

    function onUp() {
      el.classList.remove('dragging');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
      saveState();
      updatePlacedStickersList();
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }

  function startResize(startEvent, stickerData, el) {
    const startSize = stickerData.size;
    const startClientY = startEvent.clientY || startEvent.pageY;

    function onMove(e) {
      e.preventDefault();
      const ev = e.touches ? e.touches[0] : e;
      const dy = (ev.clientY) - startClientY;
      const newSize = Math.max(16, Math.min(80, startSize + dy * 0.5));
      stickerData.size = Math.round(newSize);
      el.style.fontSize = stickerData.size + 'px';
    }

    function onUp() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
      saveState();
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }

  function startRotate(startEvent, stickerData, el) {
    const elRect = el.getBoundingClientRect();
    const centerX = elRect.left + elRect.width / 2;
    const centerY = elRect.top + elRect.height / 2;
    const startAngle = Math.atan2(
      (startEvent.clientY || startEvent.pageY) - centerY,
      (startEvent.clientX || startEvent.pageX) - centerX
    );
    const startRotation = stickerData.rotation || 0;

    el.classList.add('rotating');

    function onMove(e) {
      e.preventDefault();
      const ev = e.touches ? e.touches[0] : e;
      const angle = Math.atan2(ev.clientY - centerY, ev.clientX - centerX);
      const delta = (angle - startAngle) * (180 / Math.PI);
      const newRotation = Math.round(startRotation + delta);
      stickerData.rotation = newRotation;
      el.style.transform = `rotate(${newRotation}deg)`;
    }

    function onUp() {
      el.classList.remove('rotating');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onUp);
      saveState();
      updatePlacedStickersList();
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onUp);
  }

  function selectSticker(id) {
    selectedStickerId = id;
    document.querySelectorAll('.card-sticker').forEach(el => {
      el.classList.toggle('selected', el.getAttribute('data-sticker-id') === id);
    });
  }

  function deselectAllStickers() {
    selectedStickerId = null;
    document.querySelectorAll('.card-sticker').forEach(el => el.classList.remove('selected'));
  }

  function addSticker(emoji) {
    if (!cardState.stickers) cardState.stickers = [];
    const id = 'stk-' + (++stickerIdCounter);
    const sticker = {
      id,
      emoji,
      x: 10 + Math.random() * 70,
      y: 10 + Math.random() * 70,
      size: 36,
      rotation: Math.round((Math.random() - 0.5) * 30),
    };
    cardState.stickers.push(sticker);

    // Add directly to card DOM instead of full re-render
    const card = cardEl();
    if (card) {
      const el = createStickerElement(sticker);
      card.appendChild(el);
      selectSticker(id);
    }
    saveState();
    updatePlacedStickersList();
  }

  function removeSticker(id) {
    if (!cardState.stickers) return;
    cardState.stickers = cardState.stickers.filter(s => s.id !== id);
    const el = document.querySelector(`[data-sticker-id="${id}"]`);
    if (el) el.remove();
    if (selectedStickerId === id) selectedStickerId = null;
    saveState();
    updatePlacedStickersList();
  }

  function clearAllStickers() {
    cardState.stickers = [];
    document.querySelectorAll('.card-sticker').forEach(el => el.remove());
    selectedStickerId = null;
    saveState();
    updatePlacedStickersList();
  }
  function buildPanels() {
    buildTextPanel();
    buildDesignPanel();
    buildDecorPanel();
  }

  function buildTextPanel() {
    const panel = document.getElementById('panel-text');
    if (!panel) return;

    const t = PartyI18n.t;
    const fields = [
      { key: 'title', type: 'text' },
      { key: 'subtitle', type: 'text' },
      { key: 'date', type: 'text' },
      { key: 'location', type: 'text' },
      { key: 'message', type: 'textarea' },
      { key: 'sender', type: 'text' },
    ];

    let html = `<div class="panel-section">
      <div class="panel-section-title">${t('editor.tab.text')}</div>`;

    fields.forEach(f => {
      const val = escapeHtml(cardState.texts[f.key] || '');
      if (f.type === 'textarea') {
        html += `<div class="panel-field">
          <label>${t('editor.field.' + f.key)}</label>
          <textarea data-sync-field="${f.key}">${val}</textarea>
        </div>`;
      } else {
        html += `<div class="panel-field">
          <label>${t('editor.field.' + f.key)}</label>
          <input type="text" data-sync-field="${f.key}" value="${val}">
        </div>`;
      }
    });

    html += '</div>';

    // Font controls
    html += `<div class="panel-section">
      <div class="panel-section-title">${t('editor.font.family')}</div>
      <div class="panel-field">
        <label>${t('editor.field.title')} ${t('editor.font.family').toLowerCase()}</label>
        <select id="font-heading">
          <option value="'Fredoka', cursive" ${cardState.fonts.heading.includes('Fredoka') ? 'selected' : ''}>Fredoka</option>
          <option value="'Playfair Display', serif" ${cardState.fonts.heading.includes('Playfair') ? 'selected' : ''}>Playfair Display</option>
          <option value="'Cormorant Garamond', serif" ${cardState.fonts.heading.includes('Cormorant') ? 'selected' : ''}>Cormorant Garamond</option>
          <option value="'Inter', sans-serif" ${cardState.fonts.heading.includes('Inter') ? 'selected' : ''}>Inter</option>
          <option value="'Nunito', sans-serif" ${cardState.fonts.heading.includes('Nunito') ? 'selected' : ''}>Nunito</option>
        </select>
      </div>
      <div class="panel-field">
        <label>${t('editor.font.size')}</label>
        <div class="size-slider-group">
          <input type="range" id="heading-size" min="1.2" max="3" step="0.1" value="${parseFloat(cardState.headingSize)}">
          <span class="size-value" id="heading-size-val">${cardState.headingSize}</span>
        </div>
      </div>
      <div class="panel-field">
        <label>${t('editor.font.align')}</label>
        <div class="align-buttons">
          <button class="align-btn ${cardState.textAlign === 'left' ? 'active' : ''}" data-align="left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
          </button>
          <button class="align-btn ${cardState.textAlign === 'center' ? 'active' : ''}" data-align="center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="10" x2="6" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="18" y1="18" x2="6" y2="18"/></svg>
          </button>
          <button class="align-btn ${cardState.textAlign === 'right' ? 'active' : ''}" data-align="right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="21" y1="10" x2="7" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="7" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>`;

    panel.innerHTML = html;

    // Bind text field sync (panel → card)
    panel.querySelectorAll('[data-sync-field]').forEach(input => {
      const field = input.getAttribute('data-sync-field');
      input.addEventListener('input', () => {
        cardState.texts[field] = input.value;
        const cardField = cardEl().querySelector(`[data-field="${field}"]`);
        if (cardField) cardField.textContent = input.value;
        saveState();
      });
    });

    // Font heading selector
    const fontHeading = panel.querySelector('#font-heading');
    if (fontHeading) {
      fontHeading.addEventListener('change', () => {
        cardState.fonts.heading = fontHeading.value;
        renderCard();
        saveState();
      });
    }

    // Heading size slider
    const headingSize = panel.querySelector('#heading-size');
    const headingSizeVal = panel.querySelector('#heading-size-val');
    if (headingSize) {
      headingSize.addEventListener('input', () => {
        cardState.headingSize = headingSize.value + 'rem';
        headingSizeVal.textContent = cardState.headingSize;
        const titleEl = cardEl().querySelector('[data-field="title"]');
        if (titleEl) titleEl.style.fontSize = cardState.headingSize;
        saveState();
      });
    }

    // Alignment buttons
    panel.querySelectorAll('.align-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        panel.querySelectorAll('.align-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        cardState.textAlign = btn.dataset.align;
        cardEl().style.textAlign = cardState.textAlign;
        saveState();
      });
    });
  }

  function buildDesignPanel() {
    const panel = document.getElementById('panel-design');
    if (!panel) return;

    const t = PartyI18n.t;
    const colors = [
      { key: 'background', label: t('editor.design.background') },
      { key: 'accent', label: t('editor.design.accent') },
      { key: 'heading', label: t('editor.design.headingColor') },
      { key: 'text', label: t('editor.design.textColor') },
    ];

    let html = `<div class="panel-section">
      <div class="panel-section-title">${t('editor.tab.design')}</div>`;

    colors.forEach(c => {
      html += `<div class="color-picker-group">
        <label>${c.label}</label>
        <div class="color-picker-wrapper">
          <input type="color" data-color-key="${c.key}" value="${cardState.colors[c.key]}">
        </div>
      </div>`;
    });

    // Quick presets
    html += `</div>
    <div class="panel-section">
      <div class="panel-section-title">${t('editor.design.presets')}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;" id="color-presets"></div>
    </div>`;

    panel.innerHTML = html;

    // Bind color pickers
    panel.querySelectorAll('[data-color-key]').forEach(input => {
      input.addEventListener('input', () => {
        const key = input.dataset.colorKey;
        cardState.colors[key] = input.value;
        applyColors();
        saveState();
      });
    });

    // Build color presets
    buildColorPresets();
  }

  function buildColorPresets() {
    const container = document.getElementById('color-presets');
    if (!container) return;

    const presets = [
      { bg: '#FFF3E0', accent: '#FF6F00', heading: '#E65100', text: '#4E342E' },
      { bg: '#FFF8E1', accent: '#FFD54F', heading: '#F57F17', text: '#3E2723' },
      { bg: '#E8F5E9', accent: '#66BB6A', heading: '#2E7D32', text: '#1B5E20' },
      { bg: '#1A1A2E', accent: '#C9A84C', heading: '#C9A84C', text: '#E8E8E8' },
      { bg: '#FFFFFF', accent: '#6C5CE7', heading: '#6C5CE7', text: '#2D3436' },
      { bg: '#FCE4EC', accent: '#E91E63', heading: '#AD1457', text: '#4A148C' },
      { bg: '#E3F2FD', accent: '#1976D2', heading: '#0D47A1', text: '#1A237E' },
      { bg: '#FFF9C4', accent: '#F9A825', heading: '#E65100', text: '#3E2723' },
    ];

    presets.forEach(p => {
      const btn = document.createElement('button');
      btn.style.cssText = `width:32px;height:32px;border-radius:50%;border:2px solid ${p.accent};background:${p.bg};cursor:pointer;transition:transform 0.15s;`;
      btn.title = `${p.bg} / ${p.accent}`;
      btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.15)');
      btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
      btn.addEventListener('click', () => {
        cardState.colors = { background: p.bg, accent: p.accent, heading: p.heading, text: p.text };
        applyColors();
        updateDesignPanel();
        saveState();
      });
      container.appendChild(btn);
    });
  }

  function updateDesignPanel() {
    document.querySelectorAll('[data-color-key]').forEach(input => {
      const key = input.dataset.colorKey;
      if (cardState.colors[key]) input.value = cardState.colors[key];
    });
  }

  function buildDecorPanel() {
    const panel = document.getElementById('panel-decor');
    if (!panel) return;

    const t = PartyI18n.t;
    let html = '';

    // --- Image upload section ---
    html += `<div class="panel-section">
      <div class="panel-section-title">${t('editor.image.upload')}</div>
      <div class="image-upload-area ${cardState.image ? 'has-image' : ''}" id="image-upload-area">`;

    if (cardState.image) {
      html += `<img src="${cardState.image}" alt="" class="image-preview">
        <button class="btn-remove-image" id="btn-remove-image">${t('editor.image.remove')}</button>`;
    } else {
      html += `<div class="image-upload-icon">📸</div>
        <div class="image-upload-text">${t('editor.image.drop')}</div>`;
    }

    html += `<input type="file" accept="image/*" id="image-input">
      </div>
    </div>`;

    // --- Sticker library section ---
    html += `<div class="panel-section">
      <div class="panel-section-title">${t('editor.stickers.title')}</div>
      <div class="sticker-hint">${t('editor.stickers.add')}</div>
      <div class="sticker-categories" id="sticker-categories"></div>
      <div class="sticker-grid" id="sticker-grid"></div>
    </div>`;

    // --- Placed stickers section ---
    html += `<div class="panel-section" id="placed-stickers-section">
      <div class="panel-section-title">${t('editor.stickers.placed')}</div>
      <div class="placed-stickers-list" id="placed-stickers-list"></div>
      <button class="btn-clear-stickers hidden" id="btn-clear-stickers">${t('editor.stickers.clear')}</button>
    </div>`;

    panel.innerHTML = html;

    // Bind image upload
    bindImageUpload(panel);

    // Build sticker category buttons & grid
    buildStickerLibrary();

    // Update placed stickers list
    updatePlacedStickersList();
  }

  function bindImageUpload(panel) {
    const input = panel.querySelector('#image-input');
    const area = panel.querySelector('#image-upload-area');
    const removeBtn = panel.querySelector('#btn-remove-image');

    if (input) {
      input.addEventListener('change', e => {
        const file = e.target.files[0];
        if (file) handleImageUpload(file);
      });
    }

    if (area) {
      area.addEventListener('dragover', e => {
        e.preventDefault();
        area.style.borderColor = 'var(--color-primary)';
      });
      area.addEventListener('dragleave', () => {
        area.style.borderColor = '';
      });
      area.addEventListener('drop', e => {
        e.preventDefault();
        area.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          handleImageUpload(file);
        }
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', e => {
        e.stopPropagation();
        cardState.image = null;
        renderCard();
        buildDecorPanel();
        saveState();
      });
    }
  }

  let currentStickerCategory = 'party';

  function buildStickerLibrary() {
    const catContainer = document.getElementById('sticker-categories');
    const gridContainer = document.getElementById('sticker-grid');
    if (!catContainer || !gridContainer) return;

    const t = PartyI18n.t;

    // Category buttons
    catContainer.innerHTML = '';
    stickerLibrary.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `sticker-cat-btn ${cat.id === currentStickerCategory ? 'active' : ''}`;
      btn.textContent = t(`stickers.category.${cat.id}`);
      btn.addEventListener('click', () => {
        currentStickerCategory = cat.id;
        catContainer.querySelectorAll('.sticker-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderStickerGrid();
      });
      catContainer.appendChild(btn);
    });

    renderStickerGrid();
  }

  function renderStickerGrid() {
    const gridContainer = document.getElementById('sticker-grid');
    if (!gridContainer) return;

    const cat = stickerLibrary.find(c => c.id === currentStickerCategory);
    if (!cat) return;

    gridContainer.innerHTML = '';
    cat.stickers.forEach(emoji => {
      const btn = document.createElement('button');
      btn.className = 'sticker-pick';
      btn.textContent = emoji;
      btn.addEventListener('click', () => addSticker(emoji));
      gridContainer.appendChild(btn);
    });
  }

  function updatePlacedStickersList() {
    const listEl = document.getElementById('placed-stickers-list');
    const clearBtn = document.getElementById('btn-clear-stickers');
    const section = document.getElementById('placed-stickers-section');
    if (!listEl) return;

    const stickers = cardState.stickers || [];
    const t = PartyI18n.t;

    if (stickers.length === 0) {
      listEl.innerHTML = `<div class="sticker-hint">${t('editor.stickers.none')}</div>`;
      if (clearBtn) clearBtn.classList.add('hidden');
      return;
    }

    listEl.innerHTML = '';
    stickers.forEach(s => {
      const item = document.createElement('span');
      item.className = 'placed-sticker-item';
      item.innerHTML = `${s.emoji} <button class="remove-placed" title="${t('editor.stickers.remove')}">✕</button>`;
      item.querySelector('.remove-placed').addEventListener('click', () => removeSticker(s.id));
      // Highlight on hover
      item.addEventListener('mouseenter', () => {
        const el = document.querySelector(`[data-sticker-id="${s.id}"]`);
        if (el) el.classList.add('selected');
      });
      item.addEventListener('mouseleave', () => {
        const el = document.querySelector(`[data-sticker-id="${s.id}"]`);
        if (el && selectedStickerId !== s.id) el.classList.remove('selected');
      });
      listEl.appendChild(item);
    });

    if (clearBtn) {
      clearBtn.classList.remove('hidden');
      clearBtn.onclick = () => clearAllStickers();
    }
  }

  function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = e => {
      // Resize image to reasonable size to keep localStorage manageable
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxSize = 300;
        let w = img.width, h = img.height;
        if (w > h && w > maxSize) { h = h * maxSize / w; w = maxSize; }
        else if (h > maxSize) { w = w * maxSize / h; h = maxSize; }
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        cardState.image = canvas.toDataURL('image/jpeg', 0.8);
        renderCard();
        buildDecorPanel();
        saveState();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  /* ---------- Apply Colors ---------- */
  function applyColors() {
    const card = cardEl();
    if (!card) return;

    card.style.background = cardState.colors.background;
    card.style.color = cardState.colors.text;

    card.querySelectorAll('[data-field="title"], [data-field="subtitle"]').forEach(el => {
      el.style.color = cardState.colors.heading;
    });
  }

  /* ---------- Sync panel field from card edit ---------- */
  function syncPanelField(field, value) {
    const input = document.querySelector(`[data-sync-field="${field}"]`);
    if (input) {
      if (input.tagName === 'TEXTAREA') {
        input.value = value;
      } else {
        input.value = value;
      }
    }
  }

  /* ---------- Undo / Redo ---------- */
  function saveState() {
    // Debounce: save after a short delay
    clearTimeout(saveState._timer);
    saveState._timer = setTimeout(() => {
      const snap = JSON.parse(JSON.stringify(cardState));
      // Remove future states if we branched off
      if (historyIndex < historyStack.length - 1) {
        historyStack = historyStack.slice(0, historyIndex + 1);
      }
      historyStack.push(snap);
      if (historyStack.length > MAX_HISTORY) historyStack.shift();
      historyIndex = historyStack.length - 1;
      updateUndoRedoButtons();
      saveToStorage();
    }, 300);
  }

  function undo() {
    if (historyIndex <= 0) return;
    historyIndex--;
    restoreState(historyStack[historyIndex]);
  }

  function redo() {
    if (historyIndex >= historyStack.length - 1) return;
    historyIndex++;
    restoreState(historyStack[historyIndex]);
  }

  function restoreState(state) {
    cardState = JSON.parse(JSON.stringify(state));
    renderCard();
    buildPanels();
    updateUndoRedoButtons();
    saveToStorage();
  }

  function updateUndoRedoButtons() {
    const undoBtn = document.getElementById('btn-undo');
    const redoBtn = document.getElementById('btn-redo');
    if (undoBtn) undoBtn.disabled = historyIndex <= 0;
    if (redoBtn) redoBtn.disabled = historyIndex >= historyStack.length - 1;
  }

  /* ---------- LocalStorage ---------- */
  function saveToStorage() {
    try {
      localStorage.setItem(
        `partyinvites-card-${cardState.templateId}`,
        JSON.stringify(cardState)
      );
    } catch (e) {
      // Storage full – ignore silently
    }
  }

  function loadFromStorage(templateId) {
    try {
      const raw = localStorage.getItem(`partyinvites-card-${templateId}`);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function clearStorage(templateId) {
    localStorage.removeItem(`partyinvites-card-${templateId}`);
  }

  /* ---------- Get Card State ---------- */
  function getCardState() {
    return JSON.parse(JSON.stringify(cardState));
  }

  function getCardElement() {
    return cardEl();
  }

  function getCurrentTemplate() {
    return currentTemplate;
  }

  /* ---------- Helpers ---------- */
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  return {
    init,
    undo,
    redo,
    getCardState,
    getCardElement,
    getCurrentTemplate,
    renderCard,
    buildPanels,
  };
})();
