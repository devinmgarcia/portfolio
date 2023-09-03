import React from "react";
import { Route } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";

import "./Bash.css";

export const Bash = () => (
  <Route
    render={() => {
      return (
        <>
          <ApplicationViews />
        </>
      );
    }}
  />
);
