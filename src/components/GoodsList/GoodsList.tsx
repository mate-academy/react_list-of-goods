import React from 'react';

type Props = {
  goods: string[];
};

export const GoodsList: React.FC<Props> = React.memo(({ goods }) => {
  return (
    <ul>
      {goods.map(good => {
        return (
          <li key={good}>{good}</li>
        );
      })}
    </ul>
  );
});
