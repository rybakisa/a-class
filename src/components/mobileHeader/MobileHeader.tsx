import {useEffect} from "react";
import closeIcon from "../../images/close-icon.svg";
import logo from "../../images/mobile-header-logo.svg";

interface Props {
  onClose: () => void;
}

const MobileHeader = ({onClose}: Props) => {
  useEffect(() => {
    document.body.className = "modal-opened";
    return () => {
      document.body.className = "";
    };
  });

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
        <a className="mobile-header__link" href="#about" onClick={onClose}>
          О нас
        </a>
        <a className="mobile-header__link" href="#partners" onClick={onClose}>
          Партнерам
        </a>
        <a className="mobile-header__link" href="#contacts" onClick={onClose}>
          Контакты
        </a>
        <a className="mobile-header__btn-link" href="#contacts">
          Свяжитесь с нами
        </a>
        <a
          className="mobile-header__btn-link"
          href="https://teacher.aclass.ru/login">
          Вход
        </a>
      </div>
    </div>
  );
};

export default MobileHeader;