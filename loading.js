(function () {

  /* ── Constants ──────────────────────────── */
  const R    = 46;
  const CX   = 54;
  const CY   = 54;
  const CIRC = +(2 * Math.PI * R).toFixed(3); // ≈ 289.027

  /* ── Build stars ────────────────────────── */
  function buildStars(n) {
    let html = '';
    for (let i = 0; i < n; i++) {
      const x   = Math.random() * 100;
      const y   = Math.random() * 100;
      const dur = (2.5 + Math.random() * 3).toFixed(1);
      const del = (Math.random() * 3).toFixed(1);
      html += `<span class="ls-star" style="left:${x}%;top:${y}%;--dur:${dur}s;--delay:${del}s"></span>`;
    }
    return html;
  }

  /* ── Build DOM ──────────────────────────── */
  const screen = document.createElement('div');
  screen.id = 'loading-screen';
  screen.innerHTML = `
    <div class="ls-stars">${buildStars(28)}</div>

    <div class="ls-logo-wrap">
      <svg class="ls-ring" viewBox="0 0 108 108" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lsGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stop-color="#A07010"/>
            <stop offset="55%"  stop-color="#E8B84B"/>
            <stop offset="100%" stop-color="#2A8FA3"/>
          </linearGradient>
        </defs>
        <circle class="ls-ring-bg" cx="${CX}" cy="${CY}" r="${R}"/>
        <circle class="ls-ring-fg" id="lsRing"
                cx="${CX}" cy="${CY}" r="${R}"
                stroke="url(#lsGold)"
                stroke-dasharray="${CIRC}"
                stroke-dashoffset="${CIRC}"/>
      </svg>
      <img class="ls-logo" src="img/logo-modified.png" alt="أجوان"/>
    </div>

    <p class="ls-name">نادي أجوان الرياضي</p>
    <p class="ls-sub">الوجهة الرياضية الأولى</p>

    <div class="ls-bar-track">
      <div id="ls-bar"></div>
    </div>
    <span id="ls-percent">0%</span>
  `;

  document.body.prepend(screen);
  document.body.style.overflow = 'hidden';

  /* ── References ─────────────────────────── */
  const bar  = document.getElementById('ls-bar');
  const ring = document.getElementById('lsRing');
  const pct  = document.getElementById('ls-percent');
  let progress = 0;
  let done     = false;

  /* ── Update progress ────────────────────── */
  function setProgress(val) {
    val = Math.min(Math.max(val, 0), 100);
    progress = val;
    bar.style.width              = val + '%';
    ring.style.strokeDashoffset  = CIRC * (1 - val / 100);
    pct.textContent              = Math.floor(val) + '%';
  }

  /* ── Dismiss ─────────────────────────────── */
  function dismiss() {
    if (done) return;
    done = true;
    clearInterval(crawlTimer);

    // Rush to 100%
    const rush = setInterval(() => {
      const next = progress + 5;
      if (next >= 100) {
        setProgress(100);
        clearInterval(rush);
        setTimeout(() => {
          screen.classList.add('hide');
          screen.addEventListener('transitionend', () => {
            screen.remove();
            document.body.style.overflow = '';
          }, { once: true });
        }, 300);
      } else {
        setProgress(next);
      }
    }, 16);
  }

  /* ── Fake crawl 0 → 80% ──────────────────── */
  const crawlTimer = setInterval(() => {
    if (progress < 80) {
      setProgress(progress + Math.random() * 2.5 + 0.5);
    }
  }, 80);

  /* ── Triggers ────────────────────────────── */
  window.addEventListener('load', dismiss);
  setTimeout(dismiss, 7000); // safety net

})();
