import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  PhonebookLabel,
  InputName,
  ButtonAddContact,
} from './ContactForm.styled';

export const ContactsForm = ({ onChange, children }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(4);
  const numderInputId = nanoid(4);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onChange({ name, number });
    resetFrom();
  };

  const resetFrom = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      {children}
      <PhonebookForm autoComplete="off" onSubmit={handleSubmit}>
        <PhonebookLabel htmlFor={nameInputId}>Name:</PhonebookLabel>
        <InputName
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></InputName>
        <PhonebookLabel htmlFor={numderInputId}>Number:</PhonebookLabel>
        <InputName
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          id={numderInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></InputName>
        <ButtonAddContact type="submit">Add contact</ButtonAddContact>
      </PhonebookForm>
    </>
  );
};

ContactsForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};
