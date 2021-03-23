import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="list-group goods-list">
    {goods.map(item => (
      <li className="list-group-item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};
