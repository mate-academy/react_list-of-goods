import React from 'react';

export const GoodItem = ({ list }) => (
  list.map(item => (
    <li className="list__item" key={item}>
      {item}
    </li>
  ))
);
