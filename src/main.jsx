import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Toaster position="top-center" />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
