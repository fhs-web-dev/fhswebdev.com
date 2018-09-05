import React, { Component } from "react";
import PropTypes from 'prop-types';

import styles from './Home.module.css';
import Parallax from "../../Parallax/Parallax";
import Gallery from "./Gallery";

export default class extends Component {

  state = {
    width: 0,
    height: 0
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () =>
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });

  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })).isRequired
  }

  render() {
    const { people } = this.props;
    const { width } = this.state;
    return (
      <Parallax
        type="div"
        enabled={width > 767}
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
                rel="noopener noreferrer"
              >
                Here is the link to the slides!
              </a>
              <Gallery people={people} />
            </div>
          </div>
        </div>
      </Parallax>
    )
  }
}