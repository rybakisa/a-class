import {useState} from "react";
import videosData from "./videosData";
import videoIcon from "../../../images/video-icon.png";
import VideoModal from "../../videoModal/VideoModal";

const VideosScreen = () => {
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <section className="videos-screen">
      <div className="videos-screen__content">
        {videosData.map((video) => (
          <div
            key={video.id}
            className="videos-screen__item"
            onClick={() => setActiveVideo(video.videoId)}>
            <div className="videos-screen__item-block">
              <img src={videoIcon} alt="" />
            </div>
            <p className="videos-screen__item-text">{video.title}</p>
          </div>
        ))}
      </div>
      {activeVideo && (
        <VideoModal onClose={() => setActiveVideo("")} embedId={activeVideo} />
      )}
    </section>
  );
};

export default VideosScreen;
