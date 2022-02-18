import React from 'react';
import GoodsList from './components/GoodsList';
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

type State = {
  goods: string[],
  started: boolean,
  isReversed: boolean,
  sortedAlphabet: boolean,
  sortedByLength: boolean,
  goodsLength: number
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    started: false,
    isReversed: false,
    sortedAlphabet: false,
    sortedByLength: false,
    goodsLength: 1,
  };

  start = () => {
    this.setState({ started: true });
  };

  closer = () => {
    this.setState({ started: false });
  };

  reverse = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  sortAlphabet = () => {
    this.setState({
      sortedAlphabet: true,
      sortedByLength: false,
      isReversed: false,
    });
  };

  sortByLength = () => {
    this.setState({
      sortedByLength: true,
      sortedAlphabet: false,
      isReversed: false,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortedAlphabet: false,
      sortedByLength: false,
      goodsLength: 1,
    });
  };

  selectGoodsLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ goodsLength: Number(event.target.value) });
  };

  render() {
    const {
      goods,
      started,
      isReversed,
      sortedAlphabet,
      sortedByLength,
      goodsLength,
    } = this.state;

    const visibleGoods = goods.filter(good => good.length >= goodsLength);

    if (sortedAlphabet) {
      visibleGoods.sort();
    }

    if (sortedByLength) {
      visibleGoods.sort((g1, g2) => g1.length - g2.length);
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods list</h1>
        {!started && (
          <button
            className="startButton"
            type="button"
            onClick={this.start}
          >
            Start
          </button>
        )}
        {started && (
          <>
            <GoodsList
              goods={visibleGoods}
            />
            <button
              type="button"
              onClick={this.reverse}
            >
              Reverse
            </button>
            <button
              type="button"
              onClick={this.sortAlphabet}
            >
              Sort by alphabet
            </button>
            <button
              type="button"
              onClick={this.sortByLength}
            >
              Sort by length
            </button>
            <select
              id="length"
              onChange={this.selectGoodsLength}
              value={goodsLength}
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
            <button
              type="button"
              onClick={this.reset}
            >
              Reset
            </button>
            <button
              className="finButton"
              type="button"
              onClick={this.closer}
            >
              FIN
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
