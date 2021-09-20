import ScrollableAnchor from "react-scrollable-anchor";
import {useState} from "react";
import LessonModal from "../../lessonModal/LessonModal";
import {ReactComponent as PlayIcon} from "../../../images/play-icon.svg";
import bgImg from "../../../images/lesson-screen-bg.png";

const LESSONS = [
  {
    key: "russian",
    text: "Русский язык",
    link: "https://teacher.aclass.ru/storage/presentations/index.html?json=03/02/rus0205&dir=03/02/rus0205/0b08e58c-e561-4e47-9b8e-0f0d518c1d7e&slide=0",
  },
  {
    key: "math",
    text: "Математика",
    link: "https://teacher.aclass.ru/storage/presentations/index.html?json=01/01/math0104&dir=01/01/math0104/187a4eb1-54d0-4876-96e5-4dd3547d3521&slide=0",
  },
  {
    key: "memory",
    text: "Память",
    link: "https://teacher.aclass.ru/storage/presentations/index.html?json=01/01/pam0102&dir=01/01/pam0102/4c2c1ab2-b3fc-43ad-941f-0e9b1a925a8b&slide=0",
  },
  {
    key: "algorithms",
    text: "Алгоритмы",
    link: "https://teacher.aclass.ru/storage/presentations/index.html?json=01/01/alg0101&dir=01/01/alg0101/6f7f7361-a9e3-485c-8836-ea3de3569b96&slide=0",
  },
];

const LessonScreen = () => {
  const [activeLesson, setActiveLesson] = useState("");

  return (
    <ScrollableAnchor id="lessons">
      <section className="lesson-screen">
        <div className="lesson-screen__content">
          <div className="lesson-screen__text">
            <h2 className="lesson-screen__title">
              Посмотрите пробный урок прямо сейчас
            </h2>
            <span className="lesson-screen__desc">
              Мы используем лучшие образовательные практики и понятные решения,
              чтобы сделать уроки интересными для тедей и интуитивно простыми
              для педагогов
            </span>
          </div>
          <div className="lesson-screen__links">
            {LESSONS.map((lesson) => (
              <div
                key={lesson.key}
                className="lesson-screen__link"
                onClick={() => setActiveLesson(lesson.link)}>
                <div className="lesson-screen__link-icon">
                  <PlayIcon />
                </div>
                <span className="lesson-screen__link-text">{lesson.text}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={bgImg} alt="" className="lesson-screen__bg" />
        {activeLesson && (
          <LessonModal
            onClose={() => setActiveLesson("")}
            lessonLink={activeLesson}
          />
        )}
      </section>
    </ScrollableAnchor>
  );
};

export default LessonScreen;
