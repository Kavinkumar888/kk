import React, { useState } from 'react'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      name: 'Chicken Biryani',
      price: 250,
      category: 'main-course',
      image: '/images/biryani.jpg',
      description: 'Flavorful rice with tender chicken pieces'
    },
    {
      id: 2,
      name: 'Masala Dosa',
      price: 120,
      category: 'breakfast',
      image: '/images/dosa.jpg',
      description: 'Crispy crepe with spiced potato filling'
    },
    {
      id: 3,
      name: 'Kerala Parotta',
      price: 80,
      category: 'main-course',
      image: '/images/parotta.jpg',
      description: 'Layered flatbread from Kerala'
    },
    {
      id: 4,
      name: 'Chicken 65',
      price: 180,
      category: 'starter',
      image: '/images/chicken65.jpg',
      description: 'Spicy deep-fried chicken'
    },
    {
      id: 5,
      name: 'Filter Coffee',
      price: 50,
      category: 'beverages',
      image: '/images/coffee.jpg',
      description: 'Traditional South Indian filter coffee'
    },
    {
      id: 6,
      name: 'Gulab Jamun',
      price: 60,
      category: 'dessert',
      image: '/images/gulabjamun.jpg',
      description: 'Sweet milk balls in sugar syrup'
    }
  ]

  const categories = ['all', 'main-course', 'breakfast', 'starter', 'beverages', 'dessert']

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-description">{item.description}</p>
              <div className="item-price">₹{item.price}</div>
              <button className="add-to-cart-btn">
                <i className="fas fa-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu