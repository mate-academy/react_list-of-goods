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
  visibilityOfGoods: boolean,
  isReversed: boolean,
  sortBy: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    goods: [...goodsFromServer],
    visibilityOfGoods: false,
    isReversed: false,
    sortBy: '',
  };

  start = () => {
    this.setState(() => ({
      visibilityOfGoods: true,
    }));
  };

  reverse = () => (
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }))
  );

  sortGoods = (sortBy: string) => (
    this.setState(() => ({
      sortBy,
    }))
  );

  reset = () => {
    this.setState(() => ({
      sortBy: '',
      isReversed: false,
    }));
  };

  render(): React.ReactNode {
    const { visibilityOfGoods, isReversed, sortBy } = this.state;
    const goods = [...this.state.goods];

    if (sortBy.length !== 0) {
      switch (sortBy) {
        case 'by length':
          goods.sort((a, b) => a.length - b.length);
          break;

        case 'alphabetically':
          goods.sort((a, b) => a.localeCompare(b));
          break;

        default:
          return 0;
      }
    }

    if (isReversed) {
      goods.reverse();
    }

    return (
      <div className="App">
        <h1 className="title">Goods</h1>

        {visibilityOfGoods && (
          <div className="flexbox">
            <GoodsList goods={goods} />
            <div className="buttons">
              <button
                type="button"
                onClick={this.reverse}
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
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        )}

        {visibilityOfGoods || (
          <button
            type="button"
            onClick={this.start}
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
