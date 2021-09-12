import React, {useState} from "react";
import feedbackData from "./feedbackData";

const INITIAL_ACTIVE_INDEX = 3;
const ITEM_WIDTH = 808;

const FeedbackSlider = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [leftPosition, setLeftPosition] = useState(0);

  const test = (index: number) => {
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
      <div style={{left: leftPosition}} className="feedback-slider__content">
        {feedbackData.map((item, index) => (
          <div
            key={item.id}
            className="feedback-slider__item-wrapper"
            onClick={() => test(index)}>
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
                  <p className="feedback-slider-item__position">
                    {item.position}
                  </p>
                  <h5 className="feedback-slider-item__name">{item.name}</h5>
                  <p className="feedback-slider-item__workplace">
                    {item.workplace}
                  </p>
                </div>
                <div className="feedback-slider-item__text">{item.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback-slider-nav">
        {feedbackData.map((item, index) => (
          <div
            key={item.id}
            className={`feedback-slider-nav__item ${
              activeIndex === index ? "feedback-slider-nav__item--active" : ""
            }`}
            onClick={() => test(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSlider;
