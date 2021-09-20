import {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {isMobileOnly} from "react-device-detect";
import GoalItem from "../goalItem/GoalItem";
import {GOALS_DATA} from "../../data";

const INITIAL_ACTIVE_INDEX = 3;
const ITEM_WIDTH = isMobileOnly ? 270 : 365;

const GoalsSliderMobile = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

  const swipeHandlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    onSwipedLeft: () => {
      if (activeIndex === GOALS_DATA.length - 1) {
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
    <div className="goals-slider-mobile">
      <div
        style={{left: leftPosition}}
        className="goals-slider-mobile__content"
        {...swipeHandlers}>
        {GOALS_DATA.map((item, index) => (
          <div
            onClick={() => {
              if (item.link) return;
              onItemSwipe(index);
            }}
            key={item.key}
            className="goals-slider-mobile__item-wrapper">
            <GoalItem isActive={index === activeIndex} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsSliderMobile;
