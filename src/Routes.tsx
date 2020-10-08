import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import SeasonDetails from "./pages/season-details/SeasonDetails";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/:year/:winner">
        <SeasonDetails />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
