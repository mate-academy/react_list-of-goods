import React from 'react';
import PropTypes from 'prop-types';

const ListOfGood = props => (
  <ul>
    {
      props.visibleGoods.map(item => (
        <li>{item}</li>
      ))
    }
  </ul>
);

ListOfGood.propTypes = {
  visibleGoods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListOfGood;
