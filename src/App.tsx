import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((f1, f2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return f1.localeCompare(f2);
      case SortType.LENGTH:
        return f1.length - f2.length;
      default:
        return SortType.NONE;
    }
  });
  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

interface State {
  isReversed: boolean,
  sortType: SortType,
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  getSortAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  getSortLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  getSortNone = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  getRevers = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, this.state);
    const buttonPushRevers = isReversed || sortType !== SortType.NONE;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={this.getSortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={this.getSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': !isReversed,
            })}
            onClick={this.getRevers}
          >
            Reverse
          </button>
          {buttonPushRevers && (
            <button
              type="button"
              className="button is-info is-light"
              onClick={this.getSortNone}
            >
              Reset
            </button>
          )}

        </div>
        <ul>
          <ul>
            {goods.map(good => (
              <li
                data-cy="Good"
                key={good}
              >
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
