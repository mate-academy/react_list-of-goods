import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const AppButton = ({ onClickFunc, title }) => (
  <Button
    className="m-1"
    type="button"
    onClick={onClickFunc}
  >
    {title}
  </Button>
);

AppButton.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
