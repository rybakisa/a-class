import Lottie, {LottieRefCurrentProps} from "lottie-react";
import studyItemsAnimation from "../../../lotties/study-items.json";
import bgImg from "../../../images/study-screen/study-screen-bg.png";
import {useEffect, useRef} from "react";
import {useOnScreen} from "../../../hooks";

const StudyScreen = () => {
  const textRef = useRef(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const isVisible = useOnScreen(textRef);

  useEffect(() => {
    if (isVisible && lottieRef.current) {
      lottieRef.current.play();
    }
  });

  return (
    <section className="study-screen">
      <div className="study-screen__content-wrapper">
        <div className="study-screen__content">
          <h2 className="study-screen__title">
            Учебная
            <br />и <span className="study-screen__title-accent">вне</span>
            урочная
            <br />
            деятельность
          </h2>
          <span ref={textRef} className="study-screen__desc">
            А-класс идеально подходит не только
            <br />
            для школ, но для организаций
            <br />
            дополнительного образования
          </span>
        </div>
        <img src={bgImg} alt="" className="study-screen__bg" />
      </div>
      <div className="study-screen__animation">
        <Lottie
          animationData={studyItemsAnimation}
          autoplay={false}
          lottieRef={lottieRef}
        />
      </div>
    </section>
  );
};

export default StudyScreen;
