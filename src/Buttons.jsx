import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({
  reverseList,
  sortAlphabetically,
  initialList,
  sortByLength,
  selectValue,
  changeValue,
  selectItems,
  reset,
}) => (
  <>
    <button type="button" onClick={reverseList}>
      Reverse
    </button>

    <button type="button" onClick={sortAlphabetically}>
      Sort alphabetically
    </button>

    <button type="button" onClick={initialList}>
      Initial list
    </button>

    <button type="button" onClick={sortByLength}>
      Sort by length
    </button>

    <select
      value={selectValue}
      onChange={changeValue}
    >

      {[...new Array(selectItems).keys()].map(elem => (
        <option key={elem} value={elem + 1}>
          {elem + 1}
        </option>
      ))}

    </select>

    <button type="button" onClick={reset}>
      Reset
    </button>
  </>
);

export default Buttons;

Buttons.propTypes = {
  reverseList: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  initialList: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  selectItems: PropTypes.number.isRequired,
};
