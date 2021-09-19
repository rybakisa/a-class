import ScrollableAnchor from "react-scrollable-anchor";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import nameIcon from "../../../images/contact-screen/name-icon.svg";
import emailIcon from "../../../images/contact-screen/email-icon.svg";
import phoneIcon from "../../../images/contact-screen/phone-icon.svg";
import bgImg from "../../../images/contact-screen/contact-screen-bg.png";

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const ContactScreen = () => {
  const fieldsData = [
    {
      name: "name",
      placeholder: "Имя",
      icon: nameIcon,
    },
    {
      name: "email",
      placeholder: "Почта",
      type: "email",
      icon: emailIcon,
    },
    {
      name: "phone",
      placeholder: "Телефон",
      type: "phone",
      icon: phoneIcon,
    },
  ];

  const onSubmit = (values: FormValues) => {
    axios
      .post(
        "https://docs.google.com/forms/d/e/1FAIpQLSfRQWnqbD2j8rfGV5ojG2JYQGzSQgM-q_Qr9i6wU_lk5bq1aw/formResponse",
        values,
      )
      .then(() => console.log("success"))
      .catch(() => console.log("error"));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Обязательное поле"),
    email: Yup.string()
      .email("Введите валидный e-mail")
      .required("Обязательное поле"),
    phone: Yup.string().required("Обязательное поле"),
  });

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
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({errors, touched}) => (
              <Form className="form">
                {fieldsData.map((field) => (
                  <div
                    key={field.name}
                    className={`form__input-wrapper form__input-wrapper--${field.name}`}>
                    <img src={field.icon} alt="" className="form__input-icon" />
                    <Field
                      className={`form__input ${
                        errors[field.name as keyof FormValues] &&
                        touched[field.name as keyof FormValues]
                          ? "form__input--error"
                          : ""
                      }`}
                      id={field.name}
                      name={field.name}
                      type={field.type ? field.type : "text"}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="form__footer">
                  <button className="form__button" type="submit">
                    Свяжитесь с нами
                  </button>
                  {Object.keys(errors).length > 0 && (
                    <p className="form__error">
                      Какое-то из полей не заполнено или введено неверно!
                    </p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <img src={bgImg} alt="" className="contact-screen__bg" />
      </section>
    </ScrollableAnchor>
  );
};

export default ContactScreen;
