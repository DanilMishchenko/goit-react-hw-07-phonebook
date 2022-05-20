import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Section } from './App.styled';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

export const App = () => {
  const { data, isLoading } = useGetContactsQuery();

  const [filter, setFilter] = useState('');

  // const addContact = ({ name, number }) => {
  //   const newContact = {
  //     id: nanoid(4),
  //     name,
  //     number,
  //   };
  //   if (contacts.find(contact => contact.name === name)) {
  //     return alert(`${name} is already in contacts`);
  //   }
  //   setContacts(prevState => [newContact, ...prevState]);
  // };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  // const deleteContact = id => {
  //   setContacts(state => state.filter(contact => contact.id !== id));
  // };

  return (
    <Section>
      <Container color="blue">
        {/* <ContactsForm onChange={addContact}> */}
        {/* <Title title="Phonebook" /> */}
        {/* </ContactsForm> */}
      </Container>
      <Container color="yellow">
        <Title title="Contact" />
        {!isLoading ? (
          <ContactList
            contacts={getFilteredContacts()}
            // onDeleteContacts={deleteContact}
          >
            <ContactFilter filter={filter} onChange={changeFilter} />
          </ContactList>
        ) : (
          'Contact list is empty.'
        )}
      </Container>
    </Section>
  );
};
