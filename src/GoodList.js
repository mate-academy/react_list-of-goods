import React from 'react';
import PropTypes from 'prop-types';

export const GoodList = (props) => {
  const { goods } = props;

  return (
    <ul>
      {goods.map(good => (
        <li key={good}>
          { good }
        </li>
      ))}
    </ul>
  );
};

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
