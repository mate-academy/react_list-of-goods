import React from 'react';

import PropTypes from 'prop-types';

export class GoodsList extends React.PureComponent {
  state = {
    goods: this.props.goods,
    isReversed: false,
    sortBy: 'default',
    lengthFilterValue: 1,
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortByName = () => {
    this.setState({
      sortBy: 'name',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  reset = () => {
    this.setState({
      sortBy: 'default',
      isReversed: false,
      lengthFilterValue: 1,
    });
  }

  lengthFilter = (event) => {
    this.setState({
      lengthFilterValue: event.target.value,
    });
  }

  render() {
    const { goods, isReversed, sortBy, lengthFilterValue } = this.state;
    const visibleGoods = goods.filter(good => good.length >= lengthFilterValue);

    if (sortBy === 'length') {
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
    }

    if (sortBy === 'name') {
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="GoodsList">
        <ul>
          {visibleGoods.map(good => (
            <li key={good}>
              {good}
            </li>
          ))}
        </ul>
        <div>
          <button type="button" onClick={this.reverse}>
            Reverse
          </button>
          <button type="button" onClick={this.sortByName}>
            Sort By Name
          </button>
          <button type="button" onClick={this.sortByLength}>
            Sort By Length
          </button>
          <button type="button" onClick={this.reset}>
            Reset
          </button>
        </div>
        <select onChange={this.lengthFilter}>
          {Array(10).fill(0).map((x, i) => i + 1).map(item => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </div>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
