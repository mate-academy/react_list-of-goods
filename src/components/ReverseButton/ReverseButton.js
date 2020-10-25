import React from 'react';
import PropTypes from 'prop-types';

export const ReverseButton = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Reverse
  </button>
);

ReverseButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
