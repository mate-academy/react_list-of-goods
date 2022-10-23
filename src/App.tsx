import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { Button } from './components';

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
  ALPABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

function sortGoods(sortType: SortType, isReversed: boolean) {
  const visibleGoods = [...goodsFromServer];

  visibleGoods.sort((firstItem, nextItem) => {
    switch (sortType) {
      case SortType.ALPABET:
        return firstItem.localeCompare(nextItem);
      case SortType.LENGTH:
        return firstItem.length - nextItem.length;
      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setSortType = (type: SortType) => {
    this.setState({ sortType: type });
  };

  setIsReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  resetState = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            className={classNames('button', 'is-info', {
              'is-light': sortType !== SortType.ALPABET,
            })}
            onClick={() => {
              this.setSortType(SortType.ALPABET);
            }}
          >
            Sort alphabetically
          </Button>

          <Button
            className={classNames('button', 'is-success', {
              'is-light': sortType !== SortType.LENGTH,
            })}
            onClick={() => {
              this.setSortType(SortType.LENGTH);
            }}
          >
            Sort by length
          </Button>

          <Button
            className={classNames('button', 'is-warning', {
              'is-light': !isReversed,
            })}
            onClick={this.setIsReverse}
          >
            Reverse
          </Button>

          {(isReversed || sortType !== SortType.NONE) && (
            <Button
              className="button is-danger is-light"
              onClick={this.resetState}
            >
              Reset
            </Button>
          )}
        </div>

        <ul>
          {sortGoods(sortType, isReversed).map(item => (
            <li data-cy="Good" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
