import ScrollableAnchor from "react-scrollable-anchor";
import bgImg from "../../../images/contact-screen/contact-screen-bg.png";
import ContactForm from "../../contactForm/ContactForm";

const ContactScreen = () => (
  <ScrollableAnchor id="contacts">
    <section className="contact-screen">
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
  </ScrollableAnchor>
);

export default ContactScreen;
