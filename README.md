# CSS 3D Clickable Flip Cards — Product Promo

A polished, accessible set of 3D flip cards to promote products. Cards flip on **hover** (desktop) and on **click/tap** (everywhere), with ARIA‑friendly controls and reduced‑motion support.

## Live Demo (GitHub Pages)
After you push the repo, enable GitHub Pages and your site will be available at:

```
https://<your-username>.github.io/<your-repo-name>/
```

## Features
- Pure CSS 3D transforms (`perspective`, `preserve-3d`, `backface-visibility`)
- Clickable flip buttons for touch devices and keyboard users
- Subtle glassmorphism, gradients, and soft shadows
- SCSS source with variables and mixins; precompiled CSS included
- Responsive grid (1 column on mobile, 3 on desktop)
- Reduced‑motion friendly

## Project Structure
```
.
├── index.html
├── styles.scss   # Source (edit this in CodePen with SCSS preprocessor ON)
├── styles.css    # Precompiled for GitHub Pages
├── script.js
└── README.md
```

> **Why both SCSS and CSS?** GitHub Pages serves static files. We include a precompiled `styles.css` for the live site, and keep `styles.scss` as the source for your internship reviewer.

## Getting Started (Local)
Just open `index.html` in a browser — no build step needed.

## Using CodePen
1. Create a new Pen and paste `index.html` into the HTML panel (only the markup inside `<body>` if you prefer).
2. Paste `styles.scss` into the CSS panel.
3. Open **⚙️ Settings** of the CSS panel → set **CSS Preprocessor** to **SCSS**.
4. Paste `script.js` into the JS panel.
5. Save and share your Pen link if requested.

## Deploy to GitHub Pages
1. Create a new repo (public).
2. Add the four project files and push.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch `main` and folder `/root`, then **Save**.
6. Wait a minute; your site URL appears at the top of the Pages section.

## Accessibility Notes
- Flip actions are buttons with clear labels.
- Keyboard: press Enter/Space on the focused "View Details" button to flip.
- Reduced motion: respects `prefers-reduced-motion` by removing the flip transition.

## Customize
- Update product names and bullet points in `index.html`.
- Tweak theme colors and radii in `styles.scss` variables at the top.
- Duplicate a card `<article>` to add more items; the grid will auto-flow.
