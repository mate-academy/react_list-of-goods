import React from 'react';
import PropTypes from 'prop-types';

export const Length = ({ item, sortByLength }) => (
  <button
    type="button"
    className={`button ${item}`}
    onClick={sortByLength}
  >
    Length
  </button>
);

Length.propTypes = {
  item: PropTypes.string.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
