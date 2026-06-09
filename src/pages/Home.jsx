import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

function Home() {
  const handleHeroPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    event.currentTarget.style.setProperty('--mx', `${x}%`)
    event.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <>
      <section className="hero-section section-pad">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Portfolio</span>
            <h1>Najwan Mursyidan</h1>
            <p className="hero-role">Informatics Student | Web Developer | Data Enthusiast</p>
            <p className="hero-text">
              I build web-based systems and data-driven solutions to solve real problems.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>

          <div
            className="hero-visual profile-visual interactive-hero"
            aria-label="Najwan Mursyidan profile summary"
            onMouseMove={handleHeroPointerMove}
          >
            <div className="blue-orb orb-one" />
            <div className="blue-orb orb-two" />
            <div className="profile-card glass-card">
              <div className="profile-photo-wrap">
                <img src="/profile/pasphoto-najwan.jpg" alt="Najwan Mursyidan profile photo" />
              </div>
              <div className="profile-card-content">
                <span className="profile-tag">Candidate Portfolio</span>
                <h2>Najwan Mursyidan</h2>
                <p>Focused on web systems, data analyst, and practical digital solutions.</p>
                <div className="mini-grid">
                  <div>
                    <strong>3</strong>
                    <span>Projects</span>
                  </div>
                  <div>
                    <strong>6+</strong>
                    <span>Core Skills</span>
                  </div>
                  <div>
                    <strong>Public</strong>
                    <span>Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad soft-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">Featured Work</span>
              <h2>Projects that show process, role, and result.</h2>
            </div>
            <Link to="/projects" className="text-link">
              See all projects
            </Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
