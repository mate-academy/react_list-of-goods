import React from 'react';

interface Props {
  initialGoods: string[],
}

export const GoodsList: React.FC<Props> = ({ initialGoods }) => (
  <>
    <h2>List:</h2>
    <ul>
      {
        initialGoods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))
      }
    </ul>
  </>
);
