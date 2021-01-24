import React from 'react';
import PropTypes from 'prop-types';

const Button = (
  {
    reverseList,
    alphabetSort,
    lengthSort,
    reset,
  },
) => (
  <div>
    <button
      type="button"
      onClick={reverseList}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={alphabetSort}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      onClick={lengthSort}
    >
      Sort by length
    </button>
    <button
      type="button"
      onClick={reset}
    >
      Reset
    </button>
  </div>
);

Button.propTypes = {
  reverseList: PropTypes.func.isRequired,
  alphabetSort: PropTypes.func.isRequired,
  lengthSort: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Button;
