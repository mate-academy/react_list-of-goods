import React from 'react';
import PropTypes from 'prop-types';

const GoodList = ({ goods }) => (
  <ul className="goods__list">
    {goods.map(good => (
      <li key={good}>{good}</li>))}
  </ul>
);

GoodList.propTypes = {
  goods: PropTypes.string.isRequired,
};

export default GoodList;
