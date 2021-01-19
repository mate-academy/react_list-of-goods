import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

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
    stateGoods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortBy: '',
  }

  start = () => {
    this.setState({ isStarted: true });
  }

  hide = () => {
    this.setState({ isStarted: false });
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  }

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  }

  resetSort = () => {
    this.setState({ sortBy: '' });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  render() {
    const { stateGoods, isStarted, isReversed, sortBy } = this.state;
    const goodsCopy = [...stateGoods];

    goodsCopy.sort((value1, value2) => {
      switch (sortBy) {
        case 'alphabet':
          return value1.localeCompare(value2);

        case 'length':
          return value1.length - value2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!isStarted
          && <button type="button" onClick={this.start}>Start</button>}
        {isStarted
          && <button type="button" onClick={this.hide}>Hide</button>}
        {isStarted
          && <button type="button" onClick={this.reverse}>Reverse</button>}
        {isStarted
          && (
            <button type="button" onClick={this.sortAlphabetically}>
              Sort alphabetically
            </button>
          )}
        {isStarted
          && <button type="button" onClick={this.resetSort}>Reset</button>}
        {isStarted
          && (
            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>
          )}
        {isStarted && <GoodsList goods={goodsCopy} />}
      </div>
    );
  }
}

export default App;
