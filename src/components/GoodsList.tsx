import React from 'react';

interface Props {
  goods: string[];
}

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map((product) => (
      <li key={product}>{product}</li>
    ))}
  </ul>
);

export default React.memo(GoodsList);
