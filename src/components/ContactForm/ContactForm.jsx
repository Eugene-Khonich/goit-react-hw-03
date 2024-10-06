import css from './ContactForm.module.css';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { AddProfileSchema } from '../utils/schema';

const INITIAL_VALUES = {
  name: '',
  phone: '',
};
const ContactForm = ({ onAddContact }) => {
  const onHandleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={AddProfileSchema}
      onSubmit={onHandleSubmit}
    >
      <Form className={css.container}>
        <label htmlFor="text" className={css.labelName}>
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label htmlFor="phone" className={css.labelNumber}>
          <span>Number</span>
          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="span" />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
