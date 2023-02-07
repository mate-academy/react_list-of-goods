import React from 'react';

type Props = {
  goods: string[];
};

const Good: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </ul>
  );
};

export default React.memo(Good);
