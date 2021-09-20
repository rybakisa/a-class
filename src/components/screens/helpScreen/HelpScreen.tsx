import {useState} from "react";
import {INITIAL_TAB, TABS, TABS_TEXT, TABS_IMAGES} from "../../../data";

const HelpScreen = () => {
  const [activeTab, setActiveTab] = useState(INITIAL_TAB);

  return (
    <section className="help-screen" id="partners">
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
                activeTab === text.key ? "help-screen__text-block--active" : ""
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
  );
};

export default HelpScreen;
