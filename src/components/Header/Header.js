import React, { Component } from "react";
import { TransitionGroup } from 'react-transition-group';
import Velocity from 'velocity-animate';
import Sticky from 'react-sticky-el';
import MediaQuery from 'react-responsive';

import styles from './Header.module.css';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";


class DropMenu extends Component {
  render() {
    return (
      <TransitionGroup>
        { this.props.open ?
          <Accordion>
            {this.props.children}
          </Accordion>
          :
          null
        }
      </TransitionGroup>
    );
  }
}

class Accordion extends Component {
  componentWillEnter(callback) {
    Velocity(this.container, 'slideDown', { duration: 300 }).then(callback);
  }

  componentWillLeave(callback) {
    Velocity(this.container, 'slideUp', { duration: 300 }).then(callback);
  }

  render() {
    return (
      <div ref={c => this.container = c}>
        {this.props.children}
      </div>
    )
  }
}

export default class Header extends Component {

  state = {
    displayMenu: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({ displayMenu: !prevState.displayMenu }))
  };

  render() {
    return (
      <Sticky>
        <header className={styles.header}>
          <div className={`container ${styles.container}`}>
            <div className={styles.titleMenu}>
              <h1 className={styles.title}>FHS Web Dev Club</h1>
              <MediaQuery maxWidth={767}>
                <HamburgerMenu
                  className={styles.hamburger}
                  enabled={this.state.displayMenu}
                  onToggle={this.toggleMenu}
                />
              </MediaQuery>
            </div>
            <MediaQuery maxWidth={767}>
              {matches => {
                const menu = (
                  <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                      <li>About</li>
                      <li>Joining</li>
                      <li>Projects</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                );
                if (matches) {
                  return (
                    <DropMenu open={this.state.displayMenu}>
                      {menu}
                    </DropMenu>
                  )
                }
                return menu;
              }}
            </MediaQuery>
          </div>
        </header>
      </Sticky>
    );
  }
}