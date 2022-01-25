import React from 'react';
import './App.css';
import { GoodsList } from './components';

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

type State = {
  goods: string[],
  visibleGoods: string[],
  visibilityOfGoods: boolean,
  length: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [...goodsFromServer],
    visibleGoods: [...goodsFromServer],
    visibilityOfGoods: false,
    length: '1',
  };

  handleStart = () => {
    this.setState(() => ({
      visibilityOfGoods: true,
    }));
  };

  reverseGoodsList = () => (
    this.setState((state) => ({
      visibleGoods: [...state.visibleGoods].reverse(),
    }))
  );

  sortGoods = (sortBy: string) => (
    this.setState(state => {
      switch (sortBy) {
        case 'by length':
          return {
            visibleGoods: [...state.visibleGoods].sort((a, b) => a.length - b.length),
          };

        case 'alphabetically':
          return {
            visibleGoods: [...state.visibleGoods].sort((a, b) => a.localeCompare(b)),
          };

        default:
          return {
            visibleGoods: [...state.visibleGoods],
          };
      }
    }));

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState((state) => ({
      length: event.target.value,
      visibleGoods: state.goods.filter(product => product.length >= +event.target.value),
    }));
  };

  returnInitialOrderOfGoods = () => {
    this.setState(() => ({
      visibleGoods: [...goodsFromServer],
      length: '1',
    }));
  };

  render(): React.ReactNode {
    const { visibilityOfGoods } = this.state;
    const goods = [...this.state.visibleGoods];

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        {visibilityOfGoods && (
          <div className="flexbox">
            <GoodsList goods={goods} />
            <div className="buttons">
              <button
                type="button"
                onClick={this.reverseGoodsList}
                className="button is-link is-light"
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-info is-light"
                onClick={() => (
                  this.sortGoods('alphabetically')
                )}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-success is-light"
                onClick={() => (
                  this.sortGoods('by length')
                )}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-primary is-light"
                onClick={this.returnInitialOrderOfGoods}
              >
                Reset
              </button>
              <select
                className="select is-link"
                name="goods"
                id=""
                value={this.state.length}
                onChange={this.handleChange}
              >
                <option value="1">
                  1
                </option>
                <option value="2">
                  2
                </option>
                <option value="3">
                  3
                </option>
                <option value="4">
                  4
                </option>
                <option value="5">
                  5
                </option>
                <option value="6">
                  6
                </option>
                <option value="7">
                  7
                </option>
                <option value="8">
                  8
                </option>
                <option value="9">
                  9
                </option>
                <option value="10">
                  10
                </option>
              </select>
            </div>
          </div>
        )}

        {visibilityOfGoods || (
          <button
            type="button"
            onClick={this.handleStart}
            className="button is-link is-light"
          >
            Start
          </button>
        )}

      </div>
    );
  }
}

export default App;
