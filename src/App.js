import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Playing from "./components/routes/Playing";
import app from "./styles/app.css";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/playing" component={Playing} />
    </Router>
  );
};

export default App;
