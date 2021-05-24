import React from 'react';
import './App.css';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    isGoodsShown: false,
    isReversed: false,
    lengthFilter: 1,
  }

  showGoods = () => {
    this.setState({
      isGoodsShown: true,
    });
  }

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      lengthFilter: 1,
    });
  }

  reverseGoods = () => {
    this.setState(({ isReversed }) => ({
      isReversed: !isReversed,
    }));
  }

  sortByAlphabet = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  }

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  }

  render() {
    const {
      isGoodsShown,
      isReversed,
      sortBy,
      lengthFilter,
    } = this.state;
    const visibleGoods = goodsFromServer.filter(
      good => good.length >= lengthFilter,
    );

    visibleGoods.sort((curGood, nextGood) => {
      switch (sortBy) {
        case 'alphabet':
          return curGood.localeCompare(nextGood);
        case 'length':
          return curGood.length - nextGood.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    if (isGoodsShown) {
      return (
        <div className="App">
          <h1>Goods</h1>
          <p>
            Set filter by word length:
            <select
              value={lengthFilter}
              onChange={({ target }) => {
                this.setState({
                  lengthFilter: target.value,
                });
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </p>
          <button type="button" onClick={this.reset}>
            Reset
          </button>
          <button type="button" onClick={this.reverseGoods}>
            Reverse
          </button>
          <p>
            Sort by:
            <button type="button" onClick={this.sortByAlphabet}>
              Alphabet
            </button>
            <button type="button" onClick={this.sortByLength}>
              Length
            </button>
          </p>
          <ul>
            {visibleGoods.map(good => (
              <li key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return (
      <button type="button" onClick={this.showGoods}>
        Start
      </button>
    );
  }
}

export default App;
