import {useRef} from "react";
import {useOpenModal, useClickOutside} from "../../hooks";
import {LessonModalProps} from "../../types";

const LessonModal = ({onClose, lessonLink}: LessonModalProps) => {
  const ref = useRef<HTMLIFrameElement>(null);

  useOpenModal();
  useClickOutside(ref, onClose);

  return (
    <div className="lesson-modal">
      <iframe
        ref={ref}
        className="lesson-modal__frame"
        src={lessonLink}
        title="lesson frame"
        allowFullScreen
      />
    </div>
  );
};

export default LessonModal;
