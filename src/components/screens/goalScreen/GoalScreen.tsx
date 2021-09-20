import {isMobile} from "react-device-detect";
import Button from "../../button/Button";
import GoalsSliderDesktop from "../../goalsSliderDesktop/GoalsSliderDesktop";
import GoalsSliderMobile from "../../goalsSliderMobile/GoalsSliderMobile";

const GoalScreen = () => {
  const renderProgramLink = () => (
    <a className="goal-screen__link" href="https://teacher.aclass.ru/login">
      <Button text="Попробуйте провести урок прямо сейчас" />
    </a>
  );

  return (
    <section className="goal-screen" id="about">
      <div className="goal-screen__content">
        <div className="goal-screen__text">
          <h2 className="goal-screen__title">
            Наша цель —<br />
            сделать уроки в школе эффективными и современными
          </h2>
          <span className="goal-screen__desc">
            Мы создали полностью готовые
            <br />к ежедневному применению
            <br />
            онлайн-уроки, которые содержит в себе
            <br />
            новейшие образовательные методики.
            <br />
            <br />
            Даже без особой подготовки к уроку
            <br />
            учитель проведет его без проблем.
          </span>
          {!isMobile && renderProgramLink()}
        </div>
        {!isMobile && <GoalsSliderDesktop />}
        {isMobile && <GoalsSliderMobile />}
        {isMobile && renderProgramLink()}
      </div>
    </section>
  );
};

export default GoalScreen;
