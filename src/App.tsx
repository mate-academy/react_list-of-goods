/* eslint-disable react/no-access-state-in-setstate */
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
  NONE = 'none',
  ALPHABET = 'alphabet',
  LENGTH = 'length',
}

type ReorderOptions = {
  sortType: SortType,
  isReversed: boolean,
};

export class App extends React.PureComponent {
  state = {
    isReversed: false,
    sortType: SortType.NONE as SortType,
  };

  getReorderedGoods = (
    goods: string[],
    { sortType, isReversed }: ReorderOptions,
  ) => {
    const visibleGoods = [...goods];

    if (sortType === SortType.ALPHABET) {
      visibleGoods.sort();
    }

    if (sortType === SortType.LENGTH) {
      visibleGoods.sort((a, b) => a.length - b.length);
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return visibleGoods;
  };

  reset = () => {
    this.setState({ isReversed: false });
    this.setState({ sortType: SortType.NONE });
    const alphabetButton = document.querySelector('.is-info');
    const lengthButton = document.querySelector('.is-success');
    const reverseButton = document.querySelector('.is-warning');

    if (alphabetButton) {
      alphabetButton.classList.add('is-light');
    }

    if (lengthButton) {
      lengthButton.classList.add('is-light');
    }

    if (reverseButton) {
      reverseButton.classList.add('is-light');
    }
  };

  render() {
    const { isReversed, sortType } = this.state;
    let visibleGoods = [...goodsFromServer];

    if (sortType === SortType.ALPHABET) {
      visibleGoods = this.getReorderedGoods(goodsFromServer,
        { sortType: SortType.ALPHABET, isReversed });
    } else if (sortType === SortType.LENGTH) {
      visibleGoods = this.getReorderedGoods(goodsFromServer,
        { sortType: SortType.LENGTH, isReversed });
    }

    if (isReversed) {
      visibleGoods = this.getReorderedGoods(goodsFromServer,
        { sortType, isReversed: true });
    }

    return (
      <div className="section content">
        <div className="buttons">
          <button
            type="button"
            className="button is-info is-light"
            onClick={event => {
              this.setState({ sortType: SortType.ALPHABET });
              const button = event.target as HTMLButtonElement;
              const seccondButton = document.querySelector('.is-success');

              button.classList.remove('is-light');
              seccondButton?.classList.add('is-light');
            }}
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            className="button is-success is-light"
            onClick={event => {
              this.setState({ sortType: SortType.LENGTH });
              const button = event.target as HTMLButtonElement;
              const seccondButton = document.querySelector('.is-info');

              button.classList.remove('is-light');
              seccondButton?.classList.add('is-light');
            }}
          >
            Sort by length
          </button>

          <button
            type="button"
            className="button is-warning is-light"
            onClick={event => {
              this.setState({ isReversed: !this.state.isReversed });
              const button = event.target as HTMLButtonElement;

              if (this.state.isReversed) {
                button.classList.add('is-light');
              } else {
                button.classList.remove('is-light');
              }
            }}
          >
            Reverse
          </button>

          {(isReversed || sortType !== SortType.NONE) && (
            <>
              <button
                type="button"
                className="button is-danger is-light"
                onClick={this.reset}
              >
                Reset
              </button>
            </>
          )}

        </div>

        <ul>
          <ul>
            {visibleGoods.map(item => (
              <li data-cy="Good" key={item}>{item}</li>
            ))}
          </ul>
        </ul>
      </div>
    );
  }
}
