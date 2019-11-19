import React from 'react';
import PropTypes from 'prop-types';

function Buttons({
  reverse,
  sortAlph,
  reset,
  sortByLength,
}) {
  return (
    <>
      <button
        type="button"
        onClick={reverse}
      >
        reverse
      </button>
      <button
        type="button"
        onClick={sortAlph}
      >
        sortAlphabetically
      </button>
      <button
        type="button"
        onClick={reset}
      >
        reset
      </button>
      <button
        type="button"
        onClick={sortByLength}
      >
        sortByLength
      </button>
    </>
  );
}

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortAlph: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};

export default Buttons;
