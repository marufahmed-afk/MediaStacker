import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Comics from "./components/comics/Comics";

import ComicState from "./context/comic/ComicState";
import "./App.css";

const App = () => {
  return (
    <ComicState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/comics" component={Comics} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ComicState>
  );
};

export default App;
