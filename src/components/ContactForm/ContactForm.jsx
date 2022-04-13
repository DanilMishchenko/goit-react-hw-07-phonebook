import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  Section,
  Title,
  PhonebookForm,
  PhonebookLabel,
  InputName,
  ButtonAddContact,
} from './ContactForm.styled';

export class ContactsForm extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(4);
  numderInputId = nanoid(4);

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onChange(this.state);
    this.resetFrom();
  };

  resetFrom = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Section>
        <Title>Phonebook</Title>
        <PhonebookForm onSubmit={this.handleSubmit}>
          <PhonebookLabel htmlFor={this.nameInputId}>Name:</PhonebookLabel>
          <InputName
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></InputName>
          <PhonebookLabel htmlFor={this.numderInputId}>Number:</PhonebookLabel>
          <InputName
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numderInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></InputName>
          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </PhonebookForm>
      </Section>
    );
  }
}
