import { useMemo, useState } from 'react'
import CertificateCard from '../components/CertificateCard.jsx'
import { certificates } from '../data/certificates.js'

function Certificates() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(certificates.map((certificate) => certificate.category))]
    return ['All', ...uniqueCategories]
  }, [])

  const filteredCertificates = certificates.filter((certificate) => {
    const matchesCategory = activeCategory === 'All' || certificate.category === activeCategory
    const keyword = query.trim().toLowerCase()
    const matchesQuery =
      keyword.length === 0 ||
      [certificate.title, certificate.issuer, certificate.category, certificate.year]
        .join(' ')
        .toLowerCase()
        .includes(keyword)

    return matchesCategory && matchesQuery
  })

  return (
    <section className="section-pad page-section">
      <div className="container">
        <div className="section-heading certificate-heading">
          <span className="eyebrow">Certificates</span>
          <h1>Certificates that support my technical learning journey.</h1>
          <p>
            A collection of {certificates.length} certificates in web development, data,
            machine learning, cloud, artificial intelligence, and cybersecurity.
          </p>
        </div>

        <div className="certificate-toolbar">
          <label className="search-box" htmlFor="certificate-search">
            <span>Search certificate</span>
            <input
              id="certificate-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, issuer, or category"
            />
          </label>

          <div className="filter-group" aria-label="Certificate category filters">
            {categories.map((category) => (
              <button
                className={`filter-chip ${activeCategory === category ? 'is-active' : ''}`}
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="result-summary">
          Showing <strong>{filteredCertificates.length}</strong> of <strong>{certificates.length}</strong>{' '}
          certificates
        </div>

        {filteredCertificates.length > 0 ? (
          <div className="certificate-grid">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.link} certificate={certificate} />
            ))}
          </div>
        ) : (
          <div className="not-found-card empty-state">
            <h2>No certificate found.</h2>
            <p>Try another keyword or choose the All category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates
