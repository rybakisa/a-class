import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../images/footer/footer-logo.svg";
import licence from "./licence.pdf";
import agreement from "./agreement.pdf";
import privacy from "./privacy.pdf";

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
            href={agreement}>
            Пользовательское соглашение
          </a>
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href={privacy}>
            Политика конфиденциальности
          </a>
          <a
            className="footer__link"
            target="_blank"
            rel="noreferrer"
            href={licence}>
            Лицензия на образовательную деятельность
          </a>
        </div>
        <AnchorLink className="footer__btn-link" href="#contacts">
          Свяжитесь с нами
        </AnchorLink>
      </div>
    </footer>
  );
};

export default Footer;
