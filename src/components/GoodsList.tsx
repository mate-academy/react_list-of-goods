import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './GoodsList.scss';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <div className="goods">
    <ul className="goods__list">
      {goods.map(goodsItem => (
        <li className="goods__item" key={uuidv4()}>
          {goodsItem}
        </li>
      ))}
    </ul>
  </div>
);
