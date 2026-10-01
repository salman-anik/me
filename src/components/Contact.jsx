function Arrow() {
  return <svg viewBox="0 0 24 24" className="link-icon" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

export default function Contact() {
  return (
    <section className="section section-border contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <p className="eyebrow">Contact</p><h2>Let's Connect</h2>
          <p className="contact-description">Have an opportunity, idea, or simply want to connect?</p>
          <a href="mailto:salmananik.bd@gmail.com" className="email-link">salmananik.bd@gmail.com <Arrow /></a>
          <div className="contact-links">
            <a href="https://github.com/salman-anik" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/salman-anik-5a7015294" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://leetcode.com/u/salmananik/" target="_blank" rel="noreferrer">LeetCode <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}