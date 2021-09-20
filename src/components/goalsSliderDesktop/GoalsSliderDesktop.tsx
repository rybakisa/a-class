import {useState} from "react";
import {GOALS_DATA} from "../../data";
import GoalItem from "../goalItem/GoalItem";

const INITIAL_ACTIVE_ITEM = "study";
const ITEM_HEIGHT = 199;
const TOP_MARGIN = 36;

const GoalsSlider = () => {
  const [activeItem, setActiveItem] = useState(INITIAL_ACTIVE_ITEM);
  const [topPosition, setTopPosition] = useState(0);

  const onItemClick = (key: string, index: number) => {
    setActiveItem(key);
    if (index === 0) {
      setTopPosition(-(ITEM_HEIGHT * (index - 1)));
    } else if (index === 1) {
      setTopPosition(0);
    } else {
      setTopPosition(-(ITEM_HEIGHT * (index - 1) + TOP_MARGIN));
    }
  };

  return (
    <div className="goals-slider">
      <div style={{top: topPosition}} className="goals-slider__content">
        {GOALS_DATA.map((item, index) => (
          <div
            key={item.key}
            className="goals-slider__item-wrapper"
            onClick={() => {
              if (item.link) return;
              onItemClick(item.key, index);
            }}>
            <GoalItem isActive={item.key === activeItem} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsSlider;
