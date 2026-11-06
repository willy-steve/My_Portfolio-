/**
 * i18n.js - Bilingual Internationalization Engine (English & French)
 * DJIDJOU STEVE - Premium Editorial Portfolio
 * Rigorous translations with complete technical parity
 */

const translations = {
  en: {
    nav: {
      brandSub: "Software Engineer & DevOps",
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      journey: "My Journey",
      experience: "Experience",
      leadership: "Leadership",
      more: "More",
      education: "Education",
      mentorship: "Mentorship",
      community: "Community",
      contact: "Contact",
      downloadCv: "Download CV",
      contactBtn: "Get in Touch"
    },
    hero: {
      statusBadge: "Available for Software Architecture & DevOps Consultations",
      badge: "Software Engineer & DevOps Specialist",
      tagline: "Building Systems. Simplifying Work. Empowering People.",
      bio: "Specialising in resilient software architecture, offline-first systems, and reliable CI/CD pipelines. Transforming complex operational bottlenecks into elegant, high-availability digital solutions.",
      ctaProjects: "Explore Principal Projects",
      ctaContact: "Direct Contact",
      downloadCv: "Download CV (PDF)",
      metaPill: "Systems Architect • Yaoundé, CM",
      brandBadge: "Founder, DsKode Tech"
    },
    about: {
      eyebrow: "Professional Identity",
      title: "About Me & Engineering Philosophy",
      quote: "I believe technology should create meaningful solutions, simplify complex processes, improve productivity and contribute to human progress.",
      bio1: "I am a Software Engineer specialising in software architecture, system design and DevOps, with an interest in building reliable digital solutions that simplify work and address practical challenges.",
      bio2: "Beyond technology, I am involved in education and initiatives focused on personal development, knowledge sharing and faith-inspired growth.",
      bio3: "Founder of DsKode Transformative Technology.",
      principlesTitle: "Guiding Principles",
      principles: [
        { name: "Discipline", desc: "Rigorous standards, thorough testing, and deliberate consistency in every system built." },
        { name: "Creativity", desc: "Architectural ingenuity that turns complex challenges into elegant, simple solutions." },
        { name: "Spiritual Grounding", desc: "Integrity, ethical responsibility, and purposeful service to humanity." },
        { name: "Continuous Learning", desc: "Relentless curiosity, mastering emerging paradigms, and constantly refining skill." },
        { name: "Innovation", desc: "Practical problem solving that drives measurable progress and real-world utility." },
        { name: "Purposeful Development", desc: "Building software that genuinely empowers people, organisations, and communities." }
      ]
    },
    journey: {
      eyebrow: "Chronological Milestones",
      title: "My Professional Journey",
      subtitle: "A deliberate progression through systems engineering, enterprise consulting, scientific pedagogy, and technological entrepreneurship.",
      milestones: [
        {
          period: "2023 – 2025",
          role: "Computing Foundations & System Design",
          entity: "Yaoundé International Business School (YIBS)",
          desc: "Completed Higher National Diploma (HND) in Computer Technology with a strong focus on distributed architectures, algorithms, and relational database systems."
        },
        {
          period: "June – August 2024",
          role: "Software Engineering Intern",
          entity: "DIGIMARK CONSULTING",
          desc: "Assisted in backend API design, database maintenance, and testing across enterprise web applications; contributed to code reviews and system optimization."
        },
        {
          period: "2025 – 2026",
          role: "Advanced Software Engineering & ACADSYS Architecture",
          entity: "B.Tech Program & Independent Research",
          desc: "Engineered ACADSYS, an offline-first academic management Progressive Web App (PWA) with bidirectional IndexedDB synchronization and automated GitHub Actions CI/CD."
        },
        {
          period: "2025 – 2027",
          role: "Head of Science Department & Educator",
          entity: "Complexe Bilingual Scolaire Le Rocher",
          desc: "Leading scientific pedagogical planning, curriculum alignment, and instructing Computer Science and Physics across Forms 1 to 5."
        },
        {
          period: "February – April 2026",
          role: "Full-Stack Developer (4-Person Team)",
          entity: "CIBER / ISEST Institutional Project",
          desc: "Architected sitemaps, structured page workflows, and engineered key frontend and backend modules for the official ISEST web platform (isest.edu.cm)."
        },
        {
          period: "Ongoing",
          role: "Technological Entrepreneurship & Mentorship",
          entity: "DsKode Transformative Technology",
          desc: "Directing DsKode's tripartite model across Technology Systems, Human Development, and Commerce, while spearheading personal development and youth mentorship initiatives."
        }
      ]
    },
    skills: {
      eyebrow: "Technical Matrix",
      title: "Technical Expertise & Architecture",
      subtitle: "A transparent, structured breakdown of my technical proficiencies, organized across four architectural quadrants.",
      quadrant1: "Languages & Runtimes",
      quadrant2: "Full-Stack & Web Systems",
      quadrant3: "DevOps & Cloud Infrastructure",
      quadrant4: "Architecture, Data & Security",
      notes: {
        aws: "AWS: Introductory database configuration experience for ACADSYS.",
        docker: "Docker: Container creation and Dockerfile builds; Docker Compose not claimed.",
        githubActions: "GitHub Actions: Automated CI/CD deployment pipelines implemented for ACADSYS.",
        kotlin: "Kotlin: Academic project and native Android prototype experience.",
        networking: "Networking: LAN configuration and network restrictions; actively developing system security knowledge."
      }
    },
    projects: {
      eyebrow: "Featured Work",
      title: "Principal Featured Projects",
      subtitle: "Detailed engineering dossiers demonstrating architectural rigor, offline resilience, and full-stack execution.",
      statusPill: {
        preparing: "Preparing for Deployment (Pilot Testing Ahead)",
        activeBrand: "Active Tech Brand & Initiative",
        prototype: "Academic Concept & 3D Prototype",
        workingPrototype: "Working Native Mobile Prototype",
        completedTeam: "Live Institutional Platform (Team Project)"
      },
      roleLabel: "Specific Role",
      problemLabel: "Problem Addressed",
      solutionLabel: "Architectural Solution",
      pipelineTitle: "ACADSYS Offline-First Synchronization Architecture",
      viewProject: "Visit Live Website",
      pipeline: {
        node1Title: "Client Layer (React & Tailwind PWA)",
        node1Desc: "Instantaneous UI response & service worker asset caching",
        node2Title: "Local Persistence (IndexedDB)",
        node2Desc: "Full offline transactional CRUD without network connectivity",
        node3Title: "Background Sync Engine",
        node3Desc: "Automatic bi-directional state synchronization on reconnect",
        node4Title: "Central API & Storage",
        node4Desc: "Node.js, Express, SQLite with GitHub Actions CI/CD deployment"
      },
      acadSys: {
        title: "ACADSYS",
        subtitle: "Design and Implementation of an Offline-First Academic Management System",
        problem: "Unreliable internet connectivity and disconnected administrative workflows in secondary schools in Cameroon create severe data loss, scheduling conflicts, and operational delays.",
        solution: "Engineered an offline-first Progressive Web Application (PWA). Utilizes IndexedDB and Service Workers for full offline capability, synchronizing bi-directionally with a central Node.js, Express, and SQLite backend whenever connectivity is restored.",
        role: "Head Developer, System Designer and Architect",
        status: "Developed locally and preparing for deployment. Pilot testing scheduled for secondary institutions in Cameroon.",
        features: [
          { name: "Authentication & Role Access", status: "Implemented", desc: "Granular permissions for administrators, teachers, and staff" },
          { name: "Student Management", status: "Implemented", desc: "Profiles, enrollment records, and academic history" },
          { name: "Teacher Management", status: "Implemented", desc: "Subject assignments, schedules, and class allocation" },
          { name: "Marks & Results Calculation", status: "Implemented", desc: "Automated grade computing, averages, and ranking algorithms" },
          { name: "Report Card Generation", status: "Implemented", desc: "Standardized academic report printing and export" },
          { name: "Timetable Planning", status: "Implemented", desc: "Conflict-free schedule matrix for rooms and teachers" },
          { name: "Offline Sync Engine", status: "Implemented", desc: "IndexedDB local transactional queue with central conflict-resolution sync" },
          { name: "Class Management", status: "Partial", desc: "Class roster optimization currently in active refinement" },
          { name: "Attendance System", status: "Partial", desc: "High-density classroom roll-call tools prepared for pilot phase" },
          { name: "Payroll Operations", status: "Partial", desc: "Basic financial ledger structure prepared for pilot phase" }
        ]
      },
      dskode: {
        title: "DsKode Transformative Technology",
        subtitle: "Entrepreneurial Brand & Technology Initiative",
        problem: "Businesses and institutions often lack integrated solutions that balance digital transformation, accessible hardware, and purposeful human development.",
        solution: "Established a tripartite initiative bridging technology and human capability: 1) Technology Systems (custom digital solutions simplifying work), 2) Human Development (growth, faith-inspired principles, mentorship), and 3) Commerce (digital gadgets, hardware accessibility).",
        role: "Founder and Lead Technologist",
        status: "Active initiative; long-term hardware assembly and B2B/B2C import-export operations are currently in strategic planning.",
        pillars: [
          { name: "Human Development", desc: "Personal growth, knowledge sharing, faith-inspired principles, and youth empowerment." },
          { name: "Technology Systems", desc: "Building dependable digital systems that streamline workflows and support institutions." },
          { name: "Commerce", desc: "Curating and providing digital gadgets (laptops, phones) with long-term assembly ambitions." }
        ]
      },
      vshop: {
        title: "V-SHOP",
        subtitle: "E-Commerce Concept for Gadget Wholesale & Retail in Yaoundé",
        problem: "Inefficient supply-chain coordination between electronics wholesalers, local retailers, and retail customers in Yaoundé markets.",
        solution: "Developed an e-commerce platform concept featuring multi-tier access for wholesalers, bulk retailer purchasing, and individual retail consumer sales, integrated with 3D product previews.",
        role: "System Designer and Prototype Developer",
        status: "Academic concept and working prototype. Future modernization roadmap (Next.js, Tailwind, Supabase) is conceptual.",
        originalStack: "Three.js, HTML, CSS, JavaScript, PHP, MySQL",
        futureRoadmap: "Conceptual architecture under evaluation: Next.js, Tailwind CSS, Supabase, React Three Fiber."
      },
      mindlift: {
        title: "MINDLIFT",
        subtitle: "Native Android Mobile Application for Personal Growth & Well-Being",
        problem: "Young people frequently struggle with low self-esteem, isolation, emotional discouragement, and lack of structured self-reflection tools.",
        solution: "Engineered a native Android application prioritizing user privacy and emotional grounding. Delivers daily motivation, mood tracking, personal journaling, and self-reflection exercises.",
        role: "Independent Mobile Developer",
        status: "Working native prototype. Note: Designed as a supportive personal development tool, not as a clinical or medical diagnostic system.",
        featuresList: "Daily motivational quotes, mood tracker, encrypted personal journal, general well-being advice, self-reflection modules."
      },
      isest: {
        title: "ISEST Institutional Website",
        subtitle: "Official Web Platform for International School of Engineering Science & Technology",
        problem: "An expanding higher-education engineering institution required an authoritative, structured, and modern digital presence for international admissions and academic programs.",
        solution: "Collaborated as part of a four-person development team during an internship at CIBER. Engineered sitemap architecture, overall structural organization, page previews, and significant frontend and backend modules.",
        role: "Full-Stack Developer (Four-Person Team at CIBER)",
        status: "Live institutional platform operating at isest.edu.cm.",
        period: "February – April 2026"
      }
    },
    experience: {
      eyebrow: "Career Trajectory",
      title: "Professional Experience",
      subtitle: "Practical engineering contributions in consulting, software engineering, and institutional development.",
      ciber: {
        role: "Software Engineering Intern",
        company: "CIBER",
        period: "February – April 2026",
        highlights: [
          "Contributed to full-stack engineering for client deliverables, notably the ISEST institutional web platform.",
          "Architected sitemaps, structured page workflows, and developed interactive frontend previews.",
          "Implemented backend integration and collaborated actively within an agile four-person engineering team."
        ]
      },
      digimark: {
        role: "Software Engineering Intern",
        company: "DIGIMARK CONSULTING",
        period: "June – August 2024",
        highlights: [
          "Supported production engineering workflows and client application development.",
          "Assisted in backend API design, database maintenance, and testing across enterprise web applications.",
          "Collaborated on code reviews, debugging, and systems optimization."
        ]
      },
      downloadCvBanner: "Recruiting for an engineering role? Download my complete verified resume.",
      downloadCvBtn: "Download Full Resume (PDF)"
    },
    education: {
      eyebrow: "Academic Foundation",
      title: "Education & Qualifications",
      subtitle: "Formal qualifications in software engineering and computing technology.",
      btech: {
        degree: "B.Tech in Software Engineering",
        institution: "Yaoundé International Business School (YIBS)",
        period: "2025 – 2026",
        status: "Academic programme completed; formal award/certificate pending."
      },
      hnd: {
        degree: "Higher National Diploma (HND) in Computer Technology",
        institution: "Yaoundé International Business School (YIBS)",
        period: "2023 – 2025",
        status: "Completed academic program."
      },
      certificationsTitle: "Certifications & Professional Participation",
      certList: [
        { name: "Internship Certificate", issuer: "DIGIMARK CONSULTING", date: "2024" },
        { name: "Internship Certificate", issuer: "CIBER", date: "2026" },
        { name: "Certificate of Participation", issuer: "Public Procurement and Policy", date: "Verified" },
        { name: "Certificate of Leadership", issuer: "International Leadership Institute (ILI)", date: "Verified" },
        { name: "Certificate of Participation", issuer: "GALCAM Christian Seminar", date: "Verified" }
      ]
    },
    teaching: {
      eyebrow: "Leadership & Pedagogy",
      title: "Teaching & Scientific Leadership",
      subtitle: "Mentoring the next generation of scientific and technical thinkers.",
      leRocher: {
        role: "Head of Department (Science) & Teacher",
        institution: "Complexe Bilingual Scolaire Le Rocher",
        period: "2025 – 2027",
        details: [
          "Head of Department, Science Department: coordinating curricula, laboratory readiness, and pedagogical alignment.",
          "Teaching Computer Science: Forms 1 through 5.",
          "Teaching Physics: Forms 1 through 5, grounding abstract principles in practical problem solving."
        ]
      },
      rahabica: {
        role: "Computer Science & Physics Educator",
        institution: "Rahabica Rabbi Hans School",
        period: "2025 – 2026",
        details: [
          "Instructing students across Forms 1 to 4 in foundational computing, logic, and physical sciences."
        ]
      },
      tutoring: {
        role: "Private Academic Tutor",
        institution: "Advanced Level / Upper Sixth Students",
        period: "Ongoing",
        details: [
          "Individualized mentorship and rigorous preparation in Computer Science and Physics for Upper Sixth students."
        ]
      }
    },
    mentorship: {
      eyebrow: "Personal Growth & Purpose",
      title: "Personal Development & Youth Mentorship",
      subtitle: "A developing initiative dedicated to empowering youth through character, discipline, and purpose.",
      statusBadge: "Developing Initiative",
      text1: "Beyond technology, I am passionate about cultivating purpose, resilience, and discipline in young minds. Growing up, I recognised how crucial encouragement, moral grounding, and purposeful direction are for young people facing self-doubt or challenging environments.",
      text2: "This initiative represents my commitment to knowledge sharing, public speaking, faith-inspired values, and actionable personal growth strategies. It is designed to inspire individuals to build strong character, discover their potential, and pursue excellence.",
      pillars: [
        { title: "Character & Discipline", desc: "Fostering daily habits, moral responsibility, and accountability for long-term fulfillment." },
        { title: "Youth Empowerment", desc: "Providing practical encouragement and guidance for students navigating academic and life choices." },
        { title: "Faith-Inspired Growth", desc: "Anchoring purpose in spiritual principles that inspire integrity, compassion, and resilience." },
        { title: "Public Speaking & Communication", desc: "Sharing actionable principles that bridge technical rigor and human wisdom." }
      ]
    },
    community: {
      eyebrow: "Knowledge & Exchange",
      title: "Community Ideas & Technical Inquiries",
      subtitle: "Have a proposal, technical inquiry, or topic suggestion? Submit it securely below.",
      privacyNote: "Submissions are transmitted securely via encrypted channels and archived with strict privacy protection.",
      form: {
        name: "Your Name",
        email: "Your Email Address",
        topic: "Topic or Suggestion Title",
        details: "Details or Context",
        submit: "Submit Proposal",
        sending: "Encrypting & Transmitting...",
        success: "Thank you! Your suggestion has been securely submitted.",
        error: "An error occurred while submitting. Please try again or reach out directly."
      }
    },
    contact: {
      eyebrow: "Initiate Collaboration",
      title: "Get In Touch",
      subtitle: "Available for engineering consultations, system architecture design, and high-impact software projects.",
      locationTitle: "Location",
      locationValue: "Yaoundé, Cameroon",
      phoneTitle: "Phone / Direct Line",
      phoneValue: "+237 659 745 176",
      whatsappTitle: "WhatsApp",
      whatsappAction: "Open Chat (+237 659 745 176)",
      emailTitle: "Direct Email",
      emailValue: "stevekamgno2@gmail.com",
      formTitle: "Send an Architectural Inquiry",
      nameLabel: "Your Full Name",
      emailLabel: "Your Email Address",
      subjectLabel: "Subject / Project Scope",
      messageLabel: "Project Details / Message",
      submitBtn: "Send Message",
      sendingBtn: "Transmitting Message...",
      successMsg: "Thank you for reaching out. Your message has been sent successfully. I will respond promptly.",
      errorMsg: "Submission encountered an issue. Please reach out directly via email or WhatsApp."
    },
    footer: {
      brandDesc: "Software Engineer & DevOps Specialist dedicated to building reliable systems, simplifying workflows, and empowering individuals.",
      quickLinks: "Quick Navigation",
      connectTitle: "Direct Channels",
      copyright: "All rights reserved. DJIDJOU STEVE.",
      builtWith: "Engineered with semantic standards, accessibility, and high-availability architecture."
    }
  },
  fr: {
    nav: {
      brandSub: "Ingénieur Logiciel & DevOps",
      about: "À Propos",
      expertise: "Expertise",
      projects: "Projets",
      journey: "Mon Parcours",
      experience: "Expérience",
      leadership: "Leadership",
      more: "Plus",
      education: "Formation",
      mentorship: "Mentorat",
      community: "Communauté",
      contact: "Contact",
      downloadCv: "Télécharger CV",
      contactBtn: "Prendre Contact"
    },
    hero: {
      statusBadge: "Disponible pour Consultations en Architecture & DevOps",
      badge: "Ingénieur Logiciel & Spécialiste DevOps",
      tagline: "Concevoir des Systèmes. Simplifier le Travail. Autonomiser les Personnes.",
      bio: "Spécialisé en architecture logicielle résiliente, systèmes offline-first et pipelines CI/CD fiables. Transformer les défis opérationnels complexes en solutions numériques élégantes et hautement disponibles.",
      ctaProjects: "Explorer les Projets Clés",
      ctaContact: "Contact Direct",
      downloadCv: "Télécharger mon CV (PDF)",
      metaPill: "Architecte Système • Yaoundé, CM",
      brandBadge: "Fondateur, DsKode Tech"
    },
    about: {
      eyebrow: "Identité Professionnelle",
      title: "À Propos & Philosophie d'Ingénierie",
      quote: "Je crois que la technologie doit créer des solutions porteuses de sens, simplifier les processus complexes, améliorer la productivité et contribuer au progrès humain.",
      bio1: "Je suis Ingénieur Logiciel spécialisé en architecture logicielle, conception de systèmes et DevOps, animé par la volonté de concevoir des solutions numériques fiables qui simplifient le travail et répondent à des défis pratiques.",
      bio2: "Au-delà de la technologie, je m'investis dans l'enseignement et des initiatives axées sur le développement personnel, le partage des connaissances et la croissance guidée par la foi.",
      bio3: "Fondateur de DsKode Transformative Technology.",
      principlesTitle: "Principes Directeurs",
      principles: [
        { name: "Discipline", desc: "Standards rigoureux, tests systématiques et cohérence méthodique dans chaque système conçu." },
        { name: "Créativité", desc: "Ingéniosité architecturale transformant les contraintes complexes en architectures épurées." },
        { name: "Ancrage Spirituel", desc: "Intégrité morale, sens éthique et engagement dévoué au service de l'humain." },
        { name: "Apprentissage Continu", desc: "Curiosité constante, maîtrise des paradigmes émergents et perfectionnement technique permanent." },
        { name: "Innovation", desc: "Résolution pragmatique de problèmes concrets apportant une valeur mesurable sur le terrain." },
        { name: "Développement Porteur de Sens", desc: "Conception de logiciels conçus pour autonomiser durablement individus et organisations." }
      ]
    },
    journey: {
      eyebrow: "Jalons Chronologiques",
      title: "Mon Parcours Professionnel",
      subtitle: "Une progression méthodique alliant ingénierie des systèmes, conseil d'entreprise, pédagogie scientifique et entrepreneuriat technologique.",
      milestones: [
        {
          period: "2023 – 2025",
          role: "Fondations Informatiques & Conception Système",
          entity: "Yaoundé International Business School (YIBS)",
          desc: "Obtention du Higher National Diploma (HND) en Technologie Informatique avec une spécialisation poussée en architectures distribuées, algorithmique et bases de données relationnelles."
        },
        {
          period: "Juin – Août 2024",
          role: "Stagiaire en Développement Logiciel",
          entity: "DIGIMARK CONSULTING",
          desc: "Appui à la conception d'API backend, maintenance de bases de données et validation par tests sur applications web d'entreprise ; participation aux revues de code et optimisations."
        },
        {
          period: "2025 – 2026",
          role: "Génie Logiciel Avancé & Architecture d'ACADSYS",
          entity: "Cycle B.Tech & Recherche Appliquée",
          desc: "Conception et développement complet d'ACADSYS, une PWA offline-first dotée d'une synchronisation IndexedDB bidirectionnelle et d'un pipeline CI/CD automatisé via GitHub Actions."
        },
        {
          period: "2025 – 2027",
          role: "Chef de Département Scientifique & Enseignant",
          entity: "Complexe Bilingue Scolaire Le Rocher",
          desc: "Direction pédagogique, coordination des programmes de sciences et enseignement de l'Informatique et de la Physique de Form 1 à Form 5."
        },
        {
          period: "Février – Avril 2026",
          role: "Développeur Full-Stack (Équipe de 4)",
          entity: "CIBER / Projet Institutionnel ISEST",
          desc: "Conception de l'arborescence, structuration fonctionnelle des flux et développement des modules clés frontend et backend du portail officiel de l'ISEST (isest.edu.cm)."
        },
        {
          period: "En cours",
          role: "Entrepreneuriat Technologique & Mentorat",
          entity: "DsKode Transformative Technology",
          desc: "Pilotage du modèle tripartite de DsKode (Systèmes Technologiques, Développement Humain, Commerce) et déploiement de programmes d'émancipation de la jeunesse."
        }
      ]
    },
    skills: {
      eyebrow: "Matrice Technique",
      title: "Expertise Technique & Architecture",
      subtitle: "Une présentation transparente et rigoureuse de mes compétences techniques, articulée autour de quatre quadrants architecturaux.",
      quadrant1: "Langages & Environnements",
      quadrant2: "Systèmes Web & Full-Stack",
      quadrant3: "DevOps & Infrastructure Cloud",
      quadrant4: "Architecture, Données & Sécurité",
      notes: {
        aws: "AWS : Expérience d'initiation sur la configuration de base de données pour ACADSYS.",
        docker: "Docker : Création de conteneurs et Dockerfiles ; pas d'expérience Docker Compose.",
        githubActions: "GitHub Actions : Pipelines de déploiement CI/CD automatisés mis en œuvre pour ACADSYS.",
        kotlin: "Kotlin : Expérience acquise sur projet académique et prototype natif Android.",
        networking: "Réseaux : Configuration de réseaux locaux (LAN) et restrictions d'accès ; approfondissement en cours."
      }
    },
    projects: {
      eyebrow: "Réalisations Clés",
      title: "Projets Principaux d'Ingénierie",
      subtitle: "Dossiers d'ingénierie détaillés démontrant la rigueur architecturale, la résilience hors-ligne et l'exécution full-stack.",
      statusPill: {
        preparing: "En préparation pour déploiement (Phase pilote imminente)",
        activeBrand: "Initiative & Marque Technologique Active",
        prototype: "Concept académique & Prototype 3D",
        workingPrototype: "Prototype mobile natif fonctionnel",
        completedTeam: "Plateforme institutionnelle en production (Projet d'équipe)"
      },
      roleLabel: "Rôle Spécifique",
      problemLabel: "Problème Traité",
      solutionLabel: "Solution Architecturale",
      pipelineTitle: "Architecture de Synchronisation Offline-First d'ACADSYS",
      viewProject: "Visiter le Site Web",
      pipeline: {
        node1Title: "Couche Client (PWA React & Tailwind)",
        node1Desc: "Réponse UI instantanée & mise en cache Service Worker",
        node2Title: "Persistance Locale (IndexedDB)",
        node2Desc: "CRUD transactionnel hors-ligne sans connexion réseau",
        node3Title: "Moteur de Synchronisation en Arrière-Plan",
        node3Desc: "Synchronisation d'état bi-directionnelle dès le rétablissement",
        node4Title: "API Centrale & Stockage Sécurisé",
        node4Desc: "Node.js, Express, SQLite avec déploiement CI/CD automatisé"
      },
      acadSys: {
        title: "ACADSYS",
        subtitle: "Conception et implémentation d'un système de gestion académique Offline-First",
        problem: "La connectivité internet instable et les processus administratifs cloisonnés dans les établissements secondaires au Cameroun entraînent des retards critiques et des pertes de données.",
        solution: "Conception d'une Progressive Web App (PWA) offline-first utilisant IndexedDB et Service Worker. Permet une exécution hors-ligne complète et une synchronisation bi-directionnelle avec Node.js, Express et SQLite dès le rétablissement du réseau.",
        role: "Développeur Principal, Concepteur Système et Architecte",
        status: "Développé localement et en préparation pour le déploiement. Tests pilotes prévus dans les établissements scolaires.",
        features: [
          { name: "Authentification & Gestion des Rôles", status: "Implémenté", desc: "Permissions granulaires pour administrateurs, enseignants et personnel" },
          { name: "Gestion des Élèves", status: "Implémenté", desc: "Dossiers, inscriptions et historique académique" },
          { name: "Gestion des Enseignants", status: "Implémenté", desc: "Affectation des matières, emplois du temps et charges de cours" },
          { name: "Calcul des Notes & Moyennes", status: "Implémenté", desc: "Algorithmes automatisés de calcul, moyennes et classements" },
          { name: "Génération des Bulletins", status: "Implémenté", desc: "Édition et exportation normalisée des bulletins officiels" },
          { name: "Planification des Emplois du Temps", status: "Implémenté", desc: "Matrice d'attribution sans conflit pour salles et enseignants" },
          { name: "Moteur de Synchronisation Offline", status: "Implémenté", desc: "File transactionnelle IndexedDB avec arbitrage centralisé des conflits" },
          { name: "Gestion des Classes", status: "Partiel", desc: "Outils de gestion d'effectifs en cours d'ajustement" },
          { name: "Suivi des Présences", status: "Partiel", desc: "Module d'appel adapté aux classes denses préparé pour la phase pilote" },
          { name: "Opérations de Paie", status: "Partiel", desc: "Structure comptable de base préparée pour la phase pilote" }
        ]
      },
      dskode: {
        title: "DsKode Transformative Technology",
        subtitle: "Marque Entrepreneuriale & Initiative Technologique",
        problem: "Les entreprises et institutions manquent souvent de solutions holistiques combinant transformation numérique, matériel adapté et développement du potentiel humain.",
        solution: "Création d'une initiative tripartite articulée autour de : 1) Systèmes Technologiques (solutions logicielles simplifiant le travail), 2) Développement Humain (croissance, mentorat, valeurs morales), et 3) Commerce (équipements informatiques, ordinateurs et smartphones).",
        role: "Fondateur et Technologue Principal",
        status: "Initiative active ; l'assemblage de terminaux et les activités d'import-export B2B/B2C constituent des ambitions stratégiques à long terme.",
        pillars: [
          { name: "Développement Humain", desc: "Croissance personnelle, transmission du savoir, principes bibliques et émancipation des jeunes." },
          { name: "Systèmes Technologiques", desc: "Conception de solutions numériques fiables automatisant le travail et appuyant les structures." },
          { name: "Commerce", desc: "Commercialisation d'équipements numériques avec pour vision l'assemblage local de terminaux." }
        ]
      },
      vshop: {
        title: "V-SHOP",
        subtitle: "Concept E-Commerce pour le Marché des Gadgets Technologiques à Yaoundé",
        problem: "Absence de passerelle numérique fluide entre grossistes en électronique, détaillants locaux et acheteurs individuels sur les marchés de Yaoundé.",
        solution: "Développement d'un concept e-commerce intégrant vente en gros pour revendeurs, commandes unitaires grand public et visualisation 3D interactive des appareils.",
        role: "Concepteur Système et Développeur du Prototype",
        status: "Concept académique et prototype fonctionnel. La transition vers Next.js/Supabase demeure une feuille de route future.",
        originalStack: "Three.js, HTML, CSS, JavaScript, PHP, MySQL",
        futureRoadmap: "Architecture conceptuelle à l'étude : Next.js, Tailwind CSS, Supabase, React Three Fiber."
      },
      mindlift: {
        title: "MINDLIFT",
        subtitle: "Application Mobile Native Android pour le Bien-Être et la Croissance Personnelle",
        problem: "De nombreux jeunes sont confrontés au manque de confiance en soi, au découragement émotionnel et aux séquelles d'expériences difficiles sans outil d'introspection adapté.",
        solution: "Développement d'une application Android native respectant la confidentialité absolue des données. Propose citations quotidiennes, suivi de l'humeur, journal personnel et conseils d'épanouissement.",
        role: "Développeur Mobile Indépendant",
        status: "Prototype natif fonctionnel. Remarque : Conçu comme un support d'auto-réflexion et d'encouragement, ne remplace en aucun cas un avis médical.",
        featuresList: "Citations inspirantes quotidiennes, moniteur d'humeur, journal intime chiffré, conseils de bien-être, introspection guidée."
      },
      isest: {
        title: "Site Institutionnel ISEST",
        subtitle: "Portail Officiel de l'International School of Engineering Science & Technology",
        problem: "Une institution universitaire d'ingénierie en plein essor nécessitait une présence numérique moderne, structurée et internationale.",
        solution: "Contribution active au sein d'une équipe de quatre développeurs lors d'un stage chez CIBER. Élaboration du plan de site, structuration globale, maquettage dynamique et développement full-stack.",
        role: "Développeur Full-Stack (Équipe de 4 personnes chez CIBER)",
        status: "Plateforme institutionnelle déployée et accessible sur isest.edu.cm.",
        period: "Février – Avril 2026"
      }
    },
    experience: {
      eyebrow: "Parcours Professionnel",
      title: "Expérience en Ingénierie",
      subtitle: "Contributions concrètes en cabinet de conseil, ingénierie logicielle et développement institutionnel.",
      ciber: {
        role: "Stagiaire en Ingénierie Logicielle",
        company: "CIBER",
        period: "Février – Avril 2026",
        highlights: [
          "Participation au développement full-stack de livrables clients, particulièrement la plateforme web de l'ISEST.",
          "Conception de l'arborescence, structuration fonctionnelle des pages et élaboration des prévisualisations interactives.",
          "Contribution au développement backend et collaboration active au sein d'une équipe agile de quatre développeurs."
        ]
      },
      digimark: {
        role: "Stagiaire en Développement Logiciel",
        company: "DIGIMARK CONSULTING",
        period: "Juin – Août 2024",
        highlights: [
          "Appui aux cycles de développement et intégration de fonctionnalités au sein d'une équipe d'ingénierie dynamique.",
          "Contribution à l'architecture d'API backend, maintenance de bases de données et phases de tests applicatifs.",
          "Collaboration active sur la résolution de bugs et l'optimisation des performances des projets clients."
        ]
      },
      downloadCvBanner: "Vous recrutez pour un poste d'ingénieur ? Téléchargez mon CV complet certifié.",
      downloadCvBtn: "Télécharger le CV complet (PDF)"
    },
    education: {
      eyebrow: "Parcours Académique",
      title: "Formation & Diplômes",
      subtitle: "Qualifications académiques en génie logiciel et technologies informatiques.",
      btech: {
        degree: "B.Tech en Génie Logiciel (Software Engineering)",
        institution: "Yaoundé International Business School (YIBS)",
        period: "2025 – 2026",
        status: "Programme académique complété ; délivrance formelle du diplôme en cours."
      },
      hnd: {
        degree: "HND en Technologie Informatique (Computer Technology)",
        institution: "Yaoundé International Business School (YIBS)",
        period: "2023 – 2025",
        status: "Cursus académique complété."
      },
      certificationsTitle: "Certifications & Participations Officielles",
      certList: [
        { name: "Attestation de Stage", issuer: "DIGIMARK CONSULTING", date: "2024" },
        { name: "Attestation de Stage", issuer: "CIBER", date: "2026" },
        { name: "Certificat de Participation", issuer: "Marchés Publics et Politiques de Gestion", date: "Vérifié" },
        { name: "Certificat de Leadership", issuer: "International Leadership Institute (ILI)", date: "Vérifié" },
        { name: "Certificat de Participation", issuer: "Séminaire Chrétien GALCAM", date: "Vérifié" }
      ]
    },
    teaching: {
      eyebrow: "Pédagogie & Leadership",
      title: "Enseignement & Responsabilités Scientifiques",
      subtitle: "Transmission méthodique du savoir et formation de la relève scientifique.",
      leRocher: {
        role: "Chef de Département (Sciences) & Enseignant",
        institution: "Complexe Bilingue Scolaire Le Rocher",
        period: "2025 – 2027",
        details: [
          "Chef de Département Scientifique : coordination pédagogique, suivi des programmes et harmonisation académique.",
          "Enseignement de l'Informatique : Classes de Form 1 à Form 5.",
          "Enseignement de la Physique : Classes de Form 1 à Form 5, ancrant les notions théoriques dans des cas pratiques."
        ]
      },
      rahabica: {
        role: "Enseignant d'Informatique & de Physique",
        institution: "Rahabica Rabbi Hans School",
        period: "2025 – 2026",
        details: [
          "Enseignement de l'informatique fondamentale, de l'algorithmique et des sciences physiques de Form 1 à Form 4."
        ]
      },
      tutoring: {
        role: "Tuteur Privé en Sciences",
        institution: "Élèves de Terminale / Upper Sixth",
        period: "En continu",
        details: [
          "Encadrement personnalisé de haut niveau et préparation méthodique aux examens officiels en Informatique et Physique."
        ]
      }
    },
    mentorship: {
      eyebrow: "Croissance & Sens",
      title: "Développement Personnel & Mentorat Jeunesse",
      subtitle: "Une initiative en développement dédiée à fortifier la jeunesse par le caractère, la discipline et la foi.",
      statusBadge: "Initiative en Développement",
      text1: "Au-delà des lignes de code, j'ai à cœur de forger le caractère, la résilience et le sens du devoir chez les jeunes. Tout au long de mon parcours, j'ai constaté l'impact déterminant de l'encouragement sincère et des repères éthiques pour surmonter le découragement et le doute.",
      text2: "Cette initiative incarne ma volonté de partager mes acquis par la prise de parole, la formation et des principes d'inspiration chrétienne. Elle vise à guider chacun vers la découverte de son potentiel et la recherche de l'excellence avec rigueur.",
      pillars: [
        { title: "Caractère & Discipline", desc: "Instaurer des habitudes vertueuses et une exigence personnelle garantes d'un épanouissement durable." },
        { title: "Émancipation de la Jeunesse", desc: "Fournir des repères concrets pour surmonter les doutes et réussir ses orientations scolaires et de vie." },
        { title: "Ancrage Spirituel", desc: "Fonder sa vision sur des valeurs d'intégrité, d'humilité et de fidélité au service des autres." },
        { title: "Prise de Parole & Éloquence", desc: "Articuler des idées claires mariant pragmatisme technique et élévation de l'esprit." }
      ]
    },
    community: {
      eyebrow: "Échange & Savoir",
      title: "Boîte à Idées & Échanges Techniques",
      subtitle: "Une proposition de sujet, un défi architectural ou une idée à soumettre ? Partagez-la en toute sécurité.",
      privacyNote: "Les propositions sont transmises via des protocoles chiffrés et archivées dans le respect absolu de la vie privée.",
      form: {
        name: "Votre Nom",
        email: "Votre Adresse Email",
        topic: "Titre du Sujet ou de la Proposition",
        details: "Détails ou Contexte",
        submit: "Soumettre la Proposition",
        sending: "Chiffrement & Envoi en cours...",
        success: "Merci ! Votre proposition a été enregistrée en toute sécurité.",
        error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou me contacter directement."
      }
    },
    contact: {
      eyebrow: "Initier une Collaboration",
      title: "Me Contacter",
      subtitle: "Disponible pour consultations d'ingénierie, conception de systèmes et projets logiciels à fort impact.",
      locationTitle: "Localisation",
      locationValue: "Yaoundé, Cameroun",
      phoneTitle: "Téléphone / Ligne Directe",
      phoneValue: "+237 659 745 176",
      whatsappTitle: "WhatsApp",
      whatsappAction: "Ouvrir la discussion (+237 659 745 176)",
      emailTitle: "Email Direct",
      emailValue: "stevekamgno2@gmail.com",
      formTitle: "Envoyer une Demande d'Architecture",
      nameLabel: "Votre Nom Complet",
      emailLabel: "Votre Adresse Email",
      subjectLabel: "Objet / Envergure du Projet",
      messageLabel: "Détails du Projet / Message",
      submitBtn: "Envoyer le Message",
      sendingBtn: "Transmission du message...",
      successMsg: "Merci pour votre message. Il a été transmis avec succès. Je vous répondrai dans les plus brefs délais.",
      errorMsg: "La transmission a échoué. Veuillez me contacter directement par email ou WhatsApp."
    },
    footer: {
      brandDesc: "Ingénieur Logiciel & Spécialiste DevOps dédié à la conception de systèmes fiables, à la simplification du travail et à l'autonomie des individus.",
      quickLinks: "Navigation Rapide",
      connectTitle: "Canaux Directs",
      copyright: "Tous droits réservés. DJIDJOU STEVE.",
      builtWith: "Développé selon les standards sémantiques, d'accessibilité et de haute disponibilité."
    }
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('dskode_lang_pref') || 'en';
    if (!['en', 'fr'].includes(this.currentLang)) {
      this.currentLang = 'en';
    }
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupListeners();
  }

  applyLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('dskode_lang_pref', lang);
    document.documentElement.lang = lang;

    // Update active state in toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.resolveKey(translations[lang], key);
      if (val !== undefined && typeof val === 'string') {
        el.textContent = val;
      }
    });

    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = this.resolveKey(translations[lang], key);
      if (val !== undefined && typeof val === 'string') {
        el.setAttribute('placeholder', val);
      }
    });

    // Translate aria-labels
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      const val = this.resolveKey(translations[lang], key);
      if (val !== undefined && typeof val === 'string') {
        el.setAttribute('aria-label', val);
      }
    });

    // Dispatch event for other components if needed
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  resolveKey(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  }

  setupListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== this.currentLang) {
          this.applyLanguage(selectedLang);
        }
      });
    });
  }

  t(key) {
    return this.resolveKey(translations[this.currentLang], key) || key;
  }
}

// Global instance
window.i18n = new I18nManager();

document.addEventListener('DOMContentLoaded', () => {
  window.i18n.init();
});
