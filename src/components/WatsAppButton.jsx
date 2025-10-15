import React from 'react'

const WhatsAppButton = () => {
  const phoneNumber = "919876543210" // Replace with your actual number
  const message = "Hello! I'm interested in ordering food from Ennakku Foods. Can you help me with the menu?"
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="whatsapp-button">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Chat with us!</span>
      </a>
    </div>
  )
}

export default WhatsAppButton