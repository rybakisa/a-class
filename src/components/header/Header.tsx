import {isMobileOnly} from "react-device-detect";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../images/header-logo.svg";
import burgerIcon from "../../images/burger-icon.svg";
import Button from "../button/Button";
import {useState} from "react";
import MobileHeader from "../mobileHeader/MobileHeader";

const Header = () => {
  const [mobileHeader, setMobileHeader] = useState(false);

  const renderHeaderContent = () => (
    <>
      <AnchorLink
        className="header__link"
        href="#about"
        offset={window.devicePixelRatio === 1 ? "-170" : "0"}>
        О нас
      </AnchorLink>
      <AnchorLink
        className="header__link"
        href="#partners"
        offset={window.devicePixelRatio === 1 ? "-565" : "0"}>
        Партнерам
      </AnchorLink>
      <AnchorLink
        className="header__link"
        href="#contacts"
        offset={window.devicePixelRatio === 1 ? "-1060" : "0"}>
        Контакты
      </AnchorLink>
      <AnchorLink
        className="header__btn-link"
        href="#contacts"
        offset={window.devicePixelRatio === 1 ? "-1060" : "0"}>
        <Button isOutline text="Свяжитесь с нами" />
      </AnchorLink>
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
