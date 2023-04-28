import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/filterSlice';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const getVisibleContacts = ({ target: { value } }) => {
    dispatch(setFilterContacts(value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={getVisibleContacts}></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
