/* eslint-disable arrow-body-style */
import React from 'react';
import { ShapeGoodsList } from './Shapes';
import { GoodItem } from './GoodItem';

export const GoodsList = (props) => {
  return (
    <ul style={{ display: props.display }}>
      { props.list.map(item => (
        <GoodItem item={item} key={item} />
      ))}

    </ul>
  );
};

GoodsList.propTypes = ShapeGoodsList.isRequired;
