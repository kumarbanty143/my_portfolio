import { useEffect, useRef, useState } from 'react';
import './index.css';

const links = {
  email: 'mailto:himanshukumarpatra.dev@gmail.com',
  github: 'https://github.com/kumarbanty143',
  linkedin: 'https://www.linkedin.com/in/himanshu-kumar-patra-sde/',
  instagram: 'https://www.instagram.com/himanshupatra_/',
  facebook: 'https://www.facebook.com/himanshukumar.patra.5/',
  leetcode: 'https://leetcode.com/u/himanshukumar2910/',
  resume: '/Himanshu_Kumar_Patra_Resume.pdf',
};

type Project = {
  number: string; title: string; stack: string; description: string;
  repository: string; status: string; highlights: string[];
  visual: { intro: string; groups: { label: string; items: string[] }[]; journey: string[]; footer: string };
};

const projects: Project[] = [
  {
    number: '01', title: 'Nexus Cloud Commerce', stack: 'Java / Spring Boot / Kafka / MySQL',
    description: 'A microservices learning project focused on safer events, service reliability, and regression tests.',
    repository: 'https://github.com/kumarbanty143/nexus-cloud-commerce',
    status: 'Tutorial-guided learning project · Active development',
    highlights: [
      'Built service registration and inter-service communication with Eureka and OpenFeign across a Java 21 / Spring Boot architecture.',
      'Added Kafka-driven order, inventory, and payment event flows with explicit identity, quantity, and stock handling.',
      'Implemented JWT-based security and signed Razorpay webhook handling with duplicate, stale-failure, and invalid-signature test coverage.',
      'Documented the project honestly as a learning system; payment orchestration and distributed consistency remain active areas of improvement.',
    ],
    visual: {
      intro: 'A service-oriented commerce system with synchronous APIs, asynchronous events, and independent persistence.',
      groups: [
        { label: 'Commerce flow', items: ['API gateway', 'Order', 'Inventory', 'Payment'] },
        { label: 'Supporting services', items: ['User', 'Product', 'Cart', 'Shipping', 'Notification'] },
        { label: 'Platform', items: ['Eureka', 'Kafka', 'MySQL', 'Zipkin'] },
      ],
      journey: ['Client', 'Gateway + JWT', 'Service API', 'Kafka event', 'State update'],
      footer: '9 services · event-driven core · regression-tested paths',
    },
  },
  {
    number: '02', title: 'Splitwise MVP', stack: 'Node.js / Express / Sequelize / SQLite',
    description: 'A shared-expense backend with flexible splits, balance netting, reports, and API-level tests.',
    repository: 'https://github.com/kumarbanty143/splitwise-mvp',
    status: 'Backend MVP · Zero-setup local development',
    highlights: [
      'Designed expenses and expense shares to support unequal splits, multiple payers, and per-user paid and owed amounts.',
      'Built APIs for users, expenses, net balances, and monthly reports with soft deletion and currency-aware accounting.',
      'Handled rounding remainders deterministically so every split resolves to the original expense total.',
      'Added Jest and Supertest coverage plus a monthly-report job with an Ethereal email preview workflow.',
    ],
    visual: {
      intro: 'A compact expense engine that records who paid, calculates who owes, and turns transactions into useful reports.',
      groups: [
        { label: 'API surface', items: ['Users', 'Expenses', 'Balances', 'Reports'] },
        { label: 'Data model', items: ['users', 'expenses', 'expense_shares'] },
        { label: 'Reliability', items: ['JWT', 'Soft delete', 'Jest + Supertest', 'Monthly cron'] },
      ],
      journey: ['Expense', 'Paid amounts', 'Share amounts', 'Net balance', 'Report'],
      footer: 'Unequal splits · multiple payers · deterministic rounding',
    },
  },
  {
    number: '03', title: 'Personal Portfolio', stack: 'React / TypeScript / Vite',
    description: 'A fast, responsive portfolio built around clear engineering evidence and thoughtful storytelling.',
    repository: 'https://github.com/kumarbanty143/my_portfolio',
    status: 'Personal site · Designed and built for mobile first',
    highlights: [
      'Rebuilt an older template as a focused editorial experience with an original responsive design system.',
      'Structured work as compact case studies so recruiters can assess context, technology, and engineering decisions quickly.',
      'Optimized personal photography and video for the web while preserving a cinematic visual identity.',
      'Built accessible navigation, keyboard-friendly project details, and reduced-motion support.',
    ],
    visual: {
      intro: 'An editorial, recruiter-focused site designed to communicate engineering depth without losing personality.',
      groups: [
        { label: 'Experience', items: ['Hero', 'Work history', 'Case studies', 'Beyond code'] },
        { label: 'Frontend', items: ['React 19', 'TypeScript', 'Vite'] },
        { label: 'Delivery', items: ['Responsive CSS', 'Accessible dialog', 'Optimized media', 'Reduced motion'] },
      ],
      journey: ['Land', 'Scan proof', 'Open case study', 'View code', 'Connect'],
      footer: 'Fast navigation · honest project context · mobile-first',
    },
  },
];

