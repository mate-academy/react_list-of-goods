import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export const ReverseButton = ({ reverse }) => (
  <Button
    className="buttons__button button-reverse"
    variant="contained"
    color="primary"
    onClick={() => {
      reverse();
    }}
  >
    reverse
  </Button>
);

ReverseButton.propTypes = {
  reverse: PropTypes.func.isRequired,
};
