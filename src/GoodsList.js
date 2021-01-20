import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const GoodsList = ({ goods }) => (
  <>
    <ul className="goods-list">
      {goods.map(item => (
        <li key={item} className="goods-item">{item}</li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodsList;
