import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = React.memo(
  ({ friends }) => (
    <ul>
      {friends.map(friend => (
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
