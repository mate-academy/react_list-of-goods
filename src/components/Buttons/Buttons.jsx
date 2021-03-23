import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = React.memo(
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

Buttons.propTypes = PropTypes.arrayOf(
  PropTypes.string,
).isRequired;
