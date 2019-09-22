import React from 'react';
import './Button.css';

const Buttons = ({
  reverseFunc,
  selectFunc,
  selectValue,
  abcFunc,
  resetFunc,
  lengthFunc,
}) => (
  <div>
    <button type="button" className="button" onClick={reverseFunc}>
      Reverse
    </button>
    <button type="button" className="button" onClick={abcFunc}>
      Sort Alfabetly
    </button>
    <button type="button" className="button" onClick={resetFunc}>
      Reset
    </button>
    <button type="button" className="button" onClick={lengthFunc}>
      Sort by length
    </button>
    <select value={selectValue} className="select" onChange={selectFunc}>
      <option value={0} disabled>0</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
    </select>
  </div>
);

export default Buttons;
