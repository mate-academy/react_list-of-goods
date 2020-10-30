import React from 'react';
import PropTypes from 'prop-types';

const ReverseButton = ({ isVisible, reverse}) => {
  return (
    <button
      type="button"
      disabled={isVisible ? '' : 'disabled'}
      className="ui secondary button"
      onClick={reverse}
    >
      Reverse
    </button>
  );
};

ReverseButton.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  reverse: PropTypes.func.isRequired,
};

export default ReverseButton;
