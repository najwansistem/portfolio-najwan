import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <article className="project-card card-hover">
      <div className="project-cover-wrap">
        <img src={project.cover} alt={`${project.title} cover`} className="project-cover" />
      </div>
      <div className="project-content">
        <span className="eyebrow">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list compact-tags" aria-label="Main tools">
          {project.tools.slice(0, 4).map((tool) => (
            <span className="tag" key={tool}>
              {tool}
            </span>
          ))}
        </div>
        <Link to={`/projects/${project.id}`} className="btn btn-primary small-btn">
          View Detail
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
