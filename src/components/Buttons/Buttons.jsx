import React from 'react';
import propTypes from 'prop-types';

export const Buttons = (props) => {
  const { reverse, reset, sortByLength, sortAlphabetically } = props;

  return (
    <div>
      <button
        type="button"
        onClick={reverse}
        className="button"
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={reset}
        className="button"
      >
        Reset
      </button>
      <button
        type="button"
        onClick={sortAlphabetically}
        className="button"
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        onClick={sortByLength}
        className="button"
      >
        Sort by name length
      </button>
    </div>
  );
};

Buttons.propTypes = {
  reverse: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
  sortByLength: propTypes.func.isRequired,
  sortAlphabetically: propTypes.func.isRequired,
};
