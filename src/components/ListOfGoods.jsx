import React from 'react';
import PropTypes from 'prop-types';

const getGoods = (goods, isReverse, sortByAlphabet, SortByLength) => {
  const newGoods = [...goods];

  if (sortByAlphabet) {
    newGoods.sort((g1, g2) => g1.localeCompare(g2));
  }

  if (SortByLength) {
    newGoods.sort((g1, g2) => g1.length - g2.length);
  }

  if (isReverse) {
    newGoods.reverse();
  }

  return newGoods;
};

class ListOfGoods extends React.Component {
  state = {
    isReverse: false,
    sortByAlphabet: false,
    SortByLength: false,
  };

  Reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  SortAlphabetically = () => {
    this.setState(state => ({
      sortByAlphabet: !state.sortByAlphabet,
      SortByLength: false,
    }));
  }

  SortByLength = () => {
    this.setState(state => ({
      SortByLength: !state.SortByLength,
      sortByAlphabet: false,
    }));
  }

  Reset = () => {
    this.setState(() => ({
      isReverse: false,
      sortByAlphabet: false,
      SortByLength: false,
    }));
  }

  render() {
    const { goods } = this.props;
    const { isReverse, sortByAlphabet, SortByLength } = this.state;

    const visibleGoods = getGoods(
      goods,
      isReverse,
      sortByAlphabet,
      SortByLength,
    );

    return (
      <div className="App">

        <button
          type="button"
          onClick={this.Reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.SortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.SortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.Reset}
        >
          Reset
        </button>
        <h1>Goods</h1>

        <ul>
          {visibleGoods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const typeGoods = PropTypes.arrayOf({
  good: PropTypes.string.isRequired,
});

ListOfGoods.propTypes = {
  goods: typeGoods.isRequired,
};

export default ListOfGoods;
