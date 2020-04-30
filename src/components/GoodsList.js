import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goodsList }) => (
  <ul className="goods__list">
    {goodsList.map(item => (
      <li
        key={item}
        className="goods__item"
      >
        {item}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default GoodsList;
