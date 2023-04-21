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

function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  if (isReversed) {
    visibleGoods.reverse();
  }

  switch (sortType) {
    case SortType.NONE:
      break;
    
    case SortType.ALPHABET:
      visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((good1, good2) => good1.length - good2.length);
      break;

    default: throw new Error('Unknown sort type');
  }

  return visibleGoods;
}


export class App extends React.Component<{}, ReorderOptions> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handler = (action: string) => {
    switch (action) {
      case 'reverse':
        this.setState(state => ({
          isReversed: !state.isReversed,
        }));
        break;

      case 'sortAlphabetically':
        this.setState({
          sortType: SortType.ALPHABET,
        });
        break;

      case 'sortByLength':
        this.setState({
          sortType: SortType.LENGTH,
        });
        break;

      case 'reset':
        this.setState({
          sortType: SortType.NONE,
          isReversed: false,
        });
        break;

      default: throw new Error('Unknown action');
    }
  }

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.ALPHABET,
            })}
            onClick={() => this.handler('SortAlphabetically')}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => this.handler('sortByLength')}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={() => this.handler('reverse')}
          >
            Reverse
          </button>

          {
            (sortType !== SortType.NONE || isReversed)
              && (
                <button
                  type="button"
                  className="button is-danger is-light"
                  onClick={() => this.handler('reset')}
                >
                  Reset
                </button>
              )
          }
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li
              key={good}
              data-cy="Good"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
