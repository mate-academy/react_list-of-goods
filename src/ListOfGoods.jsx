import React from 'react';
import PropTypes from 'prop-types';

class ListOfGoods extends React.Component {
  state = {
    goods: [...this.props.goods],
  }

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortByAlphabet = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  reset = () => {
    this.setState(state => ({
      goods: this.props.goods,
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(
        (a, b) => a.length - b.length,
      ),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <ul>
          {goods.map(good => (
            <li
              key={good}
              className="good"
            >
              {good}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="button"
          onClick={this.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className="button"
          onClick={this.sortByAlphabet}
        >
          Sort by alphabet
        </button>
        <button
          type="button"
          className="button"
          onClick={this.reset}
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
      </>
    );
  }
}

ListOfGoods.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ListOfGoods;
