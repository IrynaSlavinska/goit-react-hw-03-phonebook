import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const isExist = this.state.contacts.some(contact => contact.name === name);
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(5),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactIdToDel => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactIdToDel
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <div className="container">
        <div className="part-container">
          <h1 className="phonebook-title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>

        <div className="part-container">
          <h2 className="phonebook-subtitle">Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
