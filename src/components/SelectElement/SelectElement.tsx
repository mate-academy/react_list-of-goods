import React from 'react';
import './SelectElement.scss';

type ValuesArray = {
  values: number[],
  defaultValue: number,
};

const SelectElement: React.FC<ValuesArray> = ({ values, defaultValue }) => (
  <>
    {values.map(currentValue => (
      <option
        className="GoodNameLength"
        key={currentValue}
        value={currentValue}
        selected={(currentValue === defaultValue)}
      >
        Max length is
        {` ${currentValue}`}
      </option>
    ))}
  </>
);

export default SelectElement;
