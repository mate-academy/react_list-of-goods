import React from 'react';
import './App.scss';

import { GoodsList } from './Components/GoodsList/GoodsList';

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
    goods: [...goodsFromServer],
    start: false,
    isReversed: false,
    sortBy: '',
  };

  showList = () => (
    this.setState({
      start: true,
    }));

  reverseList = () => (
    this.setState((state) => ({
      isReversed: !state.isReversed,
    })));

  sortByAlphabet = () => (
    this.setState({
      sortBy: 'alphabet',
    }));

  sortByLength = () => (
    this.setState({
      sortBy: 'length',
    }));

  resetList = () => (
    this.setState({
      sortBy: '',
      isReversed: false,
    })
  );

  render() {
    const {
      goods,
      start,
      isReversed,
      sortBy,
    } = this.state;

    let currentGoods = [...goods];

    if (sortBy) {
      currentGoods = [...currentGoods].sort((a, b) => {
        switch (sortBy) {
          case 'alphabet':
            return a.localeCompare(b);

          case 'length':
            return a.length - b.length;

          default: return 0;
        }
      });
    }

    if (isReversed) {
      currentGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>

        {start && (
          <div className="App__buttons">
            <button
              type="button"
              onClick={this.reverseList}
              className="App__button"
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortByAlphabet}
              className="App__button"
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={this.sortByLength}
              className="App__button"
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.resetList}
              className="App__button"
            >
              Reset
            </button>
          </div>
        )}

        {!start ? (
          <button
            type="button"
            onClick={this.showList}
            className="App__button"
          >
            Start
          </button>
        ) : (
          <GoodsList goods={[...currentGoods]} />
        )}
      </div>
    );
  }
}

export default App;
