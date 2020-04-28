import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ reverse, sortLength, sortAlph, reset }) => (
  <>
    <button
      type="button"
      onClick={() => reverse()}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={() => sortAlph()}
    >
      Sort Alph
    </button>
    <button
      type="button"
      onClick={() => reset()}
    >
      Reset
    </button>
    <button
      type="button"
      onClick={() => sortLength()}
    >
      Sort Length
    </button>
  </>
);

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortLength: PropTypes.func.isRequired,
  sortAlph: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Buttons;
