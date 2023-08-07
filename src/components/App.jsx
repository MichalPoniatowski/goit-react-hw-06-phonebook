import React from 'react';
import './App.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export const App = () => {
  return (
    <div className="wrapper">
      <ContactForm />
      <ContactList>
        <Filter />
      </ContactList>
    </div>
  );
};
