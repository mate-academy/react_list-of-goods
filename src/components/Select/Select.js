import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';

const filterLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Select = ({ onselect, currentSelected }) => (
  <form action="#">
    <select
      value={currentSelected}
      className="form-control"
      onChange={onselect}
    >
      <option
        desabled="true"
        value="length"
      >
        How long good name
      </option>
      {
        filterLength.map(el => <option key={el} value={el}>{el}</option>)
      }
    </select>
  </form>
);

Select.propTypes = {
  onselect: PropTypes.func,
  currentSelected: PropTypes.number,
};

Select.defaultProps = {
  onselect: () => {},
  currentSelected: 0,
};
