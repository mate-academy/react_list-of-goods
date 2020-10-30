import React from 'react';
import propTypes from 'prop-types';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

export const Buttons = (props) => {
  const { reverse, reset, sortByLength, sortAlphabetically } = props;

  return (
    <div>
      <Button
        primary
        type="button"
        onClick={sortAlphabetically}
      >
        Sort alphabetically
      </Button>

      <Button
        primary
        type="button"
        onClick={sortByLength}
      >
        Sort by length
      </Button>

      <Button
        primary
        type="button"
        onClick={reverse}
      >
        Reverse
      </Button>

      <Button
        negative
        type="button"
        onClick={reset}
        className="button"
      >
        Reset
      </Button>
    </div>
  );
};

Buttons.propTypes = {
  reverse: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
  sortByLength: propTypes.func.isRequired,
  sortAlphabetically: propTypes.func.isRequired,
};
