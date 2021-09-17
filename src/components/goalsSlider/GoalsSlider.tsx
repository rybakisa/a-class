import {isMobile} from "react-device-detect";
import {useState} from "react";
import goalsData from "./goalsData";

const INITIAL_ACTIVE_ITEM = "study";
const ITEM_HEIGHT = 199;
const TOP_MARGIN = 36;

const GoalsSlider = () => {
  const [activeItem, setActiveItem] = useState(
    isMobile ? null : INITIAL_ACTIVE_ITEM,
  );
  const [topPosition, setTopPosition] = useState(0);

  const onItemClick = (key: string, index: number) => {
    if (isMobile) return;

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
        {goalsData.map((item, index) => (
          <div key={item.key} className="goals-slider__item-wrapper">
            <div
              className={`goals-slider-item ${
                item.key === activeItem ? "goals-slider-item--active" : ""
              }`}
              onClick={() => onItemClick(item.key, index)}>
              <item.icon />
              <div className="goals-slider-item__text">
                <h5 className="goals-slider-item__title">{item.title}</h5>
                <span className="goals-slider-item__desc">{item.text}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsSlider;
