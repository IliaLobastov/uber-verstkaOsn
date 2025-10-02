import React from 'react';
import './Navbar.css';

export default function TopNavbar() {
  return (
    <div className="top-header">
      <div className="navbar-container">
        <nav className="menu">
          <a href="#">Главная</a>
          <a href="#">Со своим автомобилем</a>
          <a href="#">На автомобиле компании</a>
          <a href="#">Требования</a>
          <a href="#">Контакты</a>
          <a href="#">Оставить заявку</a>
        </nav>
      </div>
    </div>
  );
}