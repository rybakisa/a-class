import ScrollableAnchor from "react-scrollable-anchor";
import nameIcon from "../../../images/contact-screen/name-icon.svg";
import emailIcon from "../../../images/contact-screen/email-icon.svg";
import phoneIcon from "../../../images/contact-screen/phone-icon.svg";
import bgImg from "../../../images/contact-screen/contact-screen-bg.png";

const ContactScreen = () => {
  return (
    <ScrollableAnchor id="contacts">
      <section className="contact-screen">
        <div className="contact-screen__content">
          <h2 className="contact-screen__title">
            Оставьте заявку
            <br />и получите неделю обучения
            <br />
            софт-скиллам бесплатно
          </h2>
          <form
            className="form"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfRQWnqbD2j8rfGV5ojG2JYQGzSQgM-q_Qr9i6wU_lk5bq1aw/formResponse"
            method="post">
            <div className="form__input-wrapper form__input-wrapper--name">
              <img src={nameIcon} alt="" className="form__input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Имя"
                required
                className="form__input"
              />
            </div>
            <div className="form__input-wrapper">
              <img src={emailIcon} alt="" className="form__input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Почта"
                required
                className="form__input"
              />
            </div>
            <div className="form__input-wrapper form__input-wrapper--phone">
              <img src={phoneIcon} alt="" className="form__input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                required
                className="form__input"
              />
            </div>
            <div className="form__footer">
              <button className="form__button" type="submit">
                Свяжитесь с нами
              </button>
            </div>
          </form>
        </div>
        <img src={bgImg} alt="" className="contact-screen__bg" />
      </section>
    </ScrollableAnchor>
  );
};

export default ContactScreen;
