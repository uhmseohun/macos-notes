import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AfterGetStarted from "./components/AfterGetStarted";
import styled from "styled-components";
import MacOSWindow from "./components/MacOSWindow";

import MainPage from "./pages/Main";
import WhatsNewPage from "./pages/WhatsNew";

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
        <Routes>
          <Route
            path="/"
            element={
              <AfterGetStarted>
                <MainPage />
              </AfterGetStarted>
            }
          />
          <Route path="/whats-new" element={<WhatsNewPage />} />
        </Routes>
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
