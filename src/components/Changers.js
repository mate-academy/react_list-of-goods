import React from 'react';
import PropTypes from 'prop-types';

const Changers = (
  {
    handleReset,
    SortByLength,
    currentValue,
    hendleSelect,
    handleRverse,
    sortByAlphabet,
  }
) => (
  <div className="button_list">
    <button
      type="button"
      onClick={handleReset}
      className="button"
    >
      Reset
    </button>
    <button
      type="button"
      onClick={SortByLength}
      className="button"
    >
      Sort By Length
    </button>
    <div>
      <select
        className="select"
        value={currentValue}
        onChange={hendleSelect}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <button
      type="button"
      className="button"
      onClick={handleRverse}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={sortByAlphabet}
      className="button"
    >
        Sort By Alphabet
    </button>
  </div>
);

Changers.propTypes = {
  handleReset: PropTypes.func.isRequired,
  currentValue: PropTypes.func.isRequired,
  SortByLength: PropTypes.func.isRequired,
  hendleSelect: PropTypes.func.isRequired,
  handleRverse: PropTypes.func.isRequired,
  sortByAlphabet: PropTypes.func.isRequired,
};

export default Changers;
