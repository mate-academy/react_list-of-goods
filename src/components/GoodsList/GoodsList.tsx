import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: string[],
};

// eslint-disable-next-line
export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="GoodsList">
      {goods.map((good) => (
        <li className="GoodsList__item" key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};
