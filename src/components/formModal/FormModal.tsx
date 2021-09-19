import {FormModalProps} from "../../types";
import successImg from "../../images/form-modal/success.png";
import errorImg from "../../images/form-modal/error.png";
import Modal from "../modal/Modal";

const FormModal = ({isError, onClose}: FormModalProps) => (
  <Modal onClickOutside={onClose}>
    <div className="form-modal">
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
  </Modal>
);

export default FormModal;
