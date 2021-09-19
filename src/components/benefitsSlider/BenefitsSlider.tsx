import {useState} from "react";
import {isMobileOnly} from "react-device-detect";
import benefitsData from "./benefitsData";

const INITIAL_ACTIVE_INDEX = 2;
const ITEM_WIDTH = isMobileOnly ? 292 : 520;

const BenefitsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

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
    <div className="benefits-slider">
      <div style={{left: leftPosition}} className="benefits-slider__content">
        {benefitsData.map((item, index) => (
          <div
            key={item.key}
            className="benefits-slider__item-wrapper"
            onClick={() => onItemClick(index)}>
            <div
              className={`benefits-slider-item ${
                activeIndex === index ? "benefits-slider-item--active" : ""
              }`}>
              <h5 className="benefits-slider-item__title">{item.title}</h5>
              <span className="benefits-slider-item__desc">{item.text}</span>
              <img
                src={item.img}
                alt=""
                className="benefits-slider-item__img"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="benefits-slider-nav">
        {benefitsData.map((item, index) => (
          <div
            key={item.key}
            className={`benefits-slider-nav__item ${
              activeIndex === index ? "benefits-slider-nav__item--active" : ""
            }`}
            onClick={() => onItemClick(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSlider;
