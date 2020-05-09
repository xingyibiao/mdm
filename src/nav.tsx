import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import events from "./eventBus";

export default function Nav() {
  const history = useHistory();
  useEffect(() => {
    const { pathname } = history.location;

    events.emit("routerChange", pathname);

    function pushHistory(path: string) {
      history.push(path);
    }

    events.addListener("pushHistory", pushHistory);

    return () => {
      events.removeListener("pushHistory", pushHistory);
    };
  }, []);

  return <></>;
}