const vedakHighlights = [
  "Owned development of Vedak's expert-facing portal using React, Node.js/Express, and MySQL, covering onboarding, profiles, opportunity applications, compliance, and invoice and payment-detail submission.",
  'Built the Zoho Books billing integration end to end, connecting client billing requests and consultation calls with estimates, invoices, payment-status updates, and reminders through transactional webhook processing.',
  'Developed operational dashboards and reports for EOD activity, team performance, quotas, CRM activity, and expert payouts, with drill-down views, CSV exports, and Redis caching for quota reports.',
  'Built AI-assisted project creation that converts client emails into structured project and subproject drafts with extracted requirements, confidence indicators, and editable suggestions for team review.',
  'Implemented voice-analysis workflows for employee training and call-recording review, persisting transcripts and evaluations while surfacing summaries, conversations, and speech metrics in reporting interfaces.',
  'Built Daily Workspace planning and assignment workflows across React and Node.js, synchronizing project targets with daily work records and tracking activity across team members.',
];

const productionSkills = ['Node.js', 'TypeScript', 'React', 'MySQL', 'Redis', 'REST APIs', 'AWS'];
const learningSkills = ['Java', 'Spring Boot', 'Kafka', 'Docker'];

function Arrow({ direction = 'right' }: { direction?: 'right' | 'down' }) {
  return <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">{direction === 'right'
    ? <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    : <path d="M8 3v9m-3.5-3.5L8 12l3.5-3.5" />}</svg>;
}

function CloseIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3 3 10 10M13 3 3 13" /></svg>;
}

function Header() {
  return <header className="site-header">
    <a className="wordmark" href="#home">Himanshu Kumar Patra</a>
    <nav aria-label="Primary navigation"><a href="#experience">Experience</a><a href="#work">Work</a><a href="#beyond">About</a><a href="#contact">Contact</a></nav>
    <a className="resume-link" href={links.resume} target="_blank" rel="noreferrer">Resume <Arrow /></a>
  </header>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy">
      <p className="availability">Bengaluru · Open to backend and full-stack roles</p>
      <h1>I build reliable products from API to interface.</h1>
      <p className="hero-summary">Backend-focused full-stack engineer with nearly 2 years of experience in Node.js, TypeScript, React, MySQL, and Redis—now building with Java and Spring Boot.</p>
      <div className="hero-actions"><a className="button button-primary" href="#experience">View experience <Arrow /></a><a className="button button-quiet" href={links.email}>Get in touch <Arrow /></a></div>
    </div>
    <figure className="hero-media">
      <img src="/media/hero-cinematic.jpg" alt="Himanshu looking across a mountain landscape at golden hour" width="1672" height="942" fetchPriority="high" />
      <figcaption>Better systems.<br />Brighter journeys.</figcaption>
    </figure>
    <p className="hero-aside">Same curiosity<br />in code and<br />in the mountains.</p>
  </section>;
}

function SectionHeading({ title, note, count }: { title: string; note: string; count?: string }) {
  return <div className="section-heading"><h2>{title}</h2><span>{note}</span>{count ? <span className="section-count">{count}</span> : null}</div>;
}

function Experience() {
  return <section className="section experience" id="experience">
    <SectionHeading title="Experience" note="Production ownership from backend to interface" />
    <article className="experience-entry experience-primary">
      <header><span className="experience-index">01</span><div><h3>Vedak</h3><p>Full Stack Developer</p></div><time>Jan 2025 — Present</time></header>
      <ol className="experience-points">{vedakHighlights.map((item) => <li key={item}>{item}</li>)}</ol>
    </article>
    <article className="experience-entry experience-secondary">
      <header><span className="experience-index">02</span><div><h3>Zigbee Student Developers’ Club</h3><p>Full Stack Developer · Volunteer</p></div><time>Jun 2024 — Nov 2024</time></header>
      <p className="experience-summary">Built and launched an alumni portal using React, TypeScript, Node.js, Express, and MySQL. Implemented registration, JWT authentication, profile management, and a searchable directory, and coordinated a student team from requirements through launch.</p>
    </article>
  </section>;
}

function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  return <dialog ref={dialogRef} className="project-dialog" aria-labelledby={project ? `project-title-${project.number}` : undefined} onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    {project ? <div className="project-detail">
      <button className="dialog-close" type="button" onClick={onClose} aria-label="Close project details"><CloseIcon /></button>
      <div className="detail-copy">
        <span className="detail-number">Project {project.number}</span><h2 id={`project-title-${project.number}`}>{project.title}</h2><p className="detail-stack">{project.stack}</p><p className="detail-status">{project.status}</p>
        <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        <a className="button button-primary" href={project.repository} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a>
      </div>
      <figure className={`project-visual project-visual-${project.number}`} aria-label={`${project.title} system map`}>
        <div className="visual-heading"><figcaption>{project.title} · system map</figcaption><p>{project.visual.intro}</p></div>
        <div className="system-map">{project.visual.groups.map((group, groupIndex) => <section className="system-group" key={group.label}>
          <header><span>0{groupIndex + 1}</span><h3>{group.label}</h3></header>
          <div className={`system-items items-${group.items.length}`}>{group.items.map((item) => <strong key={item}>{item}</strong>)}</div>
        </section>)}</div>
        <div className="visual-path"><span>Core path</span><div>{project.visual.journey.map((step) => <strong key={step}>{step}</strong>)}</div></div>
        <p className="visual-footer">{project.visual.footer}</p>
      </figure>
    </div> : null}
  </dialog>;
}

