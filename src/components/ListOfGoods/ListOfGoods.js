import React from 'react';
import PropTypes from 'prop-types';

const ListOfGoods = React.memo(({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
));

ListOfGoods.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListOfGoods;
