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

const selectOptions = Array(10).fill(0).map((item, i) => {
  let itemCopy = item;

  itemCopy = i + 1;

  return itemCopy;
});

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
          && (
            <>
              <button type="button" onClick={this.hide}>Hide</button>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.sortAlphabetically}>
                Sort alphabetically
              </button>
              <button type="button" onClick={this.reset}>Reset</button>
              <button type="button" onClick={this.sortByLength}>
                Sort by length
              </button>
              <select onChange={this.selectSort} value={filterLength}>
                {selectOptions
                  .map(selectOption => (
                    <option key={selectOption}>
                      {selectOption}
                    </option>
                  ))}
              </select>
              <GoodsList goods={goodsCopy} />
            </>
          )}
      </div>
    );
  }
}

export default App;
