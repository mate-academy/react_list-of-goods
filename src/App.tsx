import { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import clasNames from 'classnames';

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

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((currentGood, nextGood) => (
        currentGood.localeCompare(nextGood)
      ));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((currentGood, nextGood) => (
        currentGood.length - nextGood.length
      ));
      break;

    case SortType.NONE:
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  setSort = (sortType: SortType) => {
    this.setState({ sortType });
  };

  setReverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  setReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);
    const shouldRenderResetButton = sortType !== SortType.NONE || isReversed;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={clasNames(
              'button is-info',
              { 'is-light': sortType !== SortType.ALPHABET },
            )}
            onClick={() => this.setSort(SortType.ALPHABET)}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={clasNames(
              'button is-success',
              { 'is-light': sortType !== SortType.LENGTH },
            )}
            onClick={() => this.setSort(SortType.LENGTH)}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={clasNames(
              'button is-warning',
              { 'is-light': !isReversed },
            )}
            onClick={this.setReverse}
          >
            Reverse
          </button>

          {shouldRenderResetButton && (
            <button
              type="button"
              className="button is-danger"
              onClick={() => this.setReset()}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          {visibleGoods.map(name => (
            <li key={name} data-cy="Good">{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
