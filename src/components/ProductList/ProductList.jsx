import React from 'react';
import './ProductList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductList = ({ products }) => (
  <>
    <ul className="pt-5 productList">
      {products.map(product => (
        <li key={product}>
          {product}
        </li>
      ))}
    </ul>
  </>
);
