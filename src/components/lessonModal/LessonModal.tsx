import {LessonModalProps} from "../../types";
import Modal from "../modal/Modal";

const LessonModal = ({onClose, lessonLink}: LessonModalProps) => (
  <Modal onClickOutside={onClose}>
    <iframe
      className="lesson-modal-frame"
      src={lessonLink}
      title="lesson frame"
      allowFullScreen
    />
  </Modal>
);

export default LessonModal;
