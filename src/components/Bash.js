import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { Header } from "./header/Header";
import { Socials } from "./socials/Socials";
import "./Bash.css";

export const Bash = () => (
  <Route
    render={() => {
      return (
        <>
          <Header />
          <div className="glass">
            <ApplicationViews />
            <Socials/>
          </div>
        </>
      );
    }}
  />
);
