import React from 'react';
import PropTypes from 'prop-types';

const ListOfGoods = ({ list }) => (
  <ul>
    {list.map(item => <li key={item}>{item}</li>)}
  </ul>
);

ListOfGoods.propTypes
  = { list: PropTypes.arrayOf(PropTypes.string).isRequired };

export default ListOfGoods;
