import {isTablet} from "react-device-detect";
import ScrollableAnchor from "react-scrollable-anchor";
import Button from "../../button/Button";
import GoalsSlider from "../../goalsSlider/GoalsSlider";

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
            {!isTablet && renderProgramLink()}
          </div>
          <GoalsSlider />
          {isTablet && renderProgramLink()}
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default GoalScreen;
