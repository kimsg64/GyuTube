import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main";
import Playing from "./components/routes/Playing";
import GlobalStyle from "./styles/GlobalStyle";
import customAxios from "./CustomAxios";

const App = () => {
  const [ip, setIp] = useState("");

  const callback = (data) => {
    setIp(data);
  };

  useEffect(() => {
    customAxios("/ip", callback);
  }, []);

  return (
    <Router>
      <GlobalStyle />
      {/* {console.log(ip, "!!!")} */}
      <Route exact path="/" component={Main} />
      <Route path="/playing/:videoNo/:videoTitle" component={Playing} />
    </Router>
  );
};

export default App;
