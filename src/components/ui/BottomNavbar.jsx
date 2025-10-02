    import React from 'react'
    import './Navbar.css'

    export default function BottomNavbar() {
    return (
        <div className="bottom-header">
        <div className="bottom-header-container">
            <div className="logo">
            <img src='/Ubers.png' alt="uber" />
            <div>Официальный партнер Uber в Москве</div>
            </div>

            <div className="contact-info">
            <div className="call-us">
                <span>Звоните нам ежедневно</span>
                <a href="#" className="phone">
                8 495 797 09 88
                </a>
            </div>

            <button className="callback-btn">заказать звонок</button>
            </div>
        </div>
        </div>
    )
    }
