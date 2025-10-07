import React from 'react'
// import './MobileCard.css'

export default function MobileCard({ section }) {
  return (
    <div
      className="mobile-card"
      style={{ backgroundImage: `url(${section.image})`, gridArea: section.gridArea }}
    >
      <div className="mobile-card-overlay">
        <h3>{section.title}</h3>
       
          <div className="real-icon">
            <img src="/Плюс.png" alt="plus" />
          </div>
        </div>
      
    </div>
  )
}
