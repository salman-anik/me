function Arrow({ down = false }) {
  return <svg viewBox="0 0 24 24" className="button-icon" aria-hidden="true"><path d={down ? "M12 4v15M6 13l6 6 6-6" : "M7 17 17 7M8 7h9v9"} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-inner">
        <div className="profile-frame reveal"><img src="/profile.jpg" alt="Salman Anik" className="profile-image" /></div>
        <p className="eyebrow hero-eyebrow reveal reveal-delay-1">Hello, I'm</p>
        <h1 className="hero-name reveal reveal-delay-2">Salman Anik</h1>
        <p className="hero-title reveal reveal-delay-3">CSE Student <span>|</span> Data Science Enthusiast</p>
        <p className="hero-description reveal reveal-delay-3">I'm a Computer Science and Engineering student at East West University with a growing interest in Data Science. I enjoy learning, building practical projects, and exploring how data and technology can solve real-world problems.</p>
        <div className="hero-actions reveal reveal-delay-4">
          <a href="https://github.com/salman-anik" target="_blank" rel="noreferrer" className="button button-dark">View GitHub <Arrow /></a>
          <a href="/Salman-Anik-CV.pdf" download className="button button-outline">Download CV <Arrow down /></a>
        </div>
        <div className="social-links reveal reveal-delay-4">
          <a href="https://github.com/salman-anik" target="_blank" rel="noreferrer">GitHub</a><span>•</span>
          <a href="https://www.linkedin.com/in/salman-anik-5a7015294" target="_blank" rel="noreferrer">LinkedIn</a><span>•</span>
          <a href="https://leetcode.com/u/salmananik/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>
        <a href="#about" className="scroll-indicator reveal reveal-delay-4"><span>Scroll to explore</span><span className="scroll-arrow">↓</span></a>
      </div>
    </section>
  );
}