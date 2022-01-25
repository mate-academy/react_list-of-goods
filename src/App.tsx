import React from 'react';
import './App.css';
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
  goods: string[];
  goodsIsShowed: boolean;
  isReversed: boolean;
  sortBy: string;
  length: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    goodsIsShowed: false,
    isReversed: false,
    sortBy: 'default',
    length: '1',
  };

  showGoods = () => {
    this.setState((state) => ({
      goodsIsShowed: !state.goodsIsShowed,
    }));
  };

  reverse = () => {
    this.setState((state) => ({
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
      sortBy: 'default',
      length: '1',
      isReversed: false,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      length: e.currentTarget.value,
    });
  };

  render() {
    const {
      goodsIsShowed,
      goods,
      isReversed,
      sortBy,
      length,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= +length);

    visibleGoods.sort((good1, good2) => {
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
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        {!goodsIsShowed
          ? (
            <button
              type="button"
              onClick={this.showGoods}
            >
              Show goods
            </button>
          )
          : (
            <div>
              <GoodsList goods={visibleGoods} />
              <button
                type="button"
                onClick={this.reverse}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={this.sortByAlphabet}
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

              <select value={length} onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          )}
      </div>
    );
  }
}

export default App;
