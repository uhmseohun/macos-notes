import React, { useState } from "react";
import styled from "styled-components";
import MacOSWindow from "./components/MacOSWindow";

const App = () => {
  const [windowActive, setWindowActive] = useState(true);
  const onClickHandler = (event: React.MouseEvent, value: boolean) => {
    event.stopPropagation();
    setWindowActive(value);
  };

  return (
    <AppBlock onClick={(e) => onClickHandler(e, false)}>
      <MacOSWindow
        onClick={(e) => onClickHandler(e, true)}
        active={windowActive}
      >
        <h1 style={{ margin: 0 }}>MEMO!</h1>
      </MacOSWindow>
    </AppBlock>
  );
};

export default App;

const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
