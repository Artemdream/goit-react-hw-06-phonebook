import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterContacts } from 'redux/filterSlice';
import { getFiltered } from 'redux/selectors';
import './Filter.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFiltered);

  const getVisibleContacts = ({ target: { value } }) => {
    dispatch(setFilterContacts(value));
  };

  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={getVisibleContacts}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
