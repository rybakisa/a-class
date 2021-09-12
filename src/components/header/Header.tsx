import React from "react";
import logo from "../../images/header-logo.svg";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__bg"></div>
      <div className="header__content">
        <img src={logo} className="header__logo" alt="" />
        <a className="header__link" href="#about">
          О нас
        </a>
        <a className="header__link" href="#partners">
          Партнерам
        </a>
        <a className="header__link" href="#contacts">
          Контакты
        </a>
        <a className="header__btn-link" href="#contacts">
          <Button isOutline text="Свяжитесь с нами" />
        </a>
        <a className="header__btn-link" href="https://teacher.aclass.ru/login">
          <Button text="Вход" />
        </a>
      </div>
    </header>
  );
};

export default Header;
