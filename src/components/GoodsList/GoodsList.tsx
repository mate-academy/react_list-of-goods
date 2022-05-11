import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul className="app__list list">
      {goods.map(good => (
        <li
          className="app__list__item"
          key={good}
        >
          {good}
        </li>
      ))}
    </ul>
  );
};
