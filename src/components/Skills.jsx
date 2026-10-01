import { Code2, Braces, FileCode2, Coffee, Database, Globe, Palette } from 'lucide-react'

const skills = [
  ['C', Code2],
  ['C++', Braces],
  ['Python', FileCode2],
  ['Java', Coffee],
  ['JavaScript', FileCode2],
  ['HTML', Globe],
  ['CSS', Palette],
  ['React', Code2],
  ['MySQL', Database],
]

function Skills() {
  return (
    <section className="section-shell section" id="skills">
      <div className="section-heading reveal">
        <p className="eyebrow">02 / SKILLS</p>
        <h2>What I Work With</h2>
        <p className="section-intro">A growing toolkit built through coursework, practice, and continuous learning.</p>
      </div>

      <div className="skills-grid">
        {skills.map(([name, Icon]) => (
          <div className="skill-card reveal" key={name}>
            <Icon size={22} strokeWidth={1.7} />
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className="learning-note reveal">
        <span>Currently learning</span>
        <strong>Python for Data Science</strong>
      </div>
    </section>
  )
}

export default Skills