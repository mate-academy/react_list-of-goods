import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

const GoodsListButtons = props => (
  <div className="btn-group py-2">
    <Button handleClick={props.reverse}>
      Reverse
    </Button>
    <Button handleClick={props.sortAlphabetically}>
      Sort alphabetically
    </Button>
    <Button handleClick={props.reset}>
      Reset
    </Button>
    <Button handleClick={props.sortByLength}>
      Sort by length
    </Button>
  </div>
);

export { GoodsListButtons };

GoodsListButtons.propTypes = {
  reverse: PropTypes.func.isRequired,
  sortAlphabetically: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  sortByLength: PropTypes.func.isRequired,
};
