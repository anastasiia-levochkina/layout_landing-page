const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu__close');
const menuNav = document.querySelector('.menu__nav');
const pageBody = document.body;

const openMenu = () => {
  menu.classList.add('active');
  pageBody.classList.add('menu-open');
};

const closeMenu = () => {
  menu.classList.remove('active');
  pageBody.classList.remove('menu-open');
};

menuBtn.onclick = () => {
  openMenu();
};

closeBtn.onclick = () => {
  closeMenu();
};

document.addEventListener('click', (evt) => {
  const clickInsideMenu = menu.contains(evt.target);
  const clickOnMenuButton = menuBtn.contains(evt.target);

  if (
    menu.classList.contains('active') &&
    !clickInsideMenu &&
    !clickOnMenuButton
  ) {
    closeMenu();
  }
});

menuNav.addEventListener('click', (evt) => {
  if (evt.target.closest('a')) {
    closeMenu();
  }
});

const contactForm = document.querySelector('.contact__form');
const sendBtn = document.querySelector('.btn-send');
const successMessage = document.querySelector('.contact__success');

if (contactForm && sendBtn && successMessage) {
  contactForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendBtn.classList.add('btn-send--success');
    successMessage.classList.add('contact__success--visible');
    contactForm.reset();
  });
}

const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
let toastTimeoutId;

const showToast = (message) => {
  let callToast = document.querySelector('.call-toast');

  if (!callToast) {
    callToast = document.createElement('div');
    callToast.className = 'call-toast';
    pageBody.append(callToast);
  }

  callToast.textContent = message;

  callToast.classList.add('call-toast--visible');
  window.clearTimeout(toastTimeoutId);

  toastTimeoutId = window.setTimeout(() => {
    callToast.classList.remove('call-toast--visible');
  }, 2200);
};

phoneLinks.forEach((phoneLink) => {
  phoneLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    showToast('Nothing is calling you');
  });
});

emailLinks.forEach((emailLink) => {
  emailLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    showToast('Send a message to Nothing');
  });
});
