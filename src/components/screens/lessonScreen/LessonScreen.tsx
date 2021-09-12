import React from "react";
import {ReactComponent as PlayIcon} from "../../../images/play-icon.svg";
import bgImg from "../../../images/lesson-screen-bg.png";

const LESSON_LINKS = [
  {
    key: "russian",
    text: "Русский язык",
    link: "",
  },
  {
    key: "math",
    text: "Математика",
    link: "",
  },
  {
    key: "memory",
    text: "Память",
    link: "",
  },
  {
    key: "algorithms",
    text: "Алгоритмы",
    link: "",
  },
];

const LessonScreen = () => {
  return (
    <section className="lesson-screen">
      <div className="lesson-screen__content">
        <div className="lesson-screen__text">
          <h2 className="lesson-screen__title">
            Посмотрите пробный урок прямо сейчас
          </h2>
          <span className="lesson-screen__desc">
            Мы используем лучшие образовательные практики и понятные решения,
            чтобы сделать уроки интересными для тедей и интуитивно простыми для
            педагогов
          </span>
        </div>
        <div className="lesson-screen__links">
          {LESSON_LINKS.map((link) => (
            <a
              key={link.key}
              className="lesson-screen__link"
              href={link.link}
              target="_blank"
              rel="noreferrer">
              <div className="lesson-screen__link-icon">
                <PlayIcon />
              </div>
              <span className="lesson-screen__link-text">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
      <img src={bgImg} alt="" className="lesson-screen__bg" />
    </section>
  );
};

export default LessonScreen;
