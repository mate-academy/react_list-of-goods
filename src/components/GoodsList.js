import React from 'react';
import PropTypes from 'prop-types';
import Commodity from './Commodity';

const GoodsList = ({ goodsList }) => (
  <ul className="goods__list">
    {!goodsList.length
      ? <p className="goods__item">No elements to display</p>
      : goodsList.map(item => (
        <Commodity
          key={item}
          commodity={item}
        />
      ))}
  </ul>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default GoodsList;
