import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export const ResetButton = ({ reset }) => (
  <Button
    className="buttons__button button-reset"
    variant="contained"
    color="primary"
    onClick={() => {
      reset();
    }}
  >
    reset
  </Button>
);

ResetButton.propTypes = {
  reset: PropTypes.func.isRequired,
};
