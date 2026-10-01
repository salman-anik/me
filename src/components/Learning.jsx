import { ArrowRight } from 'lucide-react'

function Learning() {
  return (
    <section className="section-shell section" id="learning">
      <div className="learning-panel reveal">
        <div>
          <p className="eyebrow">CURRENTLY LEARNING</p>
          <h2>Building my path toward<br /><em>Data Science.</em></h2>
        </div>
        <div className="learning-path" aria-label="Learning path">
          <span>Python</span>
          <ArrowRight size={17} />
          <span>Data Science</span>
          <ArrowRight size={17} />
          <span>Machine Learning</span>
        </div>
      </div>
    </section>
  )
}

export default Learning