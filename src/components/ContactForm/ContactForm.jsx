import { Formik, Field, Form, ErrorMessage } from 'formik';
import { schema, contactNumberMask } from '../Validate';
import '../ContactForm/ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import MaskedInput from 'react-text-mask';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = newContact => {
    const normalizeName = newContact.name.toLowerCase();
    // console.log(newContact);
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
    )
      ? alert(`${normalizeName} is already in contacts.`)
      : dispatch(addContact(newContact.name, newContact.number));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
      validationSchema={schema}
    >
      <Form className="form">
        <label>
          Name <br />
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <br />
          <ErrorMessage name="name" component={'span'} />
        </label>
        <label>
          Number <br />
          <Field
            type="tel"
            name="number"
            component={({ field }) => (
              <MaskedInput
                {...field}
                guide={true}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="The phone number must contain 7 digits"
                mask={contactNumberMask}
              />
            )}
          />
          <br />
          <ErrorMessage name="number" component={'span'} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
