import React from 'react';
import ContactBook from './ContactBook';
import ImageSearch from './ImageSearch';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Contact Book</h1>
      <ContactBook />

      <h1>Image Search</h1>
      <ImageSearch />
    </div>
  );
};

export default App;
