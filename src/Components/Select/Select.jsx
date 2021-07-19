import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.PureComponent {
  state = {
    maxGoodsLength: 1,
  }

  render() {
    const maxOption = 10;
    const arrayOption = [];

    for (let i = 1; i <= maxOption; i += 1) {
      arrayOption.push(i);
    }

    if (this.props.isCleanActive === true) {
      this.setState({ maxGoodsLength: 1 });
      this.props.takeChildrenState(this.state.maxGoodsLength);
    }

    return (
      <select
        name="number"
        value={this.state.maxGoodsLength}
        onChange={(event) => {
          this.setState({ maxGoodsLength: +event.target.value },
            () => this.props.takeChildrenState(this.state.maxGoodsLength));
        }}
      >
        {arrayOption.map((number, index) => (
          <option key={`${number} + index`} value={index + 1}>
            {number}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  takeChildrenState: PropTypes.func.isRequired,
  isCleanActive: PropTypes.bool.isRequired,
};

export default Select;
