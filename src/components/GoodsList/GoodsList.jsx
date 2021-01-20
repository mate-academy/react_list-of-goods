import React from 'react';
import './GoodsList.css';
import PropTypes from 'prop-types';

const selectItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
    selectedValue: 1,
  }

  reverseGoodsList = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortAlphabetically = () => {
    const sortCallback = (a, b) => a.localeCompare(b);

    this.setState(state => ({
      goods: [...state.goods].sort(sortCallback),
    }));
  }

  sortByLength = () => {
    const sortCallback = (a, b) => a.length - b.length;

    this.setState(state => ({
      goods: [...state.goods].sort(sortCallback),
    }));
  }

  resetMethod = () => {
    this.setState({
      goods: this.props.goods,
      selectedValue: 1,
    });
  }

  filterByLength = (event) => {
    const targetValue = Number(event.target.value);

    this.setState({
      goods: this.props.goods.filter(good => good.length >= targetValue),
      selectedValue: targetValue,
    });
  }

  render() {
    const { goods, selectedValue } = this.state;

    return (
      <div>
        <div className="nav">
          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={this.reverseGoodsList}
          >
            Reverse
          </button>

          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort by Alphabet
          </button>

          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by Length
          </button>

          <button
            className="button is-primary is-outlined"
            type="button"
            onClick={this.resetMethod}
          >
            Reset
          </button>

          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select
                  className="select"
                  value={selectedValue}
                  onChange={this.filterByLength}
                >
                  {selectItems.map(item => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <ul className="goods-list">
          {goods.map(good => (
            <li className="goods-list__item" key={good}>
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
