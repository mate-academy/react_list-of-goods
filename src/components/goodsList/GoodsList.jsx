import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = ({ goods }) => (
  <div>
    <ul className="list-group list-group-flush">
      {goods.map(good => <li className="list-group-item" key={good}>{good}</li>)}
    </ul>
  </div>
);

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
