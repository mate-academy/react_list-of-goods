import React from 'react';
import PropTypes from 'prop-types';

export function ButtonSortAlphabetically({ sortByName, showButtons }) {
  return (
    <>
      {!showButtons && (
        <button
          type="button"
          onClick={sortByName}
        >
          Sort alphabetically
        </button>
      )}
    </>
  );
}

ButtonSortAlphabetically.propTypes = {
  sortByName: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};
