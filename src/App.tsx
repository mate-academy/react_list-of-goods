import React from 'react';
import { GoodsList } from './components/GoodsList/GoodsList';
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
  isStarted: boolean,
  isReversed: boolean,
  sortBy: string,
}

class App extends React.Component<{}, State> {
  state: State = {
    isStarted: false,
    isReversed: false,
    sortBy: '',
  };

  showGoods = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'Alphabet' });
  };

  sortByNameLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const { isStarted, isReversed, sortBy } = this.state;

    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((g1, g2) => {
      switch (sortBy) {
        case 'Alphabet':
          return g1.localeCompare(g2);

        case 'length':
          return g1.length - g2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>

        {!isStarted && (
          <button
            type="button"
            onClick={this.showGoods}
            className="start-button"
          >
            Start
          </button>
        )}

        {isStarted && (
          <div className="goods">
            <GoodsList goods={visibleGoods} />
            <div className="goods__buttons">
              <button
                type="button"
                onClick={this.reverse}
                className="goods__button"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={this.sortByAlphabet}
                className="goods__button"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={this.reset}
                className="goods__button"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={this.sortByNameLength}
                className="goods__button"
              >
                Sort by length
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
