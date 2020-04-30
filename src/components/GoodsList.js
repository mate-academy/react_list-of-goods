import React from 'react';
import PropTypes from 'prop-types';
import GoodsIcon from './GoodsIcon';

const GoodsList = ({ goodsList }) => (
  <ul className="goods__list">
    {!goodsList.length
      ? <p className="goods__item">No elements to display</p>
      : goodsList.map(item => (
        <li key={item} className="goods__item">
          <GoodsIcon commodity={item} w="40" h="40" />
          &nbsp;
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
