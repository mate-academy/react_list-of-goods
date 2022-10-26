import { PureComponent } from 'react';
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

  switch (sortType) {
    case SortType.ALPABET:
      visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((g1, g2) => g1.length - g2.length);
      break;
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

export class App extends PureComponent<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  sortAlphabet = () => {
    this.setState({
      sortType: SortType.ALPABET,
    });
  };

  reverse = () => {
    this.setState(state => {
      return {
        isReversed: !state.isReversed,
      };
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { isReversed, sortType } = this.state;

    const mas = getReorderedGoods(goodsFromServer, {
      isReversed,
      sortType,
    });

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={
              classNames(
                'button is-info',
                { 'is-light': sortType !== SortType.ALPABET },
              )
            }
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-success',
                { 'is-light': sortType !== SortType.LENGTH },
              )
            }
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={
              classNames(
                'button is-warning',
                { 'is-light': !isReversed },
              )
            }
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className="button is-danger is-light"
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <ul>
          <ul>
            {mas.map((good) => (
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
