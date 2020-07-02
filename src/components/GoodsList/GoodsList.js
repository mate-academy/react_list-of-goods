import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../Buttons/Buttons';

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    minLength: 1,
  }

  reverse = () => {
    this.setState(prevState => ({
      goods: prevState.goods.reverse(),
    }));
  }

  alphabetSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((prev, curr) => prev.localeCompare(curr)),
    }));
  }

  lengthSort = () => {
    this.setState(prevState => ({
      goods: [...prevState.goods]
        .sort((prev, curr) => curr.length - prev.length),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      minLength: 1,
    });
  }

  lengthFilter = (event) => {
    this.setState({
      minLength: event.target.value,
      goods: [...this.props.goods]
        .filter(item => item.length >= event.target.value),
    });
  }

  render() {
    const { goods, minLength } = this.state;

    return (
      <>
        <ul className="goods__list">
          {
            goods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
        </ul>
        <Buttons
          reverse={this.reverse}
          alphabetSort={this.alphabetSort}
          lengthSort={this.lengthSort}
          reset={this.reset}
          lengthFilter={this.lengthFilter}
          value={minLength}
        />
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
