import React from 'react';
import PropsTypes from 'prop-types';

export const Button = ({
  reverse,
  reset,
  sortByAlphabet,
  sortByLengt,
}) => (
  <>
    <button
      type="button"
      className="button is-primary is-outlined"
      onClick={sortByAlphabet}
    >
      Sort by Alphaber
    </button>
    <button
      type="button"
      className="button is-primary is-outlined"
      onClick={sortByLengt}
    >
      Sort by length
    </button>
    <button
      type="button"
      className="button is-primary is-outlined"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button is-danger is-outlined"
      onClick={reset}
    >
      Reset
    </button>
  </>
);

Button.propTypes = {
  reverse: PropsTypes.func.isRequired,
  reset: PropsTypes.func.isRequired,
  sortByAlphabet: PropsTypes.func.isRequired,
  sortByLengt: PropsTypes.func.isRequired,
};
