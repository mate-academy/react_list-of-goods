import React from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';
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
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((n1, n2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return n1.localeCompare(n2);

      case SortType.LENGTH:
        return n1.length - n2.length;

      default:
        return 0;
    }
  });

  return (!isReversed) ? visibleGoods : visibleGoods.reverse();
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });

    const handleclick = (type: SortType) => {
      this.setState({ sortType: type });
      this.forceUpdate();
    };

    const reverseClick = () => {
      this.setState({ isReversed: !isReversed });
      this.forceUpdate();
    };

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info',
              {
                'is-light': sortType !== SortType.ALPHABET,
              },
            )}
            onClick={() => handleclick(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success',
              {
                'is-light': sortType !== SortType.LENGTH,
              },
            )}
            onClick={() => handleclick(SortType.LENGTH)}
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
            onClick={() => reverseClick()}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                });
              }}
            >
              Reset
            </button>
          )}

        </div>

        <ul>
          <ul>
            {goods.map(name => (
              <li
                data-cy="Good"
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
