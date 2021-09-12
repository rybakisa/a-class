import React from "react";
import logo from "../../images/footer/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__info">
          <img src={logo} alt="" className="footer__logo" />
          <a className="footer__phone" href="tel:88005507600">
            8 (800) 550 76 00
          </a>
        </div>
        <div className="footer__links">
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href="/agreement.pdf">
            Пользовательское соглашение
          </a>
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href="/privacy.pdf">
            Политика конфиденциальности
          </a>
        </div>
        <a className="footer__btn-link" href="#contacts">
          Свяжитесь с нами
        </a>
      </div>
    </footer>
  );
};

export default Footer;
