# DJIDJOU STEVE — Professional Portfolio

> **Building Systems. Simplifying Work. Empowering People.**

The official, modern, bilingual (English / French) portfolio website for **DJIDJOU STEVE**, positioning him primarily as a **Software Engineer & DevOps Specialist**.

Live Deployment: [https://dskode.netlify.app/](https://dskode.netlify.app/)

---

## 1. Architectural Highlights

- **Aesthetic Direction**: Portrait-led editorial portfolio with a white, cool-neutral, blue and restrained navy palette; coral is reserved for small highlights. The hero pairs a large real portrait with concise positioning and direct project/contact routes.
- **Bilingual Engine**: Fully client-side internationalization system (`assets/js/i18n.js`) with instant switching between English and French without page reload.
- **Accessibility & Compliance**: WCAG 2.1 AA compliant, semantic HTML5 structure, keyboard `:focus-visible` indicators, skip-navigation link, and complete `prefers-reduced-motion` support.
- **Motion & Performance**: Native CSS transitions and one-time `IntersectionObserver` reveals; no animation framework, autoplay, or motion when reduced motion is requested.
- **Form Infrastructure**: Netlify Native Forms with Honeypot anti-spam protection, forwarding directly to `stevekamgno2@gmail.com`.
- **Encrypted Community Vault**: Optional Node.js + SQLite backend (`backend/server.js`) implementing AES-256-GCM encryption and SHA-256 privacy hashing for community technical inquiries.

### Visual system

- **Palette**: white `#FFFFFF`, cool surface `#F4F7FB`, navy `#101E36`, blue `#2457C5`, and restrained coral `#E46F5D`; no warm paper tone.
- **Type**: DM Serif Display for editorial headings, DM Sans for interface and body copy, and JetBrains Mono for compact technical labels.
- **Layout**: 8 px spacing rhythm, 1,320 px maximum content width, and a 760 px reading measure. Responsive navigation switches to a drawer at 1,100 px; layout refinements target 760 px and 420 px.
- **Imagery**: The hero and About spread use supplied portraits. Existing ACADSYS and DsKode marks are available; no product screenshots or temporary screenshot placeholders are included.

### Project imagery still needed

The repository does not currently contain actual ACADSYS, V-SHOP, MindLift, or ISEST product screenshots. To complete the image-led case studies, provide original captures (not mockups) in these placements:

| Project | Recommended capture | Placement |
| --- | --- | --- |
| ACADSYS | Desktop interface, 1600 × 1000 px (16:10) | Lead project showcase |
| V-SHOP | Storefront or product-preview interface, 1600 × 1000 px (16:10) | Alternating project showcase |
| MindLift | Android screen capture, 900 × 1600 px (9:16) | Mobile-first case-study feature |
| ISEST | Live site homepage, 1600 × 1000 px (16:10) | Institutional project feature |

Supply lossless originals or high-quality WebP exports with private/student information removed. The page should use the actual supplied captures; do not substitute generated screenshots or unrelated stock imagery.

---

## 2. Directory Structure

```
My_Portfolio-/
├── index.html                    # Semantic HTML5 single-page application
├── package.json                  # Project metadata and local preview scripts
├── README.md                     # Technical architecture documentation
├── assets/
│   ├── css/
│   │   └── style.css             # Executive white/navy design system & responsive layout
│   └── js/
│       ├── i18n.js               # Complete English/French translation engine
│       └── main.js               # Client controller (navigation, typing, forms)
├── backend/
│   ├── database.js               # Encrypted SQLite vault (AES-256-GCM + SHA-256)
│   └── server.js                 # Local API server for community proposals
└── data/                         # Local database storage (.db and vault backups)
```

---

## 3. Featured Principal Projects

1. **ACADSYS** — Design and implementation of an offline-first academic management system for secondary schools in Cameroon (React, Tailwind CSS, PWA, Service Worker, IndexedDB, Node.js, Express, SQLite).
2. **DsKode Transformative Technology** — Entrepreneurial brand and technology initiative spanning Technology Systems, Human Development, and Commerce.
3. **V-SHOP** — E-commerce concept for technology gadget wholesale and retail in Yaoundé, Cameroon.
4. **MINDLIFT** — Native Android personal growth and well-being prototype (Kotlin, Jetpack Compose, XML, DataStore).
5. **ISEST Institutional Website** — Official web platform for the International School of Engineering Science and Technology ([isest.edu.cm](https://isest.edu.cm/)), built during an internship at CIBER within a 4-person team.

---

## 4. Local Development & Preview

### Static Preview
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npm run dev
```
Visit `http://localhost:3000`

### Encrypted Community Backend (Optional)
```bash
npm start
```
Starts the secure community API server at `http://localhost:3001`.

---

## 5. Contact Information

- **Email**: [stevekamgno2@gmail.com](mailto:stevekamgno2@gmail.com)
- **Phone / WhatsApp**: +237 659 745 176
- **Location**: Yaoundé, Cameroon
- **GitHub**: [https://github.com/steve-djidyou](https://github.com/steve-djidyou)
- **LinkedIn**: [https://linkedin.com/in/steve-djidyou](https://linkedin.com/in/steve-djidyou)
