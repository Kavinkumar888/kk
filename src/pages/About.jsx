import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Ennakku Foods</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Welcome to Ennakku Foods, where tradition meets taste! Established in 2010, 
              we have been serving authentic South Indian cuisine with a modern twist. 
              Our recipes have been passed down through generations, ensuring that every 
              dish tells a story of rich cultural heritage.
            </p>
            
            <h2>Our Mission</h2>
            <p>
              To provide delicious, hygienic, and affordable food that brings people together. 
              We believe in using only the freshest ingredients and traditional cooking methods 
              to deliver an unforgettable dining experience.
            </p>

            <h2>Why Choose Us?</h2>
            <ul>
              <li>✅ 100% Fresh Ingredients</li>
              <li>✅ Traditional Recipes</li>
              <li>✅ Hygienic Kitchen</li>
              <li>✅ Fast Delivery</li>
              <li>✅ Affordable Prices</li>
            </ul>
          </div>
          
          <div className="about-image">
            <img src="/images/restaurant.jpg" alt="Our Restaurant" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About