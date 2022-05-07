import React from 'react';
import './App.scss';
import { GoodsList } from './components/GoodsList/GoodsList';

const goodsFromServer = [
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
  isShowGoods: boolean,
  isReversed: boolean,
  isSortedByLength: boolean,
  isSortedByAlphabet: boolean,
  minWordsLength: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: goodsFromServer,
    isShowGoods: false,
    isReversed: false,
    isSortedByLength: false,
    isSortedByAlphabet: false,
    minWordsLength: 1,
  };

  listOpener = () => {
    this.setState({
      isShowGoods: true,
    });
  };

  reverse = () => {
    this.setState({
      isSortedByAlphabet: true,
      isReversed: false,
      isSortedByLength: false,
    });
  };

  sortByLength = () => {
    this.setState({
      isSortedByLength: true,
      isSortedByAlphabet: false,
      isReversed: false,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      isSortedByLength: false,
      isSortedByAlphabet: true,
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      isSortedByLength: false,
      isSortedByAlphabet: false,
      minWordsLength: 1,
    });
  };

  setLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ minWordsLength: Number(event.target.value) });
  };

  render() {
    const {
      goods,
      isShowGoods,
      isReversed,
      isSortedByLength,
      isSortedByAlphabet,
      minWordsLength,
    } = this.state;

    const searchedGoods = goods.filter(good => good.length >= minWordsLength);

    if (isSortedByLength) {
      searchedGoods.sort((good1, good2) => good1.length - good2.length);
    }

    if (isSortedByAlphabet) {
      searchedGoods.sort((good1, good2) => good1.localeCompare(good2));
    }

    if (isReversed) {
      searchedGoods.reverse();
    }

    return (
      <div className="large-header" id="large-header">
        <canvas id="demo-canvas" />
        <div className="App">
          <h1 className="App__title main-title">Goods</h1>
          <div className="App__wrapper">
            {!isShowGoods && (
              <button
                className="App__start-button"
                type="button"
                onClick={this.listOpener}
              >
                Start
              </button>
            )}

            {isShowGoods && (
              <>
                <button
                  onClick={this.reverse}
                  type="button"
                >
                  reverse
                </button>

                <button
                  onClick={this.sortByLength}
                  type="button"
                >
                  Sort by length
                </button>

                <button
                  onClick={this.sortByAlphabet}
                  type="button"
                >
                  Sort by alphabet
                </button>

                <button
                  onClick={this.reset}
                  type="button"
                >
                  Reset
                </button>

                <GoodsList
                  goods={searchedGoods}
                />
                <select
                  name="select"
                  onChange={this.setLength}
                  value={minWordsLength}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option
                      value={num}
                      key={num}
                    >
                      {num}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
