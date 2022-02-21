import React from 'react';
import './App.css';
import { GoodList } from './GoodList';

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

type State = {
  goods: string[],
  visibleGoods: boolean,
  isReversed: boolean,
  sortedAlphabetically: boolean,
  sortedByLength: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    visibleGoods: false,
    isReversed: false,
    sortedAlphabetically: false,
    sortedByLength: false,
    sortBy: '',
  };

  visibleList = () => {
    this.setState((state) => ({
      visibleGoods: !state.visibleGoods,
    }));
  };

  sortLetter = () => {
    this.setState((state) => ({
      sortedAlphabetically: !state.sortedAlphabetically,
      sortBy: 'alphabet',
    }));
  };

  sortLengthGood = () => {
    this.setState((state) => ({
      sortedByLength: !state.sortedByLength,
      sortBy: 'length',
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
      goods: [...goodsFromServer],
    }));
  };

  resetGoods = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      isReversed: false,
      sortedAlphabetically: false,
      sortedByLength: false,
      sortBy: '',
    }));
  };

  render() {
    const {
      goods,
      visibleGoods,
      isReversed,
      sortBy,
    } = this.state;

    goods.sort((a, b) => {
      switch (sortBy) {
        case 'length':
          return (a.length - b.length);
        case 'alphabet':
          return a.localeCompare(b);

        default:
          return 0;
      }
    });

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        <h1
          className="App__title"
        >
          Goods List
        </h1>
        {visibleGoods
          ? (
            <div className="container__button">
              <button
                onClick={this.reverseGoods}
                type="button"
                className="button"
              >
                Reverse
              </button>
              <button
                onClick={this.sortLetter}
                type="button"
                className="button"
              >
                Sort alphabetically
              </button>
              <button
                onClick={this.sortLengthGood}
                type="button"
                className="button"
              >
                Sort by length
              </button>
              <button
                onClick={this.resetGoods}
                type="button"
                className="button"
              >
                Reset
              </button>
              <div>
                <GoodList
                  goods={goods}
                />
              </div>
            </div>
          )
          : (
            <button
              className="start_button"
              onClick={this.visibleList}
              type="button"
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
