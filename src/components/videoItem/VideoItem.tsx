import videoIcon from "../../images/video-icon.png";
import {VideoItemProps} from "../../types";

const VideoItem = ({title, onClick, isDisabled}: VideoItemProps) => (
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
