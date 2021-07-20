import React from 'react';
import PropTypes from 'prop-types';

export const ListItem = ({ text }) => (
  <li>
    {text}
  </li>
);

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};
