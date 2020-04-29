import React from 'react';
import PropTypes from 'prop-types';

class GoodList extends React.Component {
  state = {
    goods: [...this.props.goods],
    count: 1,
    toggle: true,
  }

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  }

  sort = () => {
    this.setState(({ goods, toggle }) => (toggle
      ? {
        goods: [...goods].sort((a, b) => a.localeCompare(b)),
        toggle: false,
      }
      : {
        goods: [...goods].sort((a, b) => b.localeCompare(a)),
        toggle: true,
      }
    ));
  }

  reset = () => {
    this.setState({
      goods: this.props.goods,
      count: 1,
      toggle: true,
    });
  }

  sortLength = () => {
    this.setState(({ goods, toggle }) => (toggle
      ? {
        goods: [...goods].sort((a, b) => a.length - b.length),
        toggle: false,
      }
      : {
        goods: [...goods].sort((a, b) => b.length - a.length),
        toggle: true,
      }));
  }

  selectGoodsLength = (len) => {
    this.setState({ count: len });
  }

  render() {
    const letterLimits = [...Array(10).keys()];
    const { goods, count } = this.state;

    return (
      <>
        <ul>
          {goods.filter(good => good.length >= count).map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        <button type="button" onClick={this.reverse}>Reverse</button>
        <button type="button" onClick={this.sort}>Sort by alphabet </button>
        <button type="button" onClick={this.reset}>Reset</button>
        <button type="button" onClick={this.sortLength}>Sort by length</button>

        <select
          value={count}
          onChange={event => this.selectGoodsLength(event.target.value)}
        >
          {letterLimits.map(limit => (
            <option value={limit + 1} key={limit + 1}>{limit + 1}</option>
          ))}
        </select>
      </>

    );
  }
}

GoodList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GoodList;
