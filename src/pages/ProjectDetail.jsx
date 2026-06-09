import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'

function DetailSection({ title, children }) {
  return (
    <section className="detail-section-block">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)
  const [activeImageIndex, setActiveImageIndex] = useState(null)

  useEffect(() => {
    if (activeImageIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveImageIndex(null)
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((current) => (current + 1) % project.images.length)
      }
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((current) => (current - 1 + project.images.length) % project.images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [activeImageIndex, project])

  if (!project) {
    return (
      <section className="section-pad page-section">
        <div className="container narrow-container not-found-card">
          <span className="eyebrow">Project Not Found</span>
          <h1>The project you are looking for does not exist.</h1>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  const activeImage = activeImageIndex !== null ? project.images[activeImageIndex] : null

  const showNextImage = () => {
    setActiveImageIndex((current) => (current + 1) % project.images.length)
  }

  const showPreviousImage = () => {
    setActiveImageIndex((current) => (current - 1 + project.images.length) % project.images.length)
  }

  return (
    <section className="section-pad page-section">
      <div className="container">
        <Link to="/projects" className="text-link back-link">
          Back to Projects
        </Link>

        <div className="project-detail-hero">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          <img src={project.cover} alt={`${project.title} cover`} />
        </div>

        <div className="detail-layout">
          <div className="detail-main">
            <DetailSection title="Problem">
              <p>{project.problem}</p>
            </DetailSection>

            <DetailSection title="Solution">
              <p>{project.solution}</p>
            </DetailSection>

            <DetailSection title="My Role">
              <p>{project.role}</p>
            </DetailSection>

            <DetailSection title="Main Features">
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Result or Impact">
              <p>{project.result}</p>
            </DetailSection>

            <DetailSection title="What I Learned">
              <p>{project.learned}</p>
            </DetailSection>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h2>Tools</h2>
              <div className="tag-list">
                {project.tools.map((tool) => (
                  <span className="tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="detail-section-block gallery-section">
          <div className="section-heading compact-heading">
            <span className="eyebrow">Screenshot Gallery</span>
            <h2>Click a screenshot to preview it.</h2>
          </div>
          <div className="gallery-grid">
            {project.images.map((image, index) => (
              <button
                type="button"
                className="gallery-item"
                key={image}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
                <span>Preview</span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Screenshot preview">
          <button className="lightbox-backdrop" type="button" onClick={() => setActiveImageIndex(null)}>
            <span className="sr-only">Close preview</span>
          </button>
          <div className="lightbox-panel">
            <div className="lightbox-header">
              <div>
                <span className="eyebrow">Screenshot {activeImageIndex + 1}</span>
                <h2>{project.title}</h2>
              </div>
              <button className="icon-btn" type="button" onClick={() => setActiveImageIndex(null)}>
                Close
              </button>
            </div>
            <img src={activeImage} alt={`${project.title} screenshot ${activeImageIndex + 1}`} />
            <div className="lightbox-actions">
              <button className="btn btn-outline small-btn hvr-sweep-to-left" type="button" onClick={showPreviousImage}>
                Previous
              </button>
              <button className="btn btn-primary small-btn hvr-sweep-to-right" type="button" onClick={showNextImage}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectDetail
