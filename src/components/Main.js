import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/HomeScreen";
import About from "./Screens/AboutScreen";
import Projects from "./Screens/ProjectSceen";
import Contact from "./Screens/ContactScreen";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default Main;
