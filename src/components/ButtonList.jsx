import React from 'react';
import PropTypes from 'prop-types';

export const ButtonList = ({
  reverseGoods,
  sortAlphabet,
  reset,
  sortLength,
}) => (
  <>
    <button
      type="button"
      className="btn btn-light"
      onClick={reverseGoods}
    >
      Reverse
    </button>
    <button
      type="button"
      className="btn btn-light"
      onClick={sortAlphabet}
    >
      Sort alphabetically
    </button>
    <button
      type="button"
      className="btn btn-light"
      onClick={sortLength}
    >
      Sort by length
    </button>
    <button
      type="button"
      className="btn btn-light"
      onClick={reset}
    >
      Reset
    </button>
  </>
);

ButtonList.propTypes = {
  reverseGoods: PropTypes.func.isRequired,
  sortAlphabet: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortLength: PropTypes.func.isRequired,
};
