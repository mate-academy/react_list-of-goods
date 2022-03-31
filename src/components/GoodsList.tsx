import React from 'react';

import './GoodsList.scss';

import { Good } from '../types/Good';

interface Props {
  goods: Good[],
}

const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goods">
      {
        goods.map(good => (
          <li
            key={good.id}
            className="goods__item"
          >
            {good.name}
          </li>
        ))
      }
    </ul>
  );
};

export default GoodsList;
