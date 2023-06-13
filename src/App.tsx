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
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
  lightAlpha: boolean,
  lightLenght: boolean,
  lightreset: boolean,
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1: string, good2: string) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  // eslint-disable-next-line no-console
  console.log(sortType, isReversed);

  return visibleGoods;
}

export class App extends React.Component <{}, ReorderOptions> {
  state:ReorderOptions = {
    sortType: SortType.NONE,
    isReversed: false,
    lightAlpha: false,
    lightLenght: false,
    lightreset: false,
  };

  sortAlpha = () => {
    this.setState({
      sortType: SortType.ALPHABET,
      lightAlpha: true,
      lightLenght: false,
    });
  };

  sortLenght = () => {
    this.setState({
      sortType: SortType.LENGTH,
      lightLenght: true,
      lightAlpha: false,
    });
  };

  sortRevers = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      lightreset: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
      lightAlpha: false,
      lightLenght: false,
      lightreset: false,
    });
  };

  render() {
    const visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    const showResetButton
      = this.state.sortType !== SortType.NONE
      || this.state.isReversed !== false;

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className={`button is-info 
            ${this.state.lightAlpha ? '' : 'is-light'}`}
            onClick={this.sortAlpha}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className={`button is-success  
            ${this.state.lightLenght ? '' : 'is-light'}`}
            onClick={this.sortLenght}

          >
            Sort by length
          </button>

          <button
            type="button"
            className={`button is-warning 
            ${this.state.lightreset ? '' : 'is-light'}`}
            onClick={this.sortRevers}
          >
            Reverse
          </button>

          {showResetButton
            ? (
              <button
                type="button"
                data-cy="button"
                className="button is-danger is-light "
                onClick={this.reset}
              >
                Reset
              </button>
            )
            : ''}
        </div>

        <ul>
          {visibleGoods.map((good: string) => (
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
