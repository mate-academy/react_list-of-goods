import React from 'react';
import PropTypes from 'prop-types';

export function ButtonSortAlphabetically({ sortByName }) {
  return (
    <>
      <button
        type="button"
        onClick={sortByName}
      >
        Sort alphabetically
      </button>
    </>
  );
}

ButtonSortAlphabetically.propTypes = {
  sortByName: PropTypes.func.isRequired,
};
