import './sass/main.scss';

import menu from '../src/menu.json'
import menuCardTpl from '../src/templates/menu-card.hbs'
import { saveTheme, getTheme } from '../src/js/localStorage.js'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  menu: document.querySelector('.menu'),
  toggle: document.querySelector('#theme-switch-toggle'),
};

initializeTheme();

const template = createMenu(menu);
refs.menu.insertAdjacentHTML('beforeend', template);


function createMenu(menu) {
  return menu.map(menuCardTpl).join('');
}

refs.toggle.addEventListener('change', changeTheme);
function changeTheme(event) {
  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    saveTheme(Theme.DARK);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    saveTheme(Theme.LIGHT);
  }

}

function initializeTheme() {
  const initTheme = (getTheme() || Theme.LIGHT);
  refs.body.classList.add(initTheme);
  refs.toggle.checked = (initTheme === Theme.DARK);
} 
