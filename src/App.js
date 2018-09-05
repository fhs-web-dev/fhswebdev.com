import React, { Component } from 'react';
import './App.css';
// Components
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

import styles from './App.module.css';
import MediaQuery from "react-responsive";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LockOnToMenu from "./components/LockOnToMenu/LockOnToMenu";
import Home from "./components/Pages/Home/Home";
// import RegularPages from './components/Pages/RegularPages/RegularPages';

class App extends Component {

  state = {
    displayMenu: false
  };

  handleMenu = () =>
    this.setState(prevState => ({ displayMenu: !prevState.displayMenu }));

  render() {
    const { people } = this.props;
    const { displayMenu } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <div className={styles.bodyContainer}>
            <Switch>
              <Route render={() => (
                <Home people={people} />
              )} />
              {/* <Route exact path="/" component={Home} /> */}
              {/* <RegularPages displayMenu={displayMenu} toggleMenu={this.handleMenu} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
