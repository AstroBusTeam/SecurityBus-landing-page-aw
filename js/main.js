(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', () => {
    initNavbar()
    initHeroScroll()
    initFadeUp()
    initVideoCarousel()
    initGalleryCarousel()
  })

  /* =========================================================
     NAVBAR
     ========================================================= */
  function initNavbar() {
    const navbar = document.getElementById('navbar')
    const burger = document.getElementById('hamburger')
    const linksEl = document.querySelector('.navbar .links')

    /* Fondo sólido al hacer scroll */
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    /* Hamburguesa: abre/cierra el menú móvil */
    burger.addEventListener('click', () => linksEl.classList.toggle('open'))

    /* Enlaces del menú: scroll suave + resaltar activo */
    document.querySelectorAll('.navbar .link[data-target]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target')
        const section = document.getElementById(target)
        if (section) section.scrollIntoView({ behavior: 'smooth' })

        document.querySelectorAll('.navbar .link').forEach((b) => b.classList.remove('active-link'))
        btn.classList.add('active-link')
        linksEl.classList.remove('open')
      })
    })
  }

  /* Botones del hero que llevan a otras secciones */
  function initHeroScroll() {
    document.querySelectorAll('.hero [data-target]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const section = document.getElementById(btn.getAttribute('data-target'))
        if (section) section.scrollIntoView({ behavior: 'smooth' })
      })
    })
  }

  /* =========================================================
     FADE-UP al hacer scroll
     ========================================================= */
  function initFadeUp() {
    document.querySelectorAll('[data-fade]').forEach((el) => {
      el.classList.add('fade-up-target')
      const delay = parseInt(el.getAttribute('data-fade-delay') || '0', 10)

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add('fade-visible'), delay)
            observer.disconnect()
          }
        },
        { threshold: 0.12 }
      )
      observer.observe(el)
    })

    /* Animación de entrada de la portada */
    const hero = document.getElementById('hero')
    if (hero) setTimeout(() => hero.classList.add('loaded'), 100)
  }

  /* =========================================================
     CARRUSEL 
     ========================================================= */
  function initCarousel(dataKey, prevId, nextId, render) {
    const data = window.SB.CAROUSELS[dataKey]
    let index = 0

    const draw = () => {
      const slides = data.slides[window.SB.getLang()] || data.slides.es
      render(slides[index], index, slides.length)
    }

    const prev = document.getElementById(prevId)
    const next = document.getElementById(nextId)
    prev.addEventListener('click', () => {
      index = (index - 1 + data.srcs.length) % data.srcs.length
      draw()
    })
    next.addEventListener('click', () => {
      index = (index + 1) % data.srcs.length
      draw()
    })

    /* Se vuelve a pintar el slide cuando cambia el idioma */
    document.addEventListener('langchange', draw)

    draw()
  }

  /* =========================================================
     CARRUSEL DE VIDEOS (sección Sobre el producto)
     ========================================================= */
  function initVideoCarousel() {
    initCarousel('videos', 'aboutPrev', 'aboutNext', (slide, index, total) => {
      const iframe = document.getElementById('aboutVideo')
      const srcs = window.SB.CAROUSELS.videos.srcs

      iframe.src = srcs[index]
      iframe.title = slide.iframeTitle
      document.getElementById('aboutEyebrow').textContent = slide.eyebrow
      document.getElementById('aboutSlideTitle').textContent = slide.title
      document.getElementById('aboutSlideSubtitle').textContent = slide.subtitle
      document.getElementById('aboutCaptionTitle').textContent = slide.title
      document.getElementById('aboutCounter').textContent = (index + 1) + '/' + total
    })
  }

  /* =========================================================
     CARRUSEL DE GALERÍA DE IMÁGENES
     ========================================================= */
  function initGalleryCarousel() {
    initCarousel('gallery', 'galleryPrev', 'galleryNext', (slide, index, total) => {
      const img = document.getElementById('galleryImage')
      const srcs = window.SB.CAROUSELS.gallery.srcs

      img.src = srcs[index]
      img.alt = slide.alt
      document.getElementById('galleryCaptionLabel').textContent = slide.label
      document.getElementById('galleryCounter').textContent = (index + 1) + '/' + total
    })
  }
})()
