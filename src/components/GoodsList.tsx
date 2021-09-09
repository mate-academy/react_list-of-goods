import React from 'react';

type Props = {
  goods: string[];
};

const GoodsList: React.FC<Props> = ({ goods }) => {
  // eslint-disable-next-line no-console
  console.log('List of goods');

  return (
    <ul className="list-group">
      {goods.map((good) => (
        <li key={good} className="list-group-item">
          {good}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(GoodsList);
