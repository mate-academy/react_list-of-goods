import React from 'react';

export const GoodsList: React.FC<Products> = ({ products }) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
};
