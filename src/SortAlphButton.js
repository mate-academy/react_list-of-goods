import React from 'react';
import PropTypes from 'prop-types';

const SortAlphButton = ({ handlerSortAlph }) => (
  <button
    type="button"
    className="button"
    onClick={handlerSortAlph}
  >
    Sort alphabetically
  </button>
);

SortAlphButton.propTypes = { handlerSortAlph: PropTypes.func.isRequired };

export default SortAlphButton;
