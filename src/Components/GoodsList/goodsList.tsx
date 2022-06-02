import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {goods.map((good) => (
        <li className="goodsList__item" key={good}>
          <h4 className="goodsList__text">
            {good}
          </h4>
        </li>
      ))}
    </ul>
  );
};
