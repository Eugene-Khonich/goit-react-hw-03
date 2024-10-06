import { Formik, Field, ErrorMessage, Form } from 'formik';

const INITIAL_VALUES = {
  name: '',
  phone: '',
};
const ContactForm = () => {
  return (
    <Formik initialValues={INITIAL_VALUES}>
      <Form>
        <label htmlFor="text">
          <span>Name</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label htmlFor="phone">
          <span>Number</span>
          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="span" />
        </label>
        <button>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
