import React from 'react';
import PropTypes from 'prop-types';

import './startButton.css';

const StartButton = ({ onStart }) => (
  <button
    type="button"
    className="App__button"
    onClick={onStart}
  >
    Start
  </button>
);

StartButton.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export { StartButton };
