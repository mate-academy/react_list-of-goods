import React from 'react';
import './Goods.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Goods extends React.Component {

  state = {
    isReverse: false,
    sortBy: null,
    minLength: 1,
  };

  componentDidMount() {
    this.defaultFilters = this.state;
  }

  reverse = () => {
    this.setState(({isReverse}) => ({
      isReverse: !isReverse,
    }));
  };

  sortHandler = (event) => {
    const { name: sortType } = event.target;

    this.setState(({ sortBy }) => ({
      sortBy: sortBy === sortType ? null : sortType,
    }));
  }

  resetFilters = () => {
    this.setState(this.defaultFilters);
  };

  setMinLength = (event) => {
    this.setState({
      minLength: event.target.value,
    });
  };

  render() {
    const {goods} = this.props;
    const {isReverse, sortBy, minLength} = this.state;
    const visibleGoods = goods.filter(good => good.length >= minLength);

    switch (sortBy) {
      case 'sortByAlphabet':
        visibleGoods.sort((a, b) => a.localeCompare(b));
        break;
      case 'sortByLength':
        visibleGoods.sort((a, b) => a.length - b.length);
        break;
    }

    if (isReverse) {
      visibleGoods.reverse();
    }

    return (
      <div>
        <ul>
          {visibleGoods.map(good => <li key={good}>{good}</li>)}
        </ul>
        <button
          type="button"
          name="revers"
          onClick={this.reverse}
          className={classNames('btn', {activeBtn: isReverse})}
        >
          Reverse
        </button>
        <button
          type="button"
          name="sortByAlphabet"
          onClick={event => this.sortHandler(event)}
          className={classNames('btn', {activeBtn: sortBy === 'sortByAlphabet'})}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          name="sortByLength"
          onClick={event => this.sortHandler(event)}
          className={classNames('btn', {activeBtn: sortBy === 'sortByLength'})}
        >
          Sort by length
        </button>
        <button
          type="button"
          name="resetFilter"
          onClick={this.resetFilters}
          className="btn"
        >
          Reset
        </button>
        <select
          name="minLength"
          onChange={event => this.setMinLength(event)}
          value={minLength}
        >
          {new Array(10).fill(0).map((_, i) => i + 1).map(item => (
            <option value={item} key={item}>{item}</option>
            ))}
        </select>
      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Goods;
