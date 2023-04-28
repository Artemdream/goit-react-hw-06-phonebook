import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFiltered } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltered);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getFilterContact().map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
