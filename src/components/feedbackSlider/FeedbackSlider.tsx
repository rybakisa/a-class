import {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {isTablet, isMobileOnly} from "react-device-detect";
import {FEEDBACK_DATA} from "../../data";

const getItemWidth = () => {
  if (isMobileOnly) {
    return 308;
  } else if (isTablet) {
    return 708;
  }

  return 808;
};
const INITIAL_ACTIVE_INDEX = 3;
const ITEM_WIDTH = getItemWidth();

const FeedbackSlider = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

  const swipeHandlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    onSwipedLeft: () => {
      if (activeIndex === FEEDBACK_DATA.length - 1) {
        return;
      }
      onItemClick(activeIndex + 1);
    },
    onSwipedRight: () => {
      if (activeIndex === 0) {
        return;
      }
      onItemClick(activeIndex - 1);
    },
  });

  const onItemClick = (index: number) => {
    const num = Math.abs(activeIndex - index);
    if (activeIndex < index) {
      setLeftPosition(leftPosition - ITEM_WIDTH * num);
    } else if (activeIndex > index) {
      setLeftPosition(leftPosition + ITEM_WIDTH * num);
    }
    setActiveIndex(index);
  };

  return (
    <div className="feedback-slider">
      <div
        style={{left: leftPosition}}
        className="feedback-slider__content"
        {...swipeHandlers}>
        {FEEDBACK_DATA.map((item, index) => (
          <div
            key={item.id}
            className="feedback-slider__item-wrapper"
            onClick={() => onItemClick(index)}>
            <div
              className={`feedback-slider-item ${
                activeIndex === index ? "feedback-slider-item--active" : ""
              }`}>
              <div className="feedback-slider-item__content">
                <div className="feedback-slider-item__info">
                  <img
                    src={item.photo}
                    alt=""
                    className="feedback-slider-item__photo"
                  />
                  <div className="feedback-slider-item__info-text">
                    <p className="feedback-slider-item__position">
                      {item.position}
                    </p>
                    <h5 className="feedback-slider-item__name">{item.name}</h5>
                    <p className="feedback-slider-item__workplace">
                      {item.workplace}
                    </p>
                  </div>
                </div>
                <div className="feedback-slider-item__text">{item.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback-slider-nav">
        {FEEDBACK_DATA.map((item, index) => (
          <div
            key={item.id}
            className={`feedback-slider-nav__item ${
              activeIndex === index ? "feedback-slider-nav__item--active" : ""
            }`}
            onClick={() => onItemClick(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSlider;
