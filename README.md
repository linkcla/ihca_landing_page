# Landing — Alertas IHCA (HUSLL)

Landing page estática del proyecto **Alertas IHCA** del Hospital Universitario Son Llàtzer.

Sitio bilingüe (ES / EN) con carrusel de capturas y vídeo demo. Sin frameworks, sin build: HTML5 + CSS3 + JS vanilla. Pensado para desplegar en **GitHub Pages**.

## Estructura

```
.
├── index.html              # Página única (single-page scroll)
├── 404.html                # Redirige a /
├── .nojekyll               # GitHub Pages no procesa con Jekyll
└── assets/
    ├── css/styles.css      # Sistema de diseño + responsive
    ├── js/i18n.js          # Diccionario ES/EN + toggle
    ├── js/carousel.js      # Carrusel (flechas, teclado, swipe)
    ├── js/main.js          # Fade-in + modal de imagen
    ├── img/                # SVG placeholders y favicon
    └── video/              # demo.mp4 (pendiente de aportar)
```

## Desarrollo local

Abre `index.html` directamente en el navegador, o lanza un servidor estático:

```bash
python -m http.server 8080
# → http://localhost:8080
```

## Reemplazar placeholders

- **Capturas:** sustituir `assets/img/captura-01.svg` … `captura-08.svg` por las capturas reales del dashboard. Si usas otro formato (PNG/JPG), actualiza también las extensiones en `index.html`.
- **Vídeo demo:** colocar `assets/video/demo.mp4` (y opcionalmente `assets/img/demo-poster.png` con su correspondiente referencia en `index.html`).
- **Enlaces:** sustituir los `https://github.com/` de la sección Material por las URLs reales del repo `HUSLL_ica_ia`.
- **Colaboraciones / Cita:** completar nombres del equipo clínico y técnico, y BibTeX si aplica.

## Idiomas

El toggle ES/EN del navbar persiste la elección en `localStorage['lang']`. Para añadir/editar textos:

1. Cada texto traducible vive en `assets/js/i18n.js` bajo `DICT.es` y `DICT.en`.
2. En el HTML el nodo lleva `data-i18n="key.path"`.
3. Para atributos (p. ej. `meta[content]`) se añade `data-i18n-attr="content"`.

## Despliegue en GitHub Pages

1. Crear repo en GitHub (p. ej. `husll-ica-ia-landing`).
2. `git init && git add . && git commit -m "init landing"`.
3. `git remote add origin git@github.com:<user>/husll-ica-ia-landing.git`.
4. `git push -u origin main`.
5. En GitHub → **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` /(root).
6. URL final: `https://<user>.github.io/husll-ica-ia-landing/`.
