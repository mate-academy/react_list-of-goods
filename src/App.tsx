import React from 'react';
import classNames from 'classnames';
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

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(goods: string[], order: ReorderOptions) {
  const visibleGoods = [...goods];

  if (order.sortType !== SortType.NONE) {
    if (order.sortType === SortType.ALPHABET) {
      visibleGoods.sort((g1, g2) => {
        return g1.localeCompare(g2);
      });
    }

    if (order.sortType === SortType.LENGTH) {
      visibleGoods.sort((g1, g2) => {
        return g1.length - g2.length;
      });
    }
  }

  if (order.isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isReversed: boolean;
  sortType: SortType;
};

export class App extends React.Component<{}, State> {
  state = { isReversed: false, sortType: SortType.NONE };

  alphabet = () => this.setState({ sortType: SortType.ALPHABET });

  length = () => this.setState({ sortType: SortType.LENGTH });

  reverse = () => this.setState((state) => ({ isReversed: !state.isReversed }));

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const goods = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames({
              'button is-info': this.state.sortType === SortType.ALPHABET,
              'button is-info is-light':
                this.state.sortType !== SortType.ALPHABET,
            })}
            onClick={this.alphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames({
              'button is-info': this.state.sortType === SortType.LENGTH,
              'button is-info is-light':
                this.state.sortType !== SortType.LENGTH,
            })}
            onClick={this.length}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames({
              'button is-info': this.state.isReversed === true,
              'button is-info is-light':
              this.state.isReversed === false,
            })}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {this.state.sortType !== SortType.NONE
          || this.state.isReversed !== false
            ? (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            ) : null}
        </div>

        <div className="is-flex is-justify-content-center">
          <div className="has-text-centered">
            {goods.map((good) => {
              return (
                <div>
                  <div
                    data-cy="Good"
                    key={good}
                    className="box column is-info is-rounded mb-3"
                  >
                    {good}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
