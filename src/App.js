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

const selectOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  state = {
    stateGoods: goodsFromServer,
    isStarted: false,
    isReversed: false,
    sortBy: '',
    filterLength: 1,
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

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      filterLength: 1,
    });
  }

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  }

  selectSort = (event) => {
    this.setState({ filterLength: event.target.value });
  }

  render() {
    const { stateGoods, isStarted, isReversed, sortBy, filterLength }
    = this.state;
    const goodsCopy = stateGoods.filter(good => good.length > filterLength);

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
          && <button type="button" onClick={this.reset}>Reset</button>}
        {isStarted
          && (
            <button type="button" onClick={this.sortByLength}>
              Sort by length
            </button>
          )}
        {isStarted
          && (
            <select onChange={this.selectSort} value={filterLength}>
              {selectOptions
                .map(selectOption => (
                  <option key={selectOption}>
                    {selectOption}
                  </option>
                ))}
            </select>
          )}
        {isStarted && <GoodsList goods={goodsCopy} />}
      </div>
    );
  }
}

export default App;
