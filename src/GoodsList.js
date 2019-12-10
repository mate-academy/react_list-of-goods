import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li
        className="li"
        key={item}
      >
        {item}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = { goods: PropTypes.arrayOf(PropTypes.string).isRequired };

export default GoodsList;
