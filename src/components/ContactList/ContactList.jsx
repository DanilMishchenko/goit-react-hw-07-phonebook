// import PropTypes from 'prop-types';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { List, Item, Information, DeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContacts, children }) => {
  return (
    <>
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
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContacts: PropTypes.func.isRequired,
// };
