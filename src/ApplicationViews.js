import React from "react";
import { Route } from "react-router-dom";
import { Preset } from "./components/presets/Preset";
import { PresetProvider } from "./components/presets/PresetProvider";
import { SequenceProvider } from "./components/sequences/SequenceProvider";
import { Header } from "./components/header/Header";
import { Socials } from "./components/socials/Socials";
import Example from "./components/sidebar/Sidebar";
import { About } from "./components/about/About";

export const ApplicationViews = () => {

  React.useEffect(()=>{
    localStorage.setItem("bash_user", JSON.stringify(1))
  })
  
  return (
    <>
      <SequenceProvider>
        <PresetProvider>
          <Route exact path="/">
            <Header />
            <div className="glass">
              <Preset />
              <Socials />
            </div>
            <Example />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </PresetProvider>
      </SequenceProvider>
    </>
  );
};
