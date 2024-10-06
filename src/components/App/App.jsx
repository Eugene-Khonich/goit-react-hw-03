import './App.module.css';
import contacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <ContactForm />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default App;
