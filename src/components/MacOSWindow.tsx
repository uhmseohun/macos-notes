import React from "react";
import styled, { css } from "styled-components";

type MacOSWindowProps = {
  active?: boolean;
};

const MacOSWindow: React.FC<MacOSWindowProps> = ({ children, active }) => {
  return <WindowBlock active={active}>{children}</WindowBlock>;
};

MacOSWindow.defaultProps = {
  active: false,
};

export default MacOSWindow;

type WindowBlockProps = MacOSWindowProps;

const WindowBlock = styled.div<WindowBlockProps>`
  border: 1px soild #b5b5b6;
  border-radius: 10px;
  background: #fff;

  width: 840px;
  height: 560px;
  padding: 20px;

  ${(props) =>
    props.active
      ? css`
          box-shadow: 10px 10px 30px #bebebe, -10px -10px 30px #ffffff;
        `
      : css`
          box-shadow: 5px 5px 15px #bebebe, -5px -5px 15px #ffffff;
        `}
`;
