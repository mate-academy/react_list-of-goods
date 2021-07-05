import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList({ visibleList }) {
  return (
    <ul className="goods-list">
      {visibleList.map(item => (
        <li className="list-item" key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  visibleList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
