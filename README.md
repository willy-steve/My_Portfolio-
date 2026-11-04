# DJIDJOU STEVE — Professional Portfolio

> **Building Systems. Simplifying Work. Empowering People.**

The official, modern, bilingual (English / French) portfolio website for **DJIDJOU STEVE**, positioning him primarily as a **Software Engineer & DevOps Specialist**.

Live Deployment: [https://dskode.netlify.app/](https://dskode.netlify.app/)

---

## 1. Architectural Highlights

- **Aesthetic Direction**: Executive Engineering — clean white and deep oceanic navy palette (`#FFFFFF`, `#0A192F`, `#1D4ED8`) with generous whitespace, high readability, and strong visual hierarchy.
- **Bilingual Engine**: Fully client-side internationalization system (`assets/js/i18n.js`) with instant switching between English and French without page reload.
- **Accessibility & Compliance**: WCAG 2.1 AA compliant, semantic HTML5 structure, keyboard `:focus-visible` indicators, skip-navigation link, and complete `prefers-reduced-motion` support.
- **Zero Heavy Runtimes**: Pure modern web standards (Semantic HTML5, CSS3 Custom Properties, ES6+ JavaScript) for 100/100 Core Web Vitals and ultra-fast Time-to-First-Byte (TTFB).
- **Form Infrastructure**: Netlify Native Forms with Honeypot anti-spam protection, forwarding directly to `stevekamgno2@gmail.com`.
- **Encrypted Community Vault**: Optional Node.js + SQLite backend (`backend/server.js`) implementing AES-256-GCM encryption and SHA-256 privacy hashing for community technical inquiries.

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
