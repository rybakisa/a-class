import {SyntheticEvent, useEffect} from "react";

interface Props {
  onClose: () => void;
  embedId: string;
}

interface YoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed = ({embedId}: YoutubeEmbedProps) => (
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
    className="video-modal__frame"
  />
);

const VideoModal = ({onClose, embedId}: Props) => {
  useEffect(() => {
    document.body.className = "modal-opened";
    return () => {
      document.body.className = "";
    };
  });

  const handleClickOutside = (e: SyntheticEvent) => {
    if (e.target === document.querySelector(".video-modal")) {
      onClose();
    } else return;
  };

  return (
    <div onClick={handleClickOutside} className="video-modal">
      <YoutubeEmbed embedId={embedId} />
    </div>
  );
};

export default VideoModal;
