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
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  switch (sortType) {
    case 1:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case 2:
      visibleGoods.sort((a, b) => a.length - b.length);
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
  reset: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    isReversed: false,
    sortType: 0,
    reset: false,
  };

  sortAlphabet = () => {
    this.setState({ sortType: 1, reset: true });
    const buttonLength = document.querySelector('.is-success');

    buttonLength?.classList.add('is-light');

    const buttonAlpabet = document.querySelector('.is-info');

    buttonAlpabet?.classList.remove('is-light');
  };

  sortLength = () => {
    this.setState({ sortType: 2, reset: true });

    const buttonAlphabet = document.querySelector('.is-info');

    buttonAlphabet?.classList.add('is-light');
    const buttonSucc = document.querySelector('.is-success');

    buttonSucc?.classList.remove('is-light');
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
      reset: true,
    }));
    this.forceUpdate();

    const buttonAlpabet = document.querySelector('.is-warning');

    if (!this.state.isReversed) {
      buttonAlpabet?.classList.remove('is-light');
    } else {
      buttonAlpabet?.classList.add('is-light');
    }
  };

  reset = () => {
    this.setState({ sortType: 2, reset: false });
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(element => {
      element.classList.add('is-light');
    });
  };

  render() {
    const { reset } = this.state;

    let visibleGoods = getReorderedGoods(goodsFromServer, this.state);

    if (!reset) {
      visibleGoods = [...goodsFromServer];
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={this.sortLength}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={this.reverse}
          >
            Reverse
          </button>

          {this.state.reset && (
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
            {visibleGoods.map(good => (
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
