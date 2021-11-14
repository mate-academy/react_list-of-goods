import React from 'react';
import './App.scss';

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
  goodsVisible: boolean,
  isSorted: boolean,
  isSortLength: boolean,
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    goodsVisible: false,
    isSorted: false,
    isSortLength: false,
  };

  showGoods = () => (this.setState(state => ({
    goodsVisible: !state.goodsVisible,
  })));

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortAlph = () => (this.setState(state => (
    {
      goods: [...state.goods]
        .sort((a, b) => (state.isSorted
          ? b.localeCompare(a)
          : a.localeCompare(b))),
      isSorted: !state.isSorted,
    }
  )));

  sortLength = () => (this.setState(state => (
    {
      goods: ([...state.goods]
        .sort((a, b) => (state.isSortLength
          ? b.length - a.length
          : a.length - b.length))),
      isSortLength: !state.isSortLength,
    }

  )));

  reset = () => (this.setState({
    goods: goodsFromServer,
    isSorted: false,
    isSortLength: false,
  }));

  render() {
    const { goods, goodsVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        <button
          type="button"
          onClick={this.showGoods}
          className="App__button-title"
        >
          {goodsVisible ? 'Hide Goods' : 'Show Goods'}
        </button>
        {goodsVisible
          && (
            <div className="App__list">
              {goods.map(good => <li className="App__list--item" key={good}>{good}</li>)}
              <button
                type="button"
                onClick={this.reverse}
                className="App__list--button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortAlph}
                className="App__list--button"
              >
                Sort
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="App__list--button"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortLength}
                className="App__list--button"
              >
                Sort by length
              </button>
            </div>
          )}

      </div>
    );
  }
}
