import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ListOfGoods.scss';

type Props = {
  goods: string[],
};

export const ListOfGoods: React.FC<Props> = ({ goods }) => (
  <ul className="goods-list">
    {
      goods.map(good => (
        <li
          key={uuidv4()}
        >
          {good}
        </li>
      ))
    }
  </ul>
);
