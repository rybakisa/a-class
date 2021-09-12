import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import {useState} from "react";
import teacherBg from "../../../images/help-screen/teacher-bg.png";
import parentBg from "../../../images/help-screen/parents-bg.png";
import managerBg from "../../../images/help-screen/manager-bg.png";

const TABS = [
  {
    title: "Учителям",
    key: "teachers",
  },
  {
    title: "Родителям",
    key: "parents",
  },
  {
    title: "Директорам",
    key: "managers",
  },
];
const TABS_IMAGES = [
  {key: "teachers", img: teacherBg},
  {key: "parents", img: parentBg},
  {key: "managers", img: managerBg},
];
const TABS_TEXT = [
  {
    key: "teachers",
    text: "Начальные классы цифровизированы. Ученики занимаются по самым современным стандартам  и методикам, развивая функциональную грамотность",
  },
  {
    key: "parents",
    text: "Вы не беспокоитесь за моральное и психическое состояние своего ребенка. Современный и понятный для ребёнка формат урока превращает школу в комфортную для него среду.",
  },
  {
    key: "managers",
    text: "Вы пользуетесь самым современным инструментом для проведения урока. Вам не нужно писать горы отчетов и проверять десятки тетрадей. Подготовка к уроку занимает минимум времени.",
  },
];
const INITIAL_TAB = "teachers";

const HelpScreen = () => {
  const [activeTab, setActiveTab] = useState(INITIAL_TAB);

  return (
    <ScrollableAnchor id="partners">
      <section className="help-screen">
        <div className="help-screen__content">
          <h2 className="help-screen__title">А-Класс помогает</h2>
          <div className="help-screen__tabs">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                className={`help-screen__tab ${
                  activeTab === tab.key ? "help-screen__tab--active" : ""
                }`}
                onClick={() => setActiveTab(tab.key)}>
                {tab.title}
              </button>
            ))}
          </div>
          <div className="help-screen__text-wrapper">
            {TABS_TEXT.map((text) => (
              <div
                key={text.key}
                className={`help-screen__text-block ${
                  activeTab === text.key
                    ? "help-screen__text-block--active"
                    : ""
                }`}>
                <span className="help-screen__text">{text.text}</span>
              </div>
            ))}
          </div>
        </div>
        {TABS_IMAGES.map((img) => (
          <img
            src={img.img}
            key={img.key}
            alt=""
            className={`help-screen__img help-screen__img--${img.key} ${
              activeTab === img.key ? "help-screen__img--active" : ""
            }`}
          />
        ))}
      </section>
    </ScrollableAnchor>
  );
};

export default HelpScreen;
