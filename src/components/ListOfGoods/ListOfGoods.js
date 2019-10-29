import React from 'react';
import './listofgoods.css';

const ListOfGoods = ( {list} ) => (
  <ul className="list">
    {list.map((item, index) => (
      <li key={index}>{item}</li>
    ))
    }
  </ul>
);

export default ListOfGoods;
