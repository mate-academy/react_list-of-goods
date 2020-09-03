import React from 'react';
import PropTypes from 'prop-types';
import './GoodsList.css';

export const GoodsList = React.memo(
  ({ goods, targetLength, wasStarted }) => (
    <ul
      hidden={wasStarted}
      className="GoodsList"
    >
      {goods
        .filter(item => item.length >= targetLength)
        .map(item => (
          <li
            key={item}
            className="GoodsList__item"
          >
            {item}
          </li>
        ))}
    </ul>
  ),
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  targetLength: PropTypes.number.isRequired,
  wasStarted: PropTypes.bool.isRequired,
};
