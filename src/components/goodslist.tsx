import React from 'react';

type Props = {
  goods: string[],
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li
        key={good}
      >
        {good}
      </li>
    ))}
  </ul>
);

export default GoodsList;
