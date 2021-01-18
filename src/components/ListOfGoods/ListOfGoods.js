import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { Good } from '../Good';

export const ListOfGoods = ({ goods }) => (
  <ListGroup
    as="ul"
    className="list"
  >
    {goods.map(good => (
      <Good key={good} good={good} />
    ))}
  </ListGroup>
);

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
