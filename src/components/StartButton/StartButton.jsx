import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export const StartButton = ({ listVisibility, enter }) => (
  <Button
    className="App__button button-start"
    variant="contained"
    color="primary"
    onClick={() => {
      enter(!listVisibility);
    }}
  >
    start
  </Button>
);

StartButton.propTypes = {
  listVisibility: PropTypes.bool.isRequired,
  enter: PropTypes.func.isRequired,
};
