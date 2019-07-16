import React from 'react';

const ListOfGoods = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>{good}</li>
    ))}
  </ul>
);

export default ListOfGoods;
