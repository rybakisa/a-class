import React from "react";
import titleImg from "../../../images/title-img.png";
import titleBgOne from "../../../images/title-bg-one.png";
import titleBgTwo from "../../../images/title-bg-two.png";
import titleBgThree from "../../../images/title-bg-three.png";
import titleBgFour from "../../../images/title-bg-four.png";
import Button from "../../button/Button";

const titleBgImages = [
  {
    src: titleBgOne,
    modifier: "one",
  },
  {
    src: titleBgTwo,
    modifier: "two",
  },
  {
    src: titleBgThree,
    modifier: "three",
  },
  {
    src: titleBgFour,
    modifier: "four",
  },
];

const TitleScreen = () => {
  return (
    <section className="title-screen">
      <div className="title-screen__content-wrapper">
        <div className="title-screen__text">
          <h2 className="title-screen__title">
            Новый взгляд
            <br />
            на учебные методики
          </h2>
          <p className="title-screen__subtitle">
            А-Класс превратит школу в надежный фундамент
            <br />
            для яркой и успешной жизни
          </p>
          <Button text="Начать занятия" />
        </div>
        <img src={titleImg} alt="" className="title-screen__img" />
      </div>
      {titleBgImages.map((img) => (
        <img
          src={img.src}
          alt=""
          key={img.modifier}
          className={`title-screen__bg-img title-screen__bg-img--${img.modifier}`}
        />
      ))}
    </section>
  );
};

export default TitleScreen;
