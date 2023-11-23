import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import './styles.css';
const Loader = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <LoaderSpinner type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loader;
