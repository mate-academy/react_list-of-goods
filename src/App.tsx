import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';

interface Good {
  id: string,
  name: string,
}

const goodsFromServer: Good[] = [
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
].map(good => ({
  id: uuidv4(),
  name: good,
}));

type Props = {};

interface State {
  visibleGoods: Good[],
}

export class App extends React.Component<Props, State> {
  state: State = {
    visibleGoods: [],
  };

  showGoods = () => {
    this.setState({
      visibleGoods: goodsFromServer,
    });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }));
  };

  sortGoodsByName = () => {
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods].sort((g1, g2) => g1.name.localeCompare(g2.name)),
    }));
  };

  sortGoodsByLength = () => {
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods].sort((g1, g2) => g1.name.length - g2.name.length),
    }));
  };

  resetGoods = () => {
    this.setState(() => ({
      visibleGoods: goodsFromServer,
    }));
  };

  render() {
    const { visibleGoods } = this.state;
    const hasVisibleGoods = visibleGoods.length > 0;

    return (
      <div className="App">
        <h1>Goods</h1>
        {hasVisibleGoods && (
          <div>
            <ul>
              {visibleGoods.map(good => (
                <li key={good.id}>
                  {good.name}
                </li>
              ))}
            </ul>
            <button
              onClick={this.reverseGoods}
              type="button"
            >
              Reverse
            </button>
            <button
              onClick={this.sortGoodsByName}
              type="button"
            >
              Sort alphabetically
            </button>
            <button
              onClick={this.sortGoodsByLength}
              type="button"
            >
              Sort by length
            </button>
            <button
              onClick={this.resetGoods}
              type="button"
            >
              Reset
            </button>
          </div>
        )}
        {!hasVisibleGoods && (
          <button
            onClick={this.showGoods}
            type="button"
          >
            Start
          </button>
        )}
      </div>
    );
  }
}
