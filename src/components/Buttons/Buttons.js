import React from 'react';
import PropTypes from 'prop-types';

import './Buttons.css';

const Buttons = (props) => {
  const {
    isStart,
    start,
    reverse,
    sortAlphabetically,
    reset,
    sortLenght,
  } = props;

  return (
    <>
      <button
        className="App__button"
        type="button"
        onClick={start}
        hidden={isStart}
      >
        Start
      </button>
      <button
        className="App__button"
        type="button"
        onClick={reverse}
        hidden={!isStart}
      >
        Reverse
      </button>
      <button
        className="App__button"
        type="button"
        onClick={sortAlphabetically}
        hidden={!isStart}
      >
        Sort alphabetically
      </button>
      <button
        className="App__button"
        type="button"
        onClick={reset}
        hidden={!isStart}
      >
        Reset
      </button>
      <button
        className="App__button"
        type="button"
        onClick={sortLenght}
        hidden={!isStart}
      >
        Sort by length
      </button>
    </>
  );
};

export default Buttons;

Buttons.propTypes = {
  isStart: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortLenght: PropTypes.func.isRequired,
};
