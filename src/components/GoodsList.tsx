import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="Goods">
      {goods.map(item => (
        <li className="Goods__item" key={item}>{item}</li>
      ))}
    </ul>
  );
};
