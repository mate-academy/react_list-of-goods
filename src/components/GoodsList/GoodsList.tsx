import React from 'react';

interface Props {
  goods: string[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <div>
      <ul>
        {goods.map(good => (
          <li key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
