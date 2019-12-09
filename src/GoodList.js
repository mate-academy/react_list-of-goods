import React from 'react';
import PropTypes from 'prop-types';

const GoodList = ({ goodList }) => (
  <ul className="good-list">
    {goodList.map(good => (
      <li
        className="good-list__item"
        key={good}
      >
        {good}
      </li>
    ))}
  </ul>
);

GoodList.propTypes = {
  goodList: PropTypes
    .arrayOf(PropTypes.string).isRequired,
};

export default GoodList;
