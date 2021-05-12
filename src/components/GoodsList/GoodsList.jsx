import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(({ goods }) => (
  <ul className="GoodsList">
    {
      goods.map(good => (
        <li key={good}>
          {good}
        </li>
      ))
    }
  </ul>
));

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

GoodsList.defaultProps = {
  goods: [],
};
