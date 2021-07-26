import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

export function GoodsList({ goodsList }) {
  return (
    <ListGroup>
      {goodsList.map(good => (
        <ListGroup.Item key={good}>
          {good}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

GoodsList.propTypes = {
  goodsList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
