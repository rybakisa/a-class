import {useRef} from "react";
import {useClickOutside, useOpenModal} from "../../hooks";
import {VideoModalProps} from "../../types";

const VideoModal = ({onClose, embedId}: VideoModalProps) => {
  const ref = useRef<HTMLIFrameElement>(null);

  useOpenModal();
  useClickOutside(ref, onClose);

  return (
    <div className="video-modal">
      <iframe
        ref={ref}
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="video-modal__frame"
      />
    </div>
  );
};

export default VideoModal;
