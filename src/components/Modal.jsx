
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const Modal = ({ imageUrl, onCloseModal }) => {
  return (
    <div>
   
      <img src={imageUrl} alt="Modal Content" />
      <button onClick={onCloseModal}>Close Modal</button>
    </div>
  );
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
