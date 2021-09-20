import {useOpenModal} from "../../hooks";
import AnchorLink from "react-anchor-link-smooth-scroll";
import closeIcon from "../../images/close-icon.svg";
import logo from "../../images/mobile-header-logo.svg";
import {MobileHeaderProps} from "../../types";

const MobileHeader = ({onClose}: MobileHeaderProps) => {
  useOpenModal();

  return (
    <div className="mobile-header">
      <div className="mobile-header__content">
        <img
          src={closeIcon}
          alt=""
          onClick={onClose}
          className="mobile-header__close"
        />
        <img src={logo} alt="" className="mobile-header__logo" />
        <AnchorLink
          className="mobile-header__link"
          href="#about"
          onClick={onClose}>
          О нас
        </AnchorLink>
        <AnchorLink
          className="mobile-header__link"
          href="#partners"
          onClick={onClose}>
          Партнерам
        </AnchorLink>
        <AnchorLink
          className="mobile-header__link"
          href="#contacts"
          onClick={onClose}>
          Контакты
        </AnchorLink>
        <AnchorLink
          className="mobile-header__btn-link"
          href="#contacts"
          onClick={onClose}>
          Свяжитесь с нами
        </AnchorLink>
        <a
          className="mobile-header__btn-link mobile-header__btn-link--fill"
          href="https://teacher.aclass.ru/login">
          Вход
        </a>
      </div>
    </div>
  );
};

export default MobileHeader;
