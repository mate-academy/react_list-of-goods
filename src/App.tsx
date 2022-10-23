import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Button } from './components/Button';

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

// Use this function in the render to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((firstGood, secondGood) => (
      firstGood.localeCompare(secondGood)
    ));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((firstGood, secondGood) => (
      firstGood.length - secondGood.length
    ));
  }

  if (isReversed === true) {
    visibleGoods.reverse();
  }

  // Sort and reverse goods if needed
  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

// DON'T save goods to the state
// type State = {
//   isReversed: boolean,
//   sortType: SortType,
// };

export class App extends React.Component<{}, ReorderOptions> {
  state: ReorderOptions = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReorderGoods = (newSortType: SortType) => {
    this.setState({ sortType: newSortType });
  };

  handleReverseGoods = () => {
    this.setState(state => ({ isReversed: !state.isReversed }));
  };

  handleResetGoods = () => {
    this.setState({ sortType: SortType.NONE, isReversed: false });
  };

  render() {
    const { sortType, isReversed } = this.state;

    return (
      <div className="section content">
        <div className="buttons">
          <Button
            styleClass="is-info"
            onClick={() => this.handleReorderGoods(SortType.ALPHABET)}
            isLightCondition={sortType !== SortType.ALPHABET}
          >
            Sort alphabetically
          </Button>

          <Button
            styleClass="is-success"
            onClick={() => this.handleReorderGoods(SortType.LENGTH)}
            isLightCondition={sortType !== SortType.LENGTH}
          >
            Sort by length
          </Button>

          <Button
            styleClass="is-warning"
            onClick={this.handleReverseGoods}
            isLightCondition={!isReversed}
          >
            Reverse
          </Button>

          {(sortType !== SortType.NONE || isReversed) && (
            <Button
              styleClass="is-danger"
              onClick={this.handleResetGoods}
            >
              Reset
            </Button>
          )}
        </div>

        <ul>
          {getReorderedGoods(goodsFromServer, this.state).map(good => (
            <li data-cy="Good" key={`${good}-${goodsFromServer.indexOf(good)}`}>{good}</li>
          ))}
        </ul>
      </div>
    );
  }
}
