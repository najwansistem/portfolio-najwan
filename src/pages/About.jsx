function About() {
  return (
    <section className="section-pad page-section">
      <div className="container narrow-container">
        <div className="section-heading">
          <span className="eyebrow">About Me</span>
          <h1>I am an Informatics student who focuses on web systems and data solutions.</h1>
        </div>

        <div className="content-card about-card about-profile-card">
          <div className="about-photo-wrap">
            <img src="/profile/pasphoto-najwan.jpg" alt="Najwan Mursyidan profile photo" />
          </div>
          <div>
            <p>
              My name is Najwan Mursyidan. I am an Informatics student with an interest in
              building useful digital products. I enjoy working on web development, data
              analysis, and forecasting systems.
            </p>
            <p>
              I have built several projects, including a stock closing price prediction system,
              a desktop-based veterinary clinic administration application, and an information
              website for a community organization. These projects helped me understand how
              technology can support decision-making, data management, and public information
              access.
            </p>
            <p>
              I want to keep improving my ability to design digital products that are simple,
              functional, and helpful for users. I want to learn more about product thinking, 
              user experience, teamwork, and application
              development.
            </p>
          </div>
        </div>

        <div className="info-grid three-columns">
          <div className="info-card">
            <span>01</span>
            <h3>Education</h3>
            <p>Informatics student with experience in web, data, and information systems.</p>
          </div>
          <div className="info-card">
            <span>02</span>
            <h3>Interest</h3>
            <p>Web development, data analysis, forecasting system, and practical software.</p>
          </div>
          <div className="info-card">
            <span>03</span>
            <h3>Goal</h3>
            <p>Create digital products that solve real problems and are easy to use.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
