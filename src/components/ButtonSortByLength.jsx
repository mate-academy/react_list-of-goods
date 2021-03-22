import React from 'react';
import PropTypes from 'prop-types';

export function ButtonSortByLength({ sortByLength, showButtons }) {
  return (
    <>
      {!showButtons && (
        <button
          type="button"
          onClick={sortByLength}
        >
          Sort by length
        </button>
      )}
    </>
  );
}

ButtonSortByLength.propTypes = {
  sortByLength: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};
