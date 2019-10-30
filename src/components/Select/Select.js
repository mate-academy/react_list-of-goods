import React from 'react';

const Select = ({ shown, callback, selectedOption }) => {
  if (shown) {
    return (
      <select
        name="select"
        onChange={callback}
        value={selectedOption}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
    );
  }

  return false;
};

export default Select;
