import { Component } from 'react';
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
  ALPABET,
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
  let resultList;

  switch (sortType) {
    case SortType.ALPABET:
      resultList = visibleGoods.sort((goodA, goodB) => (
        goodA.localeCompare(goodB)
      ));
      break;

    case SortType.LENGTH:
      resultList = visibleGoods.sort((goodA, goodB) => (
        goodA.length - goodB.length
      ));
      break;
    default:
      resultList = visibleGoods;
      break;
  }

  if (isReversed) {
    return resultList.reverse();
  }

  return resultList;
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

  // eslint-disable-next-line react/sort-comp
  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  makeReverse = () => {
    this.setState(state => (
      { isReversed: !state.isReversed }
    ));
  };

  makeReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const resultGoodsList = getReorderedGoods(goodsFromServer, this.state);

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={classNames(
              'button is-info', {
                'is-light': this.state.sortType !== SortType.ALPABET,
              },
            )}
            onClick={this.sortByAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={classNames(
              'button is-success', {
                'is-light': this.state.sortType !== SortType.LENGTH,
              },
            )}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={classNames(
              'button is-warning', {
                'is-light': !this.state.isReversed,
              },
            )}
            onClick={this.makeReverse}
          >
            Reverse
          </button>
          {(this.state.sortType !== SortType.NONE || this.state.isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.makeReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {
            resultGoodsList.map(good => (
              <li data-cy="Good" key={good}>
                {good}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
