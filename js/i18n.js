(function (global) {
  'use strict'

  const I18N = {
    es: {
      'meta.title': 'SecurityBus — Protege Tu Ruta',

      'nav.brand': 'SecurityBus',
      'nav.features': 'CARACTERÍSTICAS',
      'nav.how': 'CÓMO FUNCIONA',
      'nav.stats': 'ESTADÍSTICA',
      'nav.support': 'APOYO',
      'nav.plans': 'PLANES',
      'nav.login': 'INGRESAR',
      'nav.menu': 'Menú',
      'nav.themeLight': 'Activar modo claro',
      'nav.themeDark': 'Activar modo oscuro',

      'hero.badge': 'UNIDAD DE PROTECCIÓN TÁCTICA',
      'hero.white1': 'PROTEGE',
      'hero.white2': 'TU RUTA,',
      'hero.green1': 'ASEGURA TU',
      'hero.green2': 'FUTURO.',
      'hero.subtitle': 'Sistema inteligente de defensa contra la extorsión y el crimen organizado en el transporte público del Perú. Vigilancia 24/7 y respuesta táctica inmediata.',
      'hero.primary': 'EMPEZAR AHORA →',
      'hero.secondary': 'VER CARACTERÍSTICAS',
      'hero.stat1': 'Rutas Seguras Operativas',
      'hero.stat2': 'Conductores Protegidos',
      'hero.stat3': 'Reducción de Incidentes',

      'features.eyebrow': 'Características',
      'features.titleA': 'SEGURIDAD TOTAL',
      'features.titleB': 'EN CADA KILÓMETRO',
      'features.subtitle': 'Tecnología de grado militar adaptada a las necesidades críticas del transporte público limeño.',
      'features.card1.name': 'Verificación QR',
      'features.card1.desc': 'Control estricto de tripulación mediante autenticación biométrica y digital antes de cada despacho.',
      'features.card2.name': 'Botón de Pánico',
      'features.card2.desc': 'Activación silenciosa de protocolos de seguridad ante amenazas directas con enlace a la PNP.',
      'features.card3.name': 'Conteo de Pasajeros',
      'features.card3.desc': 'Análisis de flujo en tiempo real mediante IA para detectar irregularidades o paradas no autorizadas.',
      'features.card4.name': 'Monitoreo Real',
      'features.card4.desc': 'Geolocalización satelital precisa con telemetría de ruta para cada unidad en circulación.',
      'features.card5.name': 'Alertas Inteligentes',
      'features.card5.desc': 'Notificaciones proactivas ante desvíos de ruta, excesos de velocidad o zonas de alto riesgo.',
      'features.card6.name': 'Soporte 24/7',
      'features.card6.desc': 'Equipo humano especializado operando desde nuestro centro de comando táctico sin interrupciones.',

      'how.eyebrow': 'Proceso',
      'how.titleA': '¿CÓMO FUNCIONA',
      'how.titleB': 'SECURITYBUS?',
      'how.subtitle': 'Un flujo diseñado para la máxima eficiencia operativa y seguridad total.',
      'how.step1.title': 'Inicio de Turno',
      'how.step1.desc': 'Validación obligatoria mediante escaneo QR y reconocimiento de identidad en base.',
      'how.step2.title': 'Monitoreo Constante',
      'how.step2.desc': 'Sensores y cámaras de IA supervisan el trayecto y el comportamiento de la unidad.',
      'how.step3.title': 'Alerta Inmediata',
      'how.step3.desc': 'Detección de amenazas externas o anomalías activando el cerco digital táctico.',
      'how.step4.title': 'Intervención',
      'how.step4.desc': 'Coordinación directa con patrullaje cercano y equipos de respuesta rápida SecurityBus.',

      'cta.titleA': 'PROTECCIÓN DE ÉLITE',
      'cta.titleB': 'PARA TU FLOTA',
      'cta.sub': 'No dejes la seguridad de tus conductores y pasajeros al azar. Implementa SecurityBus hoy mismo y toma el control de tus rutas.',
      'cta.btn': 'SOLICITAR AUDITORÍA DE SEGURIDAD',

      'plans.eyebrow': 'Planes',
      'plans.titleA': 'PLANES PARA',
      'plans.titleB': 'CONSORCIOS',
      'plans.subtitle': 'Suscripción mensual para empresas, consorcios y organizaciones de transporte público del Perú.',
      'plans.priceFrom': 'Desde',
      'plans.priceMonth': '/ mes',
      'plans.p1.name': 'BÁSICO',
      'plans.p1.desc': 'Para operadores pequeños que inician su transformación digital en seguridad.',
      'plans.p1.feature1': 'Hasta 10 unidades',
      'plans.p1.feature2': 'Monitoreo GPS',
      'plans.p1.feature3': 'Botón de pánico',
      'plans.p1.feature4': 'Registro de incidentes',
      'plans.p1.feature5': 'Gestión básica de conductores',
      'plans.p1.feature6': 'Reportes básicos',
      'plans.p1.btn': 'ELEGIR BÁSICO',
      'plans.p2.badge': 'MÁS ELEGIDO',
      'plans.p2.name': 'PROFESIONAL',
      'plans.p2.desc': 'El equilibrio ideal entre cobertura y costo para consorcios en crecimiento.',
      'plans.p2.feature1': 'Hasta 30 unidades',
      'plans.p2.feature2': 'Monitoreo GPS',
      'plans.p2.feature3': 'Botón de pánico',
      'plans.p2.feature4': 'Registro de incidentes',
      'plans.p2.feature5': 'Gestión completa de conductores',
      'plans.p2.feature6': 'Alertas de emergencia',
      'plans.p2.feature7': 'Historial de recorridos',
      'plans.p2.feature8': 'Reportes avanzados',
      'plans.p2.feature9': 'Soporte prioritario',
      'plans.p2.btn': 'ELEGIR PROFESIONAL',
      'plans.p3.name': 'EMPRESARIAL',
      'plans.p3.desc': 'Máxima cobertura y soporte premium para grandes consorcios y ciudades.',
      'plans.p3.feature1': 'Hasta 100 unidades',
      'plans.p3.feature2': 'Monitoreo GPS',
      'plans.p3.feature3': 'Botón de pánico',
      'plans.p3.feature4': 'Registro de incidentes',
      'plans.p3.feature5': 'Gestión completa de conductores',
      'plans.p3.feature6': 'Alertas de emergencia',
      'plans.p3.feature7': 'Historial de recorridos',
      'plans.p3.feature8': 'Reportes avanzados',
      'plans.p3.feature9': 'Soporte premium',
      'plans.p3.btn': 'ELEGIR EMPRESARIAL',
      'plans.custom.title': '¿NECESITAS UNA SOLUCIÓN PERSONALIZADA?',
      'plans.custom.text': 'Adapta SecurityBus a las necesidades y tamaño de tu empresa.',
      'plans.custom.btn': 'CONTACTAR CON NOSOTROS',

      'stats.eyebrow': 'Estadísticas',
      'stats.titleA': 'SECURITYBUS',
      'stats.titleB': 'STATISTICS',
      'stats.subtitle': 'Supervisa tu flota, analiza incidentes y toma mejores decisiones con SecurityBus.',
      'stats.demo': 'DATOS DEMO',
      'stats.kpi1.label': 'Unidades monitoreadas',
      'stats.kpi2.label': 'Conductores registrados',
      'stats.kpi3.label': 'Incidentes reportados',
      'stats.kpi4.label': 'Alertas atendidas',
      'stats.kpi5.label': 'Unidades activas',
      'stats.kpi6.label': 'Rutas monitoreadas',
      'stats.response.title': 'Tiempo promedio de respuesta a emergencias',
      'stats.response.value': '4 min 32 s',
      'stats.response.text': 'Tiempo promedio para responder a las emergencias reportadas.',
      'stats.chart1.title': 'Incidentes por mes',
      'stats.month.jan': 'ENE',
      'stats.month.feb': 'FEB',
      'stats.month.mar': 'MAR',
      'stats.month.apr': 'ABR',
      'stats.month.may': 'MAY',
      'stats.month.jun': 'JUN',
      'stats.chart2.title': 'Tipos de incidentes',
      'stats.type1': 'Robo',
      'stats.type2': 'Extorsión',
      'stats.type3': 'Accidente',
      'stats.type4': 'Emergencia médica',
      'stats.type5': 'Otros',
      'stats.chart3.title': 'Incidentes por ruta',
      'stats.route1': 'Ruta A',
      'stats.route2': 'Ruta B',
      'stats.route3': 'Ruta C',
      'stats.route4': 'Ruta D',
      'stats.demoNote': 'Datos demostrativos: no representan métricas reales de SecurityBus.',

      'about.titlePrefix': 'SOBRE EL',
      'about.prev': 'Video anterior',
      'about.next': 'Video siguiente',

      'gallery.eyebrow': 'Interfaz',
      'gallery.titleA': 'GALERÍA DEL',
      'gallery.titleB': 'PRODUCTO',
      'gallery.subtitle': 'Pantallas clave para entender cómo se visualiza la operación diaria de SecurityBus.',
      'gallery.prev': 'Imagen anterior',
      'gallery.next': 'Imagen siguiente',

      'footer.brand': 'AstroBus',
      'footer.copy': '© 2026 AstroBus Grupo 2 · UPC',
      'footer.link1': 'Privacidad',
      'footer.link2': 'Seguridad',
      'footer.link3': 'Contacto',
      'footer.link4': 'Sistema'
    },

    en: {
      'meta.title': 'SecurityBus — Protect Your Route',

      'nav.brand': 'SecurityBus',
      'nav.features': 'FEATURES',
      'nav.how': 'HOW IT WORKS',
      'nav.stats': 'STATISTICS',
      'nav.support': 'SUPPORT',
      'nav.plans': 'PLANS',
      'nav.login': 'SIGN IN',
      'nav.menu': 'Menu',
      'nav.themeLight': 'Switch to light mode',
      'nav.themeDark': 'Switch to dark mode',

      'hero.badge': 'TACTICAL PROTECTION UNIT',
      'hero.white1': 'PROTECT',
      'hero.white2': 'YOUR ROUTE,',
      'hero.green1': 'SECURE YOUR',
      'hero.green2': 'FUTURE.',
      'hero.subtitle': 'An intelligent defense system against extortion and organized crime in public transport in Peru. 24/7 surveillance and immediate tactical response.',
      'hero.primary': 'GET STARTED →',
      'hero.secondary': 'VIEW FEATURES',
      'hero.stat1': 'Operational Safe Routes',
      'hero.stat2': 'Protected Drivers',
      'hero.stat3': 'Incident Reduction',

      'features.eyebrow': 'Features',
      'features.titleA': 'TOTAL SECURITY',
      'features.titleB': 'AT EVERY MILE',
      'features.subtitle': 'Military-grade technology adapted to the critical needs of Lima public transport.',
      'features.card1.name': 'QR Verification',
      'features.card1.desc': 'Strict crew control through biometric and digital authentication before every dispatch.',
      'features.card2.name': 'Panic Button',
      'features.card2.desc': 'Silent activation of security protocols against direct threats with a direct link to the PNP.',
      'features.card3.name': 'Passenger Counting',
      'features.card3.desc': 'Real-time flow analysis using AI to detect irregularities or unauthorized stops.',
      'features.card4.name': 'Real-Time Monitoring',
      'features.card4.desc': 'Precise satellite geolocation with route telemetry for every unit in circulation.',
      'features.card5.name': 'Smart Alerts',
      'features.card5.desc': 'Proactive notifications for route deviations, speeding, or high-risk zones.',
      'features.card6.name': '24/7 Support',
      'features.card6.desc': 'A specialized human team operating from our tactical command center without interruptions.',

      'how.eyebrow': 'Process',
      'how.titleA': 'HOW SECURITYBUS',
      'how.titleB': 'WORKS?',
      'how.subtitle': 'A flow designed for maximum operational efficiency and total security.',
      'how.step1.title': 'Shift Start',
      'how.step1.desc': 'Mandatory validation through QR scanning and identity recognition at the base.',
      'how.step2.title': 'Constant Monitoring',
      'how.step2.desc': 'Sensors and AI cameras supervise the route and the behavior of the unit.',
      'how.step3.title': 'Immediate Alert',
      'how.step3.desc': 'Detection of external threats or anomalies activating the tactical digital perimeter.',
      'how.step4.title': 'Intervention',
      'how.step4.desc': 'Direct coordination with nearby patrols and SecurityBus rapid response teams.',

      'cta.titleA': 'ELITE PROTECTION',
      'cta.titleB': 'FOR YOUR FLEET',
      'cta.sub': "Don't leave the safety of your drivers and passengers to chance. Implement SecurityBus today and take control of your routes.",
      'cta.btn': 'REQUEST A SECURITY AUDIT',

      'plans.eyebrow': 'Plans',
      'plans.titleA': 'PLANS FOR',
      'plans.titleB': 'CONSORTIA',
      'plans.subtitle': 'Monthly subscription for public transport companies, consortiums and organizations in Peru.',
      'plans.priceFrom': 'From',
      'plans.priceMonth': '/ month',
      'plans.p1.name': 'BASIC',
      'plans.p1.desc': 'For small operators starting their digital transformation in security.',
      'plans.p1.feature1': 'Up to 10 units',
      'plans.p1.feature2': 'GPS monitoring',
      'plans.p1.feature3': 'Panic button',
      'plans.p1.feature4': 'Incident log',
      'plans.p1.feature5': 'Basic driver management',
      'plans.p1.feature6': 'Basic reports',
      'plans.p1.btn': 'CHOOSE BASIC',
      'plans.p2.badge': 'MOST POPULAR',
      'plans.p2.name': 'PROFESSIONAL',
      'plans.p2.desc': 'The ideal balance between coverage and cost for growing consortiums.',
      'plans.p2.feature1': 'Up to 30 units',
      'plans.p2.feature2': 'GPS monitoring',
      'plans.p2.feature3': 'Panic button',
      'plans.p2.feature4': 'Incident log',
      'plans.p2.feature5': 'Complete driver management',
      'plans.p2.feature6': 'Emergency alerts',
      'plans.p2.feature7': 'Route history',
      'plans.p2.feature8': 'Advanced reports',
      'plans.p2.feature9': 'Priority support',
      'plans.p2.btn': 'CHOOSE PROFESSIONAL',
      'plans.p3.name': 'ENTERPRISE',
      'plans.p3.desc': 'Maximum coverage and premium support for large consortiums and cities.',
      'plans.p3.feature1': 'Up to 100 units',
      'plans.p3.feature2': 'GPS monitoring',
      'plans.p3.feature3': 'Panic button',
      'plans.p3.feature4': 'Incident log',
      'plans.p3.feature5': 'Complete driver management',
      'plans.p3.feature6': 'Emergency alerts',
      'plans.p3.feature7': 'Route history',
      'plans.p3.feature8': 'Advanced reports',
      'plans.p3.feature9': 'Premium support',
      'plans.p3.btn': 'CHOOSE ENTERPRISE',
      'plans.custom.title': 'NEED A CUSTOM SOLUTION?',
      'plans.custom.text': 'Adapt SecurityBus to the needs and size of your company.',
      'plans.custom.btn': 'CONTACT US',

      'stats.eyebrow': 'Statistics',
      'stats.titleA': 'SECURITYBUS',
      'stats.titleB': 'STATISTICS',
      'stats.subtitle': 'Monitor your fleet, analyze incidents and make better decisions with SecurityBus.',
      'stats.demo': 'DEMO DATA',
      'stats.kpi1.label': 'Units monitored',
      'stats.kpi2.label': 'Registered drivers',
      'stats.kpi3.label': 'Reported incidents',
      'stats.kpi4.label': 'Alerts attended',
      'stats.kpi5.label': 'Active units',
      'stats.kpi6.label': 'Routes monitored',
      'stats.response.title': 'Average emergency response time',
      'stats.response.value': '4 min 32 sec',
      'stats.response.text': 'Average time taken to respond to reported emergencies.',
      'stats.chart1.title': 'Incidents by Month',
      'stats.month.jan': 'JAN',
      'stats.month.feb': 'FEB',
      'stats.month.mar': 'MAR',
      'stats.month.apr': 'APR',
      'stats.month.may': 'MAY',
      'stats.month.jun': 'JUN',
      'stats.chart2.title': 'Incident Types',
      'stats.type1': 'Robbery',
      'stats.type2': 'Extortion',
      'stats.type3': 'Accident',
      'stats.type4': 'Medical emergency',
      'stats.type5': 'Other',
      'stats.chart3.title': 'Incidents by Route',
      'stats.route1': 'Route A',
      'stats.route2': 'Route B',
      'stats.route3': 'Route C',
      'stats.route4': 'Route D',
      'stats.demoNote': 'Demo data: these are not real SecurityBus metrics.',

      'about.titlePrefix': 'ABOUT THE',
      'about.prev': 'Previous video',
      'about.next': 'Next video',

      'gallery.eyebrow': 'Interface',
      'gallery.titleA': 'PRODUCT',
      'gallery.titleB': 'GALLERY',
      'gallery.subtitle': "Key screens to understand how SecurityBus's daily operation is visualized.",
      'gallery.prev': 'Previous image',
      'gallery.next': 'Next image',

      'footer.brand': 'AstroBus',
      'footer.copy': '© 2026 AstroBus Grupo 2 · UPC',
      'footer.link1': 'Privacy',
      'footer.link2': 'Security',
      'footer.link3': 'Contact',
      'footer.link4': 'System'
    }
  }

  const CAROUSELS = {
    videos: {
      srcs: [
        '',
        ''
      ],
      slides: {
        es: [
          {
            eyebrow: 'Demo',
            title: 'PRODUCTO',
            subtitle: 'Una vista directa de SecurityBus en acción: monitoreo, alertas y control operativo para rutas más seguras.',
            iframeTitle: 'Acerca del producto SecurityBus'
          },
          {
            eyebrow: 'Equipo',
            title: 'EQUIPO',
            subtitle: 'Conoce al equipo detrás de SecurityBus y la visión que impulsa una operación de transporte más segura.',
            iframeTitle: 'Acerca del equipo SecurityBus'
          }
        ],
        en: [
          {
            eyebrow: 'Demo',
            title: 'PRODUCT',
            subtitle: 'A direct look at SecurityBus in action: monitoring, alerts, and operational control for safer routes.',
            iframeTitle: 'About the product SecurityBus'
          },
          {
            eyebrow: 'Team',
            title: 'TEAM',
            subtitle: 'Meet the team behind SecurityBus and the vision driving a safer transport operation.',
            iframeTitle: 'About the team SecurityBus'
          }
        ]
      }
    },

    gallery: {
      srcs: [
        'images/controlCenter.png',
        'images/dashboard.png',
        'images/passengerCounter.png',
        'images/alertLogs.jpg',
        'images/panicSignal.png'
      ],
      slides: {
        es: [
          { alt: 'Centro de control SecurityBus', label: 'Centro de control' },
          { alt: 'Dashboard operativo SecurityBus', label: 'Dashboard' },
          { alt: 'Conteo de pasajeros SecurityBus', label: 'Conteo de pasajeros' },
          { alt: 'Registro de alertas SecurityBus', label: 'Registro de alertas' },
          { alt: 'Señal de pánico SecurityBus', label: 'Señal de pánico' }
        ],
        en: [
          { alt: 'SecurityBus control center', label: 'Control Center' },
          { alt: 'SecurityBus operational dashboard', label: 'Dashboard' },
          { alt: 'SecurityBus passenger counter', label: 'Passenger Counter' },
          { alt: 'SecurityBus alert logs', label: 'Alert Logs' },
          { alt: 'SecurityBus panic signal', label: 'Panic Signal' }
        ]
      }
    }
  }

  let currentLang = localStorage.getItem('sb-lang') || 'es'
  if (currentLang !== 'es' && currentLang !== 'en') currentLang = 'es'

  function getLang() {
    return currentLang
  }

  function setLang(lang) {
    if (lang !== 'es' && lang !== 'en') return
    currentLang = lang
    localStorage.setItem('sb-lang', lang)
    applyLanguage()
    document.dispatchEvent(new CustomEvent('langchange'))
  }

  function applyLanguage() {
    const dict = I18N[currentLang] || I18N.es

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n')
      if (dict[key]) el.textContent = dict[key]
    })

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria')
      if (dict[key]) el.setAttribute('aria-label', dict[key])
    })

    document.documentElement.lang = currentLang
    document.title = dict['meta.title']

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === currentLang
      btn.classList.toggle('lang-active', active)
      btn.setAttribute('aria-pressed', String(active))
    })

    const themeToggle = document.getElementById('themeToggle')
    if (themeToggle) {
      const theme = document.documentElement.getAttribute('data-theme')
      const key = theme === 'dark' ? 'nav.themeLight' : 'nav.themeDark'
      const label = dict[key]
      themeToggle.setAttribute('aria-label', label)
      themeToggle.setAttribute('title', label)
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')))
    })
    applyLanguage()
  })

  global.SB = { getLang, setLang, applyLanguage, CAROUSELS }
})(window)