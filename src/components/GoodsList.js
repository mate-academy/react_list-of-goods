import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  goods.map(good => (
    <li key={good}>{good}</li>
  ))
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

export default GoodsList;
