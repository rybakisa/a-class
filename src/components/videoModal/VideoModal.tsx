import {VideoModalProps} from "../../types";
import Modal from "../modal/Modal";

const VideoModal = ({onClose, embedId}: VideoModalProps) => (
  <Modal onClickOutside={onClose}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="video-modal-frame"
    />
  </Modal>
);

export default VideoModal;
