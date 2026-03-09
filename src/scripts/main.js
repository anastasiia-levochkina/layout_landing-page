const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.menu__close');

menuBtn.onclick = () => {
  menu.classList.add('active');
};

closeBtn.onclick = () => {
  menu.classList.remove('active');
};
