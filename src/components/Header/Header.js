import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Velocity from 'velocity-animate';
import Sticky from 'react-sticky-el';
import MediaQuery from 'react-responsive';

import styles from './Header.module.css';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link, NavLink } from "react-router-dom";


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

  static propTypes = {
    displayMenu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired
  };

  render() {
    const { displayMenu, toggleMenu } = this.props;
    return (
      <Sticky className={styles.sticky}>
        <header className={styles.header}>
          <div className={`container ${styles.container}`}>
            <div className={styles.titleMenu}>
              <Link to="/" className={styles.titleLink}><h1 className={styles.title}>FHS Web Dev Club</h1></Link>
              <MediaQuery maxWidth={767}>
                <HamburgerMenu
                  className={styles.hamburger}
                  enabled={displayMenu}
                  onToggle={toggleMenu}
                />
              </MediaQuery>
            </div>
            <MediaQuery maxWidth={767}>
              {matches => {
                const menu = (
                  <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/joining">Joining</NavLink></li>
                      <li><NavLink to="/projects">Projects</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                  </div>
                );
                if (matches) {
                  return (
                    <DropMenu open={displayMenu}>
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