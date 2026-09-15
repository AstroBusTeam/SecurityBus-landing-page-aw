(function () {
  'use strict'

  /* Tema inicial guardado o "dark" por defecto */
  let theme = localStorage.getItem('sb-theme') === 'light' ? 'light' : 'dark'

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('sb-theme', theme)
    /* Actualiza la etiqueta accesible del botón (según idioma y tema) */
    if (window.SB) window.SB.applyLanguage()
  }

  function toggle() {
    theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme()
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme()
    const btn = document.getElementById('themeToggle')
    if (btn) btn.addEventListener('click', toggle)
  })
})()
