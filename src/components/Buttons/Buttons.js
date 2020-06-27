import React from 'react';
import './Buttons.css';
import { ButtonsShape } from '../../shapes';

export const Buttons = (props) => {
  const { sortReverse, sortAlphabetically, sortByLength, reset } = props;

  return (
    <div className="btn-group">
      <button
        onClick={sortReverse}
        type="button"
        className="btn btn-info"
      >
        Reverse
      </button>
      <button
        onClick={sortAlphabetically}
        type="button"
        className="btn btn-info"
      >
        Sort alphabetically
      </button>
      <button
        onClick={sortByLength}
        type="button"
        className="btn btn-info"
      >
        Sort by length
      </button>
      <button
        onClick={reset}
        type="button"
        className="btn btn-info"
      >
        Reset
      </button>
    </div>
  );
};

Buttons.propTypes = ButtonsShape.isRequired;
