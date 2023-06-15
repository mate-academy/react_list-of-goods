import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { getReorderedGoods } from './helpers/helpers';

export const goodsFromServer: string[] = [
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
  NONE,
  ALPHABET,
  LENGTH,
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortGoodsAlphabetic = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }));
  };

  resetState = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  sortGoodsByLength = () => {
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;

    getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info', {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={this.sortGoodsAlphabetic}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success', {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortGoodsByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning', {
                'is-light': !isReversed,
              },
            )}
            onClick={this.reverseGoods}
          >
            Reverse
          </button>
          {(isReversed || sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger"
              onClick={this.resetState}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(goodsFromServer, this.state).map(good => (
              <li data-cy="Good">{good}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
