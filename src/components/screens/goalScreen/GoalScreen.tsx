import {isMobile} from "react-device-detect";
import ScrollableAnchor from "react-scrollable-anchor";
import Button from "../../button/Button";
import GoalsSliderDesktop from "../../goalsSliderDesktop/GoalsSliderDesktop";
import GoalsSliderMobile from "../../goalsSliderMobile/GoalsSliderMobile";

const GoalScreen = () => {
  const renderProgramLink = () => (
    <a className="goal-screen__link" href="https://teacher.aclass.ru/login">
      <Button text="Попробуйте программу прямо сейчас" />
    </a>
  );

  return (
    <ScrollableAnchor id="about">
      <section className="goal-screen">
        <div className="goal-screen__content">
          <div className="goal-screen__text">
            <h2 className="goal-screen__title">
              Наша цель — пересмотреть подход к обучению детей
            </h2>
            <span className="goal-screen__desc">
              Мы создали полностью готовую
              <br />к ежедневному применению онлайн платформу, которая содержит
              в себе новейшие образовательные методики.
              <br />
              <br />
              Даже с начинающим учителем
              <br />
              Вы сможете достигнуть хороших результатов.
            </span>
            {!isMobile && renderProgramLink()}
          </div>
          {!isMobile && <GoalsSliderDesktop />}
          {isMobile && <GoalsSliderMobile />}
          {isMobile && renderProgramLink()}
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default GoalScreen;
