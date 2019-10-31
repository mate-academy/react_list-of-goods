import React from 'react';

function GoodsList(props) {
  const {
    goods,
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
      <ul>
        {goods.map(item => (
          <li>{item}</li>
        ))}
      </ul>

      <button className="btn" onClick={reverse}>Reverse</button>
      <button className="btn" onClick={sortAlphabetically}>Sort alphabetically</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={sortByLength}>Sort by length</button>
      <select
        value={selectValue}
        onChange={selectLength}
      >
        {goodsItems.map((item, index) => (
          <option value={index}>{index + 1}</option>))
        }
      </select>
    </>
  )
}

export default GoodsList;
