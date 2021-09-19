import {useState} from "react";
import {isMobile} from "react-device-detect";
import videosData from "./videosData";
import VideoModal from "../../videoModal/VideoModal";
import VideoItem from "../../videoItem/VideoItem";
import VideosSlider from "../../videosSlider/VideosSlider";

const VideosScreen = () => {
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <section className="videos-screen">
      {isMobile ? (
        <VideosSlider setActiveVideo={setActiveVideo} />
      ) : (
        <div className="videos-screen__content">
          {videosData.map((video) => (
            <VideoItem
              key={video.id}
              onClick={() => setActiveVideo(video.videoId)}
              title={video.title}
              image={video.image}
            />
          ))}
        </div>
      )}
      {activeVideo && (
        <VideoModal onClose={() => setActiveVideo("")} embedId={activeVideo} />
      )}
    </section>
  );
};

export default VideosScreen;
