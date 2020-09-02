import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Good from '../Good';

function GoodsList({ goods }) {
  const [goodsList, setGoodsList] = useState(goods);

  function reverse() {
    setGoodsList([...goodsList].reverse());
  }

  function sortAlphabet() {
    setGoodsList([...goodsList].sort());
  }

  function sortLength() {
    setGoodsList([...goodsList].sort((a, b) => a.length - b.length));
  }

  function reset() {
    setGoodsList([...goods]);
  }

  return (
    <>
      <ul>
        {goodsList.map(good => <li key={good}><Good good={good} /></li>)}
      </ul>
      <button type="button" onClick={reverse}>Reverse</button>
      <button type="button" onClick={sortAlphabet}>Sort Alphabeticaly</button>
      <button type="button" onClick={sortLength}>Sort by length</button>
      <button type="button" onClick={reset}>Reset</button>
    </>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GoodsList;
