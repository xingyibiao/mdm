import React from "react";
import styled from "styled-components";

const CursorSpan = styled.span`
  cursor: pointer;
`;

interface IconProps {
  name: string;
  onClick?: () => void;
}

export default function Icon(props: IconProps) {
  return (
    <CursorSpan
      className={`iconfont icon-${props.name}`}
      onClick={() => props.onClick && props.onClick()}
    />
  );
}
