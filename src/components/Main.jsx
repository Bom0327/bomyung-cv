import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Work1 from "./pages/Work-1";
import Work2 from "./pages/Work-2";
import Work3 from "./pages/Work-3";

import Contact from "./pages/Contact";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/work-1" component={Work1} />
      <Route path="/work-2" component={Work2} />
      <Route path="/work-3" component={Work3} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}

export default Main;
