(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', () => {
    initNavbar()
    initHeroScroll()
    initFadeUp()
    initVideoCarousel()
    initGalleryCarousel()
    initPrefetch()
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
  function sourcesFor(data, lang) {
    const other = lang === 'es' ? 'en' : 'es'
    const srcs = data.srcs || []

    if (Array.isArray(srcs)) {
      return srcs.map((s) => ({ primary: s, fallback: '' }))
    }

    const mine = srcs[lang] || []
    const others = srcs[other] || []
    const total = Math.max(mine.length, others.length)
    const list = []

    for (let i = 0; i < total; i++) {
      list.push({ primary: mine[i] || '', fallback: others[i] || '' })
    }
    return list
  }

  function setSource(el, entry) {
    if (!el || !entry) return

    const primary = entry.primary || entry.fallback
    if (!primary || el.dataset.sbSrc === primary) return

    el.onerror = null
    el.dataset.sbSrc = primary
    el.src = primary

    el.onerror = () => {
      el.onerror = null
      if (!entry.primary || !entry.fallback || entry.fallback === primary) return
      el.dataset.sbSrc = entry.fallback
      el.src = entry.fallback
    }
  }

  function initCarousel(dataKey, prevId, nextId, render) {
    const data = window.SB.CAROUSELS[dataKey]
    let index = 0

    const totalFor = (lang) => {
      const n = sourcesFor(data, lang).length
      return n || (data.slides[lang] || data.slides.es).length
    }


    const draw = () => {
      const lang = window.SB.getLang()
      const slides = data.slides[lang] || data.slides.es
      const srcs = sourcesFor(data, lang)
      const total = totalFor(lang)
      if (!total) return
      if (index > total - 1) index = total - 1
      render(slides[index] || {}, index, total, srcs[index])
    }

    const step = (delta) => {
      const total = totalFor(window.SB.getLang())
      if (!total) return
      index = (index + delta + total) % total
      draw()
    }

    const prev = document.getElementById(prevId)
    const next = document.getElementById(nextId)
    prev.addEventListener('click', () => step(-1))
    next.addEventListener('click', () => step(1))

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
    initCarousel('gallery', 'galleryPrev', 'galleryNext', (slide, index, total, src) => {
      const img = document.getElementById('galleryImage')

      setSource(img, src)
      img.alt = slide.alt
      document.getElementById('galleryCaptionLabel').textContent = slide.label
      document.getElementById('galleryCounter').textContent = (index + 1) + '/' + total
    })
  }

   function initPrefetch() {
    const toggle = document.querySelector('.lang-toggle')
    if (!toggle) return

    const warm = () => {
      const data = window.SB.CAROUSELS.gallery
      const other = window.SB.getLang() === 'es' ? 'en' : 'es'
      const mine = sourcesFor(data, window.SB.getLang()).map((s) => s.primary).join('|')
      const theirs = sourcesFor(data, other).map((s) => s.primary).join('|')

      if (mine === theirs) return

      sourcesFor(data, other).forEach((s) => {
        if (s.primary) new Image().src = s.primary
      })
    }

    toggle.addEventListener('pointerenter', warm, { once: true })
    toggle.addEventListener('focusin', warm, { once: true })
  }

})()
