import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ goodsList }) => (
  <div>
    <ul>
      {goodsList.map(good => (
        <li key={good}>
          {good}
        </li>
      ))
      }
    </ul>
  </div>
);

List.propTypes = {
  goodsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
