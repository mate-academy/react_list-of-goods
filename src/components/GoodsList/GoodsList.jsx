import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = React.memo(
  ({ goodsList }) => (
    <ul>
      {goodsList.map(good => (
        <li key={good}>
          {good}
        </li>
      ))}
    </ul>
  ),
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default GoodsList;
