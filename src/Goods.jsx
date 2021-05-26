import React from 'react';
import PropTypes from 'prop-types';

export class Goods extends React.Component {
  state = {
    isReversed: false,
    isSorted: '',
    goodLength: 1,
  };

  reversed = () => {
    this.setState(prev => ({
      isReversed: !prev.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState(prev => ({
      isSorted: 'alphabet',
    }));
  };

  sortByLength = () => {
    this.setState({
      isSorted: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSorted: '',
      goodLength: 1,
    });
  };

  changeList = ({ target }) => {
    this.setState({
      goodLength: target.value,
    });
  }

  render() {
    const { isReversed, isSorted, goodLength } = this.state;
    const goodsList = this.props.goods.filter(good => good.length >= goodLength);

    goodsList.sort((first, second) => {
      switch (isSorted) {
        case 'alphabet':
          return first.localeCompare(second);
        case 'length':
          return first.length - second.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsList.reverse();
    }

    return (
      <>
        <button
          type="button"
          onClick={this.reversed}
        >
          Reverse
        </button>
        <button
          type="button"
          onClick={this.sortAlphabetically}
        >
          Sort alphabetically
        </button>
        <button
          type="button"
          onClick={this.reset}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.sortByLength}
        >
          Sort by length
        </button>
        <select
          value={goodLength}
          onChange={this.changeList}
        >
          {Array(10).fill(0).map((x, i) => (
            <option
              key={Math.floor(Math.random() * 100000)}
              value={i + 1}
            >
              {i + 1}
            </option>
          ))}
        </select>
        <ul>
          {goodsList.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </>
    );
  }
}

Goods.propTypes = {
  goods: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};
