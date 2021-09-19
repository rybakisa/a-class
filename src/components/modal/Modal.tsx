import {useRef} from "react";
import {useOpenModal, useClickOutside} from "../../hooks";
import {ModalProps} from "../../types";

const Modal = ({children, onClickOutside}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOpenModal();
  useClickOutside(ref, onClickOutside);

  return (
    <div className="modal">
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Modal;
