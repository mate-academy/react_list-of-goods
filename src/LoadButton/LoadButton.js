import React from 'react';
import PropTypes from 'prop-types';

const LoadButton = ({ hidden, onClick }) => (
  <button
    type="button"
    hidden={hidden}
    onClick={onClick}
  >
    Start
  </button>
);

LoadButton.propTypes = {
  hidden: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LoadButton;
