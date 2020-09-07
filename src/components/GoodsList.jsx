import React from 'react';
import './GoodsList.scss';

export class GoodsList extends React.Component {
  state = {
    goods: [...this.props.goods],
  };

  reverseList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortList = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.localeCompare(next)),
    }));
  };

  resetList = () => {
    this.setState({
      goods: [...this.props.goods],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((prev, next) => prev.length - next.length),
    }));
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="GoodsList">
        <ul className="list container__list">
          <h3>List of goods</h3>
          {goods.map(good => (
            <li className="list__item" key={good}>
              {good}
            </li>
          ))}
        </ul>

        <div className="list__button">
          <button
            type="button"
            className="button"
            onClick={this.reverseList}
          >
            Reverse
          </button>

          <button
            type="button"
            className="button"
            onClick={this.sortList}
          >
            Sort
          </button>

          <button
            type="button"
            className="button"
            onClick={this.resetList}
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
        </div>
      </div>
    );
  }
}
