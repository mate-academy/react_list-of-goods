import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul className="list__items">
    {goods.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string).isRequired };

export default GoodsList;
