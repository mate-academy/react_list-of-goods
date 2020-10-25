import React from 'react';
import PropTypes from 'prop-types';

export const ResetButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Reset
  </button>
);

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
