import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map((product) => (
        <li key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
};

export default GoodsList;
