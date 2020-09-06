import React from 'react';
import PropTypes from 'prop-types';

export const Reset = ({ item, reset }) => (
  <button
    type="button"
    className={`button ${item}`}
    onClick={reset}
  >
    Reset
  </button>
);

Reset.propTypes = {
  item: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
};
