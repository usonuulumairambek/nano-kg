import React from "react";
import "./header.css";
import logo from "./logotitle.png"
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
          <img src={logo} alt="" />
      </div>
      <ul className="header__menu">
        <li className="header__menu-item">
          <a href="./">Главная</a>
        </li>
        <li className="header__menu-item">
          <a href="./">Фотогалерея</a>
        </li>{" "}
        <li className="header__menu-item">
          <a href="./">Маркировка</a>
        </li>{" "}
        <li className="header__menu-item">
          <a href="./">Структура</a>
        </li>{" "}
        <li className="header__menu-item">
          <a href="./">Контакты</a>
        </li>{" "}
        <li className="header__menu-item">
          <a href="./">О нас</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
