import React from 'react';
import PropTypes from 'prop-types';

const Buttons = props => (
  <>
    <button type="button" onClick={props.reverseList}>
      Reverse
    </button>

    <button type="button" onClick={props.sortAlphabetically}>
      Sort alphabetically
    </button>

    <button type="button" onClick={props.initialList}>
      Initial list
    </button>

    <button type="button" onClick={props.sortByLength}>
      Sort by length
    </button>

    <select
      value={props.selectValue}
      onChange={props.changeValue}
    >

      {[...new Array(props.selectItems).keys()].map(elem => (
        <option key={elem} value={elem + 1}>
          {elem + 1}
        </option>
      ))}

    </select>

    <button type="button" onClick={props.reset}>
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
