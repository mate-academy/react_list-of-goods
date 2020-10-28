import React from 'react';
import PropTypes from 'prop-types';

export function ResetButton({ resetSorting }) {
  return (
    <button
      type="button"
      onClick={resetSorting}
      className="ui red inverted button"
    >
      Reset
    </button>
  );
}

ResetButton.propTypes = {
  resetSorting: PropTypes.func.isRequired,
};
