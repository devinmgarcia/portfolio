import React from "react";
import "./Header.css";
import { ReactComponent as Name } from "../../MIL.svg";
export const Header = () => {
  return (
    <>
      <div className="wrapper-full">
        <Name style={{ width: "100%", height: "150px", paddingTop: "2.5rem" }} />
      </div>
    </>
  );
};
