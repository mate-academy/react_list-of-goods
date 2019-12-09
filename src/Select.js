/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  state = { value: this.props.selectedValue }

  render() {
    const { maxValue, filteredLength, OnItemMinLength } = this.props;

    const options = Array(maxValue).fill('');
    const { value } = this.state;

    const handleChange = (event) => {
      this.setState({ value: event.target.value });
    };

    const handleSubmit = (event) => {
      OnItemMinLength(value);
      filteredLength();
      event.preventDefault();
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="buttons__button"
      >
        <label htmlFor="min-length-select">
        Choose min length of words:
          <select
            value={value}
            onChange={handleChange}
            id="min-length-select"
            className="buttons__button--select"
          >
            {options.map((option, i) => (
              <option
                key={Math.random()}
                value={i + 1}
              >
                {i + 1}
              </option>
            ))}
          </select>
          <input
            type="submit"
            value="Submit"
            className="buttons__button buttons__button--submit"
          />
        </label>
      </form>
    );
  }
}

Select.propTypes = {
  selectedValue: PropTypes.number,
  maxValue: PropTypes.number,
  filteredLength: PropTypes.func,
  OnItemMinLength: PropTypes.func,
};
Select.defaultProps = {
  selectedValue: 1,
  maxValue: 'Max value is undefined',
  filteredLength: 'Function is undefined',
  OnItemMinLength: 'Function is undefined',
};
export default Select;
