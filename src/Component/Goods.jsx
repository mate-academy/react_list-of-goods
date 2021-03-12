import React from 'react';
import PropTypes from 'prop-types';

export class Goods extends React.Component {
  state = {
    isVisible: false,
    goodsVisible: this.props.goods,
  }

  startHandler = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  }

  sortAlphabetHandler = () => {
    const { goods } = this.props;
    const sortAlphabetGoods = [...goods].sort((prevGood, currentGood) => (
      prevGood.localeCompare(currentGood)
    ));

    this.setState(() => ({
      goodsVisible: sortAlphabetGoods,
    }));
  }

  reverseHandler = () => {
    this.setState(prevState => ({
      goodsVisible: [...prevState.goodsVisible].reverse(),
    }));
  }

  resetHandler = () => {
    const { goods } = this.props;

    this.setState(state => ({
      goodsVisible: goods,
    }));
  }

  sortByLengthHandler = () => {
    const { goods } = this.props;
    const sortByLengthGoods = [...goods].sort((prevGood, currentGood) => (
      prevGood.length - currentGood.length
    ));

    this.setState(() => ({
      goodsVisible: sortByLengthGoods,
    }));
  }

  render() {
    return (
      <>
        {!this.state.isVisible
        && (
        <button
          type="button"
          onClick={this.startHandler}
        >
          Start
        </button>
        )
        }
        <button
          type="button"
          onClick={this.reverseHandler}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetHandler}
        >
          Sort Alphabetically
        </button>
        <button
          type="button"
          onClick={this.resetHandler}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLengthHandler}
        >
          Sort by length
        </button>
        {this.state.isVisible
        && (
        <ul>
          {this.state.goodsVisible.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
        )}
      </>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
