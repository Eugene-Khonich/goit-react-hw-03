import css from './ContactLIst.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(item => {
        return (
          <li key={item.id} className={css.card}>
            <Contact name={item.name} number={item.number} />
            <button className={css.btn}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
