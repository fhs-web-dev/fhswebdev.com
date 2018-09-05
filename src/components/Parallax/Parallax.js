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
    mainContainerClassName: PropTypes.string,
    enabled: PropTypes.bool
  };

  static defaultProps = {
    height: '100vh',
    backgroundColor: '#fff',
    responsiveness: 1,
    mainContainerClassName: '',
    enabled: true
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
      enabled,
      children
    } = this.props;

    if (Array.isArray(parallaxContent) || Array.isArray(children)) {
      throw new Error('Parallax content and children must be a single node element!');
    }

    const nonParallaxMainContainerStyles = {
      height,
      overflowX: 'hidden',
      overflowY: 'scroll'
    }

    const mainContainerStyles = enabled ?
      {
        ...nonParallaxMainContainerStyles,
        perspective: '1px',
        transformStyle: 'preserve-3d'
      }
      :
      nonParallaxMainContainerStyles;

    const nonParallaxContainerStyles = {
      zIndex: '-1',
      position: 'relative',
      height
    }

    const parallaxContainerStyles = enabled ? 
      {
        ...nonParallaxContainerStyles,
        transform: `translateZ(-${responsiveness}px) scale(${responsiveness + 1})`
      }
      :
      nonParallaxContainerStyles;

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