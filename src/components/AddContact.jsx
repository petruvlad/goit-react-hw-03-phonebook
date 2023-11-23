import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const AddContact = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    // Validate input fields and add contact
    if (name && phone) {
      const newContact = { id: Date.now(), name, phone };
      onAddContact(newContact);
      setName('');
      setPhone('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

AddContact.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default AddContact;
