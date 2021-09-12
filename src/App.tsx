import React from 'react';

import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';
import './App.css';

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
  isStartButton: boolean;
  listOfGoods: string[]
};

class App extends React.Component<{}, State> {
  state = {
    isStartButton: false,
    listOfGoods: [...goodsFromServer],
  };

  start = () => {
    this.setState(({ isStartButton }) => ({
      isStartButton: !isStartButton,
    }));
  };

  sortAlphabetically = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.sort(),
    }));
  };

  reverseGoods = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.reverse(),
    }));
  };

  sortByLength = () => {
    this.setState(({ listOfGoods }) => ({
      listOfGoods: listOfGoods.sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState(() => ({
      listOfGoods: [...goodsFromServer],
    }));
  };

  render() {
    const { listOfGoods } = this.state;

    return (
      <div className="App">
        {
          this.state.isStartButton ? (
            <div className="App__list">
              <h1>Goods-list:</h1>
              <ListOfGoods
                reverseGoods={this.reverseGoods}
                sortAlphabetically={this.sortAlphabetically}
                sortByLength={this.sortByLength}
                reset={this.reset}
                goods={listOfGoods}
              />
            </div>
          ) : (
            <button
              type="button"
              className="App__start btn btn-success"
              onClick={this.start}
            >
              <span className="App__start--font">Start</span>
            </button>
          )
        }
      </div>
    );
  }
}

export default App;
