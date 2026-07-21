const projects = [
  { name: "MultiGen", label: "Multi-agent Systems", description: "A general-purpose AI agent framework for multimodal, multi-agent collaboration and end-to-end task execution.", meta: "Python · 467 GitHub stars", href: "https://github.com/lingyuanli/MultiGen", site: "https://www.manus.llmops.org.cn", image: "/multigen-cover.png" },
  { name: "FrameLoom", label: "Agent-native Tools", description: "An open-source video editor that turns natural-language instructions into editable timelines, captions, motion graphics, and production-ready exports.", meta: "Open source · 2026", href: "https://github.com/lingyuanli/FrameLoom", image: "/frameloom-cover.png" },
  { name: "LLMOps Platform", label: "AI Infrastructure", description: "A low-code AI agent development platform for building, evaluating, and operating LLM applications.", meta: "Python · LLMOps", href: "https://github.com/lingyuanli/llmops-ai-agent-development-platform", site: "https://llmops.org.cn", image: "/llmops-cover.png" },
];
const navItems = [["About Me", "about-me"], ["News", "news"], ["Projects", "projects"], ["Education", "education"], ["Experience", "experience"]];
export default function Home() {
  return (
    <>
      <header className="masthead">
        <nav className="masthead__inner" aria-label="Primary navigation">
          <a className="site-name" href="#about-me">Lingyuan Li</a>
          <div className="nav-links">
            {navItems.map(([label, id]) => <a href={"#" + id} key={id}>{label}</a>)}
          </div>
        </nav>
      </header>
      <main className="page-shell">
        <aside className="profile" aria-label="Profile">
          <div className="profile__top">
            <img className="profile__avatar" src="/profile.jpg" alt="Lingyuan Li" width="190" height="190" />
            <div className="profile__identity">
              <h1>Lingyuan Li</h1>
              <p className="profile__title">Beijing University of Posts and Telecommunications</p>
            </div>
          </div>
          <p className="profile__bio">Building practical AI systems, intelligent agents, and open-source tools for the next generation of human-computer collaboration.</p>
          <ul className="profile__links">
            <li><span aria-hidden="true">●</span>Beijing, China</li>
            <li><span aria-hidden="true">@</span><a href="mailto:2210127151@qq.com">Email</a></li>
            <li><span aria-hidden="true">⌘</span><a href="https://github.com/lingyuanli">GitHub</a></li>
            <li><span aria-hidden="true">↗</span><a href="https://www.manus.llmops.org.cn">Project site</a></li>
          </ul>
          <blockquote>“The skeptic sees truth, the hopeful pave paths.”</blockquote>
        </aside>
        <article className="content">
          <section id="about-me" className="intro section-anchor">
            <p>I am an undergraduate student at <strong>Beijing University of Posts and Telecommunications</strong>, majoring in Internet of Things Engineering in the BUPT–Queen Mary University of London joint programme. My work focuses on large language models, agent systems, LLMOps, and the infrastructure needed to turn research ideas into useful products.</p>
            <p>I enjoy building open-source software across Python, Go, and TypeScript—from multi-agent collaboration frameworks to developer platforms and creative tools. I care about systems that are not only capable, but also understandable, dependable, and genuinely useful.</p>
          </section>
          <section id="news" className="section-anchor">
            <h2><span aria-hidden="true">🔥</span> News</h2>
            <ul className="news-list">
              <li><time>2026.07</time><span>Released <a href="https://github.com/lingyuanli/FrameLoom">FrameLoom</a>, an agent-native open-source video editor.</span></li>
              <li><time>2026.01</time><span>Open-sourced <a href="https://github.com/lingyuanli/MultiGen">MultiGen</a>, a multimodal multi-agent collaboration framework.</span></li>
              <li><time>2025.07</time><span>Started building an open LLMOps platform for low-code AI agent development.</span></li>
            </ul>
          </section>
          <section id="projects" className="section-anchor">
            <h2><span aria-hidden="true">📝</span> Selected Projects</h2>
            <div className="projects">
              {projects.map((project) => (
                <article className="project" key={project.name}>
                  <img className="project__visual" src={project.image} alt={project.name + " project illustration"} width="900" height="600" />
                  <div className="project__body">
                    <p className="project__eyebrow">{project.label}</p>
                    <h3><a href={project.href}>{project.name}</a></h3>
                    <p>{project.description}</p>
                    <div className="project__meta">
                      <strong>{project.meta}</strong>
                      <span><a href={project.href}>Code</a>{project.site ? <a href={project.site}>Website</a> : null}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="education" className="section-anchor">
            <h2><span aria-hidden="true">📖</span> Education</h2>
            <div className="education-list">
              <div className="timeline-card">
                <div className="timeline-card__mark timeline-card__mark--logo"><img src="/bupt-logo.png" alt="Beijing University of Posts and Telecommunications logo" width="92" height="92" /></div>
                <div><h3>Beijing University of Posts and Telecommunications</h3><p>B.Eng. in Internet of Things Engineering</p><p className="muted">Sep. 2023 – Jun. 2027 (Expected)</p></div>
              </div>
              <div className="timeline-card">
                <div className="timeline-card__mark timeline-card__mark--logo timeline-card__mark--qmul"><img src="/qmul-logo.jpeg" alt="Queen Mary University of London logo" width="92" height="92" /></div>
                <div><h3>Queen Mary University of London</h3><p>B.Eng. in Internet of Things Engineering</p><p className="muted">Sep. 2023 – Jun. 2027 (Expected)</p></div>
              </div>
            </div>
          </section>
          <section id="experience" className="section-anchor">
            <h2>Experience</h2>
            <div className="experience-grid">
              <div><h3>AI Agent Engineering</h3><p>Designing multi-agent workflows, tool-use systems, sandboxes, and multimodal collaboration.</p></div>
              <div><h3>LLMOps Infrastructure</h3><p>Building platforms for prompt orchestration, model integration, evaluation, and deployment.</p></div>
              <div><h3>Open-source Software</h3><p>Creating practical developer tools across Python, Go, TypeScript, and desktop applications.</p></div>
            </div>
          </section>
          <footer><span>© {new Date().getFullYear()} Lingyuan Li</span><a href="#about-me">Back to top ↑</a></footer>
        </article>
      </main>
    </>
  );
}
