/* Alertas IHCA — i18n (ES/EN) */
(function () {
  const DICT = {
    es: {
      'meta.description': 'Sistema de detección precoz de parada cardíaca intrahospitalaria — Hospital Universitario Son Llàtzer',
      'nav.skip': 'Saltar al contenido',
      'brand.sub': 'HUSLL · 2025–2026',
      'nav.work': 'Trabajo',
      'nav.prototype': 'Prototipo',
      'nav.screens': 'Capturas',
      'nav.demo': 'Demo',
      'nav.collab': 'Colaboraciones',
      'nav.material': 'Material',
      'hero.eyebrow': 'UIB · HUSLL · Servicio de Informática · 2025–2026',
      'hero.subtitle': 'Detección precoz de parada cardíaca intrahospitalaria mediante un motor clínico multicapa sobre la historia electrónica del HUSLL.',
      'hero.status': 'Estado:',
      'hero.statusValue': 'prototipo en validación clínica',
      'hero.ctaDemo': 'Ver demo ↓',
      'hero.ctaRepo': 'Repositorio ↗',
      'work.title': 'Trabajo',
      'work.lede': 'Tres ejes de contribución del proyecto.',
      'work.a.title': 'DETECCIÓN PRECOZ',
      'work.a.body': 'Asignación de un nivel de alerta N0–N4 por paciente ingresado, revisado en cada ciclo de evaluación.',
      'work.b.title': 'MOTOR CLÍNICO MULTICAPA',
      'work.b.body': 'Scores fisiológicos (NEWS2, CART, MEWS, qSOFA), laboratorio, gasometría, microbiología, balance y NLP local.',
      'work.c.title': 'INTEGRACIÓN HIS',
      'work.c.body': 'Lectura de Oracle SISN2 (solo lectura) + caché MySQL para consultas instantáneas. Dashboard Vue 3 para UCI, planta y urgencias.',
      'proto.title': 'Prototipo',
      'proto.lede': 'Ocho módulos clínicos componen el motor de evaluación.',
      'proto.m1.title': 'NEWS2',
      'proto.m1.body': 'Score de alerta temprana sobre constantes vitales.',
      'proto.m2.title': 'CART',
      'proto.m2.body': 'Cardiac Arrest Risk Triage adaptado al contexto del hospital.',
      'proto.m3.title': 'MEWS · qSOFA',
      'proto.m3.body': 'Scores complementarios de deterioro y sospecha de sepsis.',
      'proto.m4.title': 'Laboratorio',
      'proto.m4.body': 'Tendencias multiventana de analíticas clave.',
      'proto.m5.title': 'Gasometría',
      'proto.m5.body': 'Seguimiento de pH, lactato y bicarbonato con tendencias.',
      'proto.m6.title': 'Microbiología · Balance',
      'proto.m6.body': 'Cultivos positivos y balance hídrico estimado por paciente.',
      'proto.m7.title': 'CONCERN · Enfermería',
      'proto.m7.body': 'CONCERN cuantitativo y escalas de enfermería integradas.',
      'proto.m8.title': 'NLP local',
      'proto.m8.body': 'Regex + diccionarios on-premise. Sin LLM en la nube. Cumple ENS.',
      'caps.title': 'Capturas',
      'caps.lede': 'Pantallas del dashboard y de la vista de paciente.',
      'demo.title': 'Demo',
      'demo.lede': 'Vídeo de una sesión de evaluación sobre datos reales anonimizados.',
      'demo.fallback': 'Tu navegador no soporta el vídeo HTML5. Puedes descargarlo abajo.',
      'demo.caption': 'Demo · navegación por el dashboard, alertas y detalle de paciente.',
      'demo.download': 'Descargar MP4 ↓',
      'collab.title': 'Colaboraciones',
      'collab.lede': 'Equipo clínico, técnico y académico del proyecto.',
      'collab.a.title': 'Clínico',
      'collab.a.body': 'Servicio de UCI y Enfermería del HUSLL. Validación de niveles y criterios.',
      'collab.b.title': 'Técnico',
      'collab.b.body': 'Servicio de Informática del HUSLL. Integración Oracle, arquitectura y despliegue.',
      'collab.c.title': 'Académico',
      'collab.c.body': 'Universitat de les Illes Balears. Dirección académica y supervisión metodológica del proyecto.',
      'mat.title': 'Material',
      'mat.lede': 'Documentación técnica del proyecto.',
      'mat.repo.title': 'Repositorio',
      'mat.repo.sub': 'Código fuente en GitHub ↗',
      'mat.backend.title': 'Backend',
      'mat.backend.sub': 'FastAPI · Oracle · MySQL ↗',
      'mat.frontend.title': 'Frontend',
      'mat.frontend.sub': 'Vue 3 · Vite · Tailwind ↗',
      'mat.engine.title': 'Motor clínico',
      'mat.engine.sub': 'Capas, scores y NLP local ↗',
      'cite.title': 'Cita',
      'footer.org': 'Hospital Universitario Son Llàtzer · Servicio de Informática',
      'footer.disclaimer': 'No debe usarse como única fuente para la toma de decisiones clínicas.'
    },
    en: {
      'meta.description': 'Early detection system for in-hospital cardiac arrest — Hospital Universitario Son Llàtzer',
      'nav.skip': 'Skip to content',
      'brand.sub': 'HUSLL · 2025–2026',
      'nav.work': 'Work',
      'nav.prototype': 'Prototype',
      'nav.screens': 'Screenshots',
      'nav.demo': 'Demo',
      'nav.collab': 'Collaborations',
      'nav.material': 'Material',
      'hero.eyebrow': 'UIB · HUSLL · IT Department · 2025–2026',
      'hero.subtitle': 'Early detection of in-hospital cardiac arrest with a multilayer clinical engine on top of the HUSLL electronic health record.',
      'hero.status': 'Status:',
      'hero.statusValue': 'prototype in clinical validation',
      'hero.ctaDemo': 'Watch demo ↓',
      'hero.ctaRepo': 'Repository ↗',
      'work.title': 'Work',
      'work.lede': 'Three contribution pillars of the project.',
      'work.a.title': 'EARLY DETECTION',
      'work.a.body': 'Assigns an alert level N0–N4 to every admitted patient, refreshed in each evaluation cycle.',
      'work.b.title': 'MULTILAYER CLINICAL ENGINE',
      'work.b.body': 'Physiological scores (NEWS2, CART, MEWS, qSOFA), lab, blood gas, microbiology, fluid balance and local NLP.',
      'work.c.title': 'HIS INTEGRATION',
      'work.c.body': 'Read-only access to Oracle SISN2 + MySQL cache for instant queries. Vue 3 dashboard for ICU, ward and ER.',
      'proto.title': 'Prototype',
      'proto.lede': 'Eight clinical modules compose the evaluation engine.',
      'proto.m1.title': 'NEWS2',
      'proto.m1.body': 'Early warning score over vital signs.',
      'proto.m2.title': 'CART',
      'proto.m2.body': 'Cardiac Arrest Risk Triage adapted to the hospital context.',
      'proto.m3.title': 'MEWS · qSOFA',
      'proto.m3.body': 'Complementary deterioration and sepsis-suspicion scores.',
      'proto.m4.title': 'Lab',
      'proto.m4.body': 'Multi-window trends on key lab analytes.',
      'proto.m5.title': 'Blood gas',
      'proto.m5.body': 'pH, lactate and bicarbonate tracked with trends.',
      'proto.m6.title': 'Micro · Fluids',
      'proto.m6.body': 'Positive cultures and estimated fluid balance per patient.',
      'proto.m7.title': 'CONCERN · Nursing',
      'proto.m7.body': 'Quantitative CONCERN and integrated nursing scales.',
      'proto.m8.title': 'Local NLP',
      'proto.m8.body': 'Regex + on-premise dictionaries. No cloud LLM. ENS-compliant.',
      'caps.title': 'Screenshots',
      'caps.lede': 'Dashboard and patient detail views.',
      'demo.title': 'Demo',
      'demo.lede': 'Video of an evaluation session over anonymised real data.',
      'demo.fallback': 'Your browser does not support HTML5 video. You can download it below.',
      'demo.caption': 'Demo · dashboard navigation, alerts and patient detail.',
      'demo.download': 'Download MP4 ↓',
      'collab.title': 'Collaborations',
      'collab.lede': 'Clinical, technical and academic teams behind the project.',
      'collab.a.title': 'Clinical',
      'collab.a.body': 'HUSLL ICU and Nursing. Validation of levels and criteria.',
      'collab.b.title': 'Technical',
      'collab.b.body': 'HUSLL IT Department. Oracle integration, architecture and deployment.',
      'collab.c.title': 'Academic',
      'collab.c.body': 'Universitat de les Illes Balears. Academic direction and methodological supervision.',
      'mat.title': 'Material',
      'mat.lede': 'Technical documentation of the project.',
      'mat.repo.title': 'Repository',
      'mat.repo.sub': 'Source code on GitHub ↗',
      'mat.backend.title': 'Backend',
      'mat.backend.sub': 'FastAPI · Oracle · MySQL ↗',
      'mat.frontend.title': 'Frontend',
      'mat.frontend.sub': 'Vue 3 · Vite · Tailwind ↗',
      'mat.engine.title': 'Clinical engine',
      'mat.engine.sub': 'Layers, scores and local NLP ↗',
      'cite.title': 'Citation',
      'footer.org': 'Hospital Universitario Son Llàtzer · IT Department',
      'footer.disclaimer': 'This system must not be used as the sole source for clinical decision-making.'
    }
  };

  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'es';

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && DICT[stored]) return stored;
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (!DICT[lang]) lang = DEFAULT_LANG;
    const dict = DICT[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val == null) return;
      const attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  function wireToggle() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (!DICT[lang]) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(getLang());
    wireToggle();
  });
})();
