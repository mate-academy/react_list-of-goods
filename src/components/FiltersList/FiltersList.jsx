import React from 'react';
import Select from 'react-select';
import './FiltersList.scss';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
];

const FiltersList = ({
  reverse, sortABC, reset, sortLength, selectLength, selectedOption,
}) => (
  <>
    <button onClick={reverse}>Reverse</button>
    <button onClick={sortABC}>Sort alphabetically</button>
    <button onClick={sortLength}>Sort by length</button>
    <button onClick={reset}>Reset</button>
    <Select
      className="selectStyles"
      onChange={selectLength}
      options={options}
      value={selectedOption}
    />
  </>
);

export default FiltersList;
