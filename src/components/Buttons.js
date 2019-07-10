import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  const reverseButton = (
    <button
      type="button"
      className="button button--reverse"
      onClick={props.reverseClick}
    >
    Reverse
    </button>
  );

  const sortAlphabeticalButton = (
    <button
      type="button"
      className="button"
      onClick={props.sortAlphabetical}
    >
        Sort Alphabetical
    </button>
  );

  const resetButton = (
    <button
      type="button"
      className="button button--reset"
      onClick={props.resetToInitial}
    >
      Reset
    </button>
  );

  const sortByLengthButton = (
    <button
      type="button"
      className="button button--length"
      onClick={props.sortByLength}
    >
      Sort by Length
    </button>
  );

  return (
    <>
      {reverseButton}
      {sortAlphabeticalButton}
      {resetButton}
      {sortByLengthButton}
    </>
  );
};

Buttons.propTypes = {
  reverseClick: PropTypes.func.isRequired,
  sortAlphabetical: PropTypes.func.isRequired,
  resetToInitial: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};

export default Buttons;
