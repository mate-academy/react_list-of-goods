import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(({ goods }) => (
  <ul>
    {
      goods.map(item => (
        <li key={item}>
          {item}
        </li>
      ))
    }
  </ul>
));

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
