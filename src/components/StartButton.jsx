import React from 'react';
import PropTypes from 'prop-types';

const StartButton = ({ start, isVisible }) => {
  return (
    <button
      type="button"
      className="positive ui button"
      onClick={start}
    >
      {isVisible ? 'Hide' : 'Show'}
    </button>
  );
};

StartButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
};

export default StartButton;
