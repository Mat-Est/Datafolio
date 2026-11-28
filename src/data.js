// Contenus du portfolio : textes de l'interface, parcours, compétences et projets.
// Une valeur peut être une chaîne (identique dans toutes les langues)
// ou un objet { fr, en, es, de }.
// La couleur d'un projet (« tone ») sert à sa pastille : bleu, rouge, jaune, vert, violet, turquoise.

export const LANGS = ['fr', 'en', 'es', 'de'];

export const contact = {
  email: 'promateoesteban1@gmail.com',
  emailHref: 'https://mail.google.com/mail/?view=cm&to=promateoesteban1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mat%C3%A9o-esteban-9409942a8/',
  github: 'https://github.com/mat-esteban',
};

export const translations = {
  fr: {
    meta: { title: 'Matéo Esteban — Data Engineer' },
    ui: { menu: 'Menu', close: 'Fermer', theme: 'Changer de thème', language: 'Langue', nav: 'Navigation principale' },
    nav: { projects: 'Projets', experience: 'Parcours', skills: 'Compétences', contact: 'Contact' },
    hero: {
      status: 'En alternance chez Decathlon Electronics',
      role: 'Data Engineer',
      lead: 'Étudiant en Master SIAD (Systèmes d’Information et Aide à la Décision) à l’Université de Lille et alternant data engineer chez Decathlon Electronics. Diplômé d’un BUT Science des Données, je conçois des tableaux de bord, j’analyse des données et j’automatise leur traitement pour faciliter la prise de décision.',
      ctaProjects: 'Voir mes projets',
      ctaContact: 'Me contacter',
      portraitAlt: 'Portrait de Matéo Esteban',
    },
    facts: [
      { icon: 'school', label: 'Formation', value: 'Master SIAD', sub: 'Université de Lille' },
      { icon: 'work', label: 'Poste actuel', value: 'Data Engineer en alternance', sub: 'Decathlon Electronics' },
      { icon: 'place', label: 'Localisation', value: 'Lille', sub: 'Hauts-de-France' },
    ],
    projects: {
      title: 'Projets',
      intro: 'Projets universitaires, personnels et professionnels. Ouvrez un projet pour voir son contexte, la méthode suivie et les résultats.',
      cta: 'Voir le projet',
      featured: 'Nouveau',
      showMore: 'Voir plus de projets',
      showLess: 'Voir moins de projets',
    },
    experience: { title: 'Parcours', intro: 'Mon expérience professionnelle et ma formation.', work: 'Expérience professionnelle', school: 'Formation', viewDetail: 'Voir le détail du stage' },
    skills: { title: 'Compétences', intro: 'Les outils et les méthodes que j’utilise, regroupés par domaine.', showMore: 'Voir plus', showLess: 'Voir moins' },
    detail: {
      back: 'Tous les projets', context: 'Contexte', methodology: 'Méthodologie', results: 'Résultats', tools: 'Outils',
      openApp: 'Ouvrir l’application', openCode: 'Voir le code sur GitHub', prev: 'Projet précédent', next: 'Projet suivant', enlarge: 'Agrandir l’image',
      prevImage: 'Image précédente', nextImage: 'Image suivante',
      imageOf: (i, n) => `Image ${i} sur ${n}`,
    },
    contact: {
      title: 'Contact',
      text: 'Une question, un projet ou une opportunité ? Écrivez-moi par e-mail ou contactez-moi sur LinkedIn.',
      email: 'E-mail',
    },
    footer: 'Master SIAD · Université de Lille',
  },
  en: {
    meta: { title: 'Matéo Esteban — Data Engineer' },
    ui: { menu: 'Menu', close: 'Close', theme: 'Toggle theme', language: 'Language', nav: 'Main navigation' },
    nav: { projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    hero: {
      status: 'Apprentice at Decathlon Electronics',
      role: 'Data Engineer',
      lead: 'Master’s student in Information Systems and Decision Support (SIAD) at the University of Lille and apprentice data engineer at Decathlon Electronics. With a BUT in Data Science, I build dashboards, analyse data and automate its processing to support decision-making.',
      ctaProjects: 'See my projects',
      ctaContact: 'Get in touch',
      portraitAlt: 'Portrait of Matéo Esteban',
    },
    facts: [
      { icon: 'school', label: 'Education', value: 'Master SIAD', sub: 'University of Lille' },
      { icon: 'work', label: 'Current role', value: 'Data Engineer (apprenticeship)', sub: 'Decathlon Electronics' },
      { icon: 'place', label: 'Location', value: 'Lille, France', sub: 'Hauts-de-France' },
    ],
    projects: {
      title: 'Projects',
      intro: 'Academic, personal and professional projects. Open a project to see its context, approach and results.',
      cta: 'View project',
      featured: 'New',
      showMore: 'Show more projects',
      showLess: 'Show fewer projects',
    },
    experience: { title: 'Experience', intro: 'My work experience and education.', work: 'Work experience', school: 'Education', viewDetail: 'View the internship' },
    skills: { title: 'Skills', intro: 'The tools and methods I use, grouped by area.', showMore: 'Show more', showLess: 'Show less' },
    detail: {
      back: 'All projects', context: 'Context', methodology: 'Approach', results: 'Results', tools: 'Tools',
      openApp: 'Open the application', openCode: 'View the code on GitHub', prev: 'Previous project', next: 'Next project', enlarge: 'Enlarge image',
      prevImage: 'Previous image', nextImage: 'Next image',
      imageOf: (i, n) => `Image ${i} of ${n}`,
    },
    contact: {
      title: 'Contact',
      text: 'A question, a project or an opportunity? Email me or reach out on LinkedIn.',
      email: 'Email',
    },
    footer: 'Master SIAD · University of Lille',
  },
  es: {
    meta: { title: 'Matéo Esteban — Data Engineer' },
    ui: { menu: 'Menú', close: 'Cerrar', theme: 'Cambiar tema', language: 'Idioma', nav: 'Navegación principal' },
    nav: { projects: 'Proyectos', experience: 'Trayectoria', skills: 'Competencias', contact: 'Contacto' },
    hero: {
      status: 'En alternancia en Decathlon Electronics',
      role: 'Data Engineer',
      lead: 'Estudiante del Máster SIAD (Sistemas de Información y Ayuda a la Decisión) en la Universidad de Lille y data engineer en alternancia en Decathlon Electronics. Titulado de un BUT en Ciencia de Datos, diseño cuadros de mando, analizo datos y automatizo su tratamiento para facilitar la toma de decisiones.',
      ctaProjects: 'Ver mis proyectos',
      ctaContact: 'Contactar',
      portraitAlt: 'Retrato de Matéo Esteban',
    },
    facts: [
      { icon: 'school', label: 'Formación', value: 'Máster SIAD', sub: 'Universidad de Lille' },
      { icon: 'work', label: 'Puesto actual', value: 'Data Engineer en alternancia', sub: 'Decathlon Electronics' },
      { icon: 'place', label: 'Ubicación', value: 'Lille, Francia', sub: 'Altos de Francia' },
    ],
    projects: {
      title: 'Proyectos',
      intro: 'Proyectos universitarios, personales y profesionales. Abre un proyecto para ver su contexto, la metodología y los resultados.',
      cta: 'Ver proyecto',
      featured: 'Nuevo',
      showMore: 'Ver más proyectos',
      showLess: 'Ver menos proyectos',
    },
    experience: { title: 'Trayectoria', intro: 'Mi experiencia profesional y mi formación.', work: 'Experiencia profesional', school: 'Formación', viewDetail: 'Ver las prácticas' },
    skills: { title: 'Competencias', intro: 'Las herramientas y los métodos que utilizo, agrupados por ámbito.', showMore: 'Ver más', showLess: 'Ver menos' },
    detail: {
      back: 'Todos los proyectos', context: 'Contexto', methodology: 'Metodología', results: 'Resultados', tools: 'Herramientas',
      openApp: 'Abrir la aplicación', openCode: 'Ver el código en GitHub', prev: 'Proyecto anterior', next: 'Proyecto siguiente', enlarge: 'Ampliar imagen',
      prevImage: 'Imagen anterior', nextImage: 'Imagen siguiente',
      imageOf: (i, n) => `Imagen ${i} de ${n}`,
    },
    contact: {
      title: 'Contacto',
      text: '¿Una pregunta, un proyecto o una oportunidad? Escríbeme por correo o contáctame en LinkedIn.',
      email: 'Correo',
    },
    footer: 'Máster SIAD · Universidad de Lille',
  },
  de: {
    meta: { title: 'Matéo Esteban — Data Engineer' },
    ui: { menu: 'Menü', close: 'Schließen', theme: 'Farbschema wechseln', language: 'Sprache', nav: 'Hauptnavigation' },
    nav: { projects: 'Projekte', experience: 'Werdegang', skills: 'Kompetenzen', contact: 'Kontakt' },
    hero: {
      status: 'Duales Studium bei Decathlon Electronics',
      role: 'Data Engineer',
      lead: 'Masterstudent im Studiengang SIAD (Informationssysteme und Entscheidungsunterstützung) an der Universität Lille und Data Engineer im dualen Studium bei Decathlon Electronics. Mit einem BUT in Data Science erstelle ich Dashboards, analysiere Daten und automatisiere ihre Verarbeitung, um Entscheidungen zu erleichtern.',
      ctaProjects: 'Meine Projekte',
      ctaContact: 'Kontakt aufnehmen',
      portraitAlt: 'Porträt von Matéo Esteban',
    },
    facts: [
      { icon: 'school', label: 'Ausbildung', value: 'Master SIAD', sub: 'Universität Lille' },
      { icon: 'work', label: 'Aktuelle Position', value: 'Data Engineer (duales Studium)', sub: 'Decathlon Electronics' },
      { icon: 'place', label: 'Standort', value: 'Lille, Frankreich', sub: 'Hauts-de-France' },
    ],
    projects: {
      title: 'Projekte',
      intro: 'Hochschul-, persönliche und berufliche Projekte. Öffnen Sie ein Projekt, um Kontext, Vorgehen und Ergebnisse zu sehen.',
      cta: 'Projekt ansehen',
      featured: 'Neu',
      showMore: 'Weitere Projekte anzeigen',
      showLess: 'Weniger Projekte anzeigen',
    },
    experience: { title: 'Werdegang', intro: 'Meine Berufserfahrung und Ausbildung.', work: 'Berufserfahrung', school: 'Ausbildung', viewDetail: 'Praktikum ansehen' },
    skills: { title: 'Kompetenzen', intro: 'Die Werkzeuge und Methoden, die ich nutze, nach Bereichen geordnet.', showMore: 'Mehr anzeigen', showLess: 'Weniger anzeigen' },
    detail: {
      back: 'Alle Projekte', context: 'Kontext', methodology: 'Vorgehen', results: 'Ergebnisse', tools: 'Werkzeuge',
      openApp: 'Anwendung öffnen', openCode: 'Code auf GitHub ansehen', prev: 'Vorheriges Projekt', next: 'Nächstes Projekt', enlarge: 'Bild vergrößern',
      prevImage: 'Vorheriges Bild', nextImage: 'Nächstes Bild',
      imageOf: (i, n) => `Bild ${i} von ${n}`,
    },
    contact: {
      title: 'Kontakt',
      text: 'Eine Frage, ein Projekt oder eine Stelle? Schreiben Sie mir eine E-Mail oder kontaktieren Sie mich auf LinkedIn.',
      email: 'E-Mail',
    },
    footer: 'Master SIAD · Universität Lille',
  },
};

// Parcours, du plus récent au plus ancien dans chaque colonne.
export const experiences = {
  work: [
    {
      org: 'Decathlon Electronics',
      current: true,
      role: { fr: 'Data Engineer (alternance)', en: 'Data Engineer (apprenticeship)', es: 'Data Engineer (alternancia)', de: 'Data Engineer (duales Studium)' },
      period: { fr: '2026 — aujourd’hui', en: '2026 — present', es: '2026 — actualidad', de: '2026 — heute' },
      place: 'Lille',
      desc: {
        fr: 'Alternance en data engineering, en parallèle du Master SIAD.',
        en: 'Data engineering apprenticeship alongside the SIAD master’s degree.',
        es: 'Alternancia en ingeniería de datos, en paralelo al Máster SIAD.',
        de: 'Duales Studium im Bereich Data Engineering, parallel zum Master SIAD.',
      },
    },
    {
      org: 'Ministère des Armées',
      role: { fr: 'Data Analyst (alternance)', en: 'Data Analyst (apprenticeship)', es: 'Analista de datos (alternancia)', de: 'Datenanalyst (duales Studium)' },
      period: { fr: 'Sept. 2025 — 2026', en: 'Sept 2025 — 2026', es: 'Sept. 2025 — 2026', de: 'Sept. 2025 — 2026' },
      desc: {
        fr: 'Analyse de données stratégiques, création de tableaux de bord de suivi et automatisation des traitements.',
        en: 'Strategic data analysis, monitoring dashboards and process automation.',
        es: 'Análisis de datos estratégicos, cuadros de mando de seguimiento y automatización de procesos.',
        de: 'Strategische Datenanalyse, Monitoring-Dashboards und Automatisierung von Abläufen.',
      },
    },
    {
      org: 'Crédit Agricole',
      role: { fr: 'Data Analyst (stage)', en: 'Data Analyst (internship)', es: 'Analista de datos (prácticas)', de: 'Datenanalyst (Praktikum)' },
      period: { fr: 'Avr. 2025 — juin 2025', en: 'Apr 2025 — Jun 2025', es: 'Abr. 2025 — jun. 2025', de: 'Apr. 2025 — Juni 2025' },
      desc: {
        fr: 'Contrôles de cohérence, recensement d’anomalies et traitement de données bancaires.',
        en: 'Consistency checks, anomaly tracking and banking data processing.',
        es: 'Controles de coherencia, registro de anomalías y tratamiento de datos bancarios.',
        de: 'Konsistenzprüfungen, Erfassung von Anomalien und Verarbeitung von Bankdaten.',
      },
      project: 'stage-credit-agricole',
    },
  ],
  school: [
    {
      org: 'Université de Lille',
      current: true,
      role: {
        fr: 'Master SIAD — Systèmes d’Information et Aide à la Décision',
        en: 'Master’s in Information Systems and Decision Support (SIAD)',
        es: 'Máster SIAD — Sistemas de Información y Ayuda a la Decisión',
        de: 'Master SIAD — Informationssysteme und Entscheidungsunterstützung',
      },
      period: { fr: 'Depuis 2026 · en cours', en: 'Since 2026 · ongoing', es: 'Desde 2026 · en curso', de: 'Seit 2026 · laufend' },
      desc: {
        fr: 'Formation en alternance avec Decathlon Electronics.',
        en: 'Work-study programme with Decathlon Electronics.',
        es: 'Formación en alternancia con Decathlon Electronics.',
        de: 'Duales Studium mit Decathlon Electronics.',
      },
    },
    {
      org: 'IUT de Vannes',
      role: { fr: 'BUT Science des Données, parcours VCOD', en: 'Bachelor in Data Science (BUT), VCOD track', es: 'BUT en Ciencia de Datos, itinerario VCOD', de: 'BUT Data Science, Schwerpunkt VCOD' },
      period: { fr: 'Diplômé en 2026', en: 'Graduated in 2026', es: 'Titulado en 2026', de: 'Abschluss 2026' },
      desc: {
        fr: 'Statistique, programmation (Python, R, SQL), visualisation de données et informatique décisionnelle.',
        en: 'Statistics, programming (Python, R, SQL), data visualisation and business intelligence.',
        es: 'Estadística, programación (Python, R, SQL), visualización de datos e inteligencia de negocio.',
        de: 'Statistik, Programmierung (Python, R, SQL), Datenvisualisierung und Business Intelligence.',
      },
    },
  ],
};

// Compétences : les « items » sont toujours visibles, les « extra » s'affichent avec « Voir plus ».
// « icon » renvoie aux icônes définies dans App.jsx (SKILL_ICONS).
export const skillCategories = [
  {
    id: 'prog',
    tone: 'bleu',
    title: { fr: 'Programmation', en: 'Programming', es: 'Programación', de: 'Programmierung' },
    items: [
      { name: 'Python (pandas, NumPy)', icon: 'code' },
      { name: 'R & R Shiny', icon: 'r' },
      { name: 'SQL / NoSQL', icon: 'database' },
      { name: { fr: 'VBA (macros Excel)', en: 'VBA (Excel macros)', es: 'VBA (macros de Excel)', de: 'VBA (Excel-Makros)' }, icon: 'terminal' },
    ],
    extra: [
      { name: 'SAS', icon: 'file' },
      { name: 'HTML / CSS', icon: 'layout' },
      { name: 'JavaScript', icon: 'monitor' },
    ],
  },
  {
    id: 'tools',
    tone: 'vert',
    title: { fr: 'Outils & BI', en: 'Tools & BI', es: 'Herramientas y BI', de: 'Werkzeuge & BI' },
    items: [
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Looker', icon: 'linechart' },
      { name: 'Excel', icon: 'excel' },
      { name: 'SAP BusinessObjects', icon: 'sap' },
    ],
    extra: [
      { name: 'PostgreSQL / MySQL', icon: 'database' },
      { name: 'Git', icon: 'git' },
      { name: 'Talend', icon: 'workflow' },
    ],
  },
  {
    id: 'analytics',
    tone: 'violet',
    title: { fr: 'Analytique', en: 'Analytics', es: 'Analítica', de: 'Analytik' },
    items: [
      { name: { fr: 'Deep learning & IA', en: 'Deep learning & AI', es: 'Deep learning e IA', de: 'Deep Learning & KI' }, icon: 'brain' },
      { name: { fr: 'Statistiques inférentielles', en: 'Inferential statistics', es: 'Estadística inferencial', de: 'Inferenzstatistik' }, icon: 'linechart' },
      { name: { fr: 'Statistiques descriptives', en: 'Descriptive statistics', es: 'Estadística descriptiva', de: 'Deskriptive Statistik' }, icon: 'barchart' },
      { name: { fr: 'Séries temporelles', en: 'Time series', es: 'Series temporales', de: 'Zeitreihenanalyse' }, icon: 'trend' },
    ],
    extra: [
      { name: { fr: 'Tests d’hypothèses', en: 'Hypothesis testing', es: 'Contraste de hipótesis', de: 'Hypothesentests' }, icon: 'flask' },
      { name: { fr: 'Segmentation (ACP, K-means)', en: 'Segmentation (PCA, K-means)', es: 'Segmentación (ACP, K-means)', de: 'Segmentierung (PCA, K-Means)' }, icon: 'search' },
    ],
  },
  {
    id: 'comm',
    tone: 'orange',
    title: { fr: 'Communication', en: 'Communication', es: 'Comunicación', de: 'Kommunikation' },
    items: [
      { name: { fr: 'Anglais', en: 'English', es: 'Inglés', de: 'Englisch' }, icon: 'globe' },
      { name: { fr: 'Espagnol', en: 'Spanish', es: 'Español', de: 'Spanisch' }, icon: 'globe' },
      { name: { fr: 'Vulgarisation des résultats', en: 'Explaining results to non-experts', es: 'Divulgación de resultados', de: 'Verständliche Ergebnisvermittlung' }, icon: 'presentation' },
      { name: { fr: 'Méthodes agiles', en: 'Agile methods', es: 'Metodologías ágiles', de: 'Agile Methoden' }, icon: 'agile' },
    ],
  },
];

const CRIME = 'images/criminalite-usa/';
const SPOTIFY = 'images/spotify/';

export const projects = [
  {
    slug: 'deep-cut',
    tone: 'violet',
    featured: true,
    cat: { fr: 'IA & musique · projet personnel', en: 'AI & music · personal project', es: 'IA y música · proyecto personal', de: 'KI & Musik · persönliches Projekt' },
    title: { fr: 'Deep Cut', en: 'Deep Cut', es: 'Deep Cut', de: 'Deep Cut' },
    desc: {
      fr: 'Assistant IA de découverte musicale intégré à Spotify pour ordinateur : on discute musique avec une IA, et chaque titre recommandé est vérifié dans le catalogue, prêt à être écouté ou ajouté à une playlist.',
      en: 'An AI music-discovery assistant inside the Spotify desktop app: chat about music with an AI, and every recommended track is checked against the catalogue, ready to play or add to a playlist.',
      es: 'Asistente de IA para descubrir música dentro de Spotify para escritorio: conversas sobre música con una IA y cada canción recomendada se verifica en el catálogo, lista para escuchar o añadir a una playlist.',
      de: 'Ein KI-Assistent zur Musikentdeckung in der Spotify-Desktop-App: Man spricht mit einer KI über Musik, und jeder empfohlene Titel wird im Katalog geprüft – bereit zum Abspielen oder für eine Playlist.',
    },
    details: {
      fr: {
        contexte: 'Projet personnel en cours (version 0.9). Deep Cut est une extension Spicetify qui ajoute un assistant IA dans l’application Spotify pour ordinateur. Un clic sur une orbe dans la barre du haut ouvre un panneau latéral où l’on demande des « deep cuts » (titres méconnus d’un artiste), des artistes à découvrir ou l’histoire d’un genre, sans quitter sa musique.',
        methodologie: 'Application en TypeScript et React, construite avec esbuild. L’IA passe par une interface commune avec un adaptateur par fournisseur : Gemini (gratuit, par défaut), Groq en secours automatique et Claude en option. Principe clé : « le code calcule, l’IA interprète ». Les statistiques d’écoute sont calculées en TypeScript, par des fonctions pures testées avec Vitest, puis transmises à l’IA déjà agrégées. Chaque titre proposé par l’IA est vérifié dans le catalogue Spotify (correspondance stricte artiste + titre) et écarté s’il est introuvable. Tout l’accès à Spotify est isolé dans une seule couche, imposée par une règle ESLint, et l’intégration continue vérifie les types, le lint, les tests et le build.',
        resultats: 'Fonctionnalités actuelles : réponses en streaming, bascule automatique entre modèles quand un quota est atteint, lecture et ajout à la file en un clic, création de playlists après aperçu, clic droit « plus comme ça », journal d’écoute local avec statistiques (artistes, titres, temps d’écoute, diversité, découvertes) et interface en français et en anglais.\n\nProchaines étapes : genres et décennies dans les statistiques, graphiques, puis publication sur le Marketplace de Spicetify.',
      },
      en: {
        contexte: 'Ongoing personal project (version 0.9). Deep Cut is a Spicetify extension that adds an AI assistant to the Spotify desktop app. Clicking an orb in the top bar opens a side panel where you can ask for deep cuts (an artist’s lesser-known tracks), new artists to discover or the story of a genre, without leaving your music.',
        methodologie: 'Built in TypeScript and React, bundled with esbuild. The AI sits behind a common interface with one adapter per provider: Gemini (free, default), Groq as an automatic fallback and Claude as an option. Key principle: “code computes, AI interprets”. Listening statistics are computed in TypeScript by pure functions tested with Vitest, then handed to the AI already aggregated. Every track the AI suggests is checked against Spotify’s catalogue (strict artist + title match) and dropped if it cannot be found. All Spotify access is isolated in a single layer, enforced by an ESLint rule, and continuous integration checks types, lint, tests and build.',
        resultats: 'Current features: streamed answers, automatic model failover when a quota is reached, one-click play and queue, playlist creation after a preview, right-click “more like this”, a local listening journal with statistics (artists, tracks, listening time, diversity, discoveries) and a French and English interface.\n\nNext steps: genres and decades in the statistics, charts, then release on the Spicetify Marketplace.',
      },
      es: {
        contexte: 'Proyecto personal en curso (versión 0.9). Deep Cut es una extensión de Spicetify que añade un asistente de IA a la aplicación de Spotify para escritorio. Un clic en un orbe de la barra superior abre un panel lateral donde se piden «deep cuts» (canciones poco conocidas de un artista), artistas por descubrir o la historia de un género, sin salir de la música.',
        methodologie: 'Aplicación en TypeScript y React, compilada con esbuild. La IA pasa por una interfaz común con un adaptador por proveedor: Gemini (gratuito, por defecto), Groq como respaldo automático y Claude como opción. Principio clave: «el código calcula, la IA interpreta». Las estadísticas de escucha se calculan en TypeScript con funciones puras probadas con Vitest y se entregan a la IA ya agregadas. Cada canción propuesta por la IA se verifica en el catálogo de Spotify (coincidencia estricta de artista y título) y se descarta si no se encuentra. Todo el acceso a Spotify está aislado en una sola capa, impuesta por una regla de ESLint, y la integración continua verifica tipos, lint, pruebas y build.',
        resultats: 'Funciones actuales: respuestas en streaming, cambio automático de modelo al agotarse una cuota, reproducción y cola en un clic, creación de playlists tras una vista previa, clic derecho «más como esto», diario de escucha local con estadísticas (artistas, canciones, tiempo de escucha, diversidad, descubrimientos) e interfaz en francés e inglés.\n\nPróximos pasos: géneros y décadas en las estadísticas, gráficos y publicación en el Marketplace de Spicetify.',
      },
      de: {
        contexte: 'Laufendes persönliches Projekt (Version 0.9). Deep Cut ist eine Spicetify-Erweiterung, die der Spotify-Desktop-App einen KI-Assistenten hinzufügt. Ein Klick auf eine Kugel in der oberen Leiste öffnet ein Seitenpanel, in dem man nach Deep Cuts (weniger bekannten Titeln eines Künstlers), neuen Künstlern oder der Geschichte eines Genres fragen kann, ohne die Musik zu verlassen.',
        methodologie: 'Entwickelt in TypeScript und React, gebündelt mit esbuild. Die KI ist über eine gemeinsame Schnittstelle mit einem Adapter pro Anbieter angebunden: Gemini (kostenlos, Standard), Groq als automatische Ausweichlösung und Claude als Option. Grundprinzip: „Der Code rechnet, die KI interpretiert“. Hörstatistiken werden in TypeScript mit reinen, per Vitest getesteten Funktionen berechnet und der KI bereits aggregiert übergeben. Jeder von der KI vorgeschlagene Titel wird im Spotify-Katalog geprüft (exakte Übereinstimmung von Künstler und Titel) und verworfen, wenn er nicht gefunden wird. Der gesamte Spotify-Zugriff ist in einer einzigen Schicht isoliert, durch eine ESLint-Regel erzwungen, und die Continuous Integration prüft Typen, Lint, Tests und Build.',
        resultats: 'Aktuelle Funktionen: gestreamte Antworten, automatischer Modellwechsel bei erreichtem Kontingent, Abspielen und Warteschlange per Klick, Playlist-Erstellung nach einer Vorschau, Rechtsklick „mehr davon“, lokales Hörtagebuch mit Statistiken (Künstler, Titel, Hörzeit, Vielfalt, Entdeckungen) sowie eine Oberfläche auf Französisch und Englisch.\n\nNächste Schritte: Genres und Jahrzehnte in den Statistiken, Diagramme und die Veröffentlichung im Spicetify-Marketplace.',
      },
    },
    tags: ['TypeScript', 'React', 'Spicetify', 'Gemini API', 'Vitest'],
    cover: 'images/deep-cut/interface.jpg',
    coverStyle: 'frame',
    images: ['images/deep-cut/interface.jpg', 'images/deep-cut/architecture.jpg'],
    link: 'https://github.com/Mat-Est/Deep-Cut',
    linkType: 'code',
  },
  {
    slug: 'criminalite-etats-unis',
    tone: 'rouge',
    cat: { fr: 'Analyse statistique', en: 'Statistical analysis', es: 'Análisis estadístico', de: 'Statistische Analyse' },
    title: {
      fr: 'Analyse multivariée de la criminalité aux États-Unis',
      en: 'Multivariate Analysis of US Crime Data',
      es: 'Análisis multivariante de la criminalidad en EE. UU.',
      de: 'Multivariate Analyse der Kriminalität in den USA',
    },
    desc: {
      fr: 'Application R Shiny d’exploration des données de criminalité américaines de 2019, fondée sur l’ACP.',
      en: 'R Shiny app for exploring 2019 US crime data, built on principal component analysis.',
      es: 'Aplicación R Shiny para explorar los datos de criminalidad de EE. UU. en 2019, basada en el ACP.',
      de: 'R-Shiny-Anwendung zur Untersuchung der US-Kriminalitätsdaten von 2019 auf Basis der Hauptkomponentenanalyse.',
    },
    details: {
      fr: {
        contexte: 'Projet universitaire : conception d’une application interactive pour explorer les données de criminalité aux États-Unis en 2019, à travers une série d’analyses statistiques et de visualisations dynamiques. L’analyse repose principalement sur l’Analyse en Composantes Principales (ACP), afin de dégager les structures sous-jacentes et les tendances globales. Les données proviennent du Département de la Justice américain et du FBI et couvrent la période 1960–2019.',
        methodologie: 'Préparation et nettoyage rigoureux des données, puis mise en œuvre de l’ACP pour réduire la dimensionnalité, complétée par un clustering pour étudier les liens entre variables socio-économiques (revenu, pauvreté, chômage) et taux de criminalité. Développement en R avec Shiny pour l’interactivité.',
        resultats: 'Fonctionnalités de l’application : extraction interactive des données, synthèse des tendances principales, exploration par catégorie (crimes violents, atteintes aux biens) et cartographie par État.\n\nCompétences mobilisées : maîtrise de l’ACP, traitement de données complexes à l’échelle nationale, utilisation de Shiny pour rendre des résultats techniques accessibles, autonomie sur l’ensemble du cycle d’analyse.',
      },
      en: {
        contexte: 'University project: an interactive application for exploring 2019 US crime data through statistical analyses and dynamic visualisations. The analysis relies mainly on Principal Component Analysis (PCA) to reveal underlying structures and overall trends. Data comes from the US Department of Justice and the FBI and covers 1960–2019.',
        methodologie: 'Thorough data preparation and cleaning, then PCA to reduce dimensionality, complemented by clustering to study the links between socio-economic variables (income, poverty, unemployment) and crime rates. Built in R with Shiny for interactivity.',
        resultats: 'App features: interactive data extracts, a summary of the main trends, exploration by category (violent and property crime) and a state-level map.\n\nSkills applied: PCA, processing complex national-scale data, using Shiny to make technical results accessible, and ownership of the full analysis cycle.',
      },
      es: {
        contexte: 'Proyecto universitario: una aplicación interactiva para explorar los datos de criminalidad de EE. UU. en 2019 mediante análisis estadísticos y visualizaciones dinámicas. El análisis se basa principalmente en el Análisis de Componentes Principales (ACP) para identificar estructuras subyacentes y tendencias globales. Los datos proceden del Departamento de Justicia de EE. UU. y del FBI y abarcan el periodo 1960–2019.',
        methodologie: 'Preparación y limpieza rigurosa de los datos; después, ACP para reducir la dimensionalidad y clustering para estudiar la relación entre variables socioeconómicas (ingresos, pobreza, desempleo) y tasas de criminalidad. Desarrollada en R con Shiny.',
        resultats: 'Funcionalidades: extracción interactiva de datos, síntesis de las principales tendencias, exploración por categoría (delitos violentos y contra la propiedad) y mapa por estado.\n\nCompetencias aplicadas: ACP, tratamiento de datos complejos a escala nacional, uso de Shiny para hacer accesibles resultados técnicos y autonomía en todo el ciclo de análisis.',
      },
      de: {
        contexte: 'Hochschulprojekt: eine interaktive Anwendung, mit der sich die US-Kriminalitätsdaten von 2019 über statistische Analysen und dynamische Visualisierungen erkunden lassen. Die Analyse stützt sich vor allem auf die Hauptkomponentenanalyse (PCA), um zugrunde liegende Strukturen und allgemeine Trends sichtbar zu machen. Die Daten stammen vom US-Justizministerium und vom FBI und decken den Zeitraum 1960–2019 ab.',
        methodologie: 'Sorgfältige Aufbereitung und Bereinigung der Daten, anschließend PCA zur Dimensionsreduktion sowie Clustering, um Zusammenhänge zwischen sozioökonomischen Variablen (Einkommen, Armut, Arbeitslosigkeit) und Kriminalitätsraten zu untersuchen. Umgesetzt in R mit Shiny.',
        resultats: 'Funktionen: interaktive Datenauszüge, Überblick über die wichtigsten Trends, Analyse nach Kategorie (Gewalt- und Eigentumsdelikte) und Karte nach Bundesstaat.\n\nEingesetzte Kompetenzen: PCA, Verarbeitung komplexer landesweiter Daten, Shiny zur verständlichen Aufbereitung technischer Ergebnisse und Eigenverantwortung über den gesamten Analysezyklus.',
      },
    },
    tags: ['R', 'R Shiny'],
    cover: CRIME + 'Reporting-5.jpg',
    coverStyle: 'window',
    images: [CRIME + 'Reporting-1.gif', CRIME + 'Reporting-2.jpg', CRIME + 'Reporting-3.jpg', CRIME + 'Reporting-4.jpg', CRIME + 'Reporting-5.jpg'],
    link: 'https://mateo-esteban.shinyapps.io/Application/',
  },
  {
    slug: 'playlists-spotify',
    tone: 'vert',
    cat: { fr: 'Application data', en: 'Data app', es: 'Aplicación de datos', de: 'Daten-App' },
    title: {
      fr: 'Générateur de playlists Spotify (R Shiny)',
      en: 'Spotify Playlist Generator (R Shiny)',
      es: 'Generador de playlists Spotify (R Shiny)',
      de: 'Spotify-Playlist-Generator (R Shiny)',
    },
    desc: {
      fr: 'Application qui génère des playlists par décennie à partir de données Spotify, grâce à l’ACP et au K-means.',
      en: 'App that builds playlists by decade from Spotify data, using PCA and K-means.',
      es: 'Aplicación que crea playlists por década a partir de datos de Spotify, con ACP y K-means.',
      de: 'Anwendung, die aus Spotify-Daten Playlists nach Jahrzehnten erstellt – mit PCA und K-Means.',
    },
    details: {
      fr: {
        contexte: 'Projet universitaire mené en équipe : une application interactive qui génère automatiquement des playlists organisées par décennie. L’objectif était de restituer l’identité sonore de chaque époque tout en y intégrant des morceaux plus récents ou plus anciens aux caractéristiques musicales proches. Nous sommes partis d’un large jeu de données Spotify (titre, artiste, tempo, énergie, valence, popularité, genre, etc.).',
        methodologie: 'Préparation et nettoyage des données, puis Analyse en Composantes Principales (ACP) pour réduire la dimensionnalité et clustering K-means pour regrouper les morceaux aux caractéristiques sonores proches. Chaque cluster est associé à une décennie dominante et à une ambiance principale (énergique, joyeuse, calme…). L’interface s’inspire de l’ergonomie de Spotify.',
        resultats: 'Compétences mobilisées : méthodes statistiques (ACP, K-means), programmation en Python et en R, travail en équipe et gestion de projet. La conception de l’interface a aussi été l’occasion de travailler le design et l’accessibilité pour présenter des résultats techniques à un public non expert.',
      },
      en: {
        contexte: 'University team project: an interactive application that automatically generates playlists organised by decade. The goal was to capture the sound of each era while blending in newer or older tracks with similar musical characteristics. We started from a large Spotify dataset (title, artist, tempo, energy, valence, popularity, genre, etc.).',
        methodologie: 'Data preparation and cleaning, then Principal Component Analysis (PCA) to reduce dimensionality and K-means clustering to group tracks with similar audio features. Each cluster is linked to a dominant decade and a main mood (energetic, upbeat, calm…). The interface draws on Spotify’s own UX.',
        resultats: 'Skills applied: statistical methods (PCA, K-means), programming in Python and R, teamwork and project management. Designing the interface was also an opportunity to work on design and accessibility to present technical results to a non-expert audience.',
      },
      es: {
        contexte: 'Proyecto universitario en equipo: una aplicación interactiva que genera automáticamente playlists organizadas por década. El objetivo era captar el sonido de cada época e incluir canciones más recientes o más antiguas con características musicales similares. Partimos de un amplio conjunto de datos de Spotify (título, artista, tempo, energía, valencia, popularidad, género, etc.).',
        methodologie: 'Preparación y limpieza de los datos; después, ACP para reducir la dimensionalidad y clustering K-means para agrupar canciones con características sonoras similares. Cada clúster se asocia a una década dominante y a un ambiente principal (enérgico, alegre, tranquilo…). La interfaz se inspira en la de Spotify.',
        resultats: 'Competencias aplicadas: métodos estadísticos (ACP, K-means), programación en Python y R, trabajo en equipo y gestión de proyectos. El diseño de la interfaz permitió trabajar el diseño y la accesibilidad para presentar resultados técnicos a un público no experto.',
      },
      de: {
        contexte: 'Hochschulprojekt im Team: eine interaktive Anwendung, die automatisch nach Jahrzehnten geordnete Playlists erstellt. Ziel war es, den Klang jeder Epoche einzufangen und zugleich neuere oder ältere Titel mit ähnlichen musikalischen Merkmalen einzubeziehen. Grundlage war ein umfangreicher Spotify-Datensatz (Titel, Interpret, Tempo, Energie, Valenz, Popularität, Genre usw.).',
        methodologie: 'Aufbereitung und Bereinigung der Daten, anschließend Hauptkomponentenanalyse (PCA) zur Dimensionsreduktion und K-Means-Clustering, um klanglich ähnliche Titel zu gruppieren. Jeder Cluster ist einem dominanten Jahrzehnt und einer Grundstimmung (energiegeladen, fröhlich, ruhig …) zugeordnet. Die Oberfläche orientiert sich an Spotify.',
        resultats: 'Eingesetzte Kompetenzen: statistische Methoden (PCA, K-Means), Programmierung in Python und R, Teamarbeit und Projektmanagement. Bei der Gestaltung der Oberfläche ging es auch um Design und Barrierefreiheit, um technische Ergebnisse einem Laienpublikum zu vermitteln.',
      },
    },
    tags: ['R', 'R Shiny', 'Python'],
    cover: SPOTIFY + 'spotify-cover.jpg',
    coverStyle: 'window',
    images: [SPOTIFY + 'spotify-1.gif', SPOTIFY + 'spotify-2.jpg', SPOTIFY + 'spotify-3.jpg'],
    link: null,
  },
  {
    slug: 'epsm-charcot',
    tone: 'turquoise',
    cat: { fr: 'Santé', en: 'Healthcare', es: 'Salud', de: 'Gesundheit' },
    title: {
      fr: 'Datavisualisation pour l’EPSM Jean-Martin Charcot',
      en: 'Data Visualisation for EPSM Jean-Martin Charcot',
      es: 'Visualización de datos para el EPSM Jean-Martin Charcot',
      de: 'Datenvisualisierung für das EPSM Jean-Martin Charcot',
    },
    desc: {
      fr: 'Application de datavisualisation pour analyser les actes ambulatoires et les hospitalisations d’un établissement de santé mentale.',
      en: 'Data visualisation app for analysing outpatient care and hospital stays at a mental health hospital.',
      es: 'Aplicación de visualización de datos para analizar la actividad ambulatoria y las hospitalizaciones de un hospital de salud mental.',
      de: 'Visualisierungsanwendung zur Analyse ambulanter Leistungen und stationärer Aufenthalte einer psychiatrischen Klinik.',
    },
    details: {
      fr: {
        contexte: 'Projet universitaire réalisé en équipe pour l’EPSM Jean-Martin Charcot de Vannes : concevoir une application de datavisualisation pour faciliter la lecture et l’analyse de données médicales complexes (actes ambulatoires et hospitalisations) et appuyer la prise de décision des professionnels de santé.',
        methodologie: 'Application R Shiny utilisable sur un poste local de l’établissement. Traitement, typage et structuration en R de données issues de fichiers .txt complexes. Graphiques interactifs avec Plotly et système de filtres dynamiques multicritères (sexe, unité médicale, diagnostic, âge).',
        resultats: 'Compétences mobilisées : traitement et structuration de données en R, gestion de projet en équipe (rôles définis, planning de Gantt), soin apporté aux visualisations (infobulles, filtres lisibles) et prise en compte des contraintes réelles du commanditaire : confidentialité, nomenclature CIM-10, mise à jour annuelle.',
      },
      en: {
        contexte: 'University team project for EPSM Jean-Martin Charcot, a public mental health hospital in Vannes: design a data visualisation application that makes complex medical data (outpatient care and hospital stays) easier to read and analyse, to support healthcare professionals’ decisions.',
        methodologie: 'R Shiny application running on a local workstation at the hospital. Processing, typing and structuring of complex .txt files in R. Interactive charts with Plotly and a multi-criteria dynamic filter system (sex, medical unit, diagnosis, age).',
        resultats: 'Skills applied: data processing and structuring in R, team project management (defined roles, Gantt chart), careful visualisation design (tooltips, clear filters) and real client constraints: confidentiality, ICD-10 coding, annual updates.',
      },
      es: {
        contexte: 'Proyecto universitario en equipo para el EPSM Jean-Martin Charcot, hospital público de salud mental de Vannes: diseñar una aplicación de visualización que facilite la lectura y el análisis de datos médicos complejos (actos ambulatorios y hospitalizaciones) para apoyar la toma de decisiones de los profesionales sanitarios.',
        methodologie: 'Aplicación R Shiny utilizable en un puesto local del hospital. Tratamiento, tipado y estructuración en R de datos procedentes de ficheros .txt complejos. Gráficos interactivos con Plotly y filtros dinámicos multicriterio (sexo, unidad médica, diagnóstico, edad).',
        resultats: 'Competencias aplicadas: tratamiento y estructuración de datos en R, gestión de proyecto en equipo (roles definidos, diagrama de Gantt), cuidado de las visualizaciones (tooltips, filtros claros) y respeto de las restricciones reales del cliente: confidencialidad, codificación CIE-10, actualización anual.',
      },
      de: {
        contexte: 'Hochschulprojekt im Team für das EPSM Jean-Martin Charcot, eine öffentliche psychiatrische Klinik in Vannes: Entwicklung einer Visualisierungsanwendung, die komplexe medizinische Daten (ambulante Leistungen und stationäre Aufenthalte) leichter lesbar macht und die Entscheidungen des Fachpersonals unterstützt.',
        methodologie: 'R-Shiny-Anwendung, die lokal auf einem Arbeitsplatz der Klinik läuft. Verarbeitung, Typisierung und Strukturierung komplexer .txt-Dateien in R. Interaktive Diagramme mit Plotly und dynamische Mehrfachfilter (Geschlecht, Station, Diagnose, Alter).',
        resultats: 'Eingesetzte Kompetenzen: Datenverarbeitung und -strukturierung in R, Projektmanagement im Team (feste Rollen, Gantt-Diagramm), sorgfältige Visualisierungen (Tooltips, übersichtliche Filter) und Berücksichtigung realer Vorgaben des Auftraggebers: Vertraulichkeit, ICD-10-Kodierung, jährliche Aktualisierung.',
      },
    },
    tags: ['R', 'R Shiny', 'Plotly'],
    cover: 'images/epsm/image.jpg',
    coverStyle: 'frame',
    images: ['images/epsm/image.jpg'],
    link: null,
  },
  {
    slug: 'web-scraping-etl',
    tone: 'violet',
    cat: { fr: 'Collecte de données', en: 'Data collection', es: 'Recolección de datos', de: 'Datenerfassung' },
    title: {
      fr: 'Web scraping et pipeline ETL',
      en: 'Web Scraping and ETL Pipeline',
      es: 'Web scraping y pipeline ETL',
      de: 'Web-Scraping und ETL-Pipeline',
    },
    desc: {
      fr: 'Collecte automatisée de données produits sur Boulanger.com et chargement dans une base MySQL.',
      en: 'Automated collection of product data from Boulanger.com, loaded into a MySQL database.',
      es: 'Recolección automatizada de datos de productos de Boulanger.com y carga en una base MySQL.',
      de: 'Automatisierte Erfassung von Produktdaten von Boulanger.com und Speicherung in einer MySQL-Datenbank.',
    },
    details: {
      fr: {
        contexte: 'Objectif : collecter des données à jour sur des produits électroménagers du site Boulanger.com, les transformer selon des critères définis, puis les intégrer dans une base de données relationnelle MySQL à des fins d’analyse et de modélisation.',
        methodologie: 'Conception d’un pipeline ETL complet. Extraction en Python (BeautifulSoup et Selenium) des noms, prix et catégories, avec gestion de la navigation dynamique. Nettoyage et normalisation (suppression des doublons, conversion des prix) avant chargement automatique dans MySQL via pymysql.',
        resultats: 'Compétences mobilisées : web scraping avancé en Python (navigation dynamique, parsing HTML), conception de pipeline ETL, bases de données relationnelles, et prise en compte des contraintes éthiques (robots.txt, fréquence des requêtes).',
      },
      en: {
        contexte: 'Goal: collect up-to-date data on household appliances from Boulanger.com, transform it according to defined criteria, and load it into a MySQL relational database for analysis and modelling.',
        methodologie: 'End-to-end ETL pipeline. Extraction in Python (BeautifulSoup and Selenium) of product names, prices and categories, handling dynamic navigation. Cleaning and normalisation (duplicate removal, price conversion) before automated loading into MySQL with pymysql.',
        resultats: 'Skills applied: advanced web scraping in Python (dynamic navigation, HTML parsing), ETL pipeline design, relational databases, and ethical constraints (robots.txt, request rate).',
      },
      es: {
        contexte: 'Objetivo: recopilar datos actualizados de electrodomésticos del sitio Boulanger.com, transformarlos según criterios definidos e integrarlos en una base de datos relacional MySQL para su análisis y modelización.',
        methodologie: 'Pipeline ETL completo. Extracción en Python (BeautifulSoup y Selenium) de nombres, precios y categorías, gestionando la navegación dinámica. Limpieza y normalización (eliminación de duplicados, conversión de precios) antes de la carga automática en MySQL con pymysql.',
        resultats: 'Competencias aplicadas: web scraping avanzado en Python (navegación dinámica, parsing HTML), diseño de pipelines ETL, bases de datos relacionales y restricciones éticas (robots.txt, frecuencia de peticiones).',
      },
      de: {
        contexte: 'Ziel: aktuelle Daten zu Haushaltsgeräten von Boulanger.com erfassen, nach festgelegten Kriterien umwandeln und für Analyse und Modellierung in eine relationale MySQL-Datenbank laden.',
        methodologie: 'Vollständige ETL-Pipeline. Extraktion von Produktnamen, Preisen und Kategorien mit Python (BeautifulSoup und Selenium) einschließlich dynamischer Navigation. Bereinigung und Normalisierung (Entfernen von Duplikaten, Preisumrechnung) vor dem automatischen Laden in MySQL mit pymysql.',
        resultats: 'Eingesetzte Kompetenzen: fortgeschrittenes Web-Scraping mit Python (dynamische Navigation, HTML-Parsing), Entwurf von ETL-Pipelines, relationale Datenbanken und ethische Vorgaben (robots.txt, Anfragefrequenz).',
      },
    },
    tags: ['Python', 'BeautifulSoup', 'Selenium', 'MySQL'],
    cover: 'images/scraping/image.jpg',
    coverStyle: 'logo',
    images: ['images/scraping/image.jpg'],
    link: null,
  },
  {
    slug: 'stage-credit-agricole',
    tone: 'bleu',
    cat: { fr: 'Expérience professionnelle', en: 'Work experience', es: 'Experiencia profesional', de: 'Berufserfahrung' },
    title: {
      fr: 'Stage de data analyst — Crédit Agricole',
      en: 'Data Analyst Internship — Crédit Agricole',
      es: 'Prácticas de analista de datos — Crédit Agricole',
      de: 'Praktikum als Datenanalyst — Crédit Agricole',
    },
    desc: {
      fr: 'Contrôles de cohérence, recensement d’anomalies et traitement de données bancaires.',
      en: 'Consistency checks, anomaly tracking and banking data processing.',
      es: 'Controles de coherencia, registro de anomalías y tratamiento de datos bancarios.',
      de: 'Konsistenzprüfungen, Erfassung von Anomalien und Verarbeitung von Bankdaten.',
    },
    details: {
      fr: {
        contexte: 'Stage de data analyst au Crédit Agricole (avril à juin 2025), l’occasion de mettre en pratique mes compétences en science des données dans un environnement bancaire.',
        methodologie: 'Mise en place de contrôles de cohérence, recensement des anomalies et traitement de données bancaires.',
        resultats: 'Optimisation de processus internes et montée en compétences sur l’écosystème des données bancaires.',
      },
      en: {
        contexte: 'Data analyst internship at Crédit Agricole (April to June 2025), putting my data science skills into practice in a banking environment.',
        methodologie: 'Set up consistency checks, logged anomalies and processed banking data.',
        resultats: 'Improved internal processes and built up my knowledge of the banking data ecosystem.',
      },
      es: {
        contexte: 'Prácticas de analista de datos en Crédit Agricole (de abril a junio de 2025), para aplicar mis competencias en ciencia de datos en un entorno bancario.',
        methodologie: 'Implantación de controles de coherencia, registro de anomalías y tratamiento de datos bancarios.',
        resultats: 'Optimización de procesos internos y desarrollo de competencias en el ecosistema de datos bancarios.',
      },
      de: {
        contexte: 'Praktikum als Datenanalyst bei Crédit Agricole (April bis Juni 2025), um meine Data-Science-Kenntnisse im Bankumfeld anzuwenden.',
        methodologie: 'Einrichtung von Konsistenzprüfungen, Erfassung von Anomalien und Verarbeitung von Bankdaten.',
        resultats: 'Optimierung interner Prozesse und Ausbau meiner Kenntnisse im Bereich Bankdaten.',
      },
    },
    tags: [
      { fr: 'Qualité des données', en: 'Data quality', es: 'Calidad de datos', de: 'Datenqualität' },
      { fr: 'Données bancaires', en: 'Banking data', es: 'Datos bancarios', de: 'Bankdaten' },
    ],
    cover: 'images/stage/image.jpg',
    coverStyle: 'logo',
    images: ['images/stage/image.jpg'],
    link: null,
  },
  {
    slug: 'reporting-budgetaire',
    tone: 'jaune',
    cat: { fr: 'BI & finance', en: 'BI & finance', es: 'BI y finanzas', de: 'BI & Finanzen' },
    title: {
      fr: 'Reporting budgétaire mensuel',
      en: 'Monthly Budget Reporting',
      es: 'Informe presupuestario mensual',
      de: 'Monatliches Budget-Reporting',
    },
    desc: {
      fr: 'Suivi budgétaire automatisé : saisie sous Excel, macro VBA et tableau de bord Power BI.',
      en: 'Automated budget tracking: Excel data entry, a VBA macro and a Power BI dashboard.',
      es: 'Seguimiento presupuestario automatizado: registro en Excel, macro VBA y panel de Power BI.',
      de: 'Automatisierte Budgetüberwachung: Erfassung in Excel, VBA-Makro und Power-BI-Dashboard.',
    },
    details: {
      fr: {
        contexte: 'Projet personnel : un outil de reporting budgétaire mensuel qui alimente automatiquement un rapport Power BI à partir d’Excel et de macros VBA. Le besoin : disposer de visualisations plus claires et plus détaillées de ma situation financière que celles des applications bancaires.',
        methodologie: 'Les dépenses sont saisies dans un fichier Excel protégé par des contrôles d’intégrité (prévention des valeurs aberrantes). Une macro VBA transfère ensuite les données vers Power BI pour mettre à jour les tableaux de bord.',
        resultats: 'Le rapport Power BI comporte quatre onglets : dépenses détaillées, revenus, vue d’ensemble (revenus et dépenses mis en regard) et prévisions pour anticiper les flux à venir. L’outil permet un suivi précis et des décisions mieux informées.',
      },
      en: {
        contexte: 'Personal project: a monthly budget reporting tool that automatically feeds a Power BI report from Excel and VBA macros. The need: clearer, more detailed views of my finances than banking apps provide.',
        methodologie: 'Expenses are entered in an Excel file protected by integrity checks (preventing outliers). A VBA macro then transfers the data to Power BI to refresh the dashboards.',
        resultats: 'The Power BI report has four tabs: detailed expenses, income, overview (income versus expenses) and forecasts to anticipate future cash flows. The tool gives a precise view of my finances and supports better-informed decisions.',
      },
      es: {
        contexte: 'Proyecto personal: una herramienta de informes presupuestarios mensuales que alimenta automáticamente un informe de Power BI a partir de Excel y macros VBA. La necesidad: visualizaciones más claras y detalladas de mi situación financiera que las de las aplicaciones bancarias.',
        methodologie: 'Los gastos se registran en un archivo Excel protegido por controles de integridad (prevención de valores atípicos). Una macro VBA transfiere después los datos a Power BI para actualizar los paneles.',
        resultats: 'El informe de Power BI tiene cuatro pestañas: gastos detallados, ingresos, visión general (ingresos frente a gastos) y previsiones para anticipar los flujos futuros. La herramienta ofrece un seguimiento preciso y decisiones mejor informadas.',
      },
      de: {
        contexte: 'Persönliches Projekt: ein monatliches Budget-Reporting, das aus Excel und VBA-Makros automatisch einen Power-BI-Bericht speist. Der Anlass: klarere und detailliertere Auswertungen meiner Finanzen, als Banking-Apps sie bieten.',
        methodologie: 'Die Ausgaben werden in einer Excel-Datei mit Integritätsprüfungen erfasst (Vermeidung von Ausreißern). Ein VBA-Makro überträgt die Daten anschließend an Power BI und aktualisiert die Dashboards.',
        resultats: 'Der Power-BI-Bericht umfasst vier Registerkarten: detaillierte Ausgaben, Einnahmen, Gesamtübersicht (Einnahmen und Ausgaben im Vergleich) und Prognosen zu künftigen Zahlungsströmen. Das Tool ermöglicht eine genaue Verfolgung der Finanzen und fundiertere Entscheidungen.',
      },
    },
    tags: ['Excel', 'VBA', 'Power BI'],
    cover: 'images/budget/image.jpg',
    coverStyle: 'window',
    hidden: true,
    images: ['images/budget/image.jpg'],
    link: null,
  },
];
