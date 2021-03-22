import React from 'react';
import PropTypes from 'prop-types';

export function ButtonReset({ reset }) {
  return (
    <>
      <button
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}

ButtonReset.propTypes = {
  reset: PropTypes.func.isRequired,
};
