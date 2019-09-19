import React from "react";
import "./App.css";
import HomePage from "./pages/home/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

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
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
