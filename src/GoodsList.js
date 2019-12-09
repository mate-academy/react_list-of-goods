import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul className="list">
    {goods.map(item => <li key={item} className="list_item">{item}</li>)}
  </ul>
);

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string).isRequired };

export default GoodsList;
