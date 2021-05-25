import React from 'react';
import Good from '../Good/Good';

const GoodsList = ({goods}) => (
  <ul>
    {goods.map(good => (
      <Good
        key={good}
        good={good}
      />
    ))}
  </ul>
);

export default GoodsList;
