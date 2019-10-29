import React from 'react';

function Goods(props) {
  const {
    reversGoods,
    resetScreen,
    sortAlphabet,
    sortLength,
    handleChangeSelect,
    selectedValue,
    goods,
    goodsOriginal,
  } = props;

  return (

    <div>
      <h1>Goods </h1>
      <>
        <button className="btn btn-outline-dark" type="button" onClick={reversGoods}>Reverse</button>
        <button className="btn btn-outline-dark" type="button" onClick={sortAlphabet}>
          Sort alphabetically
        </button>
        <button className="btn btn-outline-dark" type="button" onClick={sortLength}>Sort by length</button>
        <select
          value={selectedValue}
          onChange={handleChangeSelect}
        >
          {goodsOriginal.map((item, index) => (
            <option value={index}>{index + 1}</option>))
          }
        </select>
        <button className="btn btn-outline-dark" type="button" onClick={resetScreen}>Reset</button>
        <ol>
          {goods.map(item => <li>{item}</li>)}
        </ol>
      </>
    </div>
  );
}

export default Goods;
