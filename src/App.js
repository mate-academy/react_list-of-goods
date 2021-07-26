import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

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
    goods: [...goodsFromServer],
    isStarted: false,
    isReversed: false,
    sortBy: null,
  }

  start = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  }

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      sortBy: 'length',
    }));
  };

  sortByName = () => {
    this.setState(state => ({
      sortBy: 'alphabet',
    }));
  };

  reset = () => {
    this.setState(state => ({
      goods: [...goodsFromServer],
      isStarted: true,
      isReversed: false,
      sortBy: null,
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.isStarted ? (
          <>
            <h1 className="title">Goods</h1>
            <GoodsList
              goods={this.state.goods}
              sortBy={this.state.sortBy}
              isReversed={this.state.isReversed}
            />
            <div className="buttons">
              <Button callback={this.reverse} text="Reverse" />
              <Button callback={this.sortByLength} text="Sort by length" />
              <Button callback={this.sortByName} text=" Sort alphabetically" />
              <Button callback={this.reset} text=" Reset" />
            </div>
          </>
        )
          : (
            <button
              type="button"
              onClick={this.start}
              className="button"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
