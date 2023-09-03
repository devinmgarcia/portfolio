import React from "react";
import "./Socials.css";
export const Socials = () => {
  return (
    <div className="social-wrapper">
      <a target="blank" href="https://www.instagram.com/devinplaysdrums/"><div className="social-icon-insta fab fa-instagram fa-3x"></div></a>
      <a target="blank" href="https://www.tiktok.com/@devinmgarcia"><div className="social-icon-tik fab fa-tiktok fa-3x"></div></a>
      <a target="blank" href="https://www.linkedin.com/in/devinmgarcia/"><div className="social-icon-linked fab fa-linkedin fa-3x"></div></a>
      <a target="blank" href="https://github.com/devinmgarcia"><div className="social-icon-git fab fa-github fa-3x"></div></a>
      <a href="mailto:devinmgarcia@gmail.com" ><div className="social-icon-envelope fa fa-envelope fa-3x"></div></a>
      <a href="mailto:devinmgarcia@gmail.com" ><div className="social-icon-resume fa fa-file-text fa-3x"></div></a>
      <a target="blank" href="https://falseindigo.net/" ><div className="social-icon-music fa fa-music fa-3x"></div></a>
    </div>
  );
};
