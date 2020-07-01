import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSort.css';

const ButtonsSort = (props) => {
  const {
    handleReverse,
    handleAlphabetically,
    handleByLength,
    handleReset,
  } = props;

  return (
    <div className="goods__buttons">
      <button
        onClick={handleReverse}
        type="button"
        className="goods__button goods__button-reverse"
      >
        Reverse
      </button>
      <button
        onClick={handleAlphabetically}
        type="button"
        className="goods__button goods__button-alphabet"
      >
        Sort alphabetically
      </button>
      <button
        onClick={handleByLength}
        type="button"
        className="goods__button goods__button-length"
      >
        Sort by length
      </button>
      <button
        onClick={handleReset}
        type="button"
        className="goods__button goods__button-reset"
      >
        Reset
      </button>
    </div>
  );
};

ButtonsSort.propTypes = {
  handleReverse: PropTypes.func.isRequired,
  handleAlphabetically: PropTypes.func.isRequired,
  handleByLength: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default ButtonsSort;
