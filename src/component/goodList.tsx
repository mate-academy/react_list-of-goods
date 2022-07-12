import React from 'react';

type Props = {
  goods: string[],
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <div className="goodList">
    <h1>Goods list:</h1>
    {goods.map(good => (
      <ul className="goodList__good" key={good}>
        <li>{good}</li>
      </ul>
    ))}
  </div>
);
