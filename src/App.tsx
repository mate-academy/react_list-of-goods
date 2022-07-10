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

type State = {
  isShown: boolean,
  isReversed: boolean,
  sortBy: string,
};

class App extends React.Component<{}, State> {
  state = {
    isShown: false,
    isReversed: false,
    sortBy: 'id',
  };

  showAll = () => {
    this.setState({ isShown: true });
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  reset = () => {
    this.setState({ sortBy: 'id', isReversed: false });
  };

  sortByAlphabet = () => {
    this.setState({ sortBy: 'alphabet' });
  };

  sortByLength = () => {
    this.setState({ sortBy: 'length' });
  };

  render() {
    const { isShown, isReversed, sortBy } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((a: string, b: string): number => {
      switch (sortBy) {
        case 'alphabet': return a.localeCompare(b);
        case 'length': return a.length - b.length;
        default: return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App content">
        <h1 className="title mt-6">Goods</h1>

        {!isShown && (
          <button
            type="button"
            className="button is-info is-inverted"
            onClick={this.showAll}
          >
            Start
          </button>
        )}

        {isShown && (
          <>
            <div className="buttons">
              <button
                type="button"
                className="button is-info is-inverted"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                className="button is-info is-inverted"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                className="button is-info is-inverted"
                onClick={this.reset}
              >
                Reset
              </button>
              <button
                type="button"
                className="button is-info is-inverted"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>
            </div>
            <GoodsList goods={visibleGoods} />
          </>
        )}
      </div>
    );
  }
}

export default App;
