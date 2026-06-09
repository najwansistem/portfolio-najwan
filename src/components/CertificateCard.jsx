function CertificateCard({ certificate }) {
  return (
    <article className="certificate-card card-hover">
      <a href={certificate.link} target="_blank" rel="noreferrer" className="certificate-image-link">
        <img src={certificate.image} alt={`${certificate.title} certificate preview`} loading="lazy" />
      </a>
      <div className="certificate-content">
        <div className="certificate-meta">
          <span className="eyebrow">{certificate.category}</span>
          <span className="year-pill">{certificate.year}</span>
        </div>
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer}</p>
        <a href={certificate.link} target="_blank" rel="noreferrer" className="btn btn-outline small-btn">
          View Certificate
        </a>
      </div>
    </article>
  )
}

export default CertificateCard
