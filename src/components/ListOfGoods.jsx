import React from 'react';
import PropTypes from 'prop-types';

const getGoods = (goods, isReverse, isAlphabetSort, isLengthSort) => {
  const newGoods = [...goods];

  if (isAlphabetSort) {
    newGoods.sort((g1, g2) => g1.localeCompare(g2));
  }

  if (isLengthSort) {
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
    isAlphabeticallySort: false,
    isLengthSort: false,
  };

  Reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  SortAlphabetically = () => {
    this.setState(state => ({
      isAlphabeticallySort: !state.isAlphabeticallySort,
      isLengthSort: false,
    }));
  }

  SortByLength = () => {
    this.setState(state => ({
      isLengthSort: !state.isLengthSort,
      isAlphabeticallySort: false,
    }));
  }

  Reset = () => {
    this.setState(() => ({
      isReverse: false,
      isAlphabeticallySort: false,
      isLengthSort: false,
    }));
  }

  render() {
    const { goods } = this.props;
    const { isReverse, isAlphabeticallySort, isLengthSort } = this.state;

    const visibleGoods = getGoods(
      goods,
      isReverse,
      isAlphabeticallySort,
      isLengthSort,
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
