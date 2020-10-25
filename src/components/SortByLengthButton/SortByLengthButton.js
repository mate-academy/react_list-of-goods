import React from 'react';
import PropTypes from 'prop-types';

export const SortByLengthButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Sort by length
  </button>
);

SortByLengthButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
