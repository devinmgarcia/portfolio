import React from "react";
import { Route } from "react-router-dom";
import { Preset } from "./components/presets/Preset";
import { PresetProvider } from "./components/presets/PresetProvider";
import { SequenceProvider } from "./components/sequences/SequenceProvider";


export const ApplicationViews = () => {
  return (
    <>
      <SequenceProvider>
        <PresetProvider>
          <Route exact path="/">
            <Preset />
          </Route>
        </PresetProvider>
      </SequenceProvider>
    </>
  );
};
