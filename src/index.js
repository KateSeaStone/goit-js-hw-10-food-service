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
  const theme = event.target.checked ? Theme.DARK : Theme.LIGHT;
  refs.body.className = theme;
  saveTheme(theme);
}

function initializeTheme() {
  const initTheme = (getTheme() || Theme.LIGHT);
  refs.body.className = initTheme;
  refs.toggle.checked = (initTheme === Theme.DARK);
} 
