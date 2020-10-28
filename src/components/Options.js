import React from 'react';
import PropTypes from 'prop-types';

const Options = (props) => {
  const { reverse, sortByAlphabetically, reset, sortByLength } = props;

  return (
    <>
      <button
        type="button"
        onClick={reverse}
        className="ui button"
      >
        Reverse
      </button>
      <button
        className="ui button"
        type="button"
        onClick={sortByAlphabetically}
      >
        SortByAlphabetically
      </button>
      <button
        className="ui button"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="ui button"
        type="button"
        onClick={sortByLength}
      >
        SortByLength
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
