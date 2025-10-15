import React from 'react'

const Home = ({ setCurrentPage }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Kokappi Foods</h1>
          <p>Experience the authentic taste of traditional cuisine</p>
          <span 
            className="cta-button"
            onClick={() => setCurrentPage('menu')}
            style={{ cursor: 'pointer' }}
          >
            Order Now
          </span>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured">
        <h2>Today's Special</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src="/images/biryani.jpg" alt="Biryani" />
            <h3>Chicken Biryani</h3>
            <p>₹250</p>
          </div>
          <div className="featured-item">
            <img src="/images/dosa.jpg" alt="Dosa" />
            <h3>Masala Dosa</h3>
            <p>₹120</p>
          </div>
          <div className="featured-item">
            <img src="/images/parotta.jpg" alt="Parotta" />
            <h3>Kerala Parotta</h3>
            <p>₹80</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features">
        <div className="feature-card">
          <i className="fas fa-shipping-fast"></i>
          <h3>Fast Delivery</h3>
          <p>Within 30 minutes</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-utensils"></i>
          <h3>Fresh Food</h3>
          <p>Made with love</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-rupee-sign"></i>
          <h3>Best Price</h3>
          <p>Quality at low cost</p>
        </div>
      </section>
    </div>
  )
}

export default Home