import bgImg from "../../../images/contact-screen/contact-screen-bg.png";
import ContactForm from "../../contactForm/ContactForm";

const ContactScreen = () => (
  <section className="contact-screen" id="contacts">
    <div className="contact-screen__content">
      <h2 className="contact-screen__title">
        Оставьте заявку
        <br />и получите неделю обучения
        <br />
        софт-скиллам бесплатно
      </h2>
      <ContactForm />
    </div>
    <img src={bgImg} alt="" className="contact-screen__bg" />
  </section>
);

export default ContactScreen;
