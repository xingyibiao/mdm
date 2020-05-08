import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import styled, { createGlobalStyle } from "styled-components";

import Routes from "./routes";
import SlideMenu from "./Slide";

import { TaskStatusEnum } from "./enum";
// import { TaskStatusEnum } from "./global.d";

import rootReducer, { resetTask, addTask } from "./store";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  padding: 5px;
`;

const GlobyStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-size: 14px;
  }
`;

const store = configureStore({
  reducer: rootReducer
});

const mockTasks: ITaskItem[] = [
  {
    id: 1,
    status: TaskStatusEnum.DOWNLOADING,
    progress: 0.5,
    name: "下载1"
  },
  {
    id: 2,
    status: TaskStatusEnum.DOWNLOADING,
    progress: 0.6,
    name: "下载2"
  },
  {
    id: 3,
    status: TaskStatusEnum.DOWNLOADING,
    progress: 0.4,
    name: "下载3"
  },
  {
    id: 4,
    status: TaskStatusEnum.DOWNLOADING,
    progress: 0.3,
    name: "下载4"
  },
  {
    id: 5,
    status: TaskStatusEnum.DOWNLOADING,
    progress: 0.7,
    name: "下载5"
  },
  {
    id: 6,
    status: TaskStatusEnum.DOWNLOADING,
    progress: 0.9,
    name: "下载6"
  }
];

// store.subscribe(() => console.log(store.getState()));

store.dispatch(resetTask(mockTasks));

export default function App() {
  return (
    <Provider store={store}>
      <GlobyStyle />
      <Container>
        <SlideMenu />
        <Content>
          <Routes />
        </Content>
      </Container>
    </Provider>
  );
}
