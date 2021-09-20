import ScrollableAnchor from "react-scrollable-anchor";
import {useState} from "react";
import LessonModal from "../../lessonModal/LessonModal";
import {ReactComponent as PlayIcon} from "../../../images/play-icon.svg";
import bgImg from "../../../images/lesson-screen-bg.png";
import {LESSONS_DATA} from "../../../data";

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
            {LESSONS_DATA.map((lesson) => (
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
