import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(
  ({ goods }) => (
    <ul>
      {goods.map(friend => (
        <li>
          {friend}
        </li>
      ))}
    </ul>
  ),
);

GoodsList.propTypes = PropTypes.arrayOf(
  PropTypes.string,
).isRequired;
