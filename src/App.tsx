import { Component } from 'react';
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
  sortType: SortType,
  isReversed: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  let visibleGoods = [...goods];
  const { ALPHABET, LENGTH, NONE } = SortType;

  switch (sortType) {
    case LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    case ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case NONE:
      visibleGoods = [...goods];
      break;
    default:
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
  state = {
    isReversed: false,
    sortType: 0,
  };

  render() {
    const { isReversed, sortType } = this.state;

    const goods = getReorderedGoods(goodsFromServer, { sortType, isReversed });
    const { ALPHABET, LENGTH, NONE } = SortType;

    return (
      <>
        <div className="section content">
          <div className="buttons">
            <button
              onClick={() => this.setState({ sortType: ALPHABET })}
              type="button"
              className={`button is-info ${sortType === ALPHABET ? '' : 'is-light'}`}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={`button is-success ${sortType === LENGTH ? '' : 'is-light'}`}
              onClick={() => this.setState({ sortType: LENGTH })}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={`button is-warning ${!isReversed ? 'is-light' : ''}`}
              onClick={() => this.setState(state => ({
                isReversed: !state.isReversed,
              }))}
            >
              Reverse
            </button>

            {(isReversed || sortType !== 0) && (
              <button
                type="button"
                className="button is-danger is-light"
                onClick={() => {
                  this.setState({ sortType: NONE, isReversed: false });
                }}
              >
                Reset
              </button>
            )}
          </div>

          <ul>
            <ul>
              {goods.map(good => <li data-cy="Good">{good}</li>)}
            </ul>
          </ul>
        </div>
      </>
    );
  }
}
