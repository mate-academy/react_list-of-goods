import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';


export const Buttons = ({ reverse, alphabeticalSort, lengthSort, reset }) => (
  <>
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

    <Button
      className="buttons__button button-sort"
      variant="contained"
      color="primary"
      onClick={() => {
        alphabeticalSort();
      }}
    >
      sort
    </Button>

    <Button
      className="buttons__button-sort"
      variant="contained"
      color="primary"
      onClick={() => {
        lengthSort();
      }}
    >
      sort by length
    </Button>

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
  </>
);

Buttons.propTypes = {
  reverse: PropTypes.func.isRequired,
  alphabeticalSort: PropTypes.func.isRequired,
  lengthSort: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}
