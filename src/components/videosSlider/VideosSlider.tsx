import {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {isMobileOnly} from "react-device-detect";
import videosData from "../screens/videosScreen/videosData";
import VideoItem from "../videoItem/VideoItem";

interface Props {
  setActiveVideo: (id: string) => void;
}

const INITIAL_ACTIVE_INDEX = 1;
const ITEM_WIDTH = isMobileOnly ? 184 : 304;

const VideosSlider = ({setActiveVideo}: Props) => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex === videosData.length - 1) {
        return;
      }
      onItemSwipe(activeIndex + 1);
    },
    onSwipedRight: () => {
      if (activeIndex === 0) {
        return;
      }
      onItemSwipe(activeIndex - 1);
    },
  });

  const onItemSwipe = (index: number) => {
    const num = Math.abs(activeIndex - index);
    if (activeIndex < index) {
      setLeftPosition(leftPosition - ITEM_WIDTH * num);
    } else if (activeIndex > index) {
      setLeftPosition(leftPosition + ITEM_WIDTH * num);
    }
    setActiveIndex(index);
  };

  return (
    <div className="videos-slider">
      <div
        style={{left: leftPosition}}
        className="videos-slider__content"
        {...swipeHandlers}>
        {videosData.map((video, index) => (
          <VideoItem
            key={video.id}
            onClick={() => setActiveVideo(video.videoId)}
            title={video.title}
            isDisabled={activeIndex !== index}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosSlider;
