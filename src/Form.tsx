import React from 'react';

interface Props {
  length: number;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filter: () => string[];
  lengthOptions: number[];
}

export const Form: React.FC<Props> = (props) => {
  const {
    length,
    handleChange,
    filter,
    lengthOptions,
  } = props;

  return (
    <form>
      <select
        name="length"
        value={length}
        onChange={handleChange}
        onClick={filter}
      >
        {lengthOptions.map(number => (
          <option
            key={number}
            value={number}
          >
            {number}
          </option>
        ))}
      </select>
    </form>
  );
};
