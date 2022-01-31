import React from 'react';
import './App.css';

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

type Props = {};

type State = {
  goods: string[];
  isVisibleStartButton: boolean;
  isVisibleOtherButtons: boolean;
  isReversed: boolean;
  sortBy: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [],
    isVisibleStartButton: true,
    isVisibleOtherButtons: false,
    isReversed: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState({
      goods: goodsFromServer,
      isVisibleStartButton: false,
      isVisibleOtherButtons: true,
    });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortGoodsByName = () => {
    this.setState({ sortBy: 'Name' });
  };

  resetGoods = () => {
    this.setState({ isReversed: false, sortBy: '' });
  };

  sortGoodsByLength = () => {
    this.setState({ sortBy: 'Length' });
  };

  sortGoods = () => {
    const { goods, sortBy, isReversed } = this.state;
    const copyGoods = [...goods];

    if (sortBy === 'Name') {
      return copyGoods.sort((a, b) => a.localeCompare(b));
    }

    if (sortBy === 'Length') {
      return copyGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      return copyGoods.reverse();
    }

    return copyGoods;
  };

  render(): React.ReactNode {
    const {
      isVisibleStartButton,
      isVisibleOtherButtons,
    } = this.state;

    const sortGoods = this.sortGoods();

    return (
      <div className="App">
        <h1>Goods</h1>

        <ul>
          {sortGoods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>

        {isVisibleStartButton && (
          <button
            type="button"
            onClick={this.showGoods}
          >
            Start
          </button>
        )}

        {isVisibleOtherButtons && (
          <div>
            <button
              type="button"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.sortGoodsByName}
            >
              Sort
            </button>

            <button
              type="button"
              onClick={this.resetGoods}
            >
              Reset
            </button>

            <button
              type="button"
              onClick={this.sortGoodsByLength}
            >
              Sort by length
            </button>
          </div>
        )}
      </div>
    );
  }
}
