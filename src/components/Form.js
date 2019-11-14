import React from 'react';
import PropTypes from 'prop-types';

function Form({ onSubmit, changeSelect, selectValue }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <select
          name="number"
          onChange={changeSelect}
          size="5"
          value={selectValue}
          method="GET"
          action="#"
        >
          <option disabled>choose length</option>
          {[...Array(10)].map(
            (item, index) => (
              <option
                value={index + 1}
                style={{ color: 'blue' }}
              >
                {index + 1}
              </option>
            )
          )}
        </select>
        <br />
        <input type="submit" value="Отправить" />
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changeSelect: PropTypes.func.isRequired,
  selectValue: PropTypes.number.isRequired,
};

export default Form;
