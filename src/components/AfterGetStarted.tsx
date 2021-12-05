import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../reducer";

const AfterGetStarted = ({ children }: { children: JSX.Element }) => {
  const getStarted = useSelector(
    (state: RootState) => state.settings.getStarted
  );
  if (getStarted) return children;
  return <Navigate to="/whats-new" />;
};

export default AfterGetStarted;
