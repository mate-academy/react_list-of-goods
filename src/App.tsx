/* eslint-disable no-console */
import React from 'react';
import './App.css';

// eslint-disable-next-line import/no-cycle
import GoodsList from './GoodsList';

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
  goods: string[],
  isVisible: boolean;
  isReversed: boolean;
  sortBy: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isVisible: false,
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({
      sortBy: 'alphabet',
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goods, isVisible, isReversed, sortBy,
    } = this.state;

    const visebleGoods = [...goods];

    switch (sortBy) {
      case 'alphabet':
        visebleGoods.sort((g1, g2) => g1.localeCompare(g2));
        break;

      case 'length':
        visebleGoods.sort((g1, g2) => g1.length - g2.length);
        break;

      default:
        break;
    }

    if (isReversed) {
      visebleGoods.reverse();
    }

    return (
      <div className="app">
        <h1 className="app__title">
          Goods
        </h1>
        <div className="app__buttons">
          <button
            type="button"
            onClick={this.start}
          >
            Start
          </button>

          <button
            type="button"
            onClick={this.reversed}
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        {isVisible
          ? <GoodsList goods={visebleGoods} />
          : null}
      </div>
    );
  }
}

export default App;
