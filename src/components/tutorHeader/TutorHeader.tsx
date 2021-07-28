import React from "react";
import {useState} from "react";
import {ReactComponent as LogoImg} from "../../images/logo.svg";

const navButtons = [
  {
    text: "Мои уроки",
    key: "lessons",
  },
  {
    text: "Избранное",
    key: "favorites",
  },
  {
    text: "Помощь",
    key: "help",
  },
];

const TutorHeader = () => {
  const [activeNavBtn, setActiveNavBtn] = useState("lessons");

  return (
    <header className="tutor-header">
      <LogoImg />
      <div className="tutor-header__nav">
        {navButtons.map((button) => (
          <button
            key={button.key}
            className={`tutor-header__nav-btn ${
              activeNavBtn === button.key ? "tutor-header__nav-btn--active" : ""
            }`}
            onClick={() => setActiveNavBtn(button.key)}>
            {button.text}
          </button>
        ))}
      </div>
    </header>
  );
};

export default TutorHeader;
