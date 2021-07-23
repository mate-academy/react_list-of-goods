import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

export const Controls = (
  {
    resetList,
    reversList,
    sortAlphabeticallyList,
    sortByLengthList,
  },
) => (
  <>
    <Button
      onClick={reversList}
      name="Reverse"
    />
    <Button
      onClick={sortAlphabeticallyList}
      name="Sort alphabetically"
    />
    <Button
      onClick={resetList}
      name="Reset"
    />
    <Button
      onClick={sortByLengthList}
      name="Sort by length"
    />
  </>
);

Controls.propTypes = {
  sortByLengthList: PropTypes.func.isRequired,
  reversList: PropTypes.func.isRequired,
  sortAlphabeticallyList: PropTypes.func.isRequired,
  resetList: PropTypes.func.isRequired,
};
