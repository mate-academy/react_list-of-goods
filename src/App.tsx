import React from 'react';
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
  isGoodsVisible: boolean,
  maxLength: number,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    goods: goodsFromServer,
    isGoodsVisible: false,
    maxLength: 1,
  };

  showGoods = () => {
    this.setState(state => ({ isGoodsVisible: !state.isGoodsVisible }));

    if (!this.state.isGoodsVisible) {
      this.resetGoods();
    }
  };

  reverseGoods = () => {
    this.setState(state => ({ goods: [...state.goods].reverse() }));
  };

  sortAlphaBetically = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.localeCompare(secondGood)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goods: [...state.goods].sort((firstGood, secondGood) => firstGood.length - secondGood.length),
    }));
  };

  resetGoods = () => {
    this.setState({
      goods: goodsFromServer,
      maxLength: 1,
    });
  };

  selectGoods = (value: string) => {
    const length: number = +value;

    this.setState({ maxLength: length });
  };

  render() {
    const { goods, isGoodsVisible, maxLength } = this.state;

    const preparedGoods = goods.filter(good => good.length >= maxLength);

    return (
      <div className="App">
        <h1>Goods</h1>
        <button type="button" onClick={this.showGoods}>
          {isGoodsVisible ? 'Hide goods' : 'Start'}
        </button>
        {isGoodsVisible && (
          <>
            <button type="button" onClick={this.reverseGoods}>Reverse</button>
            <button type="button" onClick={this.sortAlphaBetically}>Sort alphabetically</button>
            <button type="button" onClick={this.resetGoods}>Reset</button>
            <button type="button" onClick={this.sortByLength}>Sort by length</button>
            <select
              name="select"
              id="select"
              value={this.state.maxLength}
              onChange={(event) => this.selectGoods(event.target.value)}
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
            {preparedGoods.map(good => (
              <li key={good}>{good}</li>
            ))}
          </>
        )}
      </div>
    );
  }
}
