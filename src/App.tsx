import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { StartButton } from './components/StartButton';

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
  goods: string[];
  isReversed: boolean;
  sortBy: string;
  isListVisible: boolean;
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: 'id',
    isListVisible: false,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortAlphabetically = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  reset = () => {
    this.setState({ sortBy: 'id' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  renderedList = () => {
    this.setState(state => ({ isListVisible: !state.isListVisible }));
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      isListVisible,
    } = this.state;

    const visibleGoods = [...goods];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'id':
          return goods.indexOf(g1) - goods.indexOf(g2);
        case 'length':
          return g1.length - g2.length;
        case 'alphabet':
          return g1.localeCompare(g2);
        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App d-flex justify-content-center align-items-center">
        <div>
          <h1>Goods</h1>
          {!isListVisible && <StartButton method={this.renderedList} />}

          {isListVisible && (
            <span>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.sortAlphabetically}
              >
                Sort Alphabetically
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </span>
          )}

          {isListVisible && <GoodsList goods={visibleGoods} />}
        </div>
      </div>
    );
  }
}

export default App;
