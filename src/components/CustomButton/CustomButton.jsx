import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const CustomButton = ({ title, func }) => (
  <Button
    variant="contained"
    color={title !== 'Reset' ? 'primary' : 'secondary'}
    onClick={func}
  >
    {title}
  </Button>
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default CustomButton;
