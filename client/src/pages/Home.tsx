import { useState } from "react";
import profilePhoto from "@/assets/profile.jpg";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";

// EDITE SOMENTE ESTAS DUAS CONSTANTES ao publicar no GitHub.
const WHATSAPP_URL = "https://wa.me/5543996349824?text=Ol%C3%A1%20Felipe%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";
const CURRICULO_URL = "https://github.com/QG-Digital/portifolio-felipe/releases/download/curriculo/Felipe.Injejejczak.Curriculo.pdf";

const skills = [
  { label: "Python", detail: "Automação & IA", icon: Code2, mark: "PY" },
  { label: "Power BI", detail: "Dashboards & dados", icon: BarChart3, mark: "BI" },
  { label: "APIs", detail: "Integrações", icon: Workflow, mark: "API" },
  { label: "Excel / VBA", detail: "Processos inteligentes", icon: Layers3, mark: "XLS" },
  { label: "SQL", detail: "Dados & consultas", icon: Database, mark: "SQL" },
  { label: "Node.js", detail: "Soluções web", icon: Terminal, mark: "JS" },
];

const experiences = [
  {
    period: "2022 — 2026",
    role: "Analista de Pesquisa de Mercado e Automação",
    company: "TS.Solar",
    tag: "AUTOMAÇÃO COMERCIAL",
    body: "Desenvolvimento de automações integradas ao WhatsApp para orientar follow-ups, apoiar pré-cobranças e entregar informações comerciais em tempo real.",
    bullets: [
      "Cálculo de frete via API com Rodonaves e Carvalima.",
      "Painéis internos para acompanhar vendedores, clientes e pedidos.",
      "Pesquisa de mercado, análise de dados e criação de ferramentas para kits personalizados.",
    ],
  },
  {
    period: "2018 — 2020",
    role: "Chefe de Estoque",
    company: "Comex Distribuidora",
    tag: "OPERAÇÕES",
    body: "Responsável por estoque, expedição, atendimento e estruturação dos processos operacionais da empresa.",
    bullets: [
      "Reestruturação da operação logística e implantação do sistema S5.",
      "Criação de ferramentas em Excel para controle de estoque e tempos de entrega.",
    ],
  },
  {
    period: "2019 — 2022",
    role: "Auxiliar de Produção",
    company: "Top Solar",
    tag: "PRODUÇÃO",
    body: "Atuação em injeção, soldagem, montagem, testes de produto e embalagem, com foco em execução e qualidade.",
    bullets: [],
  },
];

const courses = [
  ["Trilha completa de Python e IA", "Asimov Academy", "2025"],
  ["Power BI", "Asimov Academy", "2024"],
  ["RD Station CRM", "RD Station", "2024"],
  ["Administração e Finanças", "CDI", "2016"],
  ["Informática Avançada", "CDI", "2015"],
];

function SectionLabel({ children, number }: { children: React.ReactNode; number: string }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Voltar ao início">
          <span className="brand-mark">FI</span>
          <span className="brand-copy">
            <strong>Felipe</strong>
            <small>Portfólio pessoal</small>
          </span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a href="#habilidades" onClick={closeMenu}>Habilidades</a>
          <a href="#contato" className="nav-cta" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero container" id="top">
        <div className="hero-copy reveal-up">
          <div className="eyebrow"><span className="pulse-dot" /> DISPONÍVEL PARA NOVOS DESAFIOS</div>
          <p className="hero-kicker">Tecnologia aplicada à operação</p>
          <h1>Felipe dos<br /><em>Santos</em><br />Indejejczak<span className="accent-dot">.</span></h1>
          <p className="hero-intro">Eu transformo processos manuais em soluções mais inteligentes, organizadas e fáceis de acompanhar.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experiencia">Conheça meu trabalho <ArrowDown size={17} /></a>
            <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Entrar em contato <ArrowUpRight size={16} /></a>
            <a className="text-link" href={CURRICULO_URL} download="Felipe-Injejejczak-Curriculo.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Baixar currículo</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Londrina, PR</span>
            <span><BriefcaseBusiness size={15} /> Operações + tecnologia</span>
          </div>
        </div>

        <div className="hero-visual reveal-up delay-one">
          <div className="visual-grid" />
          <div className="photo-frame">
            <div className="photo-topline"><span>PROFILE_01</span><span>2026</span></div>
            <img src={profilePhoto} alt="Foto de Felipe dos Santos Indejejczak" />
            <div className="photo-caption"><span>FELIPE / DIGITAL OPERATIONS</span><span>01—06</span></div>
          </div>
          <div className="floating-card card-stack"><Code2 size={18} /><div><strong>Construo</strong><span>com propósito</span></div></div>
          <div className="floating-card card-location"><MapPin size={16} /><span>Londrina · Brasil</span></div>
          <div className="hero-stamp"><Sparkles size={15} /><span>DATA<br />DRIVEN</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container strip-inner">
          <p>“A melhor automação é aquela que deixa o trabalho mais humano.”</p>
          <span className="strip-line" />
          <span className="strip-caption">FELIPE INDEJEJCZAK / 2026</span>
        </div>
      </section>

      <section className="section container about-section" id="sobre">
        <div className="section-heading narrow">
          <SectionLabel number="01">Sobre mim</SectionLabel>
          <h2>Entre o chão de fábrica<br /><span>e o próximo nível.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-lead">
            <p>Sou um profissional com experiência em <strong>operações, estoque, expedição e processos administrativos</strong>, com forte afinidade por tecnologia e melhoria contínua.</p>
            <p>Ao longo da minha trajetória, criei ferramentas e automações para reduzir tarefas manuais, organizar informações e apoiar decisões. Gosto de entender o processo por inteiro — do detalhe operacional ao indicador no dashboard.</p>
          </div>
          <div className="about-aside">
            <div className="mini-stat"><span className="stat-value">8<span>+</span></span><span className="stat-label">anos conectando<br />operação e dados</span></div>
            <div className="mini-stat"><span className="stat-value">∞</span><span className="stat-label">curiosidade para<br />aprender e melhorar</span></div>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experiencia">
        <div className="container">
          <div className="section-heading experience-heading">
            <SectionLabel number="02">Experiência</SectionLabel>
            <h2>Experiência que<br /><span>vira resultado.</span></h2>
            <p>Uma trajetória construída em diferentes frentes, sempre com olhar para eficiência, controle e evolução.</p>
          </div>
          <div className="experience-list">
            {experiences.map((item, index) => (
              <article className="experience-card" key={item.role}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-main">
                  <div className="experience-topline"><span className="tag">{item.tag}</span><span className="period"><CalendarDays size={14} /> {item.period}</span></div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="experience-body">{item.body}</p>
                  {item.bullets.length > 0 && <ul>{item.bullets.map((bullet) => <li key={bullet}><ChevronRight size={15} />{bullet}</li>)}</ul>}
                </div>
                <ArrowUpRight className="experience-arrow" size={22} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section container" id="habilidades">
        <div className="section-heading">
          <SectionLabel number="03">Ferramentas</SectionLabel>
          <h2>Meu kit de<br /><span>construção.</span></h2>
        </div>
        <div className="skills-layout">
          <div className="skills-intro"><Bot size={30} /><p>Uso tecnologia para simplificar o que parece complicado — do dado bruto à ação que faz diferença.</p><a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale comigo <MessageCircle size={16} /></a></div>
          <div className="skill-grid">
            {skills.map(({ label, detail, icon: Icon, mark }) => <div className="skill-card" key={label}><div className="skill-icon"><Icon size={21} /><span>{mark}</span></div><strong>{label}</strong><small>{detail}</small></div>)}
          </div>
        </div>
      </section>

      <section className="section learning-section">
        <div className="container learning-grid">
          <div className="section-heading"><SectionLabel number="04">Formação</SectionLabel><h2>Aprender é<br /><span>parte do processo.</span></h2></div>
          <div className="course-list">
            {courses.map(([course, school, year]) => <div className="course-row" key={course}><GraduationCap size={19} /><div><strong>{course}</strong><span>{school}</span></div><b>{year}</b></div>)}
            <div className="course-note"><span>+</span> Ensino Médio completo · Inglês técnico</div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-noise" />
        <div className="container contact-inner">
          <SectionLabel number="05">Contato</SectionLabel>
          <h2>Vamos criar algo<br /><em>mais inteligente?</em></h2>
          <p>Se você procura alguém que entende a operação e fala a língua da tecnologia, vamos conversar.</p>
          <div className="contact-actions"><a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Fale comigo no WhatsApp <ArrowUpRight size={16} /></a><a className="phone-link" href="tel:+5543996349824"><Phone size={16} /> (43) 9 9634-9824</a><a className="phone-link" href={CURRICULO_URL} download="Felipe-Injejejczak-Curriculo.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Baixar currículo</a></div>
        </div>
      </section>

      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">FI</span><span className="brand-copy"><strong>Felipe</strong><small>Portfólio pessoal</small></span></a><div className="footer-center">© 2026 Felipe dos Santos Indejejczak<br /><span>Feito com curiosidade e café.</span></div><div className="footer-links"><a href="mailto:felipe.Indejejczak@outlook.com" aria-label="E-mail"><Mail size={17} /></a><a href="#top" aria-label="Voltar ao topo"><ArrowUpRight size={17} /></a></div></footer>
    </main>
  );
}

void Download;
void ExternalLink;
void FileText;
void Github;
void Linkedin;
void MessageCircle;
