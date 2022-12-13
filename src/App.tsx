import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { GoodList } from './goods';

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

enum SortType {
  NONE = 'id',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
}

type State = {
  isReversed: boolean,
  sortBy: string,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortBy: SortType.NONE,
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByAlphabet = () => {
    this.setState({
      sortBy: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortBy: SortType.LENGTH,
    });
  };

  reset = () => {
    this.setState({
      sortBy: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const {
      isReversed, sortBy,
    } = this.state;
    const visibleGoods = [...goodsFromServer];

    visibleGoods.sort((a, b) => {
      switch (sortBy) {
        case SortType.LENGTH:
          return a.length - b.length;

        case SortType.ALPHABET:
          return a.localeCompare(b);

        default: return 0;
      }
    });

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="section content">
        <div className="buttons">

          <button
            type="button"
            className={classNames(
              'button is-info',
              { 'is-light': sortBy !== 'alphabet' },
            )}
            onClick={this.sortByAlphabet}

          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              { 'is-light': sortBy !== 'length' },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning',
              {
                'is-light': isReversed === false,
              },
            )}
            onClick={this.reverse}
          >
            Reverse
          </button>

          { (isReversed || sortBy !== 'id')
          && (
            <button
              type="button"
              className="button btn-reset is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>
        <GoodList goods={visibleGoods} />
      </div>
    );
  }
}
