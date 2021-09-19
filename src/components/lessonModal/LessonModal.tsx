import {SyntheticEvent, useEffect} from "react";
import {LessonModalProps} from "../../types";

const LessonModal = ({onClose, lessonLink}: LessonModalProps) => {
  useEffect(() => {
    document.body.className = "modal-opened";
    return () => {
      document.body.className = "";
    };
  });

  const handleClickOutside = (e: SyntheticEvent) => {
    if (e.target === document.querySelector(".lesson-modal")) {
      onClose();
    } else return;
  };

  return (
    <div onClick={handleClickOutside} className="lesson-modal">
      <iframe
        className="lesson-modal__frame"
        src={lessonLink}
        title="lesson frame"
        allowFullScreen
      />
    </div>
  );
};

export default LessonModal;
