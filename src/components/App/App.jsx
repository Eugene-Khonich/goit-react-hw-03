import './App.module.css';
import { useState } from 'react';
import contacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const App = () => {
  const [filter, setFilter] = useState('');
  const filteredUsers = contacts.filter(
    user =>
      user.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      user.number.toLowerCase().includes(filter.toLowerCase().trim())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList contacts={contacts} filteredUsers={filteredUsers} />
      </div>
    </div>
  );
};

export default App;
