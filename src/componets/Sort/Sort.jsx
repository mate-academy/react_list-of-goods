import React from 'react';
import PropTypes from 'prop-types';

export const Sort = ({ item, sort }) => (
  <button
    type="button"
    className={`button ${item}`}
    onClick={sort}
  >
    Sort
  </button>
);

Sort.propTypes = {
  item: PropTypes.string.isRequired,
  sort: PropTypes.func.isRequired,
};
