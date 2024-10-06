import css from './Contact.module.css';
import { MdPerson } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

const Contact = ({ name, number }) => {
  return (
    <div className={css.card}>
      <h3 className={css.name}>
        <MdPerson />
        {name}
      </h3>
      <p className={css.number}>
        <MdPhone />
        {number}
      </p>
    </div>
  );
};

export default Contact;
