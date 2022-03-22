import React from 'react';
import './App.css';

import { GoodsList } from './GoodsList';

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
  hide: boolean,
  hideStartButton: boolean,
  goods: string[],
  sortBy: string,
  isReverse: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    hide: true,
    hideStartButton: false,
    goods: goodsFromServer,
    sortBy: '',
    isReverse: false,
  };

  start = () => {
    this.setState(state => ({
      hide: !state.hide,
      hideStartButton: !state.hideStartButton,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReverse: !state.isReverse,
    }));
  };

  sortByAlphabetically = () => {
    this.setState({
      sortBy: 'alphabetically',
    });
  };

  sortByLendth = () => {
    this.setState({
      sortBy: 'length',
    });
  };

  reset = () => {
    this.setState({
      isReverse: false,
      sortBy: '',
    });
  };

  render() {
    const {
      hide,
      hideStartButton,
      goods,
      sortBy,
      isReverse,
    } = this.state;

    const copyGoods = [...goods];

    copyGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabetically':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReverse) {
      copyGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">
          Goods
        </h1>

        <button
          className="App__buttons"
          type="button"
          hidden={hideStartButton}
          onClick={this.start}
        >
          Start
        </button>

        <GoodsList
          goods={copyGoods}
          hide={hide}
        />

        <button
          className="App__buttons"
          type="button"
          hidden={hide}
          onClick={this.reverse}
        >
          Reverse
        </button>

        <button
          className="App__buttons"
          type="button"
          hidden={hide}
          onClick={this.sortByAlphabetically}
        >
          Alpha
        </button>

        <button
          className="App__buttons"
          type="button"
          hidden={hide}
          onClick={this.sortByLendth}
        >
          Length
        </button>

        <button
          className="App__buttons"
          type="button"
          hidden={hide}
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default App;
