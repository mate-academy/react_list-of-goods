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

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods].sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);
      case SortType.LENGTH:
        return good1.length - good2.length;
      case SortType.NONE:
        return 0;

      default:
        throw new Error(`Oppp... <;p there is no fucking match for ${sortType} type...!`);
    }
  });

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  alphabetSort = () => {
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }));
  };

  lengthSort = () => {
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }));
  };

  reversed = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState(() => ({
      isReversed: false,
      sortType: 0,
    }));
  };

  render() {
    const { isReversed, sortType } = this.state;
    const goods = getReorderedGoods(goodsFromServer, {
      isReversed,
      sortType,
    });
    const isVisible = sortType === SortType.NONE && isReversed === false;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button is-info', {
              'is-light': SortType.ALPHABET !== sortType,
            })}
            onClick={() => {
              this.alphabetSort();
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button is-success', {
              'is-light': SortType.LENGTH !== sortType,
            })}
            onClick={() => {
              this.lengthSort();
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button is-warning', {
              'is-light': !isReversed,
            })}
            onClick={() => {
              this.reversed();
            }}
          >
            Reverse
          </button>

          {!isVisible && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => {
                this.reset();
              }}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {goods.map((good) => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
