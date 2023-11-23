import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <li className="gallery-item">
      <img src={imageUrl} alt="" onClick={onImageClick} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
