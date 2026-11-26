import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart,
  BrainCircuit,
  Briefcase,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code2,
  Database,
  FileType,
  FlaskConical,
  GitBranch,
  Github,
  Globe,
  GraduationCap,
  Layout,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Moon,
  Presentation,
  RefreshCw,
  Search,
  Sun,
  Terminal,
  TrendingUp,
  Workflow,
  X,
} from 'lucide-react';
import { LANGS, contact, experiences, projects, skillCategories, translations } from './data';

// --- Couleurs ---
// Le bleu est l'accent de l'interface ; les autres teintes ne servent qu'aux pastilles
// des projets et aux icônes des compétences. Classes écrites en entier pour Tailwind.
const TONES = {
  bleu: { dot: 'bg-bleu', ink: 'text-bleu-ink', soft: 'bg-bleu/10' },
  rouge: { dot: 'bg-rouge', ink: 'text-rouge-ink', soft: 'bg-rouge/10' },
  jaune: { dot: 'bg-jaune', ink: 'text-jaune-ink', soft: 'bg-jaune/15' },
  vert: { dot: 'bg-vert', ink: 'text-vert-ink', soft: 'bg-vert/10' },
  violet: { dot: 'bg-violet', ink: 'text-violet-ink', soft: 'bg-violet/10' },
  turquoise: { dot: 'bg-turquoise', ink: 'text-turquoise-ink', soft: 'bg-turquoise/10' },
  orange: { dot: 'bg-orange', ink: 'text-orange-ink', soft: 'bg-orange/10' },
};

// --- Icônes personnalisées (reprises du portfolio d'origine) ---

const RIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M4.5,4.5v15h3.75V15h2.25l3.75,4.5h4.5l-4.5-5.25c1.5-0.75,2.25-2.25,2.25-3.75c0-1.5-0.75-3-2.25-3.75 c-0.75-0.375-1.5-0.75-2.25-0.75H4.5z M8.25,7.125h2.25c0.75,0,1.5,0.375,1.5,1.125c0,0.75-0.75,1.125-1.5,1.125H8.25V7.125z" />
  </svg>
);

const PowerBiIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M6 14h4v7H6zm5-5h4v12h-4zm5-6h4v18h-4z" />
  </svg>
);

const ExcelIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
  </svg>
);

const SapIcon = ({ size = 18, className = '' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
    <text x="50%" y="50%" dy="1" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="800" letterSpacing="-0.5">SAP</text>
  </svg>
);

const SKILL_ICONS = {
  code: Code2,
  r: RIcon,
  database: Database,
  terminal: Terminal,
  file: FileType,
  layout: Layout,
  monitor: Monitor,
  powerbi: PowerBiIcon,
  linechart: LineChart,
  excel: ExcelIcon,
  sap: SapIcon,
  git: GitBranch,
  workflow: Workflow,
  brain: BrainCircuit,
  barchart: BarChart,
  trend: TrendingUp,
  flask: FlaskConical,
  search: Search,
  globe: Globe,
  presentation: Presentation,
  agile: RefreshCw,
};

const FACT_ICONS = { school: GraduationCap, work: Briefcase, place: MapPin };
const NAV_ORDER = ['projects', 'experience', 'skills', 'contact'];
const SPY_IDS = ['top', ...NAV_ORDER];

// --- Utilitaires ---

const tr = (value, lang) => (value && typeof value === 'object' ? value[lang] ?? value.fr : value);

const storage = {
  get(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem(key, value); } catch { /* stockage indisponible : on ignore */ }
  },
};

// Routage par ancre : "#/projet/<slug>" ouvre une fiche projet, "#<id>" vise une section.
const PROJECT_PREFIX = '#/projet/';
const projectHref = (p) => PROJECT_PREFIX + p.slug;

const parseHash = () => {
  let hash = window.location.hash || '';
  try { hash = decodeURIComponent(hash); } catch { /* ancre mal formée */ }
  if (hash.startsWith(PROJECT_PREFIX)) {
    const slug = hash.slice(PROJECT_PREFIX.length);
    return { project: projects.find((p) => p.slug === slug) ?? null, section: null };
  }
  return { project: null, section: hash.length > 1 ? hash.slice(1) : null };
};

// Section visible à l'écran, pour la signaler dans le menu.
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (!enabled) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    SPY_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setActive('contact');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [enabled]);
  return enabled ? active : 'projects';
}

// Parallaxe : chaque élément [data-parallax="vitesse"] glisse verticalement selon la position
// de son conteneur dans l'écran (vitesse négative = plus lent que la page, effet de profondeur).
// [data-scale] ajoute un zoom pour que l'image ne laisse pas de bord vide en bougeant.
function useParallax(viewKey) {
  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const box = (el.parentElement ?? el).getBoundingClientRect();
        if (box.bottom < -200 || box.top > vh + 200) return;
        const progress = Math.max(-0.65, Math.min(0.65, (box.top + box.height / 2 - vh / 2) / vh));
        const shift = (progress * Number(el.dataset.parallax || 0)).toFixed(1);
        const scale = el.dataset.scale ? ` scale(${el.dataset.scale})` : '';
        el.style.transform = `translate3d(0, ${shift}px, 0)${scale}`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [viewKey]);
}

// Apparition douce des blocs [.reveal] quand ils entrent dans l'écran.
function useReveal(viewKey) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target);
        }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [viewKey]);
}

// Bulle de la frise ; celle d'une étape en cours émet une onde.
function Bubble({ current, className = '' }) {
  return (
    <span aria-hidden="true" className={`grid h-4 w-4 place-items-center ${className}`}>
      {current && <span className="absolute h-4 w-4 rounded-full bg-bleu motion-safe:animate-bubble" />}
      <span
        className={`relative h-4 w-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${current ? 'border-bleu bg-bleu' : 'border-ink/25 bg-paper group-hover:border-bleu'}`}
      />
    </span>
  );
}

// --- En-tête ---

function Header({ t, lang, onLang, dark, onToggleTheme, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const close = () => setOpen(false);
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    window.addEventListener('hashchange', close);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('hashchange', close);
    };
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 border-b bg-paper/90 backdrop-blur transition-colors ${scrolled || open ? 'border-line' : 'border-transparent'}`}>
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5 font-display text-[17px] font-bold tracking-tight">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-bleu to-violet text-[13px] font-bold text-white shadow-md shadow-bleu/30 transition-transform group-hover:rotate-6">
            ME
          </span>
          Matéo Esteban<span className="text-bleu-ink">.</span>
        </a>

        <nav aria-label={t.ui.nav} className="hidden items-center gap-7 md:flex">
          {NAV_ORDER.map((id) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={on ? 'true' : undefined}
                className={`relative py-2 text-sm font-semibold transition-colors ${on ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {t.nav[id]}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-bleu transition-opacity ${on ? 'opacity-100' : 'opacity-0'}`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <label className="relative">
            <span className="sr-only">{t.ui.language}</span>
            <select
              value={lang}
              onChange={(e) => onLang(e.target.value)}
              className="cursor-pointer appearance-none rounded-lg bg-transparent py-2 pl-2.5 pr-7 text-sm font-semibold text-muted transition-colors hover:bg-soft hover:text-ink"
            >
              {LANGS.map((l) => <option key={l} value={l}>{l.toUpperCase()}</option>)}
            </select>
            <ChevronDown size={14} aria-hidden="true" className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted" />
          </label>
          <button type="button" onClick={onToggleTheme} aria-label={t.ui.theme} className="icon-btn">
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.ui.close : t.ui.menu}
            className="icon-btn md:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={t.ui.nav} className="wrap grid border-t border-line pb-3 pt-2 md:hidden">
          {NAV_ORDER.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-line py-3 font-semibold last:border-b-0">
              {t.nav[id]}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

// --- Accueil ---

// Bandeau défilant des outils maîtrisés.
const TOOL_NAMES = [...new Set(skillCategories.flatMap((c) => [...c.items, ...(c.extra ?? [])]).map((i) => tr(i.name, 'fr')))];

function ToolMarquee() {
  const row = [...TOOL_NAMES, ...TOOL_NAMES];
  return (
    <div aria-hidden="true" className="marquee-mask mt-12 overflow-hidden md:mt-16">
      <div className="flex w-max gap-3 motion-safe:animate-marquee">
        {row.map((name, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-line bg-surface/70 px-4 py-2 font-display text-sm font-medium text-muted backdrop-blur">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="relative scroll-mt-16 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora-blob -left-32 -top-40 h-[420px] w-[420px] bg-bleu" />
        <div className="aurora-blob right-[-10%] top-10 h-[380px] w-[380px] bg-violet [animation-delay:-6s]" />
        <div className="aurora-blob bottom-0 left-1/3 h-[300px] w-[300px] bg-turquoise [animation-delay:-12s]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-16 h-[780px]">
        <div data-parallax="-140" className="bg-dots h-full w-full" />
      </div>
      <div className="wrap relative pb-16 pt-10 md:pb-24 md:pt-20">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-sm font-medium text-muted shadow-sm backdrop-blur">
            <span aria-hidden="true" className="relative grid h-2 w-2 place-items-center">
              <span className="absolute h-2 w-2 rounded-full bg-vert motion-safe:animate-bubble" />
              <span className="relative h-2 w-2 rounded-full bg-vert" />
            </span>
            {t.hero.status}
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.5rem]">
            Matéo <span className="text-gradient">Esteban</span>
          </h1>
          <p className="mt-4 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-ink/80 sm:text-3xl">
            <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-bleu to-violet" />
            {t.hero.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t.hero.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary group">
              {t.hero.ctaProjects} <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn btn-secondary">{t.hero.ctaContact}</a>
            <span className="ml-1 flex items-center gap-1">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn"><Linkedin size={19} /></a>
              <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn"><Github size={19} /></a>
            </span>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div data-parallax="-60" className="relative w-fit">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-bleu via-violet to-turquoise opacity-60 blur-2xl" />
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-bleu via-violet to-turquoise p-[3px] shadow-2xl">
              <img
                src="images/portrait/portrait.jpg"
                alt={t.hero.portraitAlt}
                width="476"
                height="518"
                className="w-36 rounded-[1.6rem] object-cover sm:w-44 md:w-72 lg:w-80"
              />
            </div>
            <div className="absolute -bottom-4 -left-6 hidden items-center gap-2.5 rounded-xl border border-line bg-surface/90 px-3.5 py-2.5 shadow-xl backdrop-blur motion-safe:animate-float md:flex">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-bleu/10 text-bleu-ink"><Database size={16} aria-hidden="true" /></span>
              <span className="font-display text-sm font-semibold">Data Engineering</span>
            </div>
            <div className="absolute -right-5 top-8 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 shadow-xl backdrop-blur motion-safe:animate-float [animation-delay:-3s] md:flex">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-violet/10 text-violet-ink"><BarChart size={15} aria-hidden="true" /></span>
              <span className="font-display text-sm font-semibold">Power BI · R · Python</span>
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-14 grid overflow-hidden rounded-2xl border border-line bg-surface/70 shadow-sm backdrop-blur sm:grid-cols-3 md:mt-24">
        {t.facts.map((f, i) => {
          const Icon = FACT_ICONS[f.icon];
          return (
            <div key={f.label} className={`flex gap-4 p-6 ${i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''}`}>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-bleu/15 to-violet/15 text-bleu-ink">
                <Icon size={19} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-0.5 font-display font-semibold">{f.value}</dd>
                <dd className="text-sm text-muted">{f.sub}</dd>
              </div>
            </div>
          );
        })}
      </dl>
      <ToolMarquee />
      </div>
    </section>
  );
}

function Section({ id, title, intro, soft = false, children }) {
  const n = String(NAV_ORDER.indexOf(id) + 1).padStart(2, '0');
  return (
    <section id={id} className={`relative scroll-mt-16 border-t border-line ${soft ? 'bg-soft' : ''}`}>
      <div className="wrap py-20 md:py-28">
        <header className="reveal mb-12 md:mb-14">
          <span className="eyebrow"><span className="text-muted">{n}</span><span aria-hidden="true" className="h-px w-8 bg-bleu/50" />{title}</span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-[-0.03em] md:text-5xl">{title}</h2>
          {intro && <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({ project, t, lang, index }) {
  const c = TONES[project.tone];
  const contain = project.fit === 'contain';
  return (
    <a href={projectHref(project)} className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1">
      <div className={`relative aspect-[16/10] overflow-hidden border-b border-line ${contain ? 'bg-white' : 'bg-soft'}`}>
        <span className="absolute left-3 top-3 z-10 rounded-full bg-night/75 px-2.5 py-1 font-display text-xs font-semibold text-white backdrop-blur">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span aria-hidden="true" className="absolute right-3 top-3 z-10 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-white text-night opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </span>
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div data-parallax="-20" data-scale="1.12" className={`h-full w-full scale-[1.12] will-change-transform ${contain ? 'p-8' : ''}`}>
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.06] ${contain ? 'object-contain' : 'object-cover object-top'}`}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className={`inline-flex items-center gap-2 text-sm font-semibold ${c.ink}`}>
          <span aria-hidden="true" className={`h-2 w-2 rounded-full ${c.dot}`} />
          {tr(project.cat, lang)}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight">{tr(project.title, lang)}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{tr(project.desc, lang)}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => <li key={tr(tag, 'fr')} className="chip">{tr(tag, lang)}</li>)}
        </ul>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-bleu-ink">
          {t.projects.cta}
          <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

function Projects({ t, lang }) {
  return (
    <Section id="projects" title={t.projects.title} intro={t.projects.intro} soft>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={p.slug} className="reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
            <ProjectCard project={p} t={t} lang={lang} index={i} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function Timeline({ items, t, lang }) {
  return (
    <ol>
      {items.map((exp, i) => {
        const project = exp.project && projects.find((p) => p.slug === exp.project);
        const isLast = i === items.length - 1;
        return (
          <li key={exp.org} className="reveal group relative pb-10 pl-9 last:pb-0">
            {!isLast && <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-6 w-0.5 bg-line" />}
            <Bubble current={exp.current} className="absolute left-0 top-1" />
            <p className={`text-sm font-semibold ${exp.current ? 'text-bleu-ink' : 'text-muted'}`}>{tr(exp.period, lang)}</p>
            <h4 className="mt-1 font-display text-xl font-bold tracking-tight">{exp.org}</h4>
            <p className="font-medium text-muted">{tr(exp.role, lang)}</p>
            <p className="mt-2.5 max-w-prose leading-relaxed">{tr(exp.desc, lang)}</p>
            {project && (
              <a href={projectHref(project)} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-bleu-ink hover:underline">
                {t.experience.viewDetail} <ArrowRight size={15} aria-hidden="true" />
              </a>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function Experience({ t, lang }) {
  const columns = [
    { key: 'work', Icon: Briefcase, label: t.experience.work, items: experiences.work },
    { key: 'school', Icon: GraduationCap, label: t.experience.school, items: experiences.school },
  ];
  return (
    <Section id="experience" title={t.experience.title} intro={t.experience.intro}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {columns.map((col) => {
          const { Icon } = col;
          return (
            <div key={col.key}>
              <h3 className="mb-8 flex items-center gap-3 border-b border-line pb-4 font-display text-lg font-bold">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-bleu/15 to-violet/15 text-bleu-ink">
                  <Icon size={18} aria-hidden="true" />
                </span>
                {col.label}
              </h3>
              <Timeline items={col.items} t={t} lang={lang} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function SkillRow({ item, tone, lang }) {
  const Icon = SKILL_ICONS[item.icon];
  return (
    <li className="flex items-center gap-3">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${tone.soft} ${tone.ink}`}>
        <Icon size={18} aria-hidden="true" />
      </span>
      <span className="text-[15px] font-medium">{tr(item.name, lang)}</span>
    </li>
  );
}

function SkillCard({ cat, t, lang }) {
  const [open, setOpen] = useState(false);
  const tone = TONES[cat.tone];
  const extra = cat.extra ?? [];
  return (
    <div className="card reveal flex flex-col overflow-hidden p-6">
      <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${tone.dot}`} />
      <h3 className={`font-display text-lg font-bold ${tone.ink}`}>{tr(cat.title, lang)}</h3>
      <ul className="mt-5 space-y-3">
        {cat.items.map((item) => <SkillRow key={tr(item.name, 'fr')} item={item} tone={tone} lang={lang} />)}
      </ul>
      {extra.length > 0 && (
        <>
          <div id={`skills-${cat.id}`} className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <ul className="space-y-3 pt-3" inert={!open ? true : undefined}>
                {extra.map((item) => <SkillRow key={tr(item.name, 'fr')} item={item} tone={tone} lang={lang} />)}
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={`skills-${cat.id}`}
            className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-semibold text-muted transition-colors hover:text-ink"
          >
            {open ? t.skills.showLess : `${t.skills.showMore} (${extra.length})`}
            <ChevronDown size={16} aria-hidden="true" className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>
        </>
      )}
    </div>
  );
}

function Skills({ t, lang }) {
  return (
    <Section id="skills" title={t.skills.title} intro={t.skills.intro} soft>
      <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat) => <SkillCard key={cat.id} cat={cat} t={t} lang={lang} />)}
      </div>
    </Section>
  );
}

function Contact({ t }) {
  const rows = [
    { key: 'email', Icon: Mail, label: t.contact.email, value: contact.email, href: contact.emailHref },
    { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn', value: 'Matéo Esteban', href: contact.linkedin },
    { key: 'github', Icon: Github, label: 'GitHub', value: 'mat-esteban', href: contact.github },
  ];
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="wrap py-20 md:py-28">
        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-night px-6 py-14 text-white shadow-2xl sm:px-12 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-bleu opacity-40 blur-3xl" />
            <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-violet opacity-40 blur-3xl" />
          </div>
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                04<span aria-hidden="true" className="h-px w-8 bg-white/40" />{t.contact.title}
              </span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.03em] md:text-6xl">
                {t.contact.title}<span className="text-bleu-ink">.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">{t.contact.text}</p>
              <a href={contact.emailHref} target="_blank" rel="noreferrer" className="btn mt-8 bg-white text-night shadow-lg hover:-translate-y-0.5">
                <Mail size={17} aria-hidden="true" /> {contact.email}
              </a>
            </div>
            <div className="grid gap-3">
              {rows.map((row) => {
                const { Icon } = row;
                return (
                  <a
                    key={row.key}
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-bleu to-violet text-white">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-white/60">{row.label}</span>
                      <span className="block font-semibold [overflow-wrap:anywhere]">{row.value}</span>
                    </span>
                    <ArrowUpRight size={18} aria-hidden="true" className="shrink-0 text-white/60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Fiche projet ---

function Gallery({ images, title, t }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const count = images.length;
  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    if (!zoomed) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setZoomed(false);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [zoomed, go]);

  if (count === 0) return null;
  const caption = t.detail.imageOf(index + 1, count);

  return (
    <div className="mt-10">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-soft shadow-xl shadow-black/5">
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={`${t.detail.enlarge} — ${caption}`}
          className="flex aspect-[16/9] w-full cursor-zoom-in items-center justify-center p-3 sm:p-6"
        >
          <img src={images[index]} alt={`${title} — ${caption}`} className="max-h-full max-w-full rounded-md object-contain" />
        </button>
        {count > 1 && (
          <>
            <button type="button" onClick={() => go(-1)} aria-label={t.detail.prevImage} className="gallery-arrow left-3">
              <ChevronLeft size={20} />
            </button>
            <button type="button" onClick={() => go(1)} aria-label={t.detail.nextImage} className="gallery-arrow right-3">
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto p-1">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={t.detail.imageOf(i + 1, count)}
                aria-current={i === index}
                className={`h-12 w-20 shrink-0 overflow-hidden rounded-md border border-line transition ${i === index ? 'ring-2 ring-bleu ring-offset-2 ring-offset-paper' : 'opacity-60 hover:opacity-100'}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
          <p className="shrink-0 text-sm font-medium text-muted">{index + 1} / {count}</p>
        </div>
      )}

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-10"
          onClick={() => setZoomed(false)}
        >
          <img src={images[index]} alt={`${title} — ${caption}`} className="max-h-full max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            autoFocus
            onClick={() => setZoomed(false)}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            <X size={16} aria-hidden="true" /> {t.ui.close}
          </button>
          {count > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label={t.detail.prevImage} className="lightbox-arrow left-4">
                <ChevronLeft size={22} />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label={t.detail.nextImage} className="lightbox-arrow right-4">
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectDetail({ project, t, lang }) {
  const c = TONES[project.tone];
  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const d = project.details[lang] ?? project.details.fr;
  const title = tr(project.title, lang);
  const steps = [
    [t.detail.context, d.contexte],
    [t.detail.methodology, d.methodologie],
    [t.detail.results, d.resultats],
  ];

  return (
    <article className="wrap pb-20 pt-8 md:pt-12">
      <a href="#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
        <ArrowLeft size={16} aria-hidden="true" /> {t.detail.back}
      </a>

      <header className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <span className={`inline-flex items-center gap-2 text-sm font-semibold ${c.ink}`}>
            <span aria-hidden="true" className={`h-2 w-2 rounded-full ${c.dot}`} />
            {tr(project.cat, lang)}
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] md:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{tr(project.desc, lang)}</p>
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary justify-self-start">
            {t.detail.openApp} <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        )}
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm font-medium text-muted">{t.detail.tools}</span>
        {project.tags.map((tag) => <span key={tr(tag, 'fr')} className="chip">{tr(tag, lang)}</span>)}
      </div>

      <Gallery key={project.slug} images={project.images} title={title} t={t} />

      <ol className="mt-14 space-y-10 md:mt-16">
        {steps.map(([label, text], n) => (
          <li key={label} className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 gap-y-3 md:grid-cols-[40px_200px_minmax(0,1fr)] md:gap-x-6">
            {n < steps.length - 1 && (
              <span aria-hidden="true" className="absolute -bottom-10 left-[19px] top-11 w-0.5 bg-line" />
            )}
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-bleu to-violet font-display font-bold text-white shadow-md shadow-bleu/30">{n + 1}</span>
            <h2 className="self-center font-display text-xl font-bold tracking-tight md:self-start md:pt-1.5 md:text-2xl">{label}</h2>
            <p className="col-start-2 max-w-prose whitespace-pre-line text-[17px] leading-[1.75] md:col-start-3 md:row-start-1">{text}</p>
          </li>
        ))}
      </ol>

      <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {[[prev, t.detail.prev], [next, t.detail.next]].map(([p, label], k) => (
          <a
            key={label}
            href={projectHref(p)}
            className={`card group flex flex-col p-5 hover:-translate-y-0.5 ${k === 1 ? 'sm:items-end sm:text-right' : ''}`}
          >
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted">
              {k === 0 && <ArrowLeft size={15} aria-hidden="true" />} {label} {k === 1 && <ArrowRight size={15} aria-hidden="true" />}
            </span>
            <span className="mt-2 inline-flex items-center gap-2.5 font-bold">
              <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${TONES[p.tone].dot}`} />
              {tr(p.title, lang)}
            </span>
          </a>
        ))}
      </nav>
    </article>
  );
}

// --- Application ---

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = storage.get('lang');
    return LANGS.includes(saved) ? saved : 'fr';
  });
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [route, setRoute] = useState(parseHash);
  const t = translations[lang];
  const project = route.project;
  const active = useActiveSection(!project);
  useParallax(project ? project.slug : 'home');
  useReveal(`${project ? project.slug : 'home'}-${lang}`);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Positionnement après un changement de vue (fiche projet <-> accueil).
  const previousProject = useRef(project);
  const firstRender = useRef(true);
  useEffect(() => {
    const was = previousProject.current;
    const first = firstRender.current;
    previousProject.current = route.project;
    firstRender.current = false;

    if (route.project) {
      if (route.project !== was || first) window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    if (first || was) {
      const target = document.getElementById(route.section ?? (was ? 'projects' : ''));
      if (target) target.scrollIntoView({ behavior: 'instant' });
      else if (was) window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [route]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = project ? `${tr(project.title, lang)} — Matéo Esteban` : t.meta.title;
  }, [lang, project, t]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const changeLang = (l) => {
    setLang(l);
    storage.set('lang', l);
  };

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    storage.set('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen">
      <Header t={t} lang={lang} onLang={changeLang} dark={dark} onToggleTheme={toggleTheme} active={active} />
      <main>
        {project ? (
          <ProjectDetail project={project} t={t} lang={lang} />
        ) : (
          <>
            <Hero t={t} />
            <Projects t={t} lang={lang} />
            <Experience t={t} lang={lang} />
            <Skills t={t} lang={lang} />
            <Contact t={t} />
          </>
        )}
      </main>
      <footer className="border-t border-line">
        <div className="wrap flex flex-col gap-1 py-8 text-sm text-muted sm:flex-row sm:justify-between">
          <p className="font-display font-semibold text-ink">© {new Date().getFullYear()} Matéo Esteban<span className="text-bleu-ink">.</span></p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
