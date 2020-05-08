import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import styled, { createGlobalStyle } from "styled-components";

import Routes from "./routes";
import SlideMenu from "./Slide";

import rootReducer from "./store";

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
