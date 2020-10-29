import React from 'react';
import PropTypes from 'prop-types';

const Options = (props) => {
  const { reverse, sortByAlphabetically, reset, sortByLength } = props;

  return (
    <>
      <button
        className="ui button yellow"
        type="button"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        className="ui button green"
        type="button"
        onClick={sortByAlphabetically}
      >
        Sort alphabetically
      </button>
      <button
        className="ui button blue"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="ui button red"
        type="button"
        onClick={sortByLength}
      >
        Sort by length
      </button>
    </>
  );
};

Options.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};

export default Options;
