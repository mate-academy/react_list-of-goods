import React from 'react';
import PropTypes from 'prop-types';

const LoadButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
  >
    Start
  </button>
);

LoadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadButton;
