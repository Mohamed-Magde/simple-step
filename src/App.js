import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/main.css";
import Navbar from "./components/Navbar";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import FourthStep from "./components/FourthStep";
import FifthStep from "./components/FifthStep";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={FirstStep} />
          <Route path="/second" component={SecondStep} />
          <Route path="/third" component={ThirdStep} />
          <Route path="/fourth" component={FourthStep} />
          <Route path="/fifth" component={FifthStep} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
