import {isMobileOnly} from "react-device-detect";
import logo from "../../images/header-logo.svg";
import burgerIcon from "../../images/burger-icon.svg";
import Button from "../button/Button";
import {useState} from "react";
import MobileHeader from "../mobileHeader/MobileHeader";

const Header = () => {
  const [mobileHeader, setMobileHeader] = useState(false);

  const renderHeaderContent = () => (
    <>
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
    </>
  );

  return (
    <header className="header">
      <div className="header__bg"></div>
      <div className="header__content">
        <img src={logo} className="header__logo" alt="" />
        {!isMobileOnly && renderHeaderContent()}
        {isMobileOnly && (
          <img src={burgerIcon} alt="" onClick={() => setMobileHeader(true)} />
        )}
      </div>
      {mobileHeader && <MobileHeader onClose={() => setMobileHeader(false)} />}
    </header>
  );
};

export default Header;
