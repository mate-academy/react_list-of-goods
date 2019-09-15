import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ good }) => {
  const classes = 'goods__item list-group-item';

  return (
    <li className={classes}>{good}</li>
  );
};

Good.propTypes = {
  good: PropTypes.string.isRequired,
};

export default Good;
