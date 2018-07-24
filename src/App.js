import React, { Component } from 'react';
import './App.css';
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styles from './App.module.css';
import MediaQuery from "react-responsive";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LockOnToMenu from "./components/LockOnToMenu/LockOnToMenu";
import Home from "./components/Pages/Home";

class App extends Component {

  state = {
    displayMenu: false
  };

  handleMenu = () =>
    this.setState(prevState => ({ displayMenu: !prevState.displayMenu }));

  render() {
    const { displayMenu } = this.state;
    return (
      <BrowserRouter>
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
              <Switch>
                <Route exact path="/" component={Home} />
                {/*<Route exact path="/" component={Home} />*/}
              </Switch>
            </div>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
