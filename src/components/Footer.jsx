import React from 'react'

const Footer = ({ setCurrentPage }) => {
  const handleFooterNavigation = (page) => {
    setCurrentPage(page)
    // Scroll to top when navigating
    window.scrollTo(0, 0)
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Company Info */}
        <div className="footer-section">
          <div className="footer-logo">
            <i className="fas fa-utensils"></i>
            <span>Ennakku Foods</span>
          </div>
          <p className="footer-description">
            Serving authentic South Indian cuisine with love and tradition since 2010. 
            Experience the real taste of home-made food.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <span 
                onClick={() => handleFooterNavigation('home')} 
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-right"></i> Home
              </span>
            </li>
            <li>
              <span 
                onClick={() => handleFooterNavigation('menu')} 
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-right"></i> Menu
              </span>
            </li>
            <li>
              <span 
                onClick={() => handleFooterNavigation('about')} 
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-right"></i> About Us
              </span>
            </li>
            <li>
              <span 
                onClick={() => handleFooterNavigation('contact')} 
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-right"></i> Contact
              </span>
            </li>
            <li>
              <span 
                onClick={() => handleFooterNavigation('cart')} 
                style={{cursor: 'pointer'}}
              >
                <i className="fas fa-chevron-right"></i> Cart
              </span>
            </li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div className="footer-section">
          <h3>Popular Categories</h3>
          <ul className="footer-links">
            <li><span style={{cursor: 'pointer'}}><i className="fas fa-utensils"></i> Biryani</span></li>
            <li><span style={{cursor: 'pointer'}}><i className="fas fa-bread-slice"></i> Tiffin</span></li>
            <li><span style={{cursor: 'pointer'}}><i className="fas fa-drumstick-bite"></i> Chicken</span></li>
            <li><span style={{cursor: 'pointer'}}><i className="fas fa-fish"></i> Seafood</span></li>
            <li><span style={{cursor: 'pointer'}}><i className="fas fa-ice-cream"></i> Desserts</span></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <span>123 Food Street</span>
                <span>Chennai, Tamil Nadu - 600001</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <span>+91 98765 43210</span>
                <span>+91 87654 32109</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <span>info@ennakkufoods.com</span>
                <span>order@ennakkufoods.com</span>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <span>Monday - Sunday</span>
                <span>7:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright">
            <p>&copy; 2024 Ennakku Foods. All rights reserved.</p>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Refund Policy</a>
          </div>
          <div className="payment-methods">
            <i className="fab fa-cc-visa" title="Visa"></i>
            <i className="fab fa-cc-mastercard" title="MasterCard"></i>
            <i className="fab fa-cc-paypal" title="PayPal"></i>
            <i className="fab fa-google-pay" title="Google Pay"></i>
            <i className="fab fa-cc-apple-pay" title="Apple Pay"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer