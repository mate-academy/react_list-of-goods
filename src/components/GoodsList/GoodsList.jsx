import React from 'react';
import PropTypes, { string } from 'prop-types';
import './GoodsList.css';

export const GoodsList = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(string).isRequired,
};

export default React.memo(GoodsList);
