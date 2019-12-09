import React from 'react';
import PropTypes from 'prop-types';

const listOfGoods = ({ list }) => {
  const goods = list.map(good => (
    <li
      key={good}
      className="collection-item"
    >
      {good}
    </li>
  ));

  return (
    <ul className="collection">
      {goods}
    </ul>
  );
};

listOfGoods.propTypes = { list: PropTypes.objectOf(PropTypes) };
listOfGoods.defaultProps = { list: 'no list' };

export default listOfGoods;
