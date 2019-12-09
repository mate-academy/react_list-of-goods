import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ handlerFilterLen, selectedValue }) => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <form>
      <select
        className="select"
        onChange={handlerFilterLen}
        value={selectedValue}
      >
        {values.map(number => <option>{number}</option>)}
      </select>
    </form>
  );
};

Select.propTypes = {
  handlerFilterLen: PropTypes.func.isRequired,
  selectedValue: PropTypes.number.isRequired,
};

export default Select;
