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
  startApp: boolean,
  isReversed: boolean,
  sortBy: string,
  initialArray: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    startApp: true,
    isReversed: false,
    sortBy: '',
    initialArray: goodsFromServer,
  };

  start = () => {
    this.setState(state => ({
      startApp: !state.startApp,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortBy = (value: string) => {
    this.setState({ sortBy: value });
  };

  sortCallback = (a: string, b: string) => {
    switch (this.state.sortBy) {
      case 'name':
        return a.localeCompare(b);

      case 'length':
        return a.length - b.length;

      default:
        return 0;
    }
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
      initialArray: goodsFromServer,
    });
  };

  render() {
    const { startApp, isReversed, initialArray } = this.state;
    const filteredGoods = [...initialArray];

    filteredGoods.sort(this.sortCallback);

    if (isReversed) {
      filteredGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {startApp ? <button type="button" onClick={this.start}>Start</button>
          : (
            <>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={() => (this.sortBy('name'))}>Sort alphabetically</button>
              <button type="button" onClick={() => (this.sortBy('length'))}>Sort by length</button>
              <button type="button" onClick={this.reset}>Reset</button>
              <ListOfGoods filteredList={filteredGoods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
