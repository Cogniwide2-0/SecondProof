(function () {
  var doc = document.documentElement; doc.classList.add('js');
  if (!doc.getAttribute('data-theme')) { var th; try { th = localStorage.getItem('sp-theme'); } catch (e) {} if (!th) th = window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'; doc.setAttribute('data-theme', th); }
  var pgEl = document.querySelector('[data-page]'); var page = (pgEl && pgEl.getAttribute('data-page')) || 'home';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // page-change progress bar and start-at-top
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) {}
  var bar = document.createElement('div'); bar.id = 'sp-prog'; bar.setAttribute('aria-hidden', 'true'); bar.innerHTML = '<i></i>';
  (document.body || doc).appendChild(bar);
  var bi = bar.firstChild; bar.className = 'run'; bi.style.width = '35%';
  function done() { bi.style.width = '100%'; setTimeout(function () { bar.className = ''; bi.style.width = '0'; }, 380); }
  function top0() { if (!location.hash) { var h = doc.style.scrollBehavior; doc.style.scrollBehavior = 'auto'; window.scrollTo(0, 0); doc.style.scrollBehavior = h; } }
  top0();
  if (document.readyState === 'complete') done(); else window.addEventListener('load', function () { top0(); done(); });
  window.addEventListener('pageshow', function (e) { if (e.persisted) { bar.className = ''; bi.style.width = '0'; } });
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]'); if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    var u; try { u = new URL(a.getAttribute('href'), location.href); } catch (x) { return; }
    if (u.origin !== location.origin || /^(mailto|tel):/.test(a.getAttribute('href'))) return;
    if (u.pathname === location.pathname && u.search === location.search) return;
    bar.className = 'run'; bi.style.width = '0'; void bi.offsetWidth; bi.style.width = '82%';
  });
  var L = function (k, sz) { return window.VF_LOGO ? window.VF_LOGO(k, sz || 22) : ''; };
  var IP = {
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 17.5 9 5 9-5" opacity=".55"/>',
    coins: '<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v3c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.5-2.1-2.7-5-3"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6L12 3Z"/><path d="m8.8 12 2.2 2.2 4.4-4.4"/>',
    cloud: '<path d="M7 18.5h10.5a4 4 0 0 0 .6-8A6 6 0 0 0 6.6 9.2 4.7 4.7 0 0 0 7 18.5Z"/>',
    code: '<path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    check: '<circle cx="12" cy="12" r="8.5"/><path d="m8.3 12.2 2.5 2.5 5-5"/>',
    person: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>',
    spark: '<path d="M12 3.5 13.8 10l6.7 2-6.7 2L12 20.5 10.2 14l-6.7-2 6.7-2L12 3.5Z"/>',
    chart: '<path d="M4 20h16"/><path d="M7 16v-5M12 16V6M17 16v-8"/>',
    chat: '<path d="M4.5 5.5h15v10h-8l-4.5 3.5v-3.5H4.5z"/><path d="M8.5 10.5h7"/>',
    window: '<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 9h18"/>',
    box: '<path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z"/><path d="M4 7l8 4 8-4M12 11v10"/>',
    monitor: '<rect x="3" y="4" width="18" height="12" rx="1.6"/><path d="M8.5 20h7M12 16v4"/>',
    chip: '<rect x="6.5" y="6.5" width="11" height="11" rx="2"/><path d="M10 3.5v3M14 3.5v3M10 17.5v3M14 17.5v3M3.5 10h3M3.5 14h3M17.5 10h3M17.5 14h3"/>',
    db: '<ellipse cx="12" cy="6" rx="7" ry="2.8"/><path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6"/><path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8"/>',
    building: '<path d="M4.5 20.5v-15l7-2.5v17.5M11.5 8h8v12.5"/><path d="M3 20.5h18M7.5 8.5h1M7.5 12h1M7.5 15.5h1M15 11.5h1M15 15h1"/>',
    refresh: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4h-4"/>',
    clipboard: '<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 4.5V3h6v1.5"/><path d="m9 13 2 2 4-4"/>',
    swap: '<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>',
    doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/><path d="M10.3 11.2a1.8 1.8 0 1 1 2.4 1.7c-.5.2-.7.6-.7 1.1M12 17h.01"/>',
    trend: '<path d="m3.5 17 6-6 4 4 7-7.5"/><path d="M15 7.5h5.5V13"/>',
    grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
    scale: '<path d="M12 4v16M7 20h10M5 7h14"/><path d="m5 7-2.5 6a2.5 2.5 0 0 0 5 0L5 7ZM19 7l-2.5 6a2.5 2.5 0 0 0 5 0L19 7Z"/>',
    users: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><path d="M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.8c1.7.7 2.8 2.3 3.1 4.7"/>'
  };
  var AGC = { BA: '#2E6BEA', TD: '#7C5CF0', TE: '#16824F', VR: '#C46A12', DM: '#C2323B', AE: '#4C8DFF', PE: '#C46A12', RM: '#16824F' };
  var ico = function (k) { if (AGC[k]) return '<span class="pi ag" style="--pc:' + AGC[k] + '">' + k + '</span>'; return '<span class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (IP[k] || IP.spark) + '</svg></span>'; };
  var it = function (href, icon, t, s) { return '<a href="' + href + '">' + ico(icon) + '<span><b>' + t + '</b><small>' + s + '</small></span></a>'; };
  var intro = function (t, d, href, cta) { return '<div class="intro"><b>' + t + '</b><p>' + d + '</p><a href="' + href + '">' + cta + ' <span aria-hidden="true">→</span></a></div>'; };
  var lgi = function (href, k, t, s) { return '<a href="' + href + '"><span class="lg sm">' + L(k, 20) + '</span><span><b>' + t + '</b><small>' + s + '</small></span></a>'; };
  var MENUS = [
    ['agents', 'AI agents', intro('AI agents', 'Eight specialists that work like a QA team. People approve every step.', 'agents.html', 'Meet the team') + '<div class="col"><h5>The team</h5>' + it('agents.html#ag-ba', 'BA', 'Business Analyst', 'Requirements from docs or the live app') + it('agents.html#ag-td', 'TD', 'Test Designer', 'Test packs from approved requirements') + it('agents.html#ag-te', 'TE', 'Tester', 'Runs approved plans with evidence') + it('agents.html#ag-vr', 'VR', 'Verifier', 'Re-checks every failure') + '</div><div class="col"><h5>&nbsp;</h5>' + it('agents.html#ag-dm', 'DM', 'Defect Manager', 'Defect drafts synced to your tracker') + it('agents.html#ag-ae', 'AE', 'Automation Engineer', 'Scripts at 0 AI credits') + it('agents.html#ag-pe', 'PE', 'Performance Engineer', 'Load tests with safety stops') + it('agents.html#ag-rm', 'RM', 'Release Manager', 'Gates and the Evidence Pack') + '</div><div class="col"><h5>How they work</h5>' + it('agents.html#day', 'clock', 'A day with the team', 'Hand-offs from BRD to sign-off') + it('agents.html#verify', 'check', 'Second-agent verification', 'Confidence before a person sees it') + it('agents.html#loop', 'person', 'Human in the loop', 'What agents can never do') + it('agents.html#specialists', 'spark', 'Product specialists', 'API, data, AI, mobile, packs') + it('agents.html#quality', 'chart', 'Agent quality', 'Accuracy and the ledger') + it('agents.html#ask', 'chat', 'Ask SecondProof', 'Answers with sources') + '</div>', 'agents.html', 'w3'],
    ['platform', 'Platform', intro('Platform', 'Seven layers. AI drafts, engines run, people sign.', 'platform.html', 'See the architecture') + '<div class="col"><h5>Architecture</h5>' + it('platform.html#layers', 'layers', 'Seven layers', 'From workspaces to the evidence store') + it('platform.html#cost', 'coins', 'The LLM thinks, engines work', 'Cost model and intelligence ledger') + it('platform.html#trace', 'link', 'Trace chain', 'Requirement to signature') + '</div><div class="col"><h5>Trust</h5>' + it('platform.html#trust', 'shield', 'Security and trust', 'Roles, vault, audit, residency') + it('platform.html#deploy', 'cloud', 'Deployment', 'SaaS, in-region, your cloud') + it('platform.html#open', 'code', 'Open by design', 'API, webhooks, exports') + '</div>', 'platform.html'],
    ['products', 'Products', intro('Products', 'Six product lines and enterprise packs on one governed core.', 'products.html', 'All product lines') + '<div class="col"><h5>Product lines</h5>' + it('products.html#apps', 'window', 'SecondProof Apps', 'Web, mobile and API') + it('products.html#product', 'box', 'SecondProof Product', 'For the product you keep building') + it('products.html#workstation', 'monitor', 'SecondProof Workstation', 'Thick clients, Citrix, terminal screens') + it('products.html#ai', 'chip', 'SecondProof AI', 'Chatbots, RAG and AI agents') + it('products.html#data', 'db', 'SecondProof Data', 'Migration, quality and masking') + it('products.html#packs', 'building', 'SecondProof Enterprise', 'Packs for enterprise platforms') + '</div><div class="col"><h5>Enterprise packs</h5>' + lgi('products.html#pack-sap', 'sap', 'SAP', 'S/4HANA, Fiori, SAP GUI') + lgi('products.html#pack-oracle', 'oracle', 'Oracle', 'Fusion Cloud and EBS') + lgi('products.html#pack-salesforce', 'salesforce', 'Salesforce', 'Sales, Service, CPQ') + lgi('products.html#pack-servicenow', 'servicenow', 'ServiceNow', 'ITSM, Catalog, HR') + lgi('products.html#pack-dynamics', 'dynamics365', 'Dynamics 365', 'Finance and Operations, CE') + lgi('products.html#pack-workday', 'workday', 'Workday', 'HCM and Financials') + '</div>', 'products.html'],
    ['usecases', 'Use cases', intro('Use cases', 'Start with the problem you have this quarter.', 'use-cases.html', 'Explore use cases') + '<div class="col"><h5>By scenario</h5>' + it('use-cases.html#uc-aibuilt', 'spark', 'Apps built with AI', 'Prove it before you release it') + it('use-cases.html#uc-product', 'refresh', 'Product teams', 'Every sprint, every feature remembered') + it('use-cases.html#uc-sap', 'grid', 'Platform updates', 'SAP, Oracle, Salesforce and more') + it('use-cases.html#uc-vendor', 'clipboard', 'Vendor delivery acceptance', 'Check what your vendor built') + it('use-cases.html#uc-ai', 'chat', 'AI chatbots and agents', 'Launch AI with a quality gate') + it('use-cases.html#uc-migration', 'swap', 'Data migration', 'Signed reconciliation') + it('use-cases.html#uc-legacy', 'doc', 'Undocumented apps', 'Agents write the requirements') + '</div><div class="col"><h5>By goal</h5>' + it('use-cases.html#rc', 'trend', 'Release faster', 'Regression at 0 AI credits') + it('use-cases.html#ep', 'building', 'Enterprise platforms', 'Test only what changed') + it('use-cases.html#ad', 'target', 'AI and data quality', 'Evaluate, reconcile, mask') + it('use-cases.html#ga', 'scale', 'Governance and audit', 'Gates, CAB, Evidence Pack') + '</div><div class="col"><h5>By team</h5>' + it('use-cases.html#by-role', 'users', 'Leaders', 'CIO, CFO, risk and audit') + it('use-cases.html#uc-adoption', 'person', 'QA teams', 'Adopt without starting over') + it('use-cases.html#by-industry', 'building', 'By industry', 'Banking, government, telecom…') + '</div>', 'use-cases.html', 'w3'],
    ['integrations', 'Integrations', null, 'integrations.html'],
    ['value', 'Value & pilot', null, 'value.html']
  ];

  // header
  var hd = document.getElementById('vf-header');
  if (hd) {
    hd.className = 'vf-nav';
    hd.innerHTML = '<div class="wrap"><a class="logo" href="./" aria-label="SecondProof home"><span class="mk" aria-hidden="true"></span>SecondProof</a>' +
      '<nav id="vfNav" aria-label="Main">' + MENUS.map(function (m) {
        if (!m[2]) return '<a href="' + m[3] + '"' + (m[0] === page ? ' aria-current="page"' : '') + '>' + m[1] + '</a>';
        return '<div class="dd' + (m[0] === page ? ' cur' : '') + '"><a class="dd-l" href="' + m[3] + '"' + (m[0] === page ? ' aria-current="page"' : '') + '>' + m[1] + '</a><button type="button" class="dd-t" aria-expanded="false" aria-label="Show ' + m[1] + ' menu"></button><div class="mega ' + (m[4] || '') + '">' + m[2] + '</div></div>';
      }).join('') + '</nav>' +
      '<button class="theme-btn" type="button" id="themeBtn" aria-label="Switch between light and dark theme" title="Light or dark"><svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg></button>' +
      '<a class="btn primary cta-top" href="value.html#contact">Book a pilot <span class="arr">→</span></a>' +
      '<button class="menu-btn" type="button" id="menuBtn" aria-expanded="false" aria-controls="vfNav" aria-label="Open menu">☰</button></div>';
    var tb = document.getElementById('themeBtn');
    tb.addEventListener('click', function () { var nx = doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light'; doc.setAttribute('data-theme', nx); try { localStorage.setItem('sp-theme', nx); } catch (e) {} tb.setAttribute('aria-pressed', nx === 'light' ? 'true' : 'false'); });
    var mb = document.getElementById('menuBtn'), nv = document.getElementById('vfNav');
    mb.addEventListener('click', function () { var o = nv.classList.toggle('open'); mb.setAttribute('aria-expanded', o ? 'true' : 'false'); });
    var dds = [].slice.call(nv.querySelectorAll('.dd')), hov = window.matchMedia('(hover: hover) and (min-width: 1021px)');
    function setDD(dd, o) { dds.forEach(function (x) { if (x !== dd || !o) { x.classList.remove('open'); x.querySelector('.dd-t').setAttribute('aria-expanded', 'false'); } }); if (o) { dd.classList.add('open'); dd.querySelector('.dd-t').setAttribute('aria-expanded', 'true'); } }
    dds.forEach(function (dd) {
      var b = dd.querySelector('.dd-t'), tOpen, tClose;
      b.addEventListener('click', function (e) { e.stopPropagation(); setDD(dd, !dd.classList.contains('open')); });
      dd.addEventListener('mouseenter', function () { if (!hov.matches) return; clearTimeout(tClose); tOpen = setTimeout(function () { setDD(dd, true); }, nv.querySelector('.dd.open') ? 0 : 110); });
      dd.addEventListener('mouseleave', function () { if (!hov.matches) return; clearTimeout(tOpen); tClose = setTimeout(function () { if (dd.classList.contains('open')) setDD(dd, false); }, 180); });
      dd.querySelector('.dd-l').addEventListener('keydown', function (e) { if (e.key === 'ArrowDown') { e.preventDefault(); setDD(dd, true); var f = dd.querySelector('.mega a'); if (f) f.focus(); } });
      dd.addEventListener('focusout', function (e) { if (e.relatedTarget && !dd.contains(e.relatedTarget)) setDD(dd, false); });
    });
    document.addEventListener('click', function (e) { if (!nv.contains(e.target)) dds.forEach(function (x) { x.classList.remove('open'); x.querySelector('.dd-t').setAttribute('aria-expanded', 'false'); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') [].slice.call(nv.querySelectorAll('.dd.open')).forEach(function (x) { x.classList.remove('open'); }); });
  }
  // footer
  var ft = document.getElementById('vf-footer');
  if (ft) {
    ft.className = 'vf-foot';
    ft.innerHTML = '<div class="wrap"><div class="cols">' +
      '<div><a class="logo" href="./"><span class="mk" aria-hidden="true"></span>SecondProof</a><p class="muted" style="margin-top:14px;font-size:14.5px;max-width:320px">AI builds it. SecondProof proves it. Independent verification for software built at AI speed.</p></div>' +
      '<div><h4>Platform</h4><a href="agents.html">AI agents</a><a href="platform.html">Architecture</a><a href="platform.html#trust">Security and trust</a><a href="platform.html#deploy">Deployment</a></div>' +
      '<div><h4>Solutions</h4><a href="use-cases.html">Use cases</a><a href="products.html">Products</a><a href="products.html#packs">Enterprise packs</a><a href="integrations.html">Integrations</a></div>' +
      '<div><h4>Get started</h4><a href="value.html">Business value</a><a href="value.html#plans">Plans</a><a href="value.html#contact">Book a pilot</a></div>' +
      '</div><div class="base"><span>© 2026 Cogniwide · SecondProof</span><span><a href="privacy.html" style="display:inline;color:inherit">Privacy</a> · product@cogniwide.com</span></div></div>';
  }

  // reveal (visible at rest; only below-the-fold items get the lift)
  if (!reduce && 'IntersectionObserver' in window) {
    var els = [].slice.call(document.querySelectorAll('.rv'));
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { if (el.getBoundingClientRect().top > vh) { el.classList.add('pre'); io.observe(el); } });
  }

  // tabs: [data-tabs] with buttons[data-tab] and panels[data-panel]
  [].slice.call(document.querySelectorAll('[data-tabs]')).forEach(function (root) {
    var btns = [].slice.call(root.querySelectorAll('[data-tab]'));
    var panels = [].slice.call(root.querySelectorAll('[data-panel]'));
    function sel(k) { btns.forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-tab') === k ? 'true' : 'false'); }); panels.forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== k && k !== 'all' ? true : false; if (k === 'all') p.hidden = false; }); }
    btns.forEach(function (b) { b.addEventListener('click', function () { sel(b.getAttribute('data-tab')); }); });
  });

  // carousel: auto-advancing slider, 6 s per slide
  var car = document.querySelector('[data-carousel]');
  if (car) {
    var slides = [].slice.call(car.querySelectorAll('.slide'));
    var track = car.querySelector('.track');
    var dots = car.querySelector('.dots');
    var bar = car.querySelector('.progress i');
    var idx = 0, DUR = 6000, start = Date.now(), hold = false, held = 0;
    dots.innerHTML = slides.map(function (s, i) { return '<button type="button" aria-label="Show slide ' + (i + 1) + ': ' + (s.getAttribute('data-label') || '') + '"><span>' + (s.getAttribute('data-label') || '') + '</span></button>'; }).join('');
    var db = [].slice.call(dots.querySelectorAll('button'));
    function show(i) {
      idx = (i + slides.length) % slides.length;
      if (track) track.style.transform = 'translateX(' + (-100 * idx) + '%)';
      slides.forEach(function (s, k) { s.classList.toggle('on', k === idx); s.setAttribute('aria-hidden', k === idx ? 'false' : 'true'); [].slice.call(s.querySelectorAll('a,button')).forEach(function (a) { a.tabIndex = k === idx ? 0 : -1; }); });
      db.forEach(function (b, k) { b.classList.toggle('on', k === idx); b.setAttribute('aria-current', k === idx ? 'true' : 'false'); });
      start = Date.now(); held = 0;
    }
    setInterval(function () {
      if (hold) return;
      var p = (Date.now() - start) / DUR;
      if (bar) bar.style.transform = 'scaleX(' + Math.min(1, p) + ')';
      if (p >= 1) show(idx + 1);
    }, 50);
    db.forEach(function (b, k) { b.addEventListener('click', function () { show(k); }); });
    var prev = car.querySelector('.prev'), next = car.querySelector('.next');
    if (prev) prev.addEventListener('click', function () { show(idx - 1); });
    if (next) next.addEventListener('click', function () { show(idx + 1); });
    var ctrl = car.querySelector('.ctrl');
    if (ctrl) { ctrl.addEventListener('focusin', function () { hold = true; held = Date.now(); }); ctrl.addEventListener('focusout', function () { hold = false; start += Date.now() - held; }); }
    document.addEventListener('visibilitychange', function () { if (document.hidden) { hold = true; held = Date.now(); } else { hold = false; start += Date.now() - held; } });
    car.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
    var sx = null; car.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    car.addEventListener('touchend', function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); sx = null; });
    show(0);
  }

  // constellation canvas: agents as nodes passing work along
  [].slice.call(document.querySelectorAll('canvas[data-constellation]')).forEach(function (cv) {
    var ctx = cv.getContext('2d'); if (!ctx) return;
    var W, H, dpr = Math.min(2, window.devicePixelRatio || 1), nodes = [], pulses = [];
    var cols = ['#4C8DFF', '#A98BFF', '#F5A65B', '#5FD39A', '#8FB6FF'];
    function size() { var r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function init() { size(); nodes = []; var n = Math.round(Math.min(70, Math.max(28, W * H / 16000))); for (var i = 0; i < n; i++) nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.6 + .8, c: cols[i % cols.length] }); }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < nodes.length; i++) { var a = nodes[i]; if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
        for (var j = i + 1; j < nodes.length; j++) { var b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy; if (d < 16000) { ctx.strokeStyle = 'rgba(143,182,255,' + (0.14 * (1 - d / 16000)) + ')'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); if (!reduce && Math.random() < 0.0009) pulses.push({ a: a, b: b, t: 0, c: a.c }); } } }
      nodes.forEach(function (a) { ctx.fillStyle = a.c; ctx.globalAlpha = .85; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill(); ctx.globalAlpha = 1; });
      pulses = pulses.filter(function (p) { p.t += 0.018; var x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t; ctx.fillStyle = p.c; ctx.shadowColor = p.c; ctx.shadowBlur = 12; ctx.beginPath(); ctx.arc(x, y, 2.4, 0, 6.283); ctx.fill(); ctx.shadowBlur = 0; return p.t < 1; });
      if (!reduce) requestAnimationFrame(frame);
    }
    init(); frame(); window.addEventListener('resize', function () { init(); if (reduce) frame(); });
  });

  // count-up for [data-count]
  [].slice.call(document.querySelectorAll('[data-count]')).forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-count')), suf = el.getAttribute('data-suffix') || '', pre = el.getAttribute('data-prefix') || '';
    el.textContent = pre + Math.round(target).toLocaleString('en') + suf;
    if (reduce || !('IntersectionObserver' in window)) return;
    var done = false, ob = new IntersectionObserver(function (es) { if (es[0].isIntersecting && !done) { done = true; var s = performance.now(); (function step(n) { var p = Math.min(1, (n - s) / 1200), e = 1 - Math.pow(1 - p, 3); el.textContent = pre + Math.round(target * e).toLocaleString('en') + suf; if (p < 1) requestAnimationFrame(step); })(s); } }, { threshold: .4 });
    if (el.getBoundingClientRect().top > window.innerHeight) ob.observe(el);
  });

  // live agent feed: rotates lines in [data-feed]
  [].slice.call(document.querySelectorAll('[data-feed]')).forEach(function (list) {
    if (reduce) return;
    var items = [].slice.call(list.children);
    setInterval(function () { var first = list.firstElementChild; first.style.opacity = '0'; setTimeout(function () { list.appendChild(first); first.style.opacity = '1'; }, 380); }, 2600);
    items.forEach(function (li) { li.style.transition = 'opacity .38s ease'; });
  });

  // copy buttons
  [].slice.call(document.querySelectorAll('[data-copy]')).forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.getAttribute('data-copy')), msg = document.getElementById(btn.getAttribute('data-msg'));
      function sel() { var r = document.createRange(); r.selectNodeContents(src); var s = getSelection(); s.removeAllRanges(); s.addRange(r); if (msg) msg.textContent = 'Selected. Press Ctrl or Cmd + C to copy.'; }
      try { navigator.clipboard.writeText(src.textContent).then(function () { if (msg) msg.textContent = 'Copied.'; }, sel); } catch (e) { sel(); }
    });
  });
  // v2.1: spotlight, stagger, kinetic band, tilt
  if (!reduce) {
    var sp = document.createElement('div'); sp.className = 'spot'; sp.setAttribute('aria-hidden', 'true'); document.body.appendChild(sp);
    window.addEventListener('pointermove', function (e) { sp.style.setProperty('--mx', e.clientX + 'px'); sp.style.setProperty('--my', e.clientY + 'px'); }, { passive: true });
  }
  var stg = [].slice.call(document.querySelectorAll('.stg'));
  if (reduce || !('IntersectionObserver' in window)) stg.forEach(function (e) { e.classList.add('in'); });
  else { var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); so.unobserve(e.target); } }); }, { threshold: .2 }); stg.forEach(function (e) { if (e.getBoundingClientRect().top < window.innerHeight) e.classList.add('in'); else so.observe(e); }); }
  var kin = [].slice.call(document.querySelectorAll('.m-kin .k-track'));
  if (kin.length && !reduce) { var kt = function () { kin.forEach(function (k, i) { var r = k.parentNode.getBoundingClientRect(); var off = 40 - Math.max(0, window.innerHeight - r.top) * .3; k.style.transform = 'translateX(' + off + 'px)'; }); }; window.addEventListener('scroll', kt, { passive: true }); kt(); }
  [].slice.call(document.querySelectorAll('.tilt')).forEach(function (el) { if (reduce) return;
    el.addEventListener('pointermove', function (e) { var r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = 'perspective(900px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-4px)'; });
    el.addEventListener('pointerleave', function () { el.style.transform = ''; }); });

  // logos: <span data-logo="sap" data-size="24"></span>
  [].slice.call(document.querySelectorAll('[data-logo]')).forEach(function (el) { var k = el.getAttribute('data-logo'), s = +(el.getAttribute('data-size') || 24); var html = L(k, s); if (html) el.innerHTML = html; });

  // pilot form
  var form = document.getElementById('pilotForm');
  if (form) {
    var cfg = window.VF_CONFIG || {}, st = document.getElementById('pfStatus'), btn = form.querySelector('button[type=submit]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = {}; [].slice.call(form.elements).forEach(function (el) { if (el.name && el.type !== 'submit') data[el.name] = el.type === 'checkbox' ? (el.checked ? 'yes' : 'no') : el.value; });
      if (data['bot-field']) return;
      var mode = cfg.formMode || 'email';
      function ok() { form.reset(); st.className = 'pf-ok'; st.textContent = 'Thank you. We will reply within one working day with a pilot plan.'; btn.disabled = false; }
      function fail() { st.className = 'pf-err'; st.textContent = 'We could not send the form. Please email ' + (cfg.contactEmail || 'product@cogniwide.com') + ' instead.'; btn.disabled = false; }
      if (mode === 'email') { fail(); return; }
      btn.disabled = true; st.className = ''; st.textContent = 'Sending…';
      var req = mode === 'endpoint' && cfg.formEndpoint
        ? fetch(cfg.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
        : fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data).toString() });
      req.then(function (r) { if (r.ok) ok(); else fail(); }, fail);
    });
  }

  // deep links: #tab-key selects a tab, #id scrolls after layout
  function deep() {
    var k = (location.hash || '').slice(1); if (!k) return;
    var b = document.querySelector('[data-tabs] [data-tab="' + k + '"]');
    if (b) { b.click(); var root = b.closest('[data-tabs]'); setTimeout(function () { (root.closest('section') || root).scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }, 60); return; }
    var t = document.getElementById(k);
    if (t) { var all = t.closest('[data-tabs]'); if (all) { var a = all.querySelector('[data-tab="all"]'); if (a) a.click(); } setTimeout(function () { t.classList.remove('pre'); t.scrollIntoView({ behavior: 'auto', block: 'start' }); }, 80); }
  }
  window.addEventListener('hashchange', deep); window.addEventListener('load', deep);
})();
