import css from './ContactLIst.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ filteredUsers, deleteContacts }) => {
  return (
    <ul className={css.list}>
      {filteredUsers.map(item => {
        return (
          <li key={item.id} className={css.card}>
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              deleteContacts={deleteContacts}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
