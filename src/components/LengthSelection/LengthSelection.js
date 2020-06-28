import React from 'react';
import PropTypes from 'prop-types';

export class LengthSelection extends React.PureComponent {
  render() {
    const generatedArray = Array.from(Array(10), (_, i) => i + 1);

    return (
      <select onChange={this.props.change} value={this.props.selected}>
        {
          generatedArray.map(arr => (
            <option key={arr} value={arr}>
              {arr}
            </option>
          ))
        }
      </select>
    );
  }
}

LengthSelection.propTypes = {
  change: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};
