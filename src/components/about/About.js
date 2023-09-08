import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-wrapper">
      <div div className="section">
        <div className="about-paragraph">
          <p>
            Hello! I'm Devin, a professional with nearly 11 years of experience
            in the music instrument retail industry, where I've worked as both a
            retail associate and manager. During the challenging times of the
            2020 pandemic, I found myself furloughed for six months. It was
            during this hiatus that I made a life-changing decision to teach
            myself how to code. In early 2021, I embarked on a transformative
            journey by enrolling in a six-month full-time web development
            program at Nashville Software School. My dedication paid off as I
            secured my first web development job just one week before
            graduating, making me the first person in my cohort to land a job.
          </p>
          <p>
            Now, as a web developer, I'm blending my passion for technology with
            the skills and work ethic honed during my time in the music
            industry, creating beautiful digital experiences and solutions that
            resonate with users and clients alike.
          </p>
        </div>
        <div>
          <img
            className="self-portrait"
            src="https://i.imgur.com/Gyed1r8.jpg"
          />
        </div>
      </div>
      <div className="section">
        <div className="guitar-photo">
          <img
            className="self-portrait"
            src="https://i.imgur.com/eSaGIAq.jpg"
          />
        </div>
        <div className="about-paragraph">
          <p>
            When I was 13 years old, my relationship with music transformed. I
            went from a passive listener to an active participant. My brother
            and I started a rock band, him on guitar and me on drums. Listening
            back, we were obvectively bad, but that didn't stop us from honing
            our craft. After 20+ years, I have played hundreds of shows,
            recorded dozens of records, and have even produced, mixed and
            mastered albums for other artists. I am currently playing drums for
            modern rock band, False Indigo.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="about-paragraph">
          <p>
            Another cornerstone of my experience during the pandemic was falling
            back in love with reading. Once it was safe to visit, I would take
            trips to the local used book store in hopes of filling my bookshelf
            with the growing list of titles I wanted to read. Overwhelmingly,
            the genre I gravitated toward was sci-fi, but I read some of the
            classics, such as The Count of Monte Cristo and 1984, as well. I
            continue to fill my shelf to this day and I even have a dream of
            writing my own novel.
          </p>
        </div>
        <div>
          <img
            className="self-portrait"
            src="https://i.imgur.com/XRR8D5r.jpg"
          />
        </div>
      </div>
    </div>
  );
};
