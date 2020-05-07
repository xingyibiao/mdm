import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DownLoaded from "./pages/Downloaded";
import Home from "./pages/Home";
import UnDownLoad from "./pages/Undownload";
import Nav from "./nav";

const Routes: FC = () => {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/downloaded" component={DownLoaded} />
          <Route path="/unDownload" component={UnDownLoad} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
