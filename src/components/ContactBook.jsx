import React, { useState, useEffect } from 'react';
import './styles.css';

const ContactBook = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  const addContact = e => {
    e.preventDefault();

    if (!newContact.name || !newContact.email) {
      alert('Please provide both name and email for the new contact.');
      return;
    }

    const updatedContacts = [...contacts, { ...newContact, id: Date.now() }];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    // Clear the form after adding the contact
    setNewContact({ name: '', email: '' });
  };

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <h1>Contact Book</h1>

      {/* Add Contact Form */}
      <form onSubmit={addContact}>
        <label>
          Name:
          <input
            type="text"
            value={newContact.name}
            onChange={e =>
              setNewContact({ ...newContact, name: e.target.value })
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={newContact.email}
            onChange={e =>
              setNewContact({ ...newContact, email: e.target.value })
            }
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>

      {/* Contact List */}
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBook;
