import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ name }) => (
  <>
    {name}
  </>
);

Good.propTypes = {
  name: PropTypes.string.isRequired,
};
