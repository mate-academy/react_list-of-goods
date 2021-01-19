import React from 'react';
import PropTypes from 'prop-types';

export const GoodsList = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group">
      {goods.map(good => (
        <li
          className="list-group-item list-group-item-dark text-center"
          key={good.id}
        >
          {good.name}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.shape({
    goodName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
