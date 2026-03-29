/* ============================================
   PartyInvites – Share Module
   ============================================ */

const PartyShare = (() => {

  /* ---------- Encode card state into URL ---------- */
  function generateShareURL() {
    const state = PartyEditor.getCardState();

    // Create a minimal representation (exclude image for URL size)
    const shareData = {
      t: state.templateId,
      tx: state.texts,
      c: state.colors,
      f: state.fonts,
      hs: state.headingSize,
      bs: state.bodySize,
      ta: state.textAlign,
      st: (state.stickers || []).map(s => ({
        e: s.emoji, x: s.x, y: s.y, s: s.size, r: s.rotation
      })),
    };

    const json = JSON.stringify(shareData);
    const encoded = btoa(unescape(encodeURIComponent(json)));
    const baseUrl = window.location.href.split('?')[0].split('#')[0];
    return `${baseUrl}?card=${encoded}`;
  }

  /* ---------- Decode card state from URL ---------- */
  function decodeShareURL(url) {
    try {
      const params = new URL(url).searchParams;
      const encoded = params.get('card');
      if (!encoded) return null;

      const json = decodeURIComponent(escape(atob(encoded)));
      const data = JSON.parse(json);

      return {
        templateId: data.t,
        texts: data.tx,
        colors: data.c,
        fonts: data.f,
        headingSize: data.hs,
        bodySize: data.bs,
        textAlign: data.ta,
        image: null,
        stickers: (data.st || []).map((s, i) => ({
          id: 'shared-' + i, emoji: s.e, x: s.x, y: s.y, size: s.s, rotation: s.r
        })),
      };
    } catch (e) {
      console.error('Failed to decode share URL:', e);
      return null;
    }
  }

  /* ---------- Copy to clipboard ---------- */
  async function copyShareLink() {
    const url = generateShareURL();
    try {
      await navigator.clipboard.writeText(url);
      showFeedback();
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showFeedback();
    }
  }

  /* ---------- Email ---------- */
  function sendEmail() {
    const t = PartyI18n.t;
    const url = generateShareURL();
    const subject = encodeURIComponent(t('share.emailSubject'));
    const body = encodeURIComponent(`${t('share.emailBody')}\n\n${url}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
    closeModal();
  }

  /* ---------- Feedback ---------- */
  function showFeedback() {
    const feedback = document.getElementById('share-feedback');
    if (feedback) {
      feedback.classList.remove('hidden');
      setTimeout(() => {
        feedback.classList.add('hidden');
        closeModal();
      }, 1500);
    }
  }

  function closeModal() {
    const modal = document.getElementById('share-modal');
    if (modal) modal.classList.add('hidden');
  }

  /* ---------- Check URL on load ---------- */
  function checkForSharedCard() {
    const state = decodeShareURL(window.location.href);
    return state;
  }

  return { generateShareURL, copyShareLink, sendEmail, checkForSharedCard, decodeShareURL };
})();
