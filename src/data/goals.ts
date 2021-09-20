import {ReactComponent as KidIcon} from "../images/goals-screen/kid-icon.svg";
import {ReactComponent as StudyIcon} from "../images/goals-screen/study-icon.svg";
import {ReactComponent as DigitalIcon} from "../images/goals-screen/digital-icon.svg";
import {ReactComponent as LiteracyIcon} from "../images/goals-screen/literacy-icon.svg";
import {ReactComponent as BrainIcon} from "../images/goals-screen/brain-icon.svg";
import {ReactComponent as CreativityIcon} from "../images/goals-screen/creativity-icon.svg";
import {ReactComponent as LessonIcon} from "../images/goals-screen/lesson-icon.svg";

const GOALS_DATA = [
  {
    title: "Сохранять интерес к учебе и любознательность ребенка",
    text: "Важно, чтобы уроки были интересными, веселыми и не переутомляли ребенка",
    icon: StudyIcon,
    key: "study",
  },
  {
    title: "Продлить детство в душе и творчестве ученика",
    text: "Не ломать в нем экспериментатора, художника и мечтателя",
    icon: KidIcon,
    key: "kid",
  },
  {
    title:
      "Интенсивные методики обучения детей по основным предметам с 1 по 3 класс",
    text: "Интересные упражнения внутри урока и постоянное удержание внимания детей позволяют быстро достичь заметных результатов",
    icon: BrainIcon,
    key: "brain",
  },
  {
    title: "Цифровизация процесса обучения",
    text: "Теперь даже в младших классах можно эффективно использовать все современные методы подачи информации.",
    icon: DigitalIcon,
    key: "digital",
  },
  {
    title: "Уроки помогают детям освоить функциональную грамотность.",
    text: "Год за годом, шаг за шагом к успешной сдаче экзаменов и международных тестов PISA.",
    icon: LiteracyIcon,
    key: "literacy",
  },
  {
    title: "Творческое развитие личности ребенка, в том числе его софт скилов",
    text: "Специальные курсы по развитию памяти и интеллекта, которые можно проводить прям в классе. Ваши дети будут в восторге!",
    icon: CreativityIcon,
    key: "creativity",
  },
  {
    title: "Посмотрите пробный урок прямо сейчас",
    text: "Мы используем лучшие образовательные практики и понятные решения, чтобы сделать уроки интересными для детей и интуитивно простыми для педагогов.",
    icon: LessonIcon,
    key: "lesson",
    link: "#lessons",
  },
];

export {GOALS_DATA};
