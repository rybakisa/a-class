import {useRef} from "react";
import {useOpenModal, useClickOutside} from "../../hooks";
import {FormModalProps} from "../../types";
import successImg from "../../images/form-modal/success.png";
import errorImg from "../../images/form-modal/error.png";

const FormModal = ({isError, onClose}: FormModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOpenModal();
  useClickOutside(ref, onClose);

  return (
    <div className="form-modal">
      <div ref={ref} className="form-modal__content">
        <h4 className="form-modal__title">
          {isError
            ? "Ошибка сервера"
            : "Спасибо! Наши менеджеры скоро свяжутся с вами"}
        </h4>
        <img
          alt=""
          src={isError ? errorImg : successImg}
          className="form-modal__img"
        />
        <button type="button" className="form-modal__btn" onClick={onClose}>
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default FormModal;
