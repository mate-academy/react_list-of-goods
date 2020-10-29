import React from 'react';
import Select from 'react-select';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const options = [
  {
    value: 1, label: '1',
  },
  {
    value: 2, label: '2',
  },
  {
    value: 3, label: '3',
  },
  {
    value: 4, label: '4',
  },
  {
    value: 5, label: '5',
  },
  {
    value: 6, label: '6',
  },
  {
    value: 7, label: '7',
  },
  {
    value: 8, label: '8',
  },
  {
    value: 9, label: '9',
  },
  {
    value: 10, label: '10',
  },
];

const FiltersList = ({
  reverse, alfabeticSort, reset, sortByLength, selectLength, selectedOption,
}) => (
  <>
    <Button
      type="button"
      onClick={reverse}
    >
      Reverse
    </Button>
    <Button
      type="button"
      onClick={alfabeticSort}
    >
      Sort by alfabet
    </Button>
    <Button
      type="button"
      onClick={reset}
    >
      Reset
    </Button>
    <Button
      type="button"
      onClick={sortByLength}
    >
      Sort by length
    </Button>
    <Select
      onChange={selectLength}
      options={options}
      value={selectedOption}
      className="app__select-styles"
    />
  </>
);

FiltersList.propTypes = {
  reverse: PropTypes.string.isRequired,
  alfabeticSort: PropTypes.string.isRequired,
  reset: PropTypes.string.isRequired,
  sortByLength: PropTypes.string.isRequired,
  selectLength: PropTypes.string.isRequired,
  selectedOption: PropTypes.string.isRequired,
}.isRequired;

export default FiltersList;
