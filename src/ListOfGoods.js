import React from 'react';

const ListOfGood = props => (
  <ul>
    {
      props.visibleGoods.map(item => (
        <li>{item}</li>
      ))
    }
  </ul>
);

export default ListOfGood;
