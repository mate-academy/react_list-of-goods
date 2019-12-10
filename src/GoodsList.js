import React from 'react';
import PropTypes from 'prop-types';

const GoodList = ({ list }) => (
  <ul className="goods__goods-list">
    {list.map(good => (
      <li key={good}>
        {good}
        <hr />
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default GoodList;
