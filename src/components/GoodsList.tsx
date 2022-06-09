import React from 'react';
import './GoodsList.css';

type Props = {
  goodsList: string[],
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => {
  return (
    <ul>
      {goodsList.map((good) => (
        <li key={good} className="goodslist">
          {good}
        </li>
      ))}
    </ul>
  );
};
