import React from 'react';
import PropTypes from 'prop-types';

const ReverseButton = ({ handlerReverse }) => (
  <button
    type="button"
    className="button"
    onClick={handlerReverse}
  >
    Reverse
  </button>
);

ReverseButton.propTypes = { handlerReverse: PropTypes.func.isRequired };

export default ReverseButton;
