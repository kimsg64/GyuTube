import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Playing from "./components/routes/Playing";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Route exact path="/" component={Main} />
      <Route path="/playing/:videoNo/:videoTitle" component={Playing} />
    </Router>
  );
};

export default App;
