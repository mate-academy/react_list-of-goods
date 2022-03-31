import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';

import GoodsList from './components/GoodsList';
import { Good } from './types/Good';
import { SortBy } from './types/SortBy';

const goodsFromServer: Good[] = [
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
].map(good => ({
  name: good,
  id: uuidv4(),
}));

interface State {
  isVisible: boolean,
  isReversed: boolean,
  sortBy: SortBy,
}

class App extends React.Component<{}, State> {
  state = {
    isVisible: false,
    isReversed: false,
    sortBy: SortBy.none,
  };

  showComponent = () => {
    this.setState(state => ({
      isVisible: !state.isVisible,
    }));
  };

  reverseGoods = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: SortBy.alphabet });
  };

  sortByLength = () => {
    this.setState({ sortBy: SortBy.length });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortBy.none,
    });
  };

  render() {
    const { isVisible, isReversed, sortBy } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case SortBy.alphabet:
          return g1.name.localeCompare(g2.name);
        case SortBy.length:
          return g1.name.length - g2.name.length;
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {
          isVisible
            ? (
              <>
                <GoodsList goods={visibleGoods} />

                <div className="actions">
                  <button
                    type="button"
                    className="actions__button"
                    onClick={this.reverseGoods}
                  >
                    Reverse
                  </button>

                  <button
                    type="button"
                    className="actions__button"
                    onClick={this.sortByAlphabet}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    type="button"
                    className="actions__button"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>

                  <button
                    type="button"
                    className="actions__button actions__button--reset"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </>
            )
            : (
              <button
                type="button"
                className="start-button"
                onClick={this.showComponent}
              >
                Start
              </button>
            )
        }
      </div>
    );
  }
}

export default App;
