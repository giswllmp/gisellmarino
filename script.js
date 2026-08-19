
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const modal = document.getElementById('pdfModal');
const pdfFrame = document.getElementById('pdfFrame');
const pdfTitle = document.getElementById('pdfTitle');
const openPdfNew = document.getElementById('openPdfNew');

document.querySelectorAll('.open-pdf').forEach(button => {
  button.addEventListener('click', () => {
    const src = button.dataset.pdf;
    const title = button.dataset.title || 'Documento';
    pdfFrame.src = src;
    pdfTitle.textContent = title;
    openPdfNew.href = src;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal(){
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  pdfFrame.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-close-modal]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape' && modal.classList.contains('active')) closeModal();
});
