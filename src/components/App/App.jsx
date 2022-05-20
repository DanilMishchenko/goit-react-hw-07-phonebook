import { useState } from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Section } from './App.styled';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

export const App = () => {
  const { data, isLoading } = useGetContactsQuery();
  const [filter, setFilter] = useState('');

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <Section>
      <Container color="blue">
        <ContactsForm>
          <Title title="Phonebook" />
        </ContactsForm>
      </Container>
      <Container color="yellow">
        <Title title="Contact" />
        {!isLoading && data.length > 0 ? (
          <ContactList contacts={getFilteredContacts()}>
            <ContactFilter filter={filter} onChange={changeFilter} />
          </ContactList>
        ) : (
          'Contact list is empty.'
        )}
      </Container>
    </Section>
  );
};
