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
- **Community Architecture Radar**: A bilingual community page with shared topic voting, public display-name discussions, and private, reviewed topic suggestions.
- **Community API**: Node.js API (`backend/server.js`) persists poll and discussion data in `data/community-board.json`; private suggestions continue to use the encrypted community vault.

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
├── community.html                # Architecture Radar, discussion board, and topic suggestions
├── package.json                  # Project metadata and local preview scripts
├── README.md                     # Technical architecture documentation
├── assets/
│   ├── css/
│   │   └── style.css             # Executive white/navy design system & responsive layout
│   └── js/
│       ├── i18n.js               # Complete English/French translation engine
│       ├── main.js               # Client controller (navigation, forms, contact handoff)
│       └── community.js          # Shared poll and discussion UI
├── backend/
│   ├── database.js               # Encrypted SQLite vault (AES-256-GCM + SHA-256)
│   ├── community-board.js        # Persistent vote and discussion store
│   └── server.js                 # API for board activity and private proposals
└── data/                         # Local database, vault, and community board storage
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

Run the API and static site in separate terminals:

```bash
npm start
npm run dev
```

Visit `http://localhost:3000/community.html`. The page automatically connects to the API on port 3001 during local development.

The community page uses `window.COMMUNITY_API_BASE` (set before `assets/js/community.js` loads) to locate the API. For a same-origin deployment, route `/api` to the Node API. For a separately hosted API, set this value to its `/api` URL and set `COMMUNITY_ALLOWED_ORIGIN` to the website's origin.

The board JSON file must live on persistent storage (configure its location with `COMMUNITY_BOARD_PATH` if needed), and the API should run as a single instance: votes and discussions are shared through this file. Deployments with ephemeral storage or multiple API replicas need a shared database before launch. Browser-local voter IDs prevent repeat votes in the same browser profile; they are not account-level identity verification. Discussion posts show the chosen display name and are public. Suggestion names, email addresses, and details are sent privately through the community proposal flow; approved topics must be added to the board by the site owner. The static preview works without the API, but the live poll and discussions require it.

To publish an approved suggestion, add it to the `topics` array in `data/community-board.json` on the API host, using a unique kebab-case `id`, `title`, and `category`. Optional `description`, `titleFr`, `categoryFr`, and `descriptionFr` fields provide topic context in both languages. Preserve the existing `votes` and `discussions` properties when editing the board file.

---

## 5. Contact Information

- **Email**: [stevekamgno2@gmail.com](mailto:stevekamgno2@gmail.com)
- **Phone / WhatsApp**: +237 659 745 176
- **Location**: Yaoundé, Cameroon
- **GitHub**: [https://github.com/steve-djidyou](https://github.com/steve-djidyou)
- **LinkedIn**: [https://linkedin.com/in/steve-djidyou](https://linkedin.com/in/steve-djidyou)
