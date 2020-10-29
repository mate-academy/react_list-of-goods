import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

export const Good = ({ good }) => (
  <ListGroup.Item as="li">
    {good}
  </ListGroup.Item>
);

Good.propTypes = {
  good: PropTypes.string.isRequired,
};
