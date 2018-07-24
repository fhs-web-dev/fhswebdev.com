import React, { Component } from "react";
import PropTypes from "prop-types";
import { TransitionGroup } from "react-transition-group";
import ScrollLock from "react-scrolllock";
import Fade from './Fade';

export default class LockOnToMenu extends Component {

  static propTypes = {
    enabled: PropTypes.bool.isRequired,
    className: PropTypes.string
  };

  render() {
    const { enabled, className } = this.props;
    return (
      <TransitionGroup>
        {
          enabled ?
            <Fade className={className}>
              <div/>
              <ScrollLock/>
            </Fade>
            :
            null
        }
      </TransitionGroup>
    );
  }
}