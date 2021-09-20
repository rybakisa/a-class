import {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {isMobileOnly} from "react-device-detect";
import VideoItem from "../videoItem/VideoItem";
import {VideosSliderProps} from "../../types";
import {VIDEOS_DATA} from "../../data";

const INITIAL_ACTIVE_INDEX = 1;
const ITEM_WIDTH = isMobileOnly ? 184 : 304;

const VideosSlider = ({setActiveVideo}: VideosSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

  const swipeHandlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    onSwipedLeft: () => {
      if (activeIndex === VIDEOS_DATA.length - 1) {
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
        {VIDEOS_DATA.map((video, index) => (
          <VideoItem
            key={video.id}
            onClick={() => setActiveVideo(video.videoId)}
            title={video.title}
            isDisabled={activeIndex !== index}
            image={video.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosSlider;
