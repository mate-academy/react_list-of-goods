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
    booleanValue: false,
    defValue: 1,
  }

  limit = (e) => {
    const { target } = e;

    this.setState(({
      goods: goodsFromServer.filter(good => good.length >= target.value),
      defValue: target.value,
    }));
  }

  start = () => {
    this.setState(state => ({ booleanValue: !state.booleanValue }));
  }

  reverse = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  }

  sortAlphabetically = () => {
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
    this.setState({
      goods: [...goodsFromServer],
      disabled: false,
      defValue: 1,
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
            sortByChar={this.sortAlphabetically}
            sortByLength={this.sortByLength}
            reset={this.reset}
          />
        </div>
      </>
    );
  }
}

export default App;
