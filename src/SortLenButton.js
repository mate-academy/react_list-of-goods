import React from 'react';
import PropTypes from 'prop-types';

const SortLenButton = ({ handlerSortLen }) => (
  <button
    type="button"
    className="button"
    onClick={handlerSortLen}
  >
    Sort by length
  </button>
);

SortLenButton.propTypes = { handlerSortLen: PropTypes.func.isRequired };

export default SortLenButton;
