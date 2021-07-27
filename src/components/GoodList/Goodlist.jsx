import React from 'react';

import './Goodlist.scss';
import PropTypes from 'prop-types';

export class Goodlist extends React.Component {
  state = {
    goods: this.props.goodlist,
    length: 1,
    optionValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabetic = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (good1, good2) => good1.localeCompare(good2),
      ),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (good1, good2) => good1.length - good2.length,
      ),
    }));
  }

  filterByLength = (event) => {
    const { value } = event.target;

    this.setState(state => ({
      length: value,
      goods: state.goods.filter(
        good => good.replaceAll(' ', '').length >= value,
      ),
    }));
  }

  reset = () => {
    this.setState({
      goods: this.props.goodlist,
      length: 1,
    });
  }

  render() {
    const {
      goods,
      length,
      optionValues,
    } = this.state;

    const { reverse,
      sortByAlphabetic,
      sortByLength,
      reset,
      filterByLength,
    } = this;

    return (
      <div className="list-wrapper">
        <div className="list-btn">
          <button
            type="button"
            className="btn"
            onClick={reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="btn"
            onClick={sortByAlphabetic}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="btn"
            onClick={sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        <div>
          <p className="list-select-label">
            Filter by length
          </p>
          <select
            className="list-select"
            name="length"
            value={length}
            onChange={filterByLength}
          >
            {
              optionValues.map(value => (
                <option value={value}>
                  {value}
                </option>
              ))
            }
          </select>
        </div>
        <ul className="todo-list">
          {goods.map(good => (
            <li
              key={good}
              className="todo"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Goodlist.propTypes = {
  goodlist: PropTypes.arrayOf(PropTypes.string),
  length: PropTypes.number,
  optionValues: PropTypes.arrayOf(PropTypes.number),
};

Goodlist.defaultProps = {
  goodlist: [],
  length: 1,
  optionValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
