import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Parallax extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    parallaxContent: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    height: PropTypes.string,
    backgroundColor: PropTypes.string,
    responsiveness: PropTypes.number,
    mainContainerClassName: PropTypes.string
  };

  static defaultProps = {
    height: '100vh',
    backgroundColor: '#fff',
    responsiveness: 1,
    mainContainerClassName: ''
  };

  copyInNewStyles = (element, style) =>
    React.cloneElement(element, {
      ...element.props,
      style
    });

  render() {
    const {
      type: Type,
      mainContainerClassName,
      height,
      backgroundColor,
      responsiveness,
      parallaxContent,
      children
    } = this.props;

    if (Array.isArray(parallaxContent) || Array.isArray(children)) {
      throw new Error('Parallax content and children must be a single node element!');
    }

    const mainContainerStyles = {
      perspective: '1px',
      transformStyle: 'preserve-3d',
      height,
      overflowX: 'hidden',
      overflowY: 'scroll'
    };

    const parallaxContainerStyles = {
      position: 'relative',
      transform: `translateZ(-${responsiveness}px) scale(${responsiveness + 1})`,
      zIndex: '-1',
      height
    };

    const parallax = this.copyInNewStyles(parallaxContent, parallaxContainerStyles);

    const contentContainerStyles = {
      position: 'relative',
      zIndex: '1',
      backgroundColor
    };

    const content = this.copyInNewStyles(children, contentContainerStyles);

    return (
      <Type className={mainContainerClassName} style={mainContainerStyles}>
        {parallax}
        {content}
      </Type>
    );
  }
}