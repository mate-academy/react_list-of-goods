import React from 'react';
// import PropTypes from 'prop-types';

import { Good } from '../Good';

export const GoodsList = ({ goods,  onDeleted}) => (
  <div>
    {goods.map((good, idx) => (
      <Good key={good} idx = {idx} good = {good} 
      onDeleted = {() => onDeleted(idx)}/>
    ))}
  </div>
);

// GoodsList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       imgUrl: PropTypes.string.isRequired,
//       imdbUrl: PropTypes.string.isRequired,
//     }),
//   ),
// };
//
// GoodsList.defaultProps = {
//   goods: [],
// };
