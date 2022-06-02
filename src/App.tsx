import React from 'react';
import './App.scss';
import Start from './image/Start.png';
import SortAlphabetic from './image/SortAlphabetic.png';
import SortLength from './image/SortLength.png';
import reset from './image/reset.png';
import reverse from './image/reverse.png';

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
  isShown: boolean;
  goods: string[];
};

export class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isShown: false,
  };

  show = () => {
    this.setState({
      isShown: true,
    });
  };

  reverse = () => {
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    }));
  };

  sortedByAlphabetic = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortedByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goods: goodsFromServer,
    });
  };

  render() {
    const {
      isShown,
      goods,
    } = this.state;

    if (!isShown) {
      return (
        <div className="sortList">
          <button
            type="button"
            onClick={this.show}
            className="sortList__button"
          >
            <img
              src={Start}
              alt="StartImage"
            />
          </button>
        </div>
      );
    }

    return (
      <div className="sortList">
        <div className="sortList__list">
          <ul className="goodsList">
            {goods.map(good => (
              <li key={good} className="goods__item">
                {good}
              </li>
            ))}
          </ul>
        </div>

        <div className="sortList__buttons">
          <button
            type="button"
            onClick={this.sortedByAlphabetic}
            className="sortList__button--sort"
          >
            <img
              src={SortAlphabetic}
              alt="SortAlphabetic"
              className="sortList__image"
            />
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortedByLength}
            className="sortList__button--sort"
          >
            <img src={SortLength} alt="SortAlphabetic" />
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reset}
            className="sortList__button--sort"
          >
            <img src={reset} alt="Reset" />
            Reset
          </button>

          <button
            onClick={this.reverse}
            type="button"
            className="sortList__button--sort"
          >
            <img src={reverse} alt="Reverse" />
            Reverse
          </button>
        </div>
      </div>
    );
  }

  // <div className="App">
  //   <h1>Goods</h1>

  // </div>
}

export default App;
