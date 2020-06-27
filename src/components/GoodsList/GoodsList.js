import React from 'react';
import PropTypes from 'prop-types';

import Good from '../Good/Good';
import './GoodsList.css';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(good => <Good key={good} good={good} />)}
  </ul>
);

export default GoodsList;

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
