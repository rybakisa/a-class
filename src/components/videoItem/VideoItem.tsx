import videoIcon from "../../images/video-icon.png";

interface Props {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const VideoItem = ({title, onClick, isDisabled}: Props) => (
  <div
    className={`video-item ${isDisabled ? "video-item--disabled" : ""}`}
    onClick={onClick}>
    <div className="video-item__block">
      <img src={videoIcon} alt="" />
    </div>
    <p className="video-item__text">{title}</p>
  </div>
);

export default VideoItem;
