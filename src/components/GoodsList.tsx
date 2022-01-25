import React from 'react';

import './GoodsList.scss';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = React.memo(
  ({ goods }) => {
    return (
      <>
        <ul className="list">
          {goods.map(good => (
            <li
              key={good}
              className="list__item"
            >
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  },
);
