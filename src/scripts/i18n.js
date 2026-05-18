import dict from '../i18n/dict.js';

function applyI18n() {
  const lang = localStorage.getItem('lang') || 'zh';
  const t = dict[lang] || dict.zh;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });
}

if (typeof window !== 'undefined') {
  applyI18n();
  document.addEventListener('astro:after-swap', applyI18n);
}
