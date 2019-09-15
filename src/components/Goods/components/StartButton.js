import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ handleClick }) => (
  <button
    onClick={handleClick}
    type="button"
    className="goods__start-button btn btn-secondary"
  >
    Start
  </button>
);

StartButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default StartButton;
