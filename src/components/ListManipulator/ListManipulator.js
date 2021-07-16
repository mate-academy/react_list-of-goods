import React from 'react';
import PropTypes from 'prop-types';

export const ListManipulator = props => (
  <>
    <button
      type="button"
      onClick={() => {
        props.app.reverse();
      }}
    >
      Reverse
    </button>
    <button
      type="button"
      onClick={() => {
        props.app.sortByName();
      }}
    >
      Sort by name
    </button>
    <button
      type="button"
      onClick={() => {
        props.app.sortByLength();
      }}
    >
      Sort by length
    </button>
    <button
      type="button"
      onClick={() => {
        props.app.reset();
      }}
    >
      Reset
    </button>
    <select
      id="lengthSelector"
      defaultValue="1"
      onInput={({ target }) => {
        props.app.filterByLength(+target.value);
      }}
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
  </>
);

ListManipulator.propTypes = {
  app: PropTypes.shape({
    reverse: PropTypes.func.isRequired,
    sortByName: PropTypes.func.isRequired,
    sortByLength: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    filterByLength: PropTypes.func.isRequired,
  }).isRequired,
};
