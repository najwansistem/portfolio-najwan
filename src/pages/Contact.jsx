function Contact() {
  return (
    <section className="section-pad page-section">
      <div className="container narrow-container">
        <div className="section-heading">
          <span className="eyebrow">Contact</span>
          <h1>Let us connect and discuss digital products, web systems, or data projects.</h1>
          <p>
            I am open to learning opportunities, collaboration, and discussions related to
            software development and data-driven solutions.
          </p>
        </div>

        <div className="contact-list">
          <a href="mailto:najwanmursyidan1@gmail.com" className="contact-card card-hover">
            <span>Email</span>
            <strong>najwanmursyidan1@gmail.com</strong>
          </a>
          <a
            href="https://github.com/najwansistem"
            target="_blank"
            rel="noreferrer"
            className="contact-card card-hover"
          >
            <span>GitHub</span>
            <strong>github.com/najwansistem</strong>
          </a>
          <a
            href="https://www.linkedin.com/in/najwan-mursyidan"
            target="_blank"
            rel="noreferrer"
            className="contact-card card-hover"
          >
            <span>LinkedIn</span>
            <strong>linkedin.com/in/najwan-mursyidan</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
