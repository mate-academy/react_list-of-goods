import React from 'react';
import PropTypes from 'prop-types';

export class Select extends React.PureComponent {
  render() {
    const { optionsNumbers, onSelect, setValue } = this.props;
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
        onChange={onSelect}
      >
        {options}
      </select>
    );
  }
}

Select.propTypes = {
  optionsNumbers: PropTypes.arrayOf(
    PropTypes.number.isRequired,
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  setValue: PropTypes.number.isRequired,
};
