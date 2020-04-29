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
        goods: [...goods].sort((a, b) => (a < b ? 1 : -1)),
        isSortedA: 0,
      }));
    } else {
      this.setState(({ goods }) => ({
        goods: [...goods].sort((a, b) => (a > b ? 1 : -1)),
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

    this.setState(({ goods }) => ({
      goods: [...goods].filter(el => el.length >= value),
      select: value,
    }));
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

    return (
      <>
        <ul className={active ? 'showIn' : 'showOut'}>
          {this.state.goods.map(g => (
            <li key={g}>{g}</li>
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
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
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
