import { useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Award,
  BarChart3,
  Box,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  FileDown,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  ["About", "about"],
  ["Capabilities", "capabilities"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

const capabilityCards = [
  {
    index: "01",
    title: "Operations",
    icon: Workflow,
    accent: "blue",
    description:
      "Create the structure that lets people, processes and technology execute consistently—not just once, but as a system.",
    items: ["Operational structuring", "Workflow design", "Documentation", "Cross-functional coordination"],
  },
  {
    index: "02",
    title: "DevOps & Cloud",
    icon: Cloud,
    accent: "violet",
    description:
      "Design and automate infrastructure with an eye for repeatability, security, observability and the operational reality of teams.",
    items: ["AWS · Terraform · Docker", "CI/CD automation", "Kubernetes & Linux", "Monitoring & incident visibility"],
  },
  {
    index: "03",
    title: "People & Leadership",
    icon: Users,
    accent: "teal",
    description:
      "Bring technical and non-technical people into the same conversation, with clear ownership, trust and shared objectives.",
    items: ["Stakeholder communication", "Team coordination", "Mentorship & support", "Conflict-aware collaboration"],
  },
  {
    index: "04",
    title: "Business Development",
    icon: BarChart3,
    accent: "amber",
    description:
      "Understand the market, the relationship and the commercial question behind an opportunity—and move the conversation forward.",
    items: ["Partnership development", "Relationship management", "Market understanding", "Product positioning"],
  },
  {
    index: "05",
    title: "Venture Building",
    icon: Layers3,
    accent: "rose",
    description:
      "Help emerging ventures connect product, technology, operations, partnerships and growth into an operating business.",
    items: ["Product operations", "Fintech infrastructure", "Business model thinking", "Growth planning"],
  },
];

const experience = [
  {
    year: "Present",
    company: "Toss Finance",
    role: "Cloud & DevOps Engineer · Project & Consulting",
    description:
      "Supporting fintech infrastructure, deployment automation, monitoring, observability, security and cloud operations initiatives.",
    tags: ["AWS", "Terraform", "CI/CD", "Observability"],
  },
  {
    year: "2026",
    company: "TS Academy",
    role: "Cloud & DevOps Engineer · DevOps Team Moderator",
    description:
      "Collaborating on hands-on cloud engineering projects, deployment standardization, infrastructure automation and technical team support.",
    tags: ["Jenkins", "Docker", "Linux", "Bash"],
  },
  {
    year: "2025",
    company: "Pistis Hub",
    role: "DevOps Engineer Intern · Project Engineer",
    description:
      "Contributing to AWS workload deployment, Terraform provisioning, Jenkins pipelines, Linux administration and infrastructure monitoring.",
    tags: ["AWS", "Terraform", "Jenkins", "CloudWatch"],
  },
  {
    year: "—",
    company: "The Hatch Global",
    role: "Optimization & Operations",
    description:
      "Working across venture operations, organizational structure, execution systems and optimization.",
    tags: ["Operations", "Structure", "Execution"],
  },
  {
    year: "—",
    company: "Moniepoint Inc.",
    role: "Business Relationship Manager",
    description:
      "Building business relationships through stakeholder engagement, commercial interaction and relationship management.",
    tags: ["Fintech", "Partnerships", "Relationships"],
  },
];

const projects = [
  {
    number: "01",
    type: "Venture / Fintech",
    title: "ZeDI",
    description:
      "A financial management platform being developed around intentional spending, financial planning, expense management and behavioural spending insight.",
    tags: ["Product", "Operations", "Cloud", "Fintech"],
    featured: true,
  },
  {
    number: "02",
    type: "Cloud / Reliability",
    title: "AWS Monitoring & Observability Platform",
    description:
      "A production-style monitoring stack for infrastructure visibility, centralized logs, service health and proactive alerting.",
    tags: ["Prometheus", "Grafana", "Loki", "Alertmanager"],
  },
  {
    number: "03",
    type: "Cloud Architecture",
    title: "iTango",
    description:
      "Cloud-native social networking concept built around events, interests, activities and location-driven experiences.",
    tags: ["AWS", "Docker", "CI/CD", "Scalability"],
  },
  {
    number: "04",
    type: "Web3 / Infrastructure",
    title: "AVION",
    description:
      "Market intelligence and digital asset management platform involving cloud architecture, infrastructure design and monitoring strategy.",
    tags: ["Cloud", "Architecture", "Monitoring"],
  },
];

const certifications = [
  ["2026", "DevOps Engineering Program", "TS Academy", "Cloud engineering · DevOps projects"],
  ["2026", "CodeAlpha Internship Program", "CodeAlpha", "Hands-on technical experience"],
  ["2026", "DecodeLabs Internship Program", "DecodeLabs", "Practical technology experience"],
  ["2025", "DevOps Engineering Program", "Darey.io", "Infrastructure · CI/CD · Cloud"],
  ["2024", "DevOps Engineering Program", "The Pistis Tech Hub", "AWS · Linux · Automation"],
  ["2023", "AWS Cloud Engineering Training", "Udemy · Ashak P. & Bolaji S.", "AWS foundations · Cloud engineering"],
];

const principles = [
  ["01", "Think in systems", "Look beyond the task. Understand how people, technology, processes and business objectives connect."],
  ["02", "Build for reliability", "Make systems repeatable, observable, secure and maintainable so execution can compound."],
  ["03", "People first", "Good execution depends on clear communication, trust, ownership and collaboration."],
  ["04", "Execute with intention", "Move ideas from discussion into structured action, measurable progress and continuous improvement."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? "section-label-light" : ""}`}>
      <span className="section-label-line" />
      <span>{children}</span>
    </div>
  );
}

function ArrowLink({ children, href = "#contact", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <a className={`arrow-link ${light ? "arrow-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} />
    </a>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Darasimi Gabriels Oyewole home">
          <span className="brand-symbol">D<span>.</span></span>
          <span className="brand-name">DARASIMI<br /><span>GABRIELS O.</span></span>
        </a>

        <nav className={`site-nav ${mobileOpen ? "site-nav-open" : ""}`} aria-label="Primary navigation">
          {navItems.map(([label, id], index) => (
            <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-index">0{index + 1}</span>{label}
            </a>
          ))}
          <a className="nav-cta" href="mailto:gabrielsdarasimi@gmail.com" onClick={() => setMobileOpen(false)}>
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </nav>

        <button className="mobile-menu-button" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div id="top" className="hero-section">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow reveal-up"><span className="status-dot" /> Available for thoughtful work</div>
            <h1 className="hero-title reveal-up delay-1">Technology.<br /><em>Operations.</em><br />People. Growth.</h1>
            <p className="hero-intro reveal-up delay-2">I build reliable systems and help ambitious businesses turn ideas into execution.</p>
            <div className="hero-actions reveal-up delay-3">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Let’s connect <ArrowDown size={16} /></a>
              <a className="button button-download" href="/manus-storage/001_Resume_Oluwadara_Gabriels_Oyewole_7cfa67d0.pdf" download>Download resume <FileDown size={16} /></a>
            </div>
            <div className="hero-tags reveal-up delay-4">
              <span>DevOps & Cloud</span><i /> <span>Operations</span><i /> <span>Fintech</span><i /> <span>Venture building</span>
            </div>
          </div>

          <div className="hero-aside reveal-up delay-2">
            <div className="hero-photo-frame">
              <div className="photo-corner photo-corner-top" />
              <img src="/manus-storage/darasimi-portrait_308db541.png" alt="Darasimi Gabriels Oyewole" />
              <div className="photo-overlay" />
              <div className="photo-caption"><span>01 / 05</span><span>Systems thinker</span></div>
            </div>
            <div className="hero-aside-note"><span className="note-line" /> Based in Lagos, Nigeria<br /><span className="note-muted">Working across the layers that make technology useful.</span></div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span className="scroll-cue"><span className="scroll-cue-line" /> Scroll to explore</span>
          <div className="hero-stat"><strong>3+</strong><span>years across<br />cloud & DevOps</span></div>
          <div className="hero-stat hero-stat-accent"><strong>80<span>%</span></strong><span>less manual effort<br /><small>documented project outcome</small></span></div>
        </div>
      </div>

      <section id="about" className="about-section page-section">
        <div className="container about-grid">
          <div className="about-intro">
            <SectionLabel>01 / About</SectionLabel>
            <h2>The infrastructure is only one part of the <em>system.</em></h2>
            <div className="about-stamp"><Globe2 size={15} /><span>Lagos · Nigeria<br />Open to the world</span></div>
          </div>
          <div className="about-copy">
            <p className="about-lead">My work sits between the infrastructure that powers a business and the people and processes that make the business work.</p>
            <p>I’m Darasimi Gabriels Oyewole—a technology and operations professional working across DevOps, cloud infrastructure, fintech, venture building, business development and organizational operations.</p>
            <p>That range has shaped how I solve problems. I can move from an AWS architecture or CI/CD workflow to the operational structure, stakeholder conversation and human coordination needed to make it stick.</p>
            <div className="about-footer"><span className="about-footer-line" /><ArrowLink href="#capabilities">See how I work</ArrowLink></div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="capabilities-section page-section dark-section">
        <div className="container">
          <div className="section-heading-row">
            <div><SectionLabel light>02 / Capabilities</SectionLabel><h2>One perspective.<br /><em>Multiple layers.</em></h2></div>
            <p className="section-heading-note">Technology enables the product.<br />Operations enables the team.<br />Relationships enable the opportunity.</p>
          </div>
          <div className="capability-grid">
            {capabilityCards.map(({ index, title, icon: Icon, description, items, accent }) => (
              <article key={title} className={`capability-card capability-${accent}`}>
                <div className="capability-top"><span className="card-index">{index}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>{items.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul>
                <span className="card-arrow"><ArrowUpRight size={16} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section page-section">
        <div className="container">
          <div className="experience-header"><div><SectionLabel>03 / Experience</SectionLabel><h2>Experience that moves<br />between <em>disciplines.</em></h2></div><p>From fintech and payments to venture operations and cloud engineering, every environment has expanded the way I think about execution.</p></div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className={`experience-item ${index === 0 ? "experience-current" : ""}`} key={`${item.company}-${item.role}`}>
                <div className="experience-year">{item.year}</div>
                <div className="experience-marker"><span /></div>
                <div className="experience-main"><div className="experience-company-row"><h3>{item.company}</h3>{index === 0 && <span className="current-pill">Current focus</span>}</div><h4>{item.role}</h4><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
                <ArrowUpRight className="experience-arrow" size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section page-section soft-section">
        <div className="container">
          <div className="section-heading-row projects-heading"><div><SectionLabel>04 / Selected work</SectionLabel><h2>From idea to<br /><em>operating reality.</em></h2></div><p className="section-heading-note">The best work connects product, technology, operations, partnerships and growth.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className={`project-card ${project.featured ? "project-featured" : ""}`}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><ArrowUpRight size={18} /></div>
                {project.featured ? <div className="project-signal"><div className="signal-window"><div className="signal-header"><span className="signal-dot" /><span>zedi / operating model</span><span className="signal-live">● live thinking</span></div><div className="signal-body"><div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="signal-graph"><span /><span /><span /><span /><span /><span /></div></div><div className="signal-footer"><span>Product</span><span>→</span><span>Infrastructure</span><span>→</span><span>Growth</span></div></div></div> : <div className="project-abstract"><div className="abstract-icon">{project.number === "02" ? <Activity size={30} /> : project.number === "03" ? <Network size={30} /> : <Code2 size={30} />}</div><div className="abstract-rings" /></div>}
                <div className="project-card-body"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section page-section dark-section">
        <div className="container principles-grid">
          <div className="principles-intro"><SectionLabel light>05 / How I work</SectionLabel><h2>Good work is<br /><em>connected work.</em></h2><p>My approach is shaped by the belief that technical quality and human clarity are not separate goals.</p></div>
          <div className="principles-list">{principles.map(([number, title, description]) => <div className="principle-item" key={number}><span className="principle-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={18} /></div>)}</div>
        </div>
      </section>

      <section className="evolution-section page-section">
        <div className="container evolution-grid">
          <div><SectionLabel>06 / Professional evolution</SectionLabel><h2>A non-linear path.<br /><em>A useful one.</em></h2></div>
          <div className="evolution-copy"><p>My academic foundation is in Chemical Sciences. My professional path has expanded through cloud engineering, DevOps, operations, business relationships and venture building.</p><p>It’s a path built through continuous learning—AWS Cloud Engineering, DevOps Engineering programmes, internships and hands-on project work.</p><div className="evolution-track"><div className="evolution-line" /><div className="evolution-nodes"><span><i>01</i>Science</span><span><i>02</i>Technology</span><span><i>03</i>DevOps</span><span><i>04</i>Operations</span><span><i>05</i>Business</span><span className="node-active"><i>06</i>Venture building</span></div></div></div>
        </div>
      </section>

      <section id="certifications" className="certifications-section page-section soft-section">
        <div className="container">
          <div className="certifications-header"><div><SectionLabel>07 / Certifications & training</SectionLabel><h2>Proof of continuous<br /><em>learning.</em></h2></div><p>Verified learning milestones from the source CV—focused on building practical fluency across cloud engineering, DevOps and technology delivery.</p></div>
          <div className="certifications-list">
            {certifications.map(([year, title, issuer, focus]) => <article className="certification-item" key={`${title}-${issuer}`}><div className="certification-year">{year}</div><div className="certification-icon"><Award size={18} /></div><div className="certification-main"><h3>{title}</h3><p>{issuer}</p></div><span className="certification-focus">{focus}</span><ShieldCheck className="certification-verified" size={17} /></article>)}
          </div>
          <div className="certifications-note"><ShieldCheck size={15} /><span>All entries above are documented in Darasimi’s supplied resume.</span><a href="/manus-storage/001_Resume_Oluwadara_Gabriels_Oyewole_7cfa67d0.pdf" download>View resume <ArrowUpRight size={14} /></a></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-grid-lines" aria-hidden="true" />
        <div className="container contact-inner">
          <SectionLabel light>08 / Contact</SectionLabel>
          <div className="contact-layout"><div><h2>Building something<br /><em>ambitious?</em></h2><p>Whether the challenge is cloud infrastructure, operational structure, technology execution, partnerships or building a new venture, I’m interested in working with people solving meaningful problems.</p></div><div className="contact-actions"><a className="contact-action" href="mailto:gabrielsdarasimi@gmail.com"><span className="contact-icon"><Mail size={18} /></span><span><small>Email me</small>gabrielsdarasimi@gmail.com</span><ArrowUpRight size={19} /></a><a className="contact-action" href="https://wa.me/2348064785413" target="_blank" rel="noreferrer"><span className="contact-icon"><Phone size={18} /></span><span><small>WhatsApp</small>+234 806 478 5413</span><ArrowUpRight size={19} /></a><a className="contact-action" href="https://www.linkedin.com/in/oyewole-gabriels-/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={18} /></span><span><small>Connect on LinkedIn</small>oyewole-gabriels-</span><ArrowUpRight size={19} /></a></div></div>
          <div className="contact-bottom"><span>Darasimi Gabriels Oyewole</span><span>Technology · Operations · People · Growth</span><span>Lagos, Nigeria <MapPin size={13} /></span></div>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Darasimi Gabriels Oyewole</span><div><a href="https://github.com/dara-gabriels" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></div></footer>
    </main>
  );
}
