export default function Learning() {
  return (
    <section className="section section-border">
      <div className="container">
        <div className="learning-panel">
          <div className="learning-header"><p className="eyebrow">Currently Learning</p><h2>Building my path toward<br/><span>Data Science.</span></h2></div>
          <div className="learning-path">
            <div className="path-item"><span className="path-number">01</span><strong>Python</strong><small>Building the foundation</small></div>
            <div className="path-arrow">→</div>
            <div className="path-item"><span className="path-number">02</span><strong>Data Science</strong><small>Exploring data &amp; insights</small></div>
            <div className="path-arrow">→</div>
            <div className="path-item"><span className="path-number">03</span><strong>Machine Learning</strong><small>Future direction</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}