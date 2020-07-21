import React, { FC } from 'react';

interface Props {
  optionsNumbers: number[];
  onSelect: (val: number) => void;
  setValue: number;
}

export const Select: FC<Props> = (props) => {
  const { optionsNumbers, onSelect, setValue } = props;
  const options = optionsNumbers.map(elem => (
    <option
      key={elem}
      value={elem}
    >
      {elem}
    </option>
  ));

  return (
    <select
      value={setValue}
      onChange={event => onSelect(+event.target.value)}
    >
      {options}
    </select>
  );
};
