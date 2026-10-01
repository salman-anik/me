import { ArrowUpRight } from 'lucide-react'

function Projects() {
  return (
    <section className="section-shell section" id="projects">
      <div className="section-heading reveal">
        <p className="eyebrow">04 / PROJECTS</p>
        <h2>Projects</h2>
      </div>

      <div className="empty-project reveal">
        <div className="empty-project-number">01</div>
        <div>
          <p className="card-kicker">IN PROGRESS</p>
          <h3>Projects Coming Soon</h3>
          <p>I'm currently building practical projects and expanding my portfolio.</p>
        </div>
        <ArrowUpRight className="empty-arrow" size={22} />
      </div>
    </section>
  )
}

export default Projects