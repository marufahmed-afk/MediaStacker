import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Comics from "./components/comics/Comics";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import ComicState from "./context/comic/ComicState";
import "./App.css";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <ComicState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/comics" component={Comics} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ComicState>
    </AuthState>
  );
};

export default App;
