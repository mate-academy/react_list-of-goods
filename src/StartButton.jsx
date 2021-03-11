import React from 'react';
import PropTypes from 'prop-types';

export const StartButton = ({ handler }) => (
  <button
    className="button button--start"
    type="button"
    onClick={handler}
  >
    Start
  </button>
);

StartButton.propTypes = {
  handler: PropTypes.func.isRequired,
};
