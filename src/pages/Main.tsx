import {configureAnchors} from "react-scrollable-anchor";
import Footer from "../components/footer/Footer";
import {
  BenefitsScreen,
  ContactScreen,
  FeedbackScreen,
  GoalScreen,
  HelpScreen,
  LessonScreen,
  StudyScreen,
  TitleScreen,
  VideosScreen,
  MapScreen,
} from "../components/screens/screens";
import bgImgLeft from "../images/main-bg-left.svg";
import bgImgRight from "../images/main-bg-right.svg";

configureAnchors({scrollDuration: 1000});

const Main = () => {
  return (
    <main className="main">
      <img src={bgImgLeft} alt="" className="main__bg main__bg--left" />
      <img src={bgImgRight} alt="" className="main__bg main__bg--right" />
      <TitleScreen />
      <GoalScreen />
      <StudyScreen />
      <BenefitsScreen />
      <HelpScreen />
      <LessonScreen />
      <FeedbackScreen />
      <VideosScreen />
      <MapScreen />
      <ContactScreen />
      <Footer />
    </main>
  );
};

export default Main;
