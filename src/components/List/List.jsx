import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

export const List = ({ goods }) => (
  <>
    <h1 className="title">Goods</h1>
    <ul className="section">
      {goods.map(product => (
        <li key={product}>
          {product}
        </li>
      ))}
    </ul>
  </>
);

List.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
