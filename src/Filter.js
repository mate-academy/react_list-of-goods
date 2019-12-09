import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleClick, children }) => (
  <button
    className="button"
    type="button"
    onClick={handleClick}
  >
    {children}
  </button>
);

Filter.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Filter;
