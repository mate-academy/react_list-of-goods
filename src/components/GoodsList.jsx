import React from 'react';
import PropTypes from 'prop-types';

export function GoodsList(props) {
  const {
    goods,
  } = props;

  return (
    <ul>
      {goods.map(element => (
        <li key={element.id}>
          {element.product}
        </li>
      ))}
    </ul>
  );
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
