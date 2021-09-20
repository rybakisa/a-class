import teacherBg from "../images/help-screen/teacher-bg.png";
import parentBg from "../images/help-screen/parents-bg.png";
import managerBg from "../images/help-screen/manager-bg.png";

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
    text: "Вы пользуетесь самым современным инструментом для проведения урока. Вам не нужно писать горы отчетов и проверять десятки тетрадей. Подготовка к уроку занимает минимум времени.",
  },
  {
    key: "parents",
    text: "Вы не беспокоитесь за моральное и психическое состояние своего ребенка. Современный и понятный для ребёнка формат урока превращает школу в комфортную для него среду.",
  },
  {
    key: "managers",
    text: "Начальные классы цифровизированы. Ученики занимаются по самым современным стандартам и методикам, развивая функциональную грамотность",
  },
];

const INITIAL_TAB = "teachers";

export {TABS, TABS_IMAGES, TABS_TEXT, INITIAL_TAB};
