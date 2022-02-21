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
  isVisibleGoods: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisibleGoods: false,
    isReversed: false,
    sortBy: '',
  };

  visibleList = () => {
    this.setState((state) => ({
      isVisibleGoods: !state.isVisibleGoods,
    }));
  };

  sortLetter = () => {
    this.setState(() => ({
      sortBy: 'alphabet',
    }));
  };

  sortLengthGood = () => {
    this.setState(() => ({
      sortBy: 'length',
    }));
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  resetGoods = () => {
    this.setState(() => ({
      isReversed: false,
      sortBy: '',
    }));
  };

  render() {
    const {
      goods,
      isVisibleGoods,
      isReversed,
      sortBy,
    } = this.state;

    const goodsCopy = [...goods];

    goodsCopy.sort((a, b) => {
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
      goodsCopy.reverse();
    }

    return (
      <div className="App">
        <h1
          className="App__title"
        >
          Goods List
        </h1>
        {isVisibleGoods
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
                  goods={goodsCopy}
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
