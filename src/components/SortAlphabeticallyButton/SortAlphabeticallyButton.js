import React from 'react';
import PropTypes from 'prop-types';

export const SortAlphabeticallyButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Sort alphabetically
  </button>
);

SortAlphabeticallyButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
