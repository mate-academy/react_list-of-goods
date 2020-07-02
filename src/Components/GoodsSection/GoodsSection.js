import React from 'react';
import { ShapeGoods } from '../Shapes/ShapeGood';

export const GoodsSection = (props) => {
  const { goods } = props;

  return (
    <ul className="list-group p-4 ">
      {goods.map(good => (
        <li
          key={good}
          className="list-group-item nopadding"
        >
          {good}
        </li>
      ))}
    </ul>
  );
};

GoodsSection.propTypes = ShapeGoods.isRequired;
