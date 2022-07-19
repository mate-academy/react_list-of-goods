/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';

const goodsFromServer = [
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

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

enum SortType {
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
): string[] {
  const showedGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      showedGoods.sort(
        (currentProduct, nextProduct) => (
          currentProduct.localeCompare(nextProduct)
        ),
      );
      break;

    case SortType.LENGTH:
      showedGoods.sort(
        (currentProduct, nextProduct) => (
          currentProduct.length - nextProduct.length
        ),
      );
      break;

    default:
      break;
  }

  if (isReversed) {
    return showedGoods.reverse();
  }

  return showedGoods;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  handleReset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
    });
  };

  render() {
    const showedGoods = getReorderedGoods(
      goodsFromServer,
      this.state.sortType,
      this.state.isReversed,
    );

    return (
      <div className="App">
        {!this.state.isStarted
          ? (
            <button
              className="button button--start"
              type="button"
              onClick={() => {
                this.setState(state => ({ isStarted: !state.isStarted }));
              }}
            >
              Start
            </button>
          )
          : (
            <>
              <button
                className="button"
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.ALPHABET });
                }}
              >
                Sort alphabetically
              </button>

              <button
                className="button"
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.LENGTH });
                }}
              >
                Sort by length
              </button>

              <button
                className="button"
                type="button"
                onClick={() => {
                  this.setState(state => ({
                    isReversed: !state.isReversed,
                  }));
                }}
              >
                Reverse
              </button>

              <button
                className="button button--reset"
                type="button"
                onClick={this.handleReset}
              >
                Reset
              </button>

              <ul className="Goods">
                {showedGoods.map(product => (
                  <li
                    className="Goods__item"
                    key={product}
                  >
                    {product}
                  </li>
                ))}
              </ul>
            </>
          )}
      </div>
    );
  }
}
