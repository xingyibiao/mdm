import React from "react";
import styled, { keyframes } from "styled-components";

type ProgressRatio = {
  ratio: number; // 0-1
};

const ProgressContainer = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  margin: 20px 10px;
  background-color: #f5f5f5;
`;

const progressAnimation = keyframes`
  0%{
    width: 0;
    opacity: .1;
  }
  20%{
    width: 0;
    opacity: .5;
  }
  100%{
    width: 100%;
    opacity: 0;
  }
`;

const ProgressItem = styled.div<ProgressRatio>`
  height: 10px;
  width: ${props => `${props.ratio * 100}%`};
  background-color: red;
  border-radius: 5px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border-radius: 5px;
    opacity: 0;
    animation: ${progressAnimation} ${props => `${4 * props.ratio}s`}
      cubic-bezier(0.23, 1, 0.32, 1) infinite;
  }
`;

export default function progress(props: ProgressRatio) {
  return (
    <ProgressContainer>
      <ProgressItem ratio={props.ratio} />
    </ProgressContainer>
  );
}
