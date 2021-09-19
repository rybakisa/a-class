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

configureAnchors({scrollDuration: 1000});

const Main = () => {
  return (
    <main className="main">
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
