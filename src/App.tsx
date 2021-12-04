import React from "react";
import styled from "styled-components";
import MacOSWindow from "./components/MacOSWindow";

const App = () => {
  return (
    <AppBlock>
      <MacOSWindow>
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
