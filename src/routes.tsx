import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
    </Switch>
  );
};

export default Routes;
