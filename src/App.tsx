import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Routes from "./routes";
import SlideMenu from "./Slide";

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

export default function App() {
  return (
    <>
      <GlobyStyle />
      <Container>
        <SlideMenu />
        <Content>
          <Routes />
        </Content>
      </Container>
    </>
  );
}
