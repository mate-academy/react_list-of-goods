import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <>
    <ul>
      {goods.map(good => (
        <li key="key">{good}</li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf.isRequired,
};
