import css from './ContactForm.module.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { AddProfileSchema } from '../utils/schema';
import { useId } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_VALUES = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const onHandleSubmit = (values, actions) => {
    addContact({ id: nanoid(), ...values });
    actions.resetForm();
  };
  const nameField = useId();
  const numberField = useId();

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={AddProfileSchema}
      onSubmit={onHandleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor={nameField} className={css.labelName}>
          <span>Name</span>
          <Field type="text" name="name" id={nameField} />
          <ErrorMessage name="name" component="span" className={css.errorMsg} />
        </label>
        <label htmlFor={numberField} className={css.labelNumber}>
          <span>Number</span>
          <Field type="text" name="number" id={numberField} />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMsg}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
