import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  // eslint-disable-next-line no-console

  return (
    <ul className="GoodsList">
      {goods.map((good) => (
        <li key={good} className="GoodsList__good">
          {good}
        </li>
      ))}
    </ul>
  );
};
