import React from 'react';
import './GoodList.scss';

type Props = {
  goods: string[];
};

export const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <div className="goods">
      <ul className="list">
        {goods.map(good => (
          <li
            key={good}
            className="goods__list-item"
          >
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
