import React from 'react';
import './ListOfGoods.css';

type Props = {
  goods: string[],
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => {
  return (
    <div className="item-list">
      <ul>
        {goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfGoods;
