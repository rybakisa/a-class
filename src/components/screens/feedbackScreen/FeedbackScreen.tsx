import React from "react";
import FeedbackSlider from "../../feedbackSlider/FeedbackSlider";

const FeedbackScreen = () => {
  return (
    <section className="feedback-screen">
      <h2 className="feedback-screen__title">Отзывы о А-Классе</h2>
      <FeedbackSlider />
    </section>
  );
};

export default FeedbackScreen;
