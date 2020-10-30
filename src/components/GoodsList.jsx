import React from 'react';
import PropTypes from 'prop-types';

const GoodsList = ({ goods }) => {
  return (
    <ul>
      {goods.map(item => (
        <li key={item.id}>{item.name}</li>))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired
};

export default GoodsList;
