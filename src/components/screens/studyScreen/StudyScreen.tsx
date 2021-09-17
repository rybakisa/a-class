import bgImg from "../../../images/study-screen/study-screen-bg.png";
import itemsImg from "../../../images/study-screen/study-screen-items.png";

const StudyScreen = () => {
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
          <span className="study-screen__desc">
            А-класс идеально подходит не только
            <br />
            для школ, но для организаций
            <br />
            дополнительного образования
          </span>
        </div>
        <img src={bgImg} alt="" className="study-screen__bg" />
      </div>
      <img src={itemsImg} alt="" className="study-screen__items-img" />
    </section>
  );
};

export default StudyScreen;
