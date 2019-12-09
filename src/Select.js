import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ handlerFilterLen }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <form>
      <select className="select" onChange={handlerFilterLen}>
        {numbers.map(number => <option>{number}</option>)}
      </select>
    </form>
  );
};

Select.propTypes = { handlerFilterLen: PropTypes.func.isRequired };

export default Select;
