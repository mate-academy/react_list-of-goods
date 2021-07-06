import React from 'react';
import PropTypes from 'prop-types';

import { GoodItem } from '../GoodItem';

export const List = ({ goodsList }) => {
  return (
    <ul className="App__list list">
      {goodsList.map(good => <GoodItem good={good} key={good} />)}
    </ul>
  )
}

List.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
}
