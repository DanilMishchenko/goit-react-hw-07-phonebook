import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useAddContactMutation } from 'redux/contactsSlice';
import {
  PhonebookForm,
  PhonebookLabel,
  InputName,
  ButtonAddContact,
} from './ContactForm.styled';

export const ContactsForm = ({ children }) => {
  const [addContact] = useAddContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = nanoid(4);
  const numderInputId = nanoid(4);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setPhone(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, phone });
    resetFrom();
  };

  const handleAddContact = async contact => {
    try {
      await addContact(contact);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFrom = () => {
    setName('');
    setPhone('');
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
          value={phone}
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
