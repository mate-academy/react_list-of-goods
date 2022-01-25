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
  lengthOfGoods: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    goodsIsShowed: false,
    isReversed: false,
    sortBy: 'default',
    lengthOfGoods: '1',
  };

  showGoods = () => {
    this.setState((state) => ({
      goodsIsShowed: !state.goodsIsShowed,
    }));
  };

  reverseGoods = () => {
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

  resetState = () => {
    this.setState({
      sortBy: 'default',
      lengthOfGoods: '1',
      isReversed: false,
    });
  };

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      lengthOfGoods: e.currentTarget.value,
    });
  };

  getVisibleGoods = (): string[] => {
    const {
      goods,
      isReversed,
      sortBy,
      lengthOfGoods,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= +lengthOfGoods);

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

    return visibleGoods;
  };

  render() {
    const {
      goodsIsShowed,
      lengthOfGoods,
    } = this.state;

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
              <GoodsList goods={this.getVisibleGoods()} />
              <button
                type="button"
                onClick={this.reverseGoods}
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
                onClick={this.resetState}
              >
                Reset
              </button>

              <select value={lengthOfGoods} onChange={this.handleChange}>
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
