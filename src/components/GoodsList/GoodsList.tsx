import React from 'react';
import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <div className="goods">
      <ul className="goods__list">
        {goods.map(good => (
          <li
            key={good}
            className="goods__list-item button is-light"
          >
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
