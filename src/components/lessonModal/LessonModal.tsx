import {SyntheticEvent, useEffect} from "react";

interface Props {
  onClose: () => void;
  lessonLink: string;
}

const LessonModal = ({onClose, lessonLink}: Props) => {
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
