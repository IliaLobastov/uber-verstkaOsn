import React from 'react'
import './ReasonCard.css'

export default function ReasonCard({ reason }) {
  return (
    <div className="card" style={{ gridArea: reason.gridArea }}>
      <div className="fon">
        <img src={reason.image} alt={reason.alt} />
      </div>
      <div className="card-desription-container">
        <h3>{reason.title}</h3>
        <p>{reason.paragraph}</p>
      </div>
    </div>
  )
}
