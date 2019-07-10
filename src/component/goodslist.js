import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => (<li>{good}</li>))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(String).isRequired,
};

export default GoodsList;
