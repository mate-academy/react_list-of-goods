import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  const { reset, reverse, sortAlphabetically, sortByLength } = props;

  return (
    <section className="buttons">
      <button
        type="button"
        onClick={reverse}
      >
        reverse
      </button>

      <button
        type="button"
        onClick={sortAlphabetically}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        onClick={sortByLength}
      >
        Sort by length
      </button>

      <button
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </section>
  );
};

export default Buttons;

Buttons.propTypes = {
  reset: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
