import React from 'react';
import PropTypes from 'prop-types';

export const GoodItem = (props) => {
  const { good } = props;

  return (
    <li>
      {good}
    </li>
  );
};

GoodItem.propTypes = {
  good: PropTypes.string.isRequired,
};
