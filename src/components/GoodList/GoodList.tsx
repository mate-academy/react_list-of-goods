import React from 'react';

type Props = {
  goods: string[],
};

const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  );
};

export default GoodList;
