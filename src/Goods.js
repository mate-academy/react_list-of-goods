import React from 'react';
import PropTypes from 'prop-types';

const Goods = ({ changedList }) => (
  <ul className="visible__list">
    {changedList.map(item => <li>{item}</li>)}
  </ul>
);

Goods.propTypes = { changedList: PropTypes.string.isRequired };

export default Goods;
