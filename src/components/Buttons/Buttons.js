import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = (props) => {
  const {
    reverseList,
    sortByName,
    sortByLength,
    reset,
    selectByLength,
    numbers,
    lengthLimit,
  } = props;

  return (
    <div className="d-flex justify-content-center card-footer">
      <button
        type="button"
        className="btn btn-info text-uppercase"
        onClick={reverseList}
      >
        Reverse
      </button>

      <button
        type="button"
        className="btn btn-info ml-2 text-uppercase"
        onClick={sortByName}
      >
        Sort alphabetically
      </button>

      <button
        type="button"
        className="btn btn-info ml-2 text-uppercase"
        onClick={sortByLength}
      >
        Sort by length
      </button>

      <button
        type="button"
        className="btn btn-danger ml-2 text-uppercase"
        onClick={reset}
      >
        Reset
      </button>

      <select
        onChange={selectByLength}
        value={lengthLimit}
        className="btn btn-dark ml-2"
      >
        {numbers.map(number => (
          <option
            key={number}
            value={number}
          >
            {number}
          </option>
        ))}
      </select>
    </div>
  );
};

Buttons.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  selectByLength: PropTypes.func.isRequired,
  lengthLimit: PropTypes.number.isRequired,
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};
