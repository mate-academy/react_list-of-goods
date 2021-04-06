import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const GoodsButtonGroup = ({
  reverse,
  sortByAlpha,
  sortByLength,
  reset,
}) => (
  <ButtonGroup
    size="large"
    color="primary"
    aria-label="large outlined primary button group"
  >
    <Button onClick={reverse}>
      Reverse
    </Button>
    <Button onClick={sortByAlpha}>
      Sort alphabetically
    </Button>
    <Button onClick={sortByLength}>
      Sort by length
    </Button>
    <Button onClick={reset}>
      Reset
    </Button>
  </ButtonGroup>
);

GoodsButtonGroup.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortByAlpha: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
