import React from 'react';
import PropTypes from 'prop-types';

export function ButtonReverse({ reverse, showButtons }) {
  return (
    <>
      {!showButtons && (
        <button
          type="button"
          onClick={reverse}
        >
          Reverse
        </button>
      )}
    </>
  );
}

ButtonReverse.propTypes = {
  reverse: PropTypes.func.isRequired,
  showButtons: PropTypes.bool.isRequired,
};
