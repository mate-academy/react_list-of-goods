import React from 'react';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <div className="goods">
      <ul className="goods__list">
        {goods.map(good => (
          <li className="App__list--item" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
