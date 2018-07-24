import React, { Component } from 'react';
import './App.css';
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styles from './App.module.css';
import MediaQuery from "react-responsive";
import LockOnToMenu from "./components/LockOnToMenu/LockOnToMenu";

class App extends Component {

  state = {
    displayMenu: false
  };

  handleMenu = () =>
    this.setState(prevState => ({ displayMenu: !prevState.displayMenu }));

  render() {
    const { displayMenu } = this.state;
    return (
      <div className="App">
        <div className={styles.bodyContainer}>
          <Header
            displayMenu={displayMenu}
            toggleMenu={this.handleMenu}
          />
          <MediaQuery maxWidth={767}>
            <LockOnToMenu className={styles.backgroundShadow} enabled={displayMenu} />
          </MediaQuery>
          <div className={styles.body}>
            TESTING
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
