import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
