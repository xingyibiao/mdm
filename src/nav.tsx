import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import events from "./eventBus";

export default function Nav() {
  const history = useHistory();
  useEffect(() => {
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
