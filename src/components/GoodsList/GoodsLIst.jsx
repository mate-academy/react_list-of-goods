import React from 'react';
import PropTypes from 'prop-types';

const getVisibleGoods = (goods, isReverse, isAlphabetSort, isLengthSort) => {
  const copyOfGoods = [...goods];

  if (isAlphabetSort) {
    copyOfGoods.sort((a, b) => a.localeCompare(b));
  }

  if (isLengthSort) {
    copyOfGoods.sort((a, b) => a.length - b.length);
  }

  if (isReverse) {
    copyOfGoods.reverse();
  }

  return copyOfGoods;
};

class GoodsList extends React.Component {
  state = {
    isReverse: false,
    isAlphabetSort: false,
    isLengthSort: false,
  };

  Reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  }

  SortByalphabet = () => {
    this.setState(state => ({
      isAlphabetSort: !state.isAlphabetSort,
      isLengthSort: false,
    }));
  }

  SortByLength = () => {
    this.setState(state => ({
      isLengthSort: !state.isLengthSort,
      isAlphabetSort: false,
    }));
  }

  Reset = () => {
    this.setState(() => ({
      isReverse: false,
      isAlphabetSort: false,
      isLengthSort: false,
    }));
  }

  render() {
    const { goods } = this.props;
    const { isReverse, isAlphabetSort, isLengthSort } = this.state;

    const visibleGoods = getVisibleGoods(
      goods,
      isReverse,
      isAlphabetSort,
      isLengthSort,
    );

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        <ul className="App__list">
          {visibleGoods.map(good => (
            <li className="App__item" key={good}>{good}</li>
          ))}
        </ul>

        <button
          type="button"
          onClick={this.Reverse}
          className={isReverse ? 'App__button-active' : 'App__button'}
        >
          Reverse
        </button>

        <button
          type="button"
          onClick={this.SortByalphabet}
          className={isAlphabetSort ? 'App__button-active' : 'App__button'}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          onClick={this.SortByLength}
          className={isLengthSort ? 'App__button-active' : 'App__button'}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={this.Reset}
          className="App__button"
        >
          Reset
        </button>
      </div>
    );
  }
}

const typeGoods = PropTypes.arrayOf({
  good: PropTypes.string.isRequired,
});

GoodsList.propTypes = {
  goods: typeGoods.isRequired,
};

export default GoodsList;
