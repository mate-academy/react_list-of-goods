import React from 'react';
import propTypes from 'prop-types';
import { Buttons } from './Buttons';
import { GoodsList } from './GoodsList';

export const Wrapper = (props) => {
  const { reverse, reset, sortByLength, sortAlphabetically, goods } = props;

  return (
    <div>
      <h1>Goods</h1>
      <GoodsList goods={goods} />

      <Buttons
        sortAlphabetically={sortAlphabetically}
        sortByLength={sortByLength}
        reverse={reverse}
        reset={reset}
      />
    </div>
  );
};

Wrapper.propTypes = {
  goods: propTypes.arrayOf.isRequired,
  reverse: propTypes.func.isRequired,
  reset: propTypes.func.isRequired,
  sortByLength: propTypes.func.isRequired,
  sortAlphabetically: propTypes.func.isRequired,
};
