import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))
  }
  </>
);
GoodsList.propTypes = {
  goods: PropTypes.arrayOf().isRequired,
};
