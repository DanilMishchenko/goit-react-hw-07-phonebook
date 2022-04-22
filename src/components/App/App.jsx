import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './App.styled';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

const LOCALSTORAGE_KEY = 'My contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log('Effect on update');
    console.log(contacts);
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(4),
      name,
      number,
    };
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    setContacts(prevState => [newContact, ...prevState]);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  return (
    <Section>
      <Container color="blue">
        <ContactsForm onChange={addContact}>
          <Title title="Phonebook" />
        </ContactsForm>
      </Container>
      <Container color="yellow">
        <Title title="Contact" />
        {contacts.length > 0 ? (
          <ContactList
            contacts={getFilteredContacts()}
            onDeleteContacts={deleteContact}
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

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

// componentDidMount() {
//   const contacts = localStorage.getItem(LOCALSTORAGE_KEY);
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(_, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
// localStorage.setItem(
//   LOCALSTORAGE_KEY,
//   JSON.stringify(this.state.contacts)
//     );
//   }
// }

// addContact = ({ name, number }) => {
//   const newContact = {
//     id: nanoid(4),
//     name,
//     number,
//   };
//   if (this.state.contacts.find(contact => contact.name === name)) {
//     return alert(`${name} is already in contacts`);
//   }
//   this.setState(prevState => ({
//     contacts: [newContact, ...prevState.contacts],
//   }));
// };

// getFilteredContacts = () => {
//   const normalizedFilter = this.state.filter.toLowerCase();
//   return this.state.contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// changeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getFilteredContacts();
//     return (
//       <Container>
//         <ContactsForm onChange={this.addContact} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContacts={this.deleteContact}
//         >
//           <ContactFilter filter={filter} onChange={this.changeFilter} />
//         </ContactList>
//       </Container>
//     );
//   }
// }
//
