import React from 'react';
import PropType from 'prop-types';
import './GoodsList.css';

class GoodsList extends React.Component {
  state = {
    selectOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    selectValue: 1,
    goods: [...this.props.goods],
    goodsInitial: [...this.props.goods],
  };

  onReverseOrder = () => {
    this.setState(state => ({
      goods: this.filterByMinLength(
        [...state.goods].reverse(),
      ),
    }));
  };

  onAlphabeticallyOrder = () => {
    this.setState(state => ({
      goods: this.filterByMinLength(
        [...state.goodsInitial].sort(),
      ),
    }));
  };

  onLengthOrder = () => {
    this.setState(state => ({
      goods: this.filterByMinLength(
        [...state.goodsInitial].sort((a, b) => a.length - b.length),
      ),
    }));
  };

  onSelectLength = (event) => {
    const { target } = event;
    const newValue = target.options[target.selectedIndex].value;

    this.setState(state => ({
      selectValue: newValue,
      goods: this.filterByMinLength(
        [...state.goods],
        newValue,
      ),
    }));
  };

  // eslint-disable-next-line max-len
  filterByMinLength = (array, minLength = this.state.selectValue) => array.filter(good => good.length >= minLength);

  onReset = () => {
    this.setState(state => ({
      selectValue: 1,
      goods: [...state.goodsInitial],
    }));
  };

  render() {
    return (
      <div className="goods">
        <ul className="goods__list">
          {this.state.goods.map(good => (
            <li className="goods__item" key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div className="goods__sort">
          <button
            className="goods__sort-btn"
            type="button"
            onClick={this.onReverseOrder}
          >
            Reverse
          </button>
          <button
            className="goods__sort-btn"
            type="button"
            onClick={this.onLengthOrder}
          >
            Sort by length
          </button>
          <button
            className="goods__sort-btn"
            type="button"
            onClick={this.onAlphabeticallyOrder}
          >
            Sort alphabetically
          </button>
          <span className="goods__sort-select">
            Min length:&nbsp;
            <select
              value={this.state.selectValue}
              onChange={this.onSelectLength}
            >
              {this.state.selectOptions.map(value => (
                <option key={value} value={value}>{value}</option>
              ))}
            </select>
          </span>
          <button
            className="goods__sort-btn"
            type="button"
            onClick={this.onReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export { GoodsList };

GoodsList.propTypes = {
  goods: PropType.arrayOf(PropType.string).isRequired,
};
