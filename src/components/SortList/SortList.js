import React from 'react';
import './SortList.css';

import PropTypes from 'prop-types';

export class SortList extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sort = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: [...this.props.goods],
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <section className="main-app">
        <ul className="list">
          {goods.map(good => (
            <li key={good} className="list__item">
              {good}
            </li>
          ))}
        </ul>

        <section className="buttons">
          <button
            type="button"
            className="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button"
            onClick={this.sort}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button"
            onClick={this.reset}
          >
            Reset
          </button>

          <button
            type="button"
            className="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
        </section>
      </section>
    );
  }
}

SortList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
