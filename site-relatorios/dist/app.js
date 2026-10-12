const slides = [...document.querySelectorAll('.slide')];
const hashes = ['abertura','contexto','plataforma','migracao','origem','papel','discovery','etapas','legado','investigacao','voz-cliente','personalizados','mercado','design','etapas-design','escopo','prototipo','validacao','definicoes','engajamento','rollout','piloto-controlado','instrumentacao','plano-rollout','resultados-parciais'];
let current = Math.max(0, hashes.indexOf(location.hash.slice(1) === 'problema' ? 'discovery' : location.hash.slice(1)));
function render(announce = false) {
  slides.forEach((slide,i) => slide.hidden = i !== current);
  document.body.classList.toggle('dark-cover', slides[current].classList.contains('cover'));
  document.querySelector('.breadcrumb').style.visibility = 'visible';
  const section = slides[current].dataset.section || (hashes[current] === 'investigacao' ? 'Metodologia' : '');
  const phase = document.getElementById('crumb-phase');
  const isHome = current === 0;
  const homeLink = document.querySelector('.home-link');
  document.getElementById('home-divider').hidden = isHome;
  phase.hidden = isHome;
  if (isHome) homeLink.setAttribute('aria-current', 'page');
  else homeLink.removeAttribute('aria-current');
  phase.textContent = slides[current].dataset.phase;
  const phaseIndex = slides.findIndex(slide => slide.dataset.phase === slides[current].dataset.phase);
  phase.href = '#' + hashes[phaseIndex];
  if (!section) phase.setAttribute('aria-current', 'page');
  else phase.removeAttribute('aria-current');
  document.getElementById('crumb-divider').hidden = !section;
  document.getElementById('crumb-section').hidden = !section;
  document.getElementById('crumb-section').textContent = section;
  document.getElementById('global-count').textContent = `${String(current + 1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
  document.getElementById('previous').disabled = current === 0;
  document.getElementById('next').disabled = current === slides.length - 1;
  if (announce) document.getElementById('announcement').textContent = `${slides[current].querySelector('h1').textContent}. Tela ${current+1} de ${slides.length}.`;
}
function go(index) { current = Math.min(slides.length-1,Math.max(0,index)); location.hash = hashes[current]; render(true); }
document.getElementById('previous').onclick = () => go(current-1);
document.getElementById('next').onclick = () => go(current+1);
window.addEventListener('hashchange',()=>{const index=hashes.indexOf(location.hash.slice(1) === 'problema' ? 'discovery' : location.hash.slice(1));if(index>=0){current=index;render(true)}});
window.addEventListener('keydown',event=>{if(event.altKey||event.ctrlKey||event.metaKey||/INPUT|TEXTAREA|SELECT/.test(event.target.tagName))return;if(event.key==='ArrowRight'){event.preventDefault();go(current+1)}if(event.key==='ArrowLeft'){event.preventDefault();go(current-1)}});
render();

const preview = document.querySelector('.image-preview');
let previewPinned = false;
let previewSource = null;
function showPreview(button, pinned = false) {
 previewSource = button; previewPinned = pinned;
 preview.querySelector('img').src = button.dataset.image;
 preview.querySelector('img').alt = button.querySelector('img').alt;
 preview.querySelector('p').textContent = button.dataset.caption;
 preview.hidden = false;
}
function hidePreview() { preview.hidden = true; previewPinned = false; }
document.querySelectorAll('.legacy-thumb').forEach(button => {
 button.addEventListener('mouseenter', () => showPreview(button));
 button.addEventListener('mouseleave', () => { if (!previewPinned) hidePreview(); });
 button.addEventListener('focus', () => showPreview(button));
 button.addEventListener('blur', () => { if (!previewPinned) hidePreview(); });
 button.addEventListener('click', () => { showPreview(button, true); preview.querySelector('button').focus(); });
});
preview.querySelector('button').addEventListener('click', () => { hidePreview(); previewSource?.focus(); hidePreview(); });
window.addEventListener('keydown', event => { if (event.key === 'Escape') hidePreview(); });
window.addEventListener('hashchange', hidePreview);

// Hover temporário; clique e teclado acessíveis; sair com mouse fecha e reseta.
document.querySelectorAll('.discovery-card').forEach(card => {
 const trigger = card.querySelector('.discovery-card-trigger');
 const detail = card.querySelector('.discovery-card-detail');
 let clickOpen = false;
 let keyboardFocus = false;
 let hovered = false;
 function positionDetail() {
 if (detail.hidden) return;
 card.classList.remove('opens-up');
 detail.style.maxHeight = '';
 const bounds = card.getBoundingClientRect();
 const below = Math.max(0, window.innerHeight - bounds.bottom - 24);
 const above = Math.max(0, bounds.top - 24);
 const opensUp = detail.scrollHeight > below && above > below;
 card.classList.toggle('opens-up', opensUp);
 detail.style.maxHeight = Math.max(80, opensUp ? above : below) + 'px';
 }
 function expand(open) {
 card.classList.toggle('is-expanded', open);
 trigger.setAttribute('aria-expanded', String(open));
 detail.hidden = !open;
 if (open) positionDetail();
 else {
 clickOpen = false;
 card.querySelectorAll('details').forEach(item => item.open = false);
 detail.scrollTop = 0;
 }
 }
 card.querySelectorAll('details').forEach(disclosure => {
 disclosure.addEventListener('toggle', positionDetail);

});
 window.addEventListener('resize', positionDetail);
 window.addEventListener('scroll', positionDetail, { passive: true });
 card.addEventListener('mouseenter', () => { hovered = true; expand(true); });
 card.addEventListener('mouseleave', () => { hovered = false; if (!keyboardFocus) expand(false); });
 card.addEventListener('focusin', event => {
 keyboardFocus = event.target.matches(':focus-visible');
 if (keyboardFocus) expand(true);
 });
 card.addEventListener('focusout', event => {
 if (!card.contains(event.relatedTarget)) { keyboardFocus = false; if (!hovered) expand(false); }
 });
 trigger.addEventListener('click', () => { clickOpen = !clickOpen; expand(clickOpen); });
 card.addEventListener('keydown', event => {
 if (event.key === 'Escape') {
 keyboardFocus = false;
 trigger.focus();
 expand(false);
 }
 });
 window.addEventListener('hashchange', () => { keyboardFocus = false; hovered = false; expand(false); });
 expand(false);
});

const carousel = document.querySelector('.prototype-carousel');
if (carousel) {
 const frames = [...carousel.querySelectorAll('.prototype-frame')];
 const dots = [...carousel.querySelectorAll('[data-prototype-index]')];
 let imageIndex = 0;
 let autoplay = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let interacting = false;
 const play = carousel.querySelector('.prototype-play');
 function updatePlay() {
 play.textContent = autoplay ? 'Ⅱ' : '▷';
 play.setAttribute('aria-label', autoplay ? 'Pausar troca automática' : 'Iniciar troca automática');
 }
 play.addEventListener('click', () => { autoplay = !autoplay; updatePlay(); });
 carousel.addEventListener('mouseenter', () => interacting = true);
 carousel.addEventListener('mouseleave', () => interacting = false);
 carousel.addEventListener('focusin', () => interacting = true);
 carousel.addEventListener('focusout', event => { if (!carousel.contains(event.relatedTarget)) interacting = false; });
 setInterval(() => {
 if (autoplay && !interacting && !carousel.closest('.slide').hidden && !document.hidden) showImage((imageIndex + 1) % frames.length);
 }, 5000);
 updatePlay();
 function showImage(index) {
 imageIndex = Math.max(0, Math.min(frames.length - 1, index));
 frames.forEach((frame,i) => frame.hidden = i !== imageIndex);
 dots.forEach((dot,i) => dot.setAttribute('aria-pressed', String(i === imageIndex)));
 carousel.querySelector('.prototype-prev').disabled = imageIndex === 0;
 carousel.querySelector('.prototype-next').disabled = imageIndex === frames.length - 1;
 carousel.querySelector('.prototype-count').textContent = `${String(imageIndex+1).padStart(2,'0')} / ${String(frames.length).padStart(2,'0')}`;
 }
 dots.forEach((dot,i) => dot.addEventListener('click', () => showImage(i)));
 carousel.querySelector('.prototype-prev').addEventListener('click', () => showImage(imageIndex-1));
 carousel.querySelector('.prototype-next').addEventListener('click', () => showImage(imageIndex+1));
 carousel.addEventListener('keydown', event => {
 if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
 event.preventDefault(); event.stopPropagation(); showImage(imageIndex + (event.key === 'ArrowRight' ? 1 : -1));
 }
 });
 showImage(0);
}

// Accessible tabs for the complementary rollout dashboards.
const dashboardTabs = [...document.querySelectorAll('.dashboard-tabs [role="tab"]')];
function selectDashboardTab(tab) {
 dashboardTabs.forEach(item => {
  const selected = item === tab;
  item.setAttribute('aria-selected', String(selected));
  item.tabIndex = selected ? 0 : -1;
  document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
 });
}
dashboardTabs.forEach((tab, index) => {
 tab.addEventListener('click', () => selectDashboardTab(tab));
 tab.addEventListener('keydown', event => {
  if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
  event.preventDefault(); event.stopPropagation();
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? dashboardTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + dashboardTabs.length) % dashboardTabs.length;
  selectDashboardTab(dashboardTabs[next]); dashboardTabs[next].focus();
 });
});
