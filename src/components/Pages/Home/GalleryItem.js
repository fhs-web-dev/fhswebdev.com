import React from 'react';
import PropTypes from 'prop-types';

import styles from './GalleryItem.module.css';

const GalleryItem = props => (
  <a
    className={styles.body}
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundImage: `url(${props.image})`
    }}
  >
    <div>
      {props.name}
    </div>
  </a>
);

GalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default GalleryItem;