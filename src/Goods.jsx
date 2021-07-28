import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export class Goods extends React.Component {
  state = {
    goods: this.props.goods,
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortInAlphabetOrder = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByWordLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => b.length - a.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: this.props.goods,
    });
  };

  render() {
    const { goods } = this.state;
    const { reverse, sortInAlphabetOrder, sortByWordLength, reset } = this;

    return (
      <>
        {goods.map(
          good => <li key={uuidv4()}>{good}</li>,
        )}
        <button onClick={reverse} type="button">
          Reverse
        </button>
        <button onClick={sortInAlphabetOrder} type="button">
          Sort in alphabetic order
        </button>
        <button onClick={sortByWordLength} type="button">
          Sort by word length
        </button>
        <button onClick={reset} type="button">
          Reset
        </button>
      </>
    );
  }
}

Goods.propTypes = {
  goods:
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default Goods;
