import React from 'react';
import PropTypes from 'prop-types';

export const Reverse = ({ item, reverse }) => (
  <button
    type="button"
    className={`button ${item}`}
    onClick={reverse}
  >
    Reverse
  </button>
);

Reverse.propTypes = {
  item: PropTypes.string.isRequired,
  reverse: PropTypes.func.isRequired,
};
