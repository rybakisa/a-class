import {useState} from "react";
import {useSwipeable} from "react-swipeable";
import {isMobileOnly} from "react-device-detect";
import GoalItem from "../goalItem/GoalItem";
import goalsData from "../screens/goalScreen/goalsData";

const INITIAL_ACTIVE_INDEX = 3;
const ITEM_WIDTH = isMobileOnly ? 270 : 365;

const GoalsSliderMobile = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex === goalsData.length - 1) {
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
        {goalsData.map((item, index) => (
          <div key={item.key} className="goals-slider-mobile__item-wrapper">
            <GoalItem isActive={index === activeIndex} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsSliderMobile;
