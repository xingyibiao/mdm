import React, { useState, useEffect } from "react";
import styled from "styled-components";

import events from "./eventBus";

type MenusItem = {
  label: string;
  icon?: string;
  path: string;
  active: boolean;
};

type MenusItemSty = {
  active: boolean;
};

const InitMenus: MenusItem[] = [
  {
    label: "未下载",
    path: "unDownload",
    active: false
  },
  {
    label: "进行中",
    path: "",
    active: true
  },
  {
    label: "已完成",
    path: "downloaded",
    active: false
  }
];

const Slide = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #fff;
  border-right: 1px solid #f0f0f0;
`;

const SlideItem = styled.div<MenusItemSty>`
  display: flex;
  font-size: 14px;
  align-items: center;
  padding: 10px;
  width: 120px;
  cursor: pointer;
  &:hover {
    background-color: #e6f7ff;
    color: #1890ff;
  }
  background-color: ${props => (props.active ? "#e6f7ff" : "#fff")};
  color: ${props => (props.active ? "#1890ff" : "rgba(0,0,0,.65)")};
`;

export default function SlideMenu() {
  const [menus, setMenus] = useState<MenusItem[]>(InitMenus);
  // const history = useHistory()

  useEffect(() => {
    function handlerRouteChange(path: string) {
      const len = menus.length;

      const tempMenus = [...menus];

      for (let i = 0; i < len; i++) {
        const menu = tempMenus[i];
        menu.active = menu.path === path;
      }

      setMenus(tempMenus);
    }
    events.addListener("routerChange", handlerRouteChange);

    return () => {
      events.removeListener("routerChange", handlerRouteChange);
    };
  }, []);

  function handlerMenuClick(path: string) {
    const len = menus.length;

    const tempMenus = [...menus];

    for (let i = 0; i < len; i++) {
      const menu = tempMenus[i];
      menu.active = menu.path === path;
    }

    setMenus(tempMenus);
    events.emit("pushHistory", path);
  }

  return (
    <Slide>
      {menus.map(menu => (
        <SlideItem
          key={menu.path}
          active={menu.active}
          onClick={() => handlerMenuClick(menu.path)}
        >
          {menu.label}
        </SlideItem>
      ))}
    </Slide>
  );
}
