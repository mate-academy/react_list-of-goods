import React from 'react';
import './Goods.scss';

type Props = {
  goods: string[];
};

export const Goods = ({ goods }: Props) => {
  return (
    <ul className="goods">
      {goods.map(good => (
        <li key={good} className="good">
          {good}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Goods);
