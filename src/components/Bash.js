import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { Content } from "./content/Content"
import "./Bash.css"

export const Bash = () => (

      <Route
      render={() => {
          return (
            <>
              <Content/>
              <ApplicationViews />
            </>
          );
      }}
    />
)
