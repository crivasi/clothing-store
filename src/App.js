import React from "react";
import "./App.css";
import HomePage from "./components/pages/homepage.component";

import { Switch, Route } from "react-router-dom";

function HatsComponent() {
  return <h1>Perrito</h1>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsComponent}></Route>
      </Switch>
    </div>
  );
}

export default App;
