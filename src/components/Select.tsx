import React, { FC } from 'react';
import PropTypes from 'prop-types';

// interface Props {
//   optionsNumbers:;
//   onSelect:;
//   setValue:;
// }

export const Select: FC<> = (props) => {
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
      onChange={event => onSelect(event.target.value)}
    >
      {options}
    </select>
  );
};

Select.propTypes = {
  optionsNumbers: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  setValue: PropTypes.number.isRequired,
};
