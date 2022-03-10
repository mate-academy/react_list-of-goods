import React from 'react';
import './ListOfGoods.css';

type Props = {
  goods: string[],
  select: number,
};

export const ListOfGoods: React.FC<Props> = ({ goods, select }) => {
  return (
    <div className="item-list">
      <ul>
        {goods.filter(item => item.length >= select).map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGoods;
