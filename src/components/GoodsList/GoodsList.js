import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { GoodListPropTypes } from '../propTypes/GoodListPropTypes';

export const GoodsList = ({ goods, reverseList }) => (
  <>
    <h1>Goods list</h1>
    <ListGroup>
      {goods.map(good => (
        <ListGroup.Item key={good.id}>
          {good.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </>
);

GoodsList.propTypes = GoodListPropTypes;
