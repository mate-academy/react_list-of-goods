import React from 'react';
import PropTypes from 'prop-types';

export function ButtonReset({ reset, showButtons }) {
  return (
    <>
      {!showButtons && (
        <button
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </>
  );
}

ButtonReset.propTypes = {
  reset: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};
