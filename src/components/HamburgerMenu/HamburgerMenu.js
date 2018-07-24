import React from 'react';
import PropTypes from 'prop-types';

import styles from './HamburgerMenu.module.css';

const HamburgerMenu = ({ onToggle, enabled, className = '' }) => {
  const enabledStyle = enabled ? styles.enabled : '';

  return (
    <div onClick={onToggle} className={`hamburger ${enabledStyle} ${className}`}>
      <div className={styles.bar1}/>
      <div className={styles.bar2}/>
      <div className={styles.bar3}/>
    </div>
  );
};

HamburgerMenu.propType = {
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default HamburgerMenu;