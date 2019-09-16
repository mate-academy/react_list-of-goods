import React from 'react';

const Goods = ({ goods }) => goods.map(
  item => <li className="list-group-item" key={item}>{item}</li>
);

export default Goods;
