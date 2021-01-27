import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

export default React.memo(GoodsList);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};
