export default function About() {
  return (
    <section className="section section-border" id="about">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">About</p><h2>About Me</h2></div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="large-copy">I'm a Computer Science and Engineering student at East West University, currently exploring the field of Data Science.</p>
            <p>My current focus is on strengthening my programming, problem-solving, database, and data-related skills. I'm interested in understanding how data can be transformed into useful insights and practical solutions.</p>
            <p>I'm currently building my foundation in Python and gradually moving toward Data Science and Machine Learning.</p>
          </div>
          <div className="info-card">
            <div className="info-row"><span>Location</span><strong>Dhaka, Bangladesh</strong></div>
            <div className="info-row"><span>University</span><strong>East West University</strong></div>
            <div className="info-row"><span>Degree</span><strong>B.Sc. in CSE</strong></div>
            <div className="info-row"><span>Expected Graduation</span><strong>2028</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}