import React from "react";

import styles from './Home.module.css';
import Parallax from "../Parallax/Parallax";
// import Header from "../Header/Header";

export default () => (
  <Parallax
    type="div"
    parallaxContent={(
      <div className={styles.heading}>
        <div className={styles.headingContent}>
          <h1 className={styles.title}>Web Development Club</h1>
          <h2>Fairview High School</h2>
          <ul className={styles.meetingList}>
            <li>Room#228</li>
            <li>Wednesday Block Lunch</li>
          </ul>
        </div>
      </div>
    )}
  >
    <div>
      {/* <Header staticHeader withoutTitle displayMenu toggleMenu={() => {}}/> */}
      <div className={styles.container}>
        <div className={styles.body}>
          {/*<Header displayMenu={false} toggleMenu={() => {}}/>*/}
          <h2>About Web Dev</h2>
          <p>
            We will teach members the entire process of full - stack development, with no prior experience necessary. 
            Topics include basic HTML / CSS, Javascript and backend languages, color theory, and web frameworks. 
            By the end of the academic year, committed members will have built their own personal portfolio website. 
          </p>
            <a 
              href="https://drive.google.com/drive/folders/1KCFQsQ_Ci_vphDuEorODH4D4xaRswkHZ?usp=sharing"
              target="_blank"
            >
              Here is the link to the slides!
            </a>
          <div>
            {/* TODO: OUR SITES */}
            {/* <div>El</div> */}
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);