import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ isVisible, reset }) => {
  return (
  <button
    type="button"
    disabled={!isVisible && 'disabled'}
    className="ui secondary button"
    onClick={reset}
  >
    Reset
  </button>
  );
};

ResetButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ResetButton;
