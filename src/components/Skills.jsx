const skills = [
  ["C","Programming","C"],["C++","Programming","C++"],["Python","Programming","Py"],
  ["Java","Programming","J"],["JavaScript","Programming","JS"],["HTML","Web","<>"],
  ["CSS","Web","#"],["React","Web","R"],["MySQL","Database","SQL"]
];

export default function Skills() {
  return (
    <section className="section section-border" id="skills">
      <div className="container">
        <div className="section-heading"><p className="eyebrow">Skills</p><h2>What I Work With</h2><p>Technologies and programming languages I'm currently learning and working with.</p></div>
        <div className="skills-grid">
          {skills.map(([name, category, symbol]) => (
            <div className="skill-card" key={name}><div className="skill-icon">{symbol}</div><div><h3>{name}</h3><p>{category}</p></div></div>
          ))}
        </div>
        <div className="learning-note"><div className="learning-note-icon">DS</div><div><strong>Python for Data Science</strong><p>Currently learning and building my foundation in data-related programming.</p></div></div>
      </div>
    </section>
  );
}