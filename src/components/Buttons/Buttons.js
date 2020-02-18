import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

export const Buttons = (
  { reversed, sortedAlphabetically, reseted, sortedByLength },
) => (
  <>
    <button
      type="button"
      className="button"
      onClick={reversed}
    >
      Reverse
    </button>
    <button
      type="button"
      className="button"
      onClick={sortedAlphabetically}
    >
    Sort alphabetically
    </button>
    <button
      type="button"
      className="button"
      onClick={reseted}
    >
    Reset
    </button>
    <button
      type="button"
      className="button"
      onClick={sortedByLength}
    >
    Sort by length
    </button>
  </>
);

Buttons.propTypes = {
  reversed: PropTypes.func.isRequired,
  sortedAlphabetically: PropTypes.func.isRequired,
  reseted: PropTypes.func.isRequired,
  sortedByLength: PropTypes.func.isRequired,
};
