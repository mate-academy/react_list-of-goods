import React from 'react';
import PropTypes from 'prop-types';

export const StartButton = ({ toggleVisible }) => (
  <button
    type="button"
    onClick={toggleVisible}
  >
    Start
  </button>
);

StartButton.propTypes = {
  toggleVisible: PropTypes.func.isRequired,
};
