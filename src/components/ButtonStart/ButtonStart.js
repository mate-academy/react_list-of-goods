import React from 'react';
import PropTypes from 'prop-types';

export const ButtonStart = ({ handleClick }) => (
  <button type="button" onClick={handleClick}>
    Start
  </button>
);

ButtonStart.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
