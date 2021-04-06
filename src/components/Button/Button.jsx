import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  reverse,
  sortByAlphabet,
  sortByLength,
  reset,
  leaveByLength,
  goodsFromServer,
  selectDefault,
}) => {
  const maxLengthWord = goodsFromServer
    .sort((a, b) => b.length - a.length)[0]
    .length + 1;

  const countSelect = new Array(maxLengthWord)
    .fill(1)
    .map((num, index) => index + 1);

  return (
    <>
      <button
        className="btn__style"
        type="button"
        onClick={reverse}
      >
        Reverse
      </button>
      <button
        className="btn__style"
        type="button"
        onClick={sortByAlphabet}
      >
        Sort
      </button>
      <button
        className="btn__style"
        type="button"
        onClick={sortByLength}
      >
        Sort by length
      </button>
      <button
        className="btn__style"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
      <select
        value={selectDefault}
        className="btn__style"
        onChange={leaveByLength}
      >
        {countSelect.map((_select, index) => (
          <option
            value={index + 1}
            key={countSelect[index]}
          >
            {index + 1}
          </option>
        ))}
      </select>
    </>
  );
};

Button.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  leaveByLength: PropTypes.func.isRequired,
  goodsFromServer: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectDefault: PropTypes.string.isRequired,
};
