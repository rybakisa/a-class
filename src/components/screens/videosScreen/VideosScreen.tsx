import {useState} from "react";
import {isMobile} from "react-device-detect";
import VideoModal from "../../videoModal/VideoModal";
import VideoItem from "../../videoItem/VideoItem";
import VideosSlider from "../../videosSlider/VideosSlider";
import {VIDEOS_DATA} from "../../../data";

const VideosScreen = () => {
  const [activeVideo, setActiveVideo] = useState("");

  return (
    <section className="videos-screen">
      {isMobile ? (
        <VideosSlider setActiveVideo={setActiveVideo} />
      ) : (
        <div className="videos-screen__content">
          {VIDEOS_DATA.map((video) => (
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
