import React from 'react'

const Cart = () => {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      <div className="empty-cart">
        <i className="fas fa-shopping-cart"></i>
        <h2>Your cart is empty</h2>
        <p>Add some delicious items from our menu!</p>
      </div>
    </div>
  )
}

export default Cart