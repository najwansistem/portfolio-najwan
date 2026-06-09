import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' }
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Najwan Mursyidan Portfolio">
          <span className="brand-mark">N</span>
          <span>NAJWAN MURSYIDAN</span>
        </Link>

        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-menu ${isOpen ? 'is-open' : ''}`} style={{ '--items': navItems.length }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                item.path === '/'
                  ? location.pathname === '/'
                    ? 'nav-link active'
                    : 'nav-link'
                  : isActive
                    ? 'nav-link active'
                    : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
          <span className="nav-hover-line" aria-hidden="true" />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
