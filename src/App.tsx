import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList';

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

interface State {
  goods: string[],
  start: boolean,
  isReversed: boolean,
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    start: true,
    isReversed: false,
    sortBy: '',
  };

  startButton = () => {
    this.setState(state => ({
      start: !state.start,
    }));
  };

  reverseButton = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  alphabeticallyButton = () => {
    this.setState({ sortBy: 'alphabetically' });
  };

  resetButton = () => {
    this.setState(({
      isReversed: false,
      sortBy: '',
    }));
  };

  lengthButton = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const {
      goods,
      start,
      isReversed,
      sortBy,
    } = this.state;

    const sortList = goods.map(good => good);

    sortList.sort((f1, f2) => {
      switch (sortBy) {
        case 'alphabetically':
          return f1.localeCompare(f2);

        case 'length':
          return f1.length - f2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      sortList.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {start && <button type="button" onClick={this.startButton}>Start</button>}
        {!start
          && (
            <div className="Sort__buttons">
              <button type="button" onClick={this.reverseButton}>Reverse</button>
              <button type="button" onClick={this.alphabeticallyButton}>Sort alphabetically</button>
              <button type="button" onClick={this.resetButton}>Reset</button>
              <button type="button" onClick={this.lengthButton}>Sort by length</button>
              <GoodsList goods={sortList} />
            </div>
          )}
      </div>
    );
  }
}

export default App;
