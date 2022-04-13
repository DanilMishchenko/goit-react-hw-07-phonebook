import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Information,
  DeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContacts, children }) => {
  return (
    <Section>
      <Title>Contacts</Title>
      {children}
      <List>
        {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Information>
              {name}: {number}
            </Information>
            <DeleteButton type="button" onClick={() => onDeleteContacts(id)}>
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    </Section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
