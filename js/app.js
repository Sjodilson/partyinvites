/* ============================================
   PartyInvites – Main Application
   ============================================ */

const PartyApp = (() => {
  let currentView = 'gallery';
  let currentCategory = 'all';

  /* ---------- Initialize ---------- */
  function init() {
    PartyI18n.init();

    // Check if this is a shared card view
    const sharedState = PartyShare.checkForSharedCard();
    if (sharedState) {
      showSharedView(sharedState);
      return;
    }

    renderGallery();
    bindGlobalEvents();
    bindThemeGenerator();
    updateLanguageButtons();
  }

  /* ---------- View Management ---------- */
  function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById(viewId + '-view');
    if (view) view.classList.add('active');
    currentView = viewId;

    // Show/hide header based on view
    const header = document.querySelector('.app-header');
    if (header) {
      header.style.display = viewId === 'share' ? 'none' : '';
    }
  }

  /* ---------- Gallery ---------- */
  function renderGallery() {
    renderCategories();
    renderTemplateGrid();
  }

  function renderCategories() {
    const container = document.getElementById('category-filter');
    if (!container) return;

    const t = PartyI18n.t;
    const categories = PartyTemplates.getCategories();
    container.innerHTML = '';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `category-btn ${cat === currentCategory ? 'active' : ''}`;
      btn.textContent = t(`gallery.category.${cat}`);
      btn.addEventListener('click', () => {
        currentCategory = cat;
        container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTemplateGrid();
      });
      container.appendChild(btn);
    });
  }

  function renderTemplateGrid() {
    const grid = document.getElementById('template-grid');
    if (!grid) return;

    const t = PartyI18n.t;
    const templates = PartyTemplates.getByCategory(currentCategory);
    grid.innerHTML = '';

    templates.forEach((tpl, idx) => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.style.animationDelay = `${idx * 0.06}s`;
      card.style.animation = 'slideUp 0.4s ease both';

      const preview = document.createElement('div');
      preview.className = 'template-card-preview';
      preview.style.background = tpl.thumbnailGradient;
      preview.style.color = tpl.colors.text;

      // Decoration elements
      if (tpl.decorations.emoji) {
        const emojis = tpl.decorations.emoji.split('');
        emojis.forEach((emoji, i) => {
          const span = document.createElement('span');
          span.className = 'preview-decoration';
          span.textContent = emoji;
          const positions = [
            { top: '10%', left: '8%', transform: 'rotate(-20deg)' },
            { top: '15%', right: '8%', transform: 'rotate(15deg)' },
            { bottom: '12%', left: '12%', transform: 'rotate(10deg)' },
            { bottom: '8%', right: '10%', transform: 'rotate(-10deg)' },
          ];
          if (positions[i]) Object.assign(span.style, positions[i]);
          preview.appendChild(span);
        });
      }

      const previewTitle = document.createElement('div');
      previewTitle.className = 'preview-title';
      previewTitle.style.fontFamily = tpl.fonts.heading;
      previewTitle.style.color = tpl.colors.heading;
      previewTitle.textContent = t(`${tpl.i18nPrefix}.title`);

      const previewSubtitle = document.createElement('div');
      previewSubtitle.className = 'preview-subtitle';
      previewSubtitle.style.fontFamily = tpl.fonts.body;
      previewSubtitle.textContent = t(`${tpl.i18nPrefix}.subtitle`);

      preview.appendChild(previewTitle);
      preview.appendChild(previewSubtitle);

      const nameEl = document.createElement('div');
      nameEl.className = 'template-card-name';
      nameEl.textContent = t(`${tpl.i18nPrefix}.name`);

      card.appendChild(preview);
      card.appendChild(nameEl);

      card.addEventListener('click', () => openEditor(tpl.id));
      grid.appendChild(card);
    });
  }

  /* ---------- Editor ---------- */
  function openEditor(templateIdOrObj) {
    showView('editor');
    PartyEditor.init(templateIdOrObj);
  }

  function closeEditor() {
    showView('gallery');
    renderGallery();
  }

  /* ---------- Shared Card View ---------- */
  function showSharedView(state) {
    showView('share');
    const sharedCard = document.getElementById('shared-card');
    if (sharedCard) {
      PartyEditor.renderSharedCard(state, sharedCard);
    }
  }

  /* ---------- Theme Generator ---------- */
  function bindThemeGenerator() {
    const input = document.getElementById('theme-input');
    const btn = document.getElementById('theme-create-btn');
    const suggestionsContainer = document.getElementById('theme-suggestions');

    if (!input || !btn) return;

    function generateFromInput() {
      const value = input.value.trim();
      if (!value) {
        input.focus();
        return;
      }
      const template = PartyThemeGenerator.generate(value);
      if (template) {
        input.value = '';
        openEditor(template);
      }
    }

    btn.addEventListener('click', generateFromInput);
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        generateFromInput();
      }
    });

    renderSuggestionChips(suggestionsContainer);
  }

  function renderSuggestionChips(container) {
    if (!container) return;
    const suggestions = PartyThemeGenerator.getSuggestions();
    // Show a curated subset (8 diverse suggestions)
    const curated = pickDiverseSuggestions(suggestions, 8);
    const t = PartyI18n.t;
    container.innerHTML = `<span class="theme-suggestions-label">${t('generator.suggestions')}</span>`;
    curated.forEach(s => {
      const chip = document.createElement('button');
      chip.className = 'theme-suggestion-chip';
      chip.innerHTML = `<span class="chip-emoji">${s.title.match(/[\p{Emoji}]/u)?.[0] || '🎉'}</span> ${s.keyword}`;
      chip.addEventListener('click', () => {
        const template = PartyThemeGenerator.generate(s.keyword);
        if (template) openEditor(template);
      });
      container.appendChild(chip);
    });
  }

  function pickDiverseSuggestions(allSuggestions, count) {
    if (allSuggestions.length <= count) return allSuggestions;
    const step = Math.floor(allSuggestions.length / count);
    const result = [];
    for (let i = 0; i < allSuggestions.length && result.length < count; i += step) {
      result.push(allSuggestions[i]);
    }
    return result;
  }

  /* ---------- Modal Management ---------- */
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove('hidden');
      // Reset status
      const status = modal.querySelector('.modal-status');
      const body = modal.querySelector('.modal-body');
      if (status) status.classList.add('hidden');
      if (body) body.classList.remove('hidden');
      // Reset feedback
      const feedback = modal.querySelector('.share-feedback');
      if (feedback) feedback.classList.add('hidden');
    }
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
  }

  /* ---------- Global Events ---------- */
  function bindGlobalEvents() {
    // Back button
    const btnBack = document.getElementById('btn-back');
    if (btnBack) btnBack.addEventListener('click', closeEditor);

    // Logo click → gallery
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
      logoLink.addEventListener('click', e => {
        e.preventDefault();
        if (currentView !== 'gallery') closeEditor();
      });
    }

    // Undo / Redo
    const btnUndo = document.getElementById('btn-undo');
    const btnRedo = document.getElementById('btn-redo');
    if (btnUndo) btnUndo.addEventListener('click', () => PartyEditor.undo());
    if (btnRedo) btnRedo.addEventListener('click', () => PartyEditor.redo());

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
      if (currentView !== 'editor') return;
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        // Don't intercept undo inside contenteditable
        if (document.activeElement && document.activeElement.hasAttribute('contenteditable')) return;
        e.preventDefault();
        PartyEditor.undo();
      }
      if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        if (document.activeElement && document.activeElement.hasAttribute('contenteditable')) return;
        e.preventDefault();
        PartyEditor.redo();
      }
      // Escape closes modals
      if (e.key === 'Escape') {
        closeModal('export-modal');
        closeModal('share-modal');
      }
    });

    // Export button + modal
    const btnExport = document.getElementById('btn-export');
    if (btnExport) btnExport.addEventListener('click', () => openModal('export-modal'));

    const exportClose = document.getElementById('export-modal-close');
    if (exportClose) exportClose.addEventListener('click', () => closeModal('export-modal'));

    const exportPng = document.getElementById('export-png');
    if (exportPng) exportPng.addEventListener('click', () => PartyExport.exportPNG());

    const exportPdf = document.getElementById('export-pdf');
    if (exportPdf) exportPdf.addEventListener('click', () => PartyExport.exportPDF());

    // Share button + modal
    const btnShare = document.getElementById('btn-share');
    if (btnShare) btnShare.addEventListener('click', () => openModal('share-modal'));

    const shareClose = document.getElementById('share-modal-close');
    if (shareClose) shareClose.addEventListener('click', () => closeModal('share-modal'));

    const shareCopy = document.getElementById('share-copy');
    if (shareCopy) shareCopy.addEventListener('click', () => PartyShare.copyShareLink());

    const shareEmail = document.getElementById('share-email');
    if (shareEmail) shareEmail.addEventListener('click', () => PartyShare.sendEmail());

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.classList.add('hidden');
      });
    });

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        PartyI18n.setLanguage(lang);
        updateLanguageButtons();
        // Re-render current view
        if (currentView === 'gallery') {
          renderGallery();
          renderSuggestionChips(document.getElementById('theme-suggestions'));
        } else if (currentView === 'editor') {
          // Rebuild panels with new language (keep card state)
          PartyEditor.buildPanels();
        }
      });
    });

    // Panel tab switching
    document.querySelectorAll('.panel-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.dataset.tab;
        document.querySelectorAll('.panel-tab').forEach(t => {
          t.classList.toggle('active', t.dataset.tab === tabId);
          t.setAttribute('aria-selected', t.dataset.tab === tabId);
        });
        document.querySelectorAll('.panel-content').forEach(p => {
          p.classList.toggle('active', p.getAttribute('data-panel') === tabId);
        });
      });
    });
  }

  function updateLanguageButtons() {
    const lang = PartyI18n.getLanguage();
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
  }

  /* ---------- Boot ---------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { showView, openEditor, closeEditor };
})();
