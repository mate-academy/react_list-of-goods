import React from 'react';
import './GoodList.css';
import PropTypes from 'prop-types';

export class GoodList extends React.Component {
  state = {
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    visibleGoods: [...this.props.goodsFromServer],
    defaultValue: 1,
  }

  limit(e) {
    const { target } = e;

    this.setState({
      defaultValue: target.value,
      visibleGoods: [...this.props.goodsFromServer]
        .filter(good => good.length >= target.value),
    });
  }

  reserveGoods() {
    this.setState(state => ({ ...state.visibleGoods.reverse() }));
  }

  reset() {
    this.setState({
      defaultValue: 1,
      visibleGoods: [...this.props.goodsFromServer],
    });
  }

  sort(sortBy) {
    this.setState(state => ({ ...state.visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case 'alphabetic':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    }) }));
  }

  render() {
    const { visibleGoods, defaultValue } = this.state;

    return (
      <div className="GoodList">
        <div className="buttons">
          <select
            className="margin"
            value={defaultValue}
            onChange={e => this.limit(e)}
          >
            {this.state.options.map(option => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
          <button
            className="margin"
            type="button"
            onClick={() => this.reserveGoods()}
          >
            Reserve
          </button>
          <button
            className="margin"
            type="button"
            onClick={() => this.sort('alphabetic')}
          >
            Sort alphabetically
          </button>
          <button
            className="margin"
            type="button"
            onClick={() => this.reset()}
          >
            Reset
          </button>
          <button
            className="margin"
            type="button"
            onClick={() => this.sort('length')}
          >
            Sort by length
          </button>
        </div>
        <ul>
          {
            visibleGoods.map(good => (
              <li key={good}>{good}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

GoodList.propTypes = {
  goodsFromServer: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};
