const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Backend',
    items: ['PHP', 'Flask']
  },
  {
    title: 'Database',
    items: ['MySQL']
  },
  {
    title: 'Data',
    items: ['Python']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Vercel']
  }
]

function Skills() {
  return (
    <section className="section-pad page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Skills</span>
          <h1>Technical skills used across my projects.</h1>
          <p>
            The skills below support my work in building interfaces, processing data,
            managing databases, and deploying web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card card-hover" key={group.title}>
              <h2>{group.title}</h2>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
