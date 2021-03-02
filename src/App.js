import React from 'react';
import './App.css';

import { GoodList } from './components/GoodsList';

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
    goods: goodsFromServer,
    bool: false,
    disabled: false,
    options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  }

  limit = (e) => {
    const { target } = e;

    this.setState(state => ({
      goods: [...state.goods].filter(good => good.length >= target.value),
      disabled: true,
    }));
  }

  start = () => {
    this.setState(state => ({ bool: !state.bool }));
  }

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  }

  sortByChar = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  }

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  }

  reset = () => {
    const select = document.querySelector('select');

    select.value = 1;

    this.setState({
      goods: [...goodsFromServer],
      disabled: false,
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>Goods</h1>
        </div>
        <div className="GoodList">
          <GoodList
            {...this.state}
            start={this.start}
            limit={this.limit}
            reverse={this.reverse}
            sortByChar={this.sortByChar}
            sortByLength={this.sortByLength}
            reset={this.reset}
          />
        </div>
      </>
    );
  }
}

export default App;
