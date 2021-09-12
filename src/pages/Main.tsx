import React from "react";
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
      <ContactScreen />
      <Footer />
    </main>
  );
};

export default Main;
