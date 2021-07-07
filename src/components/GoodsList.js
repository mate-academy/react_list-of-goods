import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends Component {
  state = {
    isSortedA: 0,
    isSortedByLength: 0,
    goods: [...this.props.goods],
    reset: false,
    select: 1,
  }

  setReversed = () => {
    this.setState(({ goods }) => ({
      goods: [...goods].reverse(),
    }));
  }

  sortAlphabet = () => {
    if (this.state.isSortedA === 1) {
      this.setState(({ goods }) => ({
        goods: [...goods].sort((a, b) => b.localeCompare(a)),
        isSortedA: 0,
      }));
    } else {
      this.setState(({ goods }) => ({
        goods: [...goods].sort((a, b) => a.localeCompare(b)),
        isSortedA: 1,
      }));
    }
  }

  sortByLength = () => {
    if (this.state.isSortedByLength === 1) {
      this.setState(({ goods }) => ({
        goods: [...goods].sort((a, b) => b.length - a.length),
        isSortedByLength: 0,
      }));
    } else {
      this.setState(({ goods }) => ({
        goods: [...goods].sort((a, b) => a.length - b.length),
        isSortedByLength: 1,
      }));
    }
  }

  sortBySelectedLength = (event) => {
    const { value } = event.target;

    this.setState({
      select: value,
      goods: this.props.goods.filter(el => el.length >= value),
    });
  }

  handleReset = () => {
    this.setState(state => ({
      goods: [...this.props.goods],
      reset: !state.reset,
      select: 1,
    }));
  }

  render() {
    const { active } = this.props;
    const selectedOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <>
        <ul className={active ? 'showIn' : 'showOut'}>
          {this.state.goods.map(good => (
            <li key={good}>{good}</li>
          ))}
          <button
            type="button"
            onClick={this.setReversed}
          >
            Reverse
          </button>
          <button
            type="button"
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <select
            value={this.state.select}
            onChange={this.sortBySelectedLength}
          >
            {selectedOptions.map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
          <button
            type="button"
            className="reset"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </ul>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.bool.isRequired,
};
