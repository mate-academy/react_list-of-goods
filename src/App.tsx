import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';

const goodsFromServer: string[] = [
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

type State = {
  goods: string[];
  showList: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    showList: false,
  };

  isVisible = () => {
    this.setState(() => ({ showList: true }));
  };

  reverseList = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  };

  sortAlphabet = () => {
    this.setState(state => ({ goods: [...state.goods].sort((a, b) => a.localeCompare(b)) }));
    // this.setState(state => ({ goods: [...state.goods].sort() }));
  };

  resetList = () => {
    this.setState(() => ({ goods: [...goodsFromServer] }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((item1, item2) => (item1.length - item2.length)),
    }));
  };

  render() {
    const { goods, showList } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {showList
          ? (
            <>
              <GoodsList goods={goods} />
              <button
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortAlphabet}
              >
                Sort A-Z
              </button>
              <button
                type="button"
                onClick={this.resetList}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </>
          )
          : (
            <button
              type="button"
              onClick={this.isVisible}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
