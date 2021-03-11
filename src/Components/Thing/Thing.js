import React from 'react';
import PropTypes from 'prop-types';

export const Thing = ({ name }) => (
  <li>
    {name}
  </li>
);

Thing.propTypes = {
  name: PropTypes.string.isRequired,
};
