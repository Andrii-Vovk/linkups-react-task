import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import RouterNav from "./pages/router";
import { Router } from "react-router";

function App() {
  return (
    <div className="App">
      <RouterNav />
    </div>
  );
}

export default App;
