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
  let visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      visibleGoods = visibleGoods.sort((a, b) => a.length - b.length);
      break;

    default:
      //
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handelSortAlphbet = () => {
    this.setState({ sortType: SortType.ALPABET });
  };

  handelSortLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  handelReverse = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isReversed: !prevState.isReversed,
      };
    });
  };

  handelReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={this.state.sortType === SortType.ALPABET
              ? 'button is-info'
              : 'button is-info is-light'}
            onClick={this.handelSortAlphbet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={this.state.sortType === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'}
            onClick={this.handelSortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={this.state.isReversed
              ? 'button is-warning'
              : 'button is-warning is-light'}
            onClick={this.handelReverse}
          >
            Reverse
          </button>

          {(this.state.isReversed || this.state.sortType !== SortType.NONE) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.handelReset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {getReorderedGoods(
              goodsFromServer,
              this.state,
            ).map(good => (
              <li
                key={good}
                data-cy="Good"
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
