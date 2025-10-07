import React from 'react'
import './Sections.css'
import ReasonCard from './ReasonCard'

export default function Reasons({ reasons }) {
  return (
    <div className="cont-eight-reasons">
      <span>ПРЕИМУЩЕСТВА</span>
      <h2>8 причин начать работать с нами</h2>
      <div className="grid-container">
        {reasons.map((reason) => (
          <ReasonCard key={reason.id} reason={reason} />
        ))}
      </div>
    </div>
  )
}
