/* ============================================
   PartyInvites – Export Module (PNG / PDF)
   ============================================
   Strategy: clone the card with ALL computed styles inlined,
   place it in an isolated offscreen container (no parent filters,
   transforms, or complex CSS ancestors), then let html2canvas
   render from pure inline styles — zero CSS parsing ambiguity.
   ============================================ */

const PartyExport = (() => {
  const SCALE = 2;

  /**
   * Walk two parallel DOM trees (original + clone) and copy every
   * computed style from the original onto the clone as inline CSS.
   * After this, the clone is fully self-contained — html2canvas
   * only reads inline styles, eliminating all CSS resolution issues.
   */
  function inlineAllStyles(original, clone) {
    if (original.nodeType !== Node.ELEMENT_NODE) return;
    const computed = window.getComputedStyle(original);
    let css = '';
    for (let i = 0; i < computed.length; i++) {
      const p = computed[i];
      css += p + ':' + computed.getPropertyValue(p) + ';';
    }
    clone.style.cssText = css;

    const origKids = original.children;
    const cloneKids = clone.children;
    for (let i = 0; i < origKids.length; i++) {
      if (cloneKids[i]) {
        inlineAllStyles(origKids[i], cloneKids[i]);
      }
    }
  }

  async function captureCard() {
    const card = PartyEditor.getCardElement();
    if (!card) throw new Error('No card element found');

    const w = card.offsetWidth;
    const h = card.offsetHeight;

    // 1. Deep-clone (preserves structure, text, attributes)
    const clone = card.cloneNode(true);
    clone.removeAttribute('id');

    // 2. Inline every computed style from the live card
    inlineAllStyles(card, clone);

    // 3. Force explicit pixel dimensions (bypass aspect-ratio)
    clone.style.width = w + 'px';
    clone.style.height = h + 'px';
    clone.style.aspectRatio = 'auto';
    clone.style.position = 'relative';
    clone.style.margin = '0';
    clone.style.filter = 'none';
    clone.style.animation = 'none';

    // 4. Remove editor-only interactive elements & states
    clone.querySelectorAll('.sticker-delete, .sticker-resize, .sticker-rotate')
      .forEach(el => el.remove());
    clone.querySelectorAll('.card-sticker').forEach(el => {
      el.classList.remove('selected');
      el.style.outline = 'none';
      el.style.filter = 'none';
    });
    clone.querySelectorAll('.card-field').forEach(el => {
      el.removeAttribute('contenteditable');
      el.style.cursor = 'default';
      el.style.boxShadow = 'none';
      el.style.outline = 'none';
    });

    // 5. Place in isolated offscreen container (direct child of body)
    const offscreen = document.createElement('div');
    offscreen.style.cssText =
      'position:fixed;left:-9999px;top:0;' +
      'width:' + w + 'px;height:' + h + 'px;' +
      'overflow:hidden;z-index:-1;pointer-events:none;' +
      'background:transparent;filter:none;';
    offscreen.appendChild(clone);
    document.body.appendChild(offscreen);

    try {
      // 6. Capture — styles are all inline so html2canvas just reads them
      const canvas = await html2canvas(clone, {
        scale: SCALE,
        useCORS: true,
        backgroundColor: null,
        logging: false,
        width: w,
        height: h,
      });
      return canvas;
    } finally {
      document.body.removeChild(offscreen);
    }
  }

  async function exportPNG() {
    showStatus(true);
    try {
      const canvas = await captureCard();
      const link = document.createElement('a');
      link.download = 'inbjudningskort.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error('PNG export failed:', e);
    } finally {
      showStatus(false);
      closeModal();
    }
  }

  async function exportPDF() {
    showStatus(true);
    try {
      const canvas = await captureCard();
      const imgData = canvas.toDataURL('image/png');

      const { jsPDF } = window.jspdf;
      // A6 landscape: 148mm × 105mm, portrait: 105mm × 148mm
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a6',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Scale image to fit A6 with margins
      const margin = 5;
      const maxW = pageWidth - margin * 2;
      const maxH = pageHeight - margin * 2;
      const imgRatio = canvas.width / canvas.height;
      const pageRatio = maxW / maxH;

      let imgW, imgH;
      if (imgRatio > pageRatio) {
        imgW = maxW;
        imgH = maxW / imgRatio;
      } else {
        imgH = maxH;
        imgW = maxH * imgRatio;
      }

      const x = (pageWidth - imgW) / 2;
      const y = (pageHeight - imgH) / 2;

      pdf.addImage(imgData, 'PNG', x, y, imgW, imgH);
      pdf.save('inbjudningskort.pdf');
    } catch (e) {
      console.error('PDF export failed:', e);
    } finally {
      showStatus(false);
      closeModal();
    }
  }

  function showStatus(show) {
    const status = document.getElementById('export-status');
    const body = document.querySelector('#export-modal .modal-body');
    if (status) status.classList.toggle('hidden', !show);
    if (body) body.classList.toggle('hidden', show);
  }

  function closeModal() {
    const modal = document.getElementById('export-modal');
    if (modal) modal.classList.add('hidden');
  }

  return { exportPNG, exportPDF, captureCard };
})();
