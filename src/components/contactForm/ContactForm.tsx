import axios from "axios";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {FormValues} from "../../types";
import {useState} from "react";
import FormModal from "../formModal/FormModal";
import {FIELDS_DATA} from "../../data";

const ContactForm = () => {
  const [isFormModal, setFormModal] = useState(false);
  const [isError, setError] = useState(false);

  const onSubmit = (values: FormValues) => {
    const valuesToSend = {
      "entry.1476608727": values.name,
      "entry.916559409": values.phone,
      "entry.1500479875": values.email,
    };
    axios
      .post(
        "https://docs.google.com/forms/d/e/1FAIpQLSfRQWnqbD2j8rfGV5ojG2JYQGzSQgM-q_Qr9i6wU_lk5bq1aw/formResponse",
        valuesToSend,
      )
      .then(() => setFormModal(true))
      .catch(() => {
        setError(true);
        setFormModal(true);
      });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Обязательное поле"),
    email: Yup.string()
      .email("Введите валидный e-mail")
      .required("Обязательное поле"),
    phone: Yup.string().required("Обязательное поле"),
  });

  return (
    <>
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
            {FIELDS_DATA.map((field) => (
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
      {isFormModal && (
        <FormModal isError={isError} onClose={() => setFormModal(false)} />
      )}
    </>
  );
};

export default ContactForm;
