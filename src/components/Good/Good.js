import React from 'react';
import PropTypes from 'prop-types';

export const Good = ({ good }) => (
  <>
    {good}
  </>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
