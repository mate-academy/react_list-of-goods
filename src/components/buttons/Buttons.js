import React from 'react';

function Buttons(props) {
  const {
    goodsItems,
    selectValue,
    reverse,
    sortAlphabetically,
    reset,
    sortByLength,
    selectLength
  } = props;

  return (
    <>
      <button className="btn" onClick={reverse}>Reverse</button>
      <button className="btn" onClick={sortAlphabetically}>Sort alphabetically</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={sortByLength}>Sort by length</button>
      <select
        value={selectValue}
        onChange={selectLength}
      >
        {goodsItems.map((item, index) => (
          <option key={index} value={index}>{index + 1}</option>))
        }
      </select>
    </>
  );
}

export default Buttons;
