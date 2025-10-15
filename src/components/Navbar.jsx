import React, { useState } from 'react'

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    // Scroll to top when navigating
    window.scrollTo(0, 0)
  }

  const isActive = (page) => currentPage === page ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div 
          className={`nav-logo ${isActive('home')}`}
          onClick={() => handleNavigation('home')}
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-utensils"></i>
          KoKappi Foods
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <div 
            className={`nav-link ${isActive('home')}`} 
            onClick={() => handleNavigation('home')}
          >
            Home
          </div>
          <div 
            className={`nav-link ${isActive('menu')}`} 
            onClick={() => handleNavigation('menu')}
          >
            Menu
          </div>
          <div 
            className={`nav-link ${isActive('about')}`} 
            onClick={() => handleNavigation('about')}
          >
            About
          </div>
          <div 
            className={`nav-link ${isActive('contact')}`} 
            onClick={() => handleNavigation('contact')}
          >
            Contact
          </div>
          <div 
            className={`nav-link cart-icon ${isActive('cart')}`} 
            onClick={() => handleNavigation('cart')}
          >
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </div>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar