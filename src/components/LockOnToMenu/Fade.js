import React, { Component } from "react";
import PropTypes from "prop-types";
import Velocity from "velocity-animate";

export default class Fade extends Component {

  static propTypes = {
    className: PropTypes.string
  };

  componentWillEnter(callback) {
    Velocity(this.container, 'fadeIn', { duration: 300 }).then(callback);
  }

  componentWillLeave(callback) {
    Velocity(this.container, 'fadeOut', { duration: 300 }).then(callback);
  }

  render() {
    return (
      <div className={this.props.className} ref={c => this.container = c}>
        {this.props.children}
      </div>
    )
  }
}
