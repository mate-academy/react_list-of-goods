import React from 'react';
import PropTypes from 'prop-types';

function Good({ good }) {
  return (
    <p>{good}</p>
  );
}

Good.propTypes = {
  good: PropTypes.string.isRequired,
};

export default Good;
