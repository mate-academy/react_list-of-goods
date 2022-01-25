import React from 'react';
import './App.css';
import { ListOfGoods } from './components/ListOfGoods/ListOfGoods';

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
  isStartApp: boolean,
  initialArray: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    isStartApp: true,
    initialArray: [...goodsFromServer],
  };

  handleStart = () => {
    this.setState(state => ({
      isStartApp: !state.isStartApp,
    }));
  };

  reverseGoods = () => {
    this.setState(state => ({
      initialArray: [...state.initialArray].reverse(),
    }));
  };

  sortByName = () => {
    this.setState((state) => ({
      initialArray: [...state.initialArray].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState((state) => ({
      initialArray: [...state.initialArray].sort((a, b) => a.length - b.length),
    }));
  };

  resetGoods = () => {
    this.setState({
      initialArray: [...goodsFromServer],
    });
  };

  render() {
    const { isStartApp, initialArray } = this.state;

    return (
      <div className="App">
        <h1>Goods</h1>
        {isStartApp ? <button type="button" onClick={this.handleStart}>Start</button>
          : (
            <div>
              <button type="button" onClick={this.reverseGoods}>Reverse</button>
              <button type="button" onClick={this.sortByName}>Sort alphabetically</button>
              <button type="button" onClick={this.sortByLength}>Sort by length</button>
              <button type="button" onClick={this.resetGoods}>Reset</button>
              <ListOfGoods filteredList={initialArray} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
