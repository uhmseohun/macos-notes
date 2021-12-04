import React from "react";
import styled, { css } from "styled-components";

type MacOSWindowProps = {
  active?: boolean;
  onClick: (event: React.MouseEvent) => void;
};

const MacOSWindow: React.FC<MacOSWindowProps> = ({
  children,
  active,
  onClick,
}) => {
  return (
    <WindowBlock active={active} onClick={onClick}>
      <TopBarBlock>
        <TopBarButton red />
        <TopBarButton yellow />
        <TopBarButton green />
      </TopBarBlock>
      <ChildrenBlock>{children}</ChildrenBlock>
    </WindowBlock>
  );
};

MacOSWindow.defaultProps = {
  active: false,
};

export default MacOSWindow;

type WindowBlockProps = MacOSWindowProps;

const WindowBlock = styled.div<WindowBlockProps>`
  border: 1px soild #b5b5b6;
  border-radius: 10px;
  background: #fdfdfd;

  width: 840px;
  height: 620px;

  display: flex;
  flex-direction: column;

  ${(props) =>
    props.active
      ? css`
          box-shadow: 10px 10px 30px #bebebe, 0 0 30px #ffffff;
        `
      : css`
          box-shadow: 5px 5px 15px #bebebe, 0 0 15px #ffffff;
        `}
`;

const TopBarBlock = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

type TopBarButtonProps = {
  red?: boolean;
  yellow?: boolean;
  green?: boolean;
};

const TopBarButton = styled.div<TopBarButtonProps>`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  border: none;
  background: ${(props) =>
    props.red ? "#ED6A5E" : props.yellow ? "#F5BF4F" : "#62C655"};
  margin-right: 7px;
`;

const ChildrenBlock = styled.div`
  padding: 20px;
  flex: 1;
`;
