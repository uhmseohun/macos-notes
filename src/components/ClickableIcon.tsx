import React from "react";
import styled from "styled-components";

type ClickableIconProps = {
  iconName: string;
  onClick: () => void;
};

const ClickableIcon: React.FC<ClickableIconProps> = ({ iconName, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      <Icon src={require(`../assets/icon/${iconName}.png`).default} />
    </IconWrapper>
  );
};

export default ClickableIcon;

const IconWrapper = styled.div`
  width: 1.6em;
  height: 1.6em;
  border-radius: 5px;
  transition: background 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;

  &:hover {
    background: #e3e3e3;
  }
  &:active {
    background: #e2dcdc;
  }
`;

const Icon = styled.img`
  height: 0.9em;
  width: 0.9em;
`;
