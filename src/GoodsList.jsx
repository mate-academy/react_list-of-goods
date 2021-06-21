import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = (
  { items,
    isReversed,
    sortedBy,
    reverseList,
    resetList,
    sortAlphabetically,
    sortByLength,
    length,
    filterByLength },
) => {
  if (isReversed) {
    items.reverse();
  }

  if (sortedBy === 'alphabetically') {
    items.sort((a, b) => a > b ? 1 : -1);
  }

  if (sortedBy === 'by length') {
    items.sort((a, b) => b.length - a.length);
  }

  items = items.filter(item => item.length >= length);

  return (
    <>
      <ul>{items.map(item => (<li key={item}>{item}</li>))}</ul>
      <button
        type="button"
        onClick={() => {
          reverseList();
        }}
      >
        Reverse
      </button>
      <button
        type="button"
        onClick={() => {
          sortAlphabetically();
        }}
      >
        Sort alphabetically
      </button>
      <button
        type="button"
        onClick={() => {
          sortByLength();
        }}
      >
        Sort by length
      </button>
      <button
        type="button"
        onClick={() => {
          resetList();
        }}
      >
        Reset
      </button>
      <select
        name="length"
        value={length}
        onChange={e => filterByLength(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">9</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  );
};

GoodsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isReversed: PropTypes.bool.isRequired,
  sortedBy: PropTypes.string.isRequired,
  reverseList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  filterByLength: PropTypes.func.isRequired,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
