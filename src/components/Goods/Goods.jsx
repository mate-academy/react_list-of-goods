import React from 'react';
import './Goods.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Goods extends React.Component {

  state = {
    isReverse: false,
    isAlphabetSort: false,
    isLengthSort: false,
    minLength: 1,
  };

  componentDidMount() {
    this.defaultFilters = this.state;
  }

  reverse = () => {
    this.setState(({ isReverse }) => ({
      isReverse: !isReverse,
    }));
  };

  sortAlphabet = () => {
    this.setState(({ isAlphabetSort }) => ({
      isAlphabetSort: !isAlphabetSort,
      isLengthSort: false,
    }));
  };

  sortLength = () => {
    this.setState(({ isLengthSort }) => ({
      isLengthSort: !isLengthSort,
      isAlphabetSort: false,
    }));
  };

  resetFilters = () => {
    this.setState(this.defaultFilters);
  };

  setMinLength = (event) => {
    this.setState({
      minLength: event.target.value,
    });
  };

  render() {
    const { goods } = this.props;
    const { isReverse, isAlphabetSort, isLengthSort, minLength } = this.state;
    const visibleGoods = goods.filter(good => good.length >= minLength);

    if (isAlphabetSort) {
      visibleGoods.sort((a, b) => a.localeCompare(b));
    }

    if (isLengthSort) {
      visibleGoods.sort((a, b) => a.length - b.length);
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
          onClick={this.reverse}
          className={classNames('btn', { activeBtn: isReverse })}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabet}
          className={classNames('btn', { activeBtn: isAlphabetSort })}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.sortLength}
          className={classNames('btn', { activeBtn: isLengthSort })}
        >
          Sort by length
        </button>
        <button
          type="button"
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
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Goods;
