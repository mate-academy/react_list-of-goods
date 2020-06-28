import React from 'react';
import PropType from 'prop-types';
import './GoodsList.css';

class GoodsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectOptions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      selectValue: 1,
      goods: [...props.goods],
      goodsInitial: [...props.goods],
    };
  }

  componentDidMount() {
    document.getElementById('sort_reverse')
      .addEventListener('click', this.onReverseOrder);
    document.getElementById('sort_alphabet')
      .addEventListener('click', this.onAlphabeticallyOrder);
    document.getElementById('reset')
      .addEventListener('click', this.onReset);
    document.getElementById('sort_length')
      .addEventListener('click', this.onLengthOrder);
  }

  onReverseOrder = () => {
    this.setState(state => ({
      goods: this.filterByMinLength(
        [...state.goodsInitial].reverse(),
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
            id="sort_reverse"
            type="button"
          >
            Reverse
          </button>
          <button
            className="goods__sort-btn"
            id="sort_length"
            type="button"
          >
            Sort by length
          </button>
          <button
            className="goods__sort-btn"
            id="sort_alphabet"
            type="button"
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
            id="reset"
            type="button"
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
