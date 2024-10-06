import Contact from '../Contact/Contact';
const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(item => {
        return (
          <li key={item.id}>
            <Contact name={item.name} number={item.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
