import React from 'react';
import PropTypes from 'prop-types';

export function ButtonReverse({ reverse }) {
  return (
    <>
      <button
        type="button"
        onClick={reverse}
      >
        Reverse
      </button>
    </>
  );
}

ButtonReverse.propTypes = {
  reverse: PropTypes.func.isRequired,
};
