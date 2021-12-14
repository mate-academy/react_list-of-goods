import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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
  isReversed: boolean,
  sortBy: 'alphabet' | 'length' | '',
  goodsVisible: boolean,
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isReversed: false,
    sortBy: '',
    goodsVisible: false,
  };

  showGoods = () => {
    this.setState({ goodsVisible: true });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: '',
    });
  };

  render() {
    const {
      goods,
      isReversed,
      sortBy,
      goodsVisible,
    } = this.state;

    const currentGoods = [...goods];

    currentGoods.sort((good1, good2) => {
      switch (sortBy) {
        case 'alphabet':
          return good1.localeCompare(good2);

        case 'length':
          return good1.length - good2.length;

        default:
          return 0;
      }
    });

    if (isReversed) {
      currentGoods.reverse();
    }

    return (
      <div className="App">
        <div className="goods">
          <h1 className="goods__title">
            List of goods
          </h1>

          {!goodsVisible
            ? (
              <button
                type="button"
                className="button"
                onClick={this.showGoods}
              >
                Start
              </button>
            ) : (
              <div className="goods__content">
                <GoodsList goods={currentGoods} />

                <div className="goods__buttons">
                  <button
                    className="button"
                    type="button"
                    onClick={this.reverse}
                  >
                    Reverse
                  </button>

                  <button
                    className="button"
                    type="button"
                    onClick={this.sortByAlphabet}
                  >
                    Sort alphabetically
                  </button>

                  <button
                    className="button"
                    type="button"
                    onClick={this.sortByLength}
                  >
                    Sort by length
                  </button>

                  <button
                    className="button"
                    type="button"
                    onClick={this.reset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
