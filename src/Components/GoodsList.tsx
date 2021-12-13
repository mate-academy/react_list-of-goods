import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="goodsList">
      {
        goods.map(good => {
          return (
            <li key={good} className="goodsList__item">
              {good}
            </li>
          );
        })
      }
    </ul>
  );
};
