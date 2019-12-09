import React from 'react';
import PropTypes from 'prop-types';

const ListOfGoods = ({ list }) => (
  <ol>
    {list.map(item => <li>{item}</li>)}
  </ol>
);

ListOfGoods.propTypes
  = { list: PropTypes.objectOf(PropTypes.string).isRequired };

export default ListOfGoods;
