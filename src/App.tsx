import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
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

type SortCallback = (a: string, b: string) => number;

type SortType = 'length' | 'alphabetical' | '';

interface State {
  isReversed: boolean
  sortType: SortType
  goods: string[]
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: '',
    goods: goodsFromServer,
  }

  sort(array: string[], callback: SortCallback) {
    const sorted = array.sort(callback);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.state.isReversed
      ? this.setState({
        goods: sorted.reverse(),
      })
      : this.setState({
        goods: sorted,
      });
  }

  sortAlphabetically() {
    this.sort([...this.state.goods], (a: string, b: string) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });

    this.setState({
      sortType: 'alphabetical',
    });
  }

  sortByLength() {
    let copyGoods = [...this.state.goods];

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.state.isReversed ? copyGoods = copyGoods.reverse() : null;

    this.sort(copyGoods, (a: string, b: string) => {
      if (a.length < b.length) {
        return -1;
      }

      if (a.length > b.length) {
        return 1;
      }

      return 0;
    });

    this.setState({
      sortType: 'length',
    });
  }

  reverse() {
    const copyGoods = [...this.state.goods];
    const reversed = copyGoods.reverse();

    this.setState(prevState => ({
      isReversed: !prevState.isReversed,
      goods: reversed,
    }));
  }

  reset() {
    this.setState({
      sortType: '',
      isReversed: false,
      goods: goodsFromServer,
    });
  }

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === 'alphabetical'
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={() => this.sortAlphabetically()}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === 'length'
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={() => this.sortByLength()}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={() => this.reverse()}
          >
            Reverse
          </button>

          {this.state.sortType !== '' || this.state.isReversed
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => this.reset()}
              >
                Reset
              </button>
            )
            : null}

        </div>

        <ul>
          <ul>
            {this.state.goods.map(item => (
              <li data-cy="Good">{item}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
