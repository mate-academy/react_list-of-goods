import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="ui">
    {goods.map(item => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
);
