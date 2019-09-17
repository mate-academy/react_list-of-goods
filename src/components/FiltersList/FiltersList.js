import React from 'react';

const FiltersList = ({ sortAZ, sortByLength, reverseSort, reset, selectLengthSort }) => (
  <>
    <button className="buttons" onClick={sortAZ} type="button">A-Z</button>
    <button className="buttons" onClick={sortByLength} type="button">By length</button>
    <button className="buttons" onClick={reverseSort} type="button">Reverse</button>
    <button className="buttons" onClick={reset} type="button">Reset</button>
    <select className="select" onChange={selectLengthSort}>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9</option>
    </select>
  </>
);

export default FiltersList;
