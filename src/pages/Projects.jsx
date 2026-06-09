import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

function Projects() {
  return (
    <section className="section-pad page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Projects</span>
          <h1>Selected projects with clear problems, solutions, and outcomes.</h1>
          <p>
            Each project highlights my role, main features, tools, and the practical value of
            the final result.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
