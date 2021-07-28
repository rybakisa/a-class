import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import TutorProfile from "./pages/tutorProfile/TutorProfile";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/tutor-profile" exact>
        <TutorProfile />
      </Route>
    </Switch>
  );
};

export default Routes;
