import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const userId = nanoid();
    const findDuplicate = this.state.contacts.find(
      contact => contact.name === data.name
    );

    findDuplicate
      ? alert(`${data.name} is alredy in contacts.`)
      : this.setState(prevState => ({
          contacts: [
            { id: userId, name: data.name, number: data.number },
            ...prevState.contacts,
          ],
        }));

    console.log(this.state);
  };

  filterChangeHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalisedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.filterChangeHandler} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
