
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const ContactList = ({ contacts, onDeleteContact }) => {
  const [state, setState] = useState({
    searchTerm: 'cat',
    images: [],
    page: 1,
    apiKey: '40035722-2407ce7b1ab62bda679cb58b1',
  });

  const handlePageChange = () => {
    setState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  return (
    <div>
      <h2>Image Search</h2>
      <input
        type="text"
        value={state.searchTerm}
        onChange={e => setState({ ...state, searchTerm: e.target.value })}
        placeholder="Search images"
      />

      <button onClick={handlePageChange}>Next Page</button>

      <ul>
        {state.images.map(image => (
          <li key={image.id}>
            <img src={image.webformatURL} alt={image.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
