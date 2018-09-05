import React from 'react';
import GalleryItem from './GalleryItem';
import { PropTypes } from 'prop-types';

import styles from './Gallery.module.css';

const Gallery = props => (
  <div className={styles.gallery}>
    {
      props.people.map(person => (
        <GalleryItem key={person.name} name={person.name} link={person.link} image={person.image} />
      ))
    }
  </div>
);

Gallery.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
}

export default Gallery;