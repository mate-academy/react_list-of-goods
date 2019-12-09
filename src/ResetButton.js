import React from 'react';
import PropTypes from 'prop-types';

const ResetButton = ({ handlerReset }) => (
  <button
    type="button"
    className="button"
    onClick={handlerReset}
  >
    Reset
  </button>
);

ResetButton.propTypes = { handlerReset: PropTypes.func.isRequired };

export default ResetButton;
