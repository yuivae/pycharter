import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename="pycharter">
    <App />
  </Router>,
  document.getElementById("root")
);
