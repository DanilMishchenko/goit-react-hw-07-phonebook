import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { List, Item, Information, DeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContacts, children }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      {children}
      <List>
        {contacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <Information>
              {name}: {phone}
            </Information>
            <DeleteButton type="button" onClick={() => deleteContact(id)}>
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
