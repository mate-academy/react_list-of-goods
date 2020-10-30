import React from 'react';

export const GoodsList = ({ goods }) => (
  <>
    <ul>
      {
        goods.map(good => (
          <li key={good.name}>{good.name}</li>
        ))
      }
    </ul>
  </>
);
