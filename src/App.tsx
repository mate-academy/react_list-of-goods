import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './components/GoodsList';

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

// Use this function in the render method to prepare goods
export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  // To avoid the original array mutation
  const visibleGoods = [...goods];

  if (sortType === SortType.ALPHABET) {
    visibleGoods.sort((g1, g2) => g1.localeCompare(g2));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((g1, g2) => g1.length - g2.length);
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

// DON'T save goods to the state
type State = {
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.PureComponent {
  state: Readonly<State> = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  sortAlphabetically = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  reverse = () => {
    const previousIsRevesved = this.state.isReversed;

    this.setState({
      isReversed: !previousIsRevesved,
    });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const { sortType, isReversed } = this.state;
    const isLight = 'is-light';
    const buttonBaseClasses = 'button is-';
    const alphabeticalButtonClasses = `info ${sortType !== SortType.ALPHABET ? isLight : ''}`;
    const lengthButtonClasses = `success ${sortType !== SortType.LENGTH ? isLight : ''}`;
    const reverseButtonClasses = `warning ${isReversed ? '' : isLight}`;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`${buttonBaseClasses}${alphabeticalButtonClasses}`}
            onClick={this.sortAlphabetically}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`${buttonBaseClasses}${lengthButtonClasses}`}
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className={`${buttonBaseClasses}${reverseButtonClasses}`}
            onClick={this.reverse}
          >
            Reverse
          </button>

          {(sortType !== SortType.NONE || isReversed) && (
            <button
              type="button"
              className={`${buttonBaseClasses}danger ${isLight}`}
              onClick={this.reset}
            >
              Reset
            </button>
          )}
        </div>

        <GoodsList goods={getReorderedGoods(goodsFromServer, this.state)} />
      </div>
    );
  }
}
