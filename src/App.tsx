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

type Props = {};

interface State {
  goods: string[],
  visible: boolean,
}

export class App extends React.Component<Props, State> {
  state: State = {
    goods: goodsFromServer,
    visible: true,
  };

  opener = () => this.setState({ visible: false });

  sortGoodsLength = () => (
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.length - b.length),
    })));

  sortGoodsByAlphabet = () => (
    this.setState(state => ({
      goods: [...state.goods].sort((a, b) => a.localeCompare(b)),
    })));

  reverseGoods = () => (
    this.setState(state => ({
      goods: [...state.goods].reverse(),
    })));

  reset = () => (this.setState({
    goods: [...goodsFromServer],
  }));

  render() {
    const { goods, visible } = this.state;

    return (
      visible
        ? <button type="button" onClick={this.opener}>Start</button>
        : (
          <div className="App">
            <h1>
              Goods:
            </h1>

            <button type="button" onClick={this.reverseGoods}>
              Reverse
            </button>

            <button type="button" onClick={this.sortGoodsByAlphabet}>
              sortByAlphabet
            </button>

            <button type="button" onClick={this.sortGoodsLength}>
              sortByLength
            </button>

            <button type="button" onClick={this.reset}>
              Reset
            </button>
            <ul>
              {goods.map(good => (
                <li key={good}>{good}</li>
              ))}
            </ul>
          </div>
        )
    );
  }
}
