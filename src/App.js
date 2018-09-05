import React, { Component } from 'react';
import './App.css';
import styles from './App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";

class App extends Component {

  state = {
    displayMenu: false
  };

  handleMenu = () =>
    this.setState(prevState => ({ displayMenu: !prevState.displayMenu }));

  render() {
    const { people } = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <div className={styles.bodyContainer}>
            <Switch>
              <Route render={() => (
                <Home people={people} />
              )} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
