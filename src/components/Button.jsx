import React, { useState } from 'react';
import './styles.css';

const ImageSearch = () => {
  const [searchTerm, setSearchTerm] = useState('cat');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = '40035722-2407ce7b1ab62bda679cb58b1'; 

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div>
      <h2>Image Search</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search images"
      />

      <ul>
        {images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageSearch;
