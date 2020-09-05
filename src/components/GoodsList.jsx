import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ listItems }) => (
  <div>
    <h1>Goods</h1>
    <ul>
      {listItems.map(goods => (
        <li key={goods}>
          {goods}
        </li>
      ))}
    </ul>
  </div>
);

export default GoodsList;

GoodsList.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
