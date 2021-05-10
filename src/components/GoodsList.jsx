import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goodsList }) => (
  <div className="GoodsList">
    <ul>
      {goodsList.map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
