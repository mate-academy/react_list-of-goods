import React from 'react';
import PropTypes from 'prop-types';

export class GoodsList extends React.Component {
  state = {
    goods: this.props.goods,
  }

  reverseBtn = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  }

  sortBtn = () => {
    this.setState(state => ({
      goods: [...state.goods].sort(),
    }));
  }

  resetBtn = () => {
    this.setState({
      goods: this.props.goods,
    });
  }

  sortByLengthBtn = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  render() {
    const { goods } = this.state;

    return (
      <>
        <h1>Goods</h1>
        <ul className="goodslist">
          {goods.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="reverseBtn"
          onClick={this.reverseBtn}
        >
          Reverse
        </button>
        <button
          type="button"
          className="sortBtn"
          onClick={this.sortBtn}
        >
          Sort
        </button>
        <button
          type="button"
          className="resetBtn"
          onClick={this.resetBtn}
        >
          Reset
        </button>
        <button
          type="button"
          className="sortByLengthBtn"
          onClick={this.sortByLengthBtn}
        >
          Sort by length
        </button>
      </>
    );
  }
}

GoodsList.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};
