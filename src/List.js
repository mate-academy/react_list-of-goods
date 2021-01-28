import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good}>
        {good}
      </li>
    ))}
  </ul>
);
List.defaultProps = {
  goods: [],
};

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default React.memo(List);
