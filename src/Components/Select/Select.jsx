import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.PureComponent {
  state = {
    arrayOption: [...Array(10).keys()],
  }

  render() {
    return (
      <select
        name="number"
        value={this.props.minGoodsLength}
        onChange={event => this.props.takeChildrenValue(+event.target.value)}
      >
        {this.state.arrayOption.map((number, index) => (
          <option key={`${number} + index`} value={index + 1}>
            {number + 1}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  takeChildrenValue: PropTypes.func.isRequired,
  minGoodsLength: PropTypes.number.isRequired,
};

export default Select;
