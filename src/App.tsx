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
  startButton: boolean,
  isReversed: boolean,
  sortBy: string,
  initialArray: string[],
};

class App extends React.Component<{}, State> {
  state: State = {
    startButton: true,
    isReversed: false,
    sortBy: '',
    initialArray: goodsFromServer,
  };

  start = () => {
    this.setState(state => ({
      startButton: !state.startButton,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByName = () => {
    this.setState({ sortBy: 'name' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      startButton: false,
      isReversed: false,
      sortBy: '',
      initialArray: goodsFromServer,
    });
  };

  render() {
    const filteredGoods = [...this.state.initialArray];

    filteredGoods.sort((a, b) => {
      switch (this.state.sortBy) {
        case 'name':
          return a.localeCompare(b);

        case 'length':
          return a.length - b.length;

        default:
          return 0;
      }
    });

    if (this.state.isReversed) {
      filteredGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {this.state.startButton ? <button type="button" onClick={this.start}>Start</button>
          : (
            <>
              <button type="button" onClick={this.reverse}>Reverse</button>
              <button type="button" onClick={this.sortByName}>Sort alphabetically</button>
              <button type="button" onClick={this.sortByLength}>Sort by length</button>
              <button type="button" onClick={this.reset}>Reset</button>
              <ListOfGoods filteredList={filteredGoods} />
            </>
          )}
      </div>
    );
  }
}

export default App;
