import React, { FC, useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import events from "./eventBus";

import DownLoaded from "./pages/Downloaded";
import Home from "./pages/Home";
import UnDownLoad from "./pages/Undownload";

const ToggleVisableFrame = styled.div<any>`
  display: ${props => (props.visiable ? "" : "none")};
`;

const Routes: FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>("home");
  useEffect(() => {
    function handlerHistoryPush(route: string) {
      setCurrentRoute(route);
    }

    events.addListener("pushHistory", handlerHistoryPush);

    return () => {
      events.removeListener("pushHistory", handlerHistoryPush);
    };
  }, []);

  return (
    <div className="container">
      <ToggleVisableFrame
        visiable={currentRoute === "home" || currentRoute === ""}
      >
        <Home />
      </ToggleVisableFrame>
      <ToggleVisableFrame visiable={currentRoute === "downloaded"}>
        <DownLoaded />
      </ToggleVisableFrame>
      <ToggleVisableFrame visiable={currentRoute === "unDownload"}>
        <UnDownLoad />
      </ToggleVisableFrame>
    </div>
  );
};

export default Routes;
