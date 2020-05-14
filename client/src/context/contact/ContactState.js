import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Amanda Foster',
        email: 'amanda@test.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Paul Foster',
        email: 'paul@test.com',
        phone: '222-232-2222',
        type: 'personal',
      },
      {
        id: 1,
        name: 'April Peterson',
        email: 'april@test.com',
        phone: '333-333-3333',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuidv4();
    console.log(contact.id);
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
