import React from 'react';

import './Goodlist.scss';
import PropTypes from 'prop-types';

export class Goodlist extends React.Component {
  state = {
    goods: this.props.goodlist,
    isReverse: false,
    sortBy: '',
    length: 1,
    optionValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  sortByAlphabetic = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  filterByLength = (event) => {
    this.setState({
      length: event.target.value,
    });
  }

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
      length: 1,
    });
  }

  render() {
    const {
      goods,
      isReverse,
      sortBy,
      length,
      optionValues,
    } = this.state;

    const goodsCopy = goods.filter(
      good => good.replaceAll(' ', '').length >= length,
    );

    goodsCopy.sort((good1, good2) => {
      switch (sortBy) {
        case 'name':
          return good1.localeCompare(good2);
        case 'length':
          return good1.length - good2.length;
        default:
          return 0;
      }
    });

    if (isReverse) {
      goodsCopy.reverse();
    }

    return (
      <div className="list-wrapper">
        <div className="list-btn">
          <button
            type="button"
            className="btn"
            onClick={this.reverse}
          >
            Reverse
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.sortByAlphabetic}
          >
            Sort alphabetically
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.reset}
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
            onChange={this.filterByLength}
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
          {goodsCopy.map(good => (
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
  isReverse: PropTypes.bool,
  sortBy: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  length: PropTypes.number,
  optionValues: PropTypes.arrayOf(PropTypes.number),
};

Goodlist.defaultProps = {
  goodlist: [],
  isReverse: false,
  sortBy: '',
  length: 1,
  optionValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
