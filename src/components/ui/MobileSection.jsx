import React from 'react'
import MobileCard from './MobileCard'
// import MobileCard from './MobileCard'

export default function MobileSection({ mobileSections }) {
  return (
    <div className="mobile-container">
      <span>ВОЗМОЖНОСТИ</span>
      <h2>МОБИЛЬНОЕ ПРИЛОЖЕНИЕ УБЕР</h2>
      <p>
        Сделайте заказ, совершите поездку и оплатите ее стоимость, используя свой мобильный телефон
      </p>
      <div className="mobile-grid-container">
        {mobileSections.map(section => (
          <MobileCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  )
}
