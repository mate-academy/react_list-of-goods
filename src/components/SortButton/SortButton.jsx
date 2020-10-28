import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

export const SortButton = ({ alphabeticalSort, lengthSort }) => (
  <>
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
  </>
);

SortButton.propTypes = {
  alphabeticalSort: PropTypes.func.isRequired,
  lengthSort: PropTypes.func.isRequired,
};
