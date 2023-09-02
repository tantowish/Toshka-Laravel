import './bootstrap';
import 'flowbite';

// Darkmode toggle
const darkToggle1 = document.querySelector('#dark-toggle');
const darkToggle2 = document.querySelector('#dark-toggle2');

const html = document.querySelector('html');

function toggleDarkMode() {
    if (darkToggle1.checked || darkToggle2.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
      }
  }
  
darkToggle1.addEventListener('click', toggleDarkMode);
darkToggle2.addEventListener('click', toggleDarkMode);
  

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    darkToggle1.checked=true
    darkToggle2.checked=true
  } else {
    document.documentElement.classList.remove('dark')
  }
  