/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import './App.css';

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
  start: boolean;
  sortBy: string;
  reverse: boolean;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    start: true,
    sortBy: '',
    reverse: false,
  };

  render() {
    const { start, sortBy, reverse } = this.state;
    const visibleGoods = [...goodsFromServer].sort((a, b) => {
      switch (sortBy) {
        case 'alphabet':
          if (reverse) {
            return b.localeCompare(a);
          }

          return a.localeCompare(b);
          break;
        case 'length':
          if (reverse) {
            return b.length - a.length;
          }

          return a.length - b.length;
          break;
        default:
          return 0;
      }
    });

    if (sortBy === '' && !reverse) {
      visibleGoods.reverse();
    }

    return (
      <div className="App">
        { start
          ? (
            <button
              type="button"
              onClick={() => {
                this.setState({ start: false });
              }}
            >
              Start
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  this.setState({ sortBy: 'alphabet' });
                }}
              >
                Sort alphabetically
              </button>
              <button
                type="button"
                onClick={() => {
                  this.setState({ sortBy: 'length' });
                }}
              >
                Sort by length
              </button>
              <button
                type="button"
                onClick={() => {
                  this.setState({ reverse: !reverse });
                }}
              >
                Reverse
              </button>
              <button
                type="button"
                onClick={() => {
                  this.setState({ reverse: false, sortBy: '' });
                }}
              >
                Reset
              </button>
              <ul className="Goods">
                {
                  visibleGoods.map(el => (
                    <li className="Goods__item" key={el}>
                      {el}
                    </li>
                  ))
                }
              </ul>
            </>
          )}
      </div>
    );
  }
}
