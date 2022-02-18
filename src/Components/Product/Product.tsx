import React from 'react';

type Props = {
  copyProducts: string[],
};

const Product: React.FC<Props> = ({ copyProducts }) => {
  return (
    <ul className="app__list">
      {copyProducts.map(product => (
        <li className="app__product" key={product}>
          {product}
        </li>
      ))}
    </ul>
  );
};

export default Product;