function Work() {
  const [selectedProjectNumber, setSelectedProjectNumber] = useState<string | null>(null);
  const selectedProject = projects.find((project) => project.number === selectedProjectNumber) ?? null;
  return <section className="section work" id="work">
    <SectionHeading title="Selected work" note="Real problems. Practical solutions." count="03 projects" />
    {projects.map((project) => <article className="project-row" key={project.title}>
      <span className="project-number">{project.number}</span><div className="project-title"><h3>{project.title}</h3><p>{project.stack}</p></div>
      <p className="project-description">{project.description}</p>
      <a href={project.repository} target="_blank" rel="noreferrer">View project <Arrow /></a>
      <button className="read-more" type="button" onClick={() => setSelectedProjectNumber(project.number)}>Read more <Arrow /></button>
    </article>)}
    <ProjectDetail project={selectedProject} onClose={() => setSelectedProjectNumber(null)} />
  </section>;
}

function Capabilities() {
  return <section className="compact-panel capabilities" id="capabilities"><SectionHeading title="Capabilities" note="Tools for what’s next" /><div className="capability-columns"><div><h3>Production</h3><p>{productionSkills.join(', ')}</p></div><div><h3>Building now</h3><p>{learningSkills.join(', ')}</p></div></div></section>;
}

function Timelapse() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => { if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) videoRef.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false)); }, []);
  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => setPlaying(false)); else video.pause();
  };
  return <figure className="media-tile video-tile"><video ref={videoRef} muted loop playsInline preload="metadata" poster="/media/sunrise-timelapse-poster.jpg" width="1600" height="900" aria-label="Sunrise timelapse from a trek" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}><source src="/media/sunrise-timelapse.mp4" type="video/mp4" /></video><button type="button" onClick={togglePlayback} aria-label={playing ? 'Pause sunrise timelapse' : 'Play sunrise timelapse'}>{playing ? <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 4v8M11 4v8" /></svg> : <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 4 6 4-6 4Z" /></svg>}</button><figcaption>Sunrise timelapse · 00:32</figcaption></figure>;
}

function BeyondCode() {
  return <section className="section beyond" id="beyond"><SectionHeading title="Beyond code" note="Same curiosity. Different terrain." /><div className="beyond-grid">
    <figure className="media-tile gym-tile"><img src="/media/gym-landscape.jpg" alt="Himanshu training at the gym" width="1672" height="941" loading="lazy" decoding="async" /></figure>
    <figure className="media-tile"><img src="/media/sunrise-crowd.jpg" alt="A trekking group watching sunrise from a hilltop" width="1600" height="1200" loading="lazy" decoding="async" /></figure><Timelapse />
    <div className="beyond-copy"><p>I help lead treks with Tripbae. Away from engineering, I train, explore the outdoors, and learn photography and cinematography.</p><p>It keeps me grounded, curious, and more creative in how I solve problems.</p><span>Fitness · Trek leadership · Visual storytelling</span></div>
  </div></section>;
}

function Background() {
  return <section className="compact-panel background" id="background"><SectionHeading title="Education & competitive programming" note="Learning never stops" /><div className="fact-grid"><article><h3>MCA</h3><p>OUTR, 2025<br />CGPA: 8.9</p></article><article><h3>CodeChef</h3><p>4-Star<br />Peak rating: 1802</p></article><article><h3>Problem solving</h3><p>500+ DSA problems<br />across platforms</p></article></div></section>;
}

function Contact() {
  const socialLinks = [
    ['Email', 'himanshukumarpatra.dev@gmail.com', links.email], ['LinkedIn', 'Himanshu Kumar Patra', links.linkedin], ['GitHub', 'kumarbanty143', links.github],
    ['Instagram', '@himanshupatra_', links.instagram], ['Facebook', 'Himanshu Kumar Patra', links.facebook], ['LeetCode', 'himanshukumar2910', links.leetcode],
  ];
  return <section className="compact-panel contact" id="contact"><SectionHeading title="Let’s connect" note="Ideas, opportunities, or just a hello" /><div className="contact-list">{socialLinks.map(([label, value, href]) => <a href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noreferrer'} key={label}><span>{label}</span>{value}<Arrow /></a>)}</div></section>;
}

export default function App() {
  return <><a className="skip-link" href="#experience">Skip to experience</a><Header /><main><Hero /><Experience /><Work /><Capabilities /><BeyondCode /><div className="split-row lower-row"><Background /><Contact /></div></main><footer><span>© {new Date().getFullYear()} Himanshu Kumar Patra. All rights reserved.</span><span>Built with care, curiosity, and a belief in better software.</span></footer></>;
}
