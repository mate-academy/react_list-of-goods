import React from 'react';
import PropTypes from 'prop-types';

function ListOfGoods({ goods }) {
  return (
    <ul>
      {goods.map(good => (
        <li>
          {good}
        </li>
      ))}
    </ul>
  );
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListOfGoods;
