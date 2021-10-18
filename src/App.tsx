import React from 'react';
import './App.css';
import { RenderList } from './RenderList';

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

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type SortBy = 'alphabet' | 'length';

interface State {
  goods: string[],
  isListVisible: boolean,
  isReverse: boolean,
  sortBy: SortBy | string
  filterValue: string
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isListVisible: false,
    isReverse: false,
    sortBy: '',
    filterValue: '1',
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
      isReverse: false,
      sortBy: '',
      filterValue: '1',
    });
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  filter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ filterValue: event.currentTarget.value });
  };

  render() {
    const {
      goods, isListVisible, isReverse, sortBy, filterValue,
    } = this.state;
    const nameButton = isListVisible ? 'Hide' : 'Show';
    const goodsToSend = goods.filter(good => good.length >= +filterValue);

    if (sortBy) {
      goodsToSend.sort((word1, word2) => {
        switch (sortBy) {
          case 'alphabet':
            return word2.localeCompare(word1);
          case 'length':
            return word1.length - word2.length;
          default:
            return 0;
        }
      });
    }

    if (isReverse) {
      goodsToSend.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ isListVisible: !isListVisible });
          }}
        >
          {nameButton}
        </button>
        {isListVisible && (
          <div>
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortByAlphabet}
            >
              Sort Alphabety
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length

            </button>
            <select
              name="select"
              id="selectNumber"
              onChange={this.filter}
            >
              {numbers.map(number => {
                return (
                  <option value={number}>{number}</option>
                );
              })}
            </select>
            <button type="button" onClick={this.reset}>Reset</button>
            <RenderList goods={goodsToSend} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
