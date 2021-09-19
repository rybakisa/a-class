import bgImg from "../../../images/title-screen-bg.png";
import Button from "../../button/Button";
import Header from "../../header/Header";

const TitleScreen = () => (
  <section className="title-screen">
    <Header />
    <img src={bgImg} alt="" className="title-screen__bg" />
    <div className="title-screen__content-wrapper">
      <div className="title-screen__content">
        <h1 className="title-screen__title">
          Новая эра
          <br />в образовании
        </h1>
        <span className="title-screen__text">
          А-Класс превратит школу в надежный
          <br />
          фундамент для яркой и успешной жизни
        </span>
        <a
          className="title-screen__link"
          href="https://teacher.aclass.ru/login">
          <Button text="Начать занятия" />
        </a>
      </div>
    </div>
  </section>
);

export default TitleScreen;
