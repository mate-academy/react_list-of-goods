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
  sortReverse: boolean,
  sortAlpha: boolean,
  sortLength: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    visibleGoods: false,
    sortReverse: false,
    sortAlpha: false,
    sortLength: false,
  };

  visibleList = () => {
    this.setState((state) => ({
      visibleGoods: !state.visibleGoods,
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      sortReverse: !state.sortReverse,
      goods: [...goodsFromServer].reverse(),
    }));
  };

  sortLetter = () => {
    this.setState((state) => ({
      sortAlpha: !state.sortAlpha,
    }));
  };

  sortLengthGood = () => {
    this.setState((state) => ({
      sortLength: !state.sortLength,
    }));
  };

  resetGoods = () => {
    this.setState(() => ({
      goods: [...goodsFromServer],
      sortReverse: false,
      sortAlpha: false,
      sortLength: false,
    }));
  };

  render() {
    const {
      goods,
      visibleGoods,
      sortReverse,
      sortAlpha,
      sortLength,
    } = this.state;

    if (sortReverse) {
      goods.reverse();
    }

    if (sortAlpha) {
      goods.sort((a, b) => a.localeCompare(b));
    }

    if (sortLength) {
      goods.sort((a, b) => (a.length - b.length));
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
