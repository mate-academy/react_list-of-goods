import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ reverse, sort, reset, sortLength }) => (
  <div>
    <button
      type="button"
      onClick={reverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sort}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      onClick={reset}
    >
      Reset
    </button>
    <button
      type="button"
      onClick={sortLength}
    >
      Sort by length
    </button>
  </div>
);

Buttons.propTypes = {
  reset: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sort: PropTypes.func.isRequired,
  sortLength: PropTypes.func.isRequired,
};

export default Buttons;
