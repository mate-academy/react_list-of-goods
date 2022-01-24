import React from 'react';
import { GoodsList } from './GoodsList';
import './App.css';

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

enum SortTypes {
  Alphabet = 'alphabet',
  Length = 'length',
  Default = '',
}

type State = {
  goods: string[];
  isReversed: boolean;
  sortBy: SortTypes;
  isVisible: boolean;
  goodsLength: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isReversed: false,
    sortBy: SortTypes.Default,
    isVisible: false,
    goodsLength: 1,
  };

  showGoodsList = () => {
    this.setState({
      isVisible: true,
    });
  };

  setGoodsLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      goodsLength: +event.target.value,
    });
  };

  goodsToShow = () => {
    const {
      goods,
      isReversed,
      goodsLength,
    } = this.state;

    const copiedGoods = goods.filter(good => good.length >= goodsLength);

    copiedGoods.sort(this.sortType);

    if (isReversed) {
      copiedGoods.reverse();
    }

    return copiedGoods;
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortType = (good1: string, good2: string) => {
    switch (this.state.sortBy) {
      case SortTypes.Length:
        return good1.length - good2.length;

      case SortTypes.Alphabet:
        return good1.localeCompare(good2);

      default:
        return 0;
    }
  };

  changeSortType = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      sortBy: event.currentTarget.name as SortTypes,
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      sortBy: SortTypes.Default,
      isReversed: false,
      goodsLength: 1,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.showGoodsList}
          className="btn btn-success"
        >
          Start
        </button>

        {this.state.isVisible && (
          <>
            <button
              type="button"
              onClick={this.reverse}
              className="btn btn-warning"
            >
              Reverse
            </button>

            <button
              type="button"
              name={SortTypes.Alphabet}
              onClick={this.changeSortType}
              className="btn btn-warning"
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              name={SortTypes.Length}
              onClick={this.changeSortType}
              className="btn btn-warning"
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reset}
              className="btn btn-danger"
            >
              Reset
            </button>
            <div>
              {'Choose goods length: '}
              <select
                name="numberOfGoods"
                value={this.state.goodsLength}
                onChange={this.setGoodsLength}
              >
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

            <GoodsList copiedGoods={this.goodsToShow()} />
          </>
        )}
      </div>
    );
  }
}

export default App;
