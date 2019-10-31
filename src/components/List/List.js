import React from 'react';
import PropTypes from 'prop-types';

const List = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

List.defaultProps = {
  goods: [],
};

List.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string),
};

export default List;
