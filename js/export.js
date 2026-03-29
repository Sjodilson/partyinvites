/* ============================================
   PartyInvites – Export Module (PNG / PDF)
   ============================================ */

const PartyExport = (() => {
  const SCALE = 2; // 2x resolution for sharp output

  async function captureCard() {
    const card = PartyEditor.getCardElement();
    if (!card) throw new Error('No card element found');

    const canvas = await html2canvas(card, {
      scale: SCALE,
      useCORS: true,
      backgroundColor: null,
      logging: false,
      width: card.offsetWidth,
      height: card.offsetHeight,
      onclone: (clonedDoc) => {
        const clonedCard = clonedDoc.getElementById('invitation-card');
        if (!clonedCard) return;

        // Force all inline colors/backgrounds explicitly on the clone
        // to ensure they override any CSS specificity issues
        const state = PartyEditor.getCardState();
        if (state) {
          clonedCard.style.setProperty('background', state.colors.background, 'important');
          clonedCard.style.setProperty('color', state.colors.text, 'important');

          // Re-apply field-level colors and fonts explicitly
          clonedCard.querySelectorAll('.card-field').forEach(el => {
            const field = el.getAttribute('data-field');
            if (field === 'title' || field === 'subtitle') {
              el.style.setProperty('color', state.colors.heading, 'important');
              el.style.setProperty('font-family', state.fonts.heading, 'important');
            } else {
              el.style.setProperty('color', state.colors.text, 'important');
              el.style.setProperty('font-family', state.fonts.body, 'important');
            }
            if (field === 'title') {
              el.style.setProperty('font-size', state.headingSize, 'important');
            }
          });
        }

        // Remove the parent wrapper's filter that can affect color rendering
        const wrapper = clonedCard.closest('.card-wrapper');
        if (wrapper) wrapper.style.filter = 'none';

        // Remove editor-specific interactive styles
        clonedCard.querySelectorAll('.card-field').forEach(el => {
          el.removeAttribute('contenteditable');
          el.style.boxShadow = 'none';
          el.style.outline = 'none';
        });

        // Remove hover/selection highlights
        clonedCard.querySelectorAll('.card-field:hover').forEach(el => {
          el.style.boxShadow = 'none';
        });

        // Hide sticker controls
        clonedCard.querySelectorAll('.sticker-delete, .sticker-resize, .sticker-rotate').forEach(el => {
          el.style.display = 'none';
        });

        // Deselect stickers
        clonedCard.querySelectorAll('.card-sticker').forEach(el => {
          el.classList.remove('selected');
          el.style.outline = 'none';
        });
      },
    });

    return canvas;
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
