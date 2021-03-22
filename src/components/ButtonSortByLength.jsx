import React from 'react';
import PropTypes from 'prop-types';

export function ButtonSortByLength({ sortByLength }) {
  return (
    <>
      <button
        type="button"
        onClick={sortByLength}
      >
        Sort by length
      </button>
    </>
  );
}

ButtonSortByLength.propTypes = {
  sortByLength: PropTypes.func.isRequired,
};
