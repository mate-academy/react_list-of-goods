// import { event } from 'cypress/types/jquery';
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

enum SortType {
  NONE,
  ALPABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  const visibleGoods = [...goods].filter(element => (
    element.length >= minLength
  ));

  if (sortType === SortType.ALPABET) {
    visibleGoods.sort((good1, good2) => good1.localeCompare(good2));
  } else if (sortType === SortType.LENGTH) {
    visibleGoods.sort((good1, good2) => good1.length - good2.length);
  }

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  lengthValue: number,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    lengthValue: 1,
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      lengthValue,
    } = this.state;

    return (
      <div className="App box has-background-warning-light">
        {!isStarted && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
            className="button is-success is-light"
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.ALPABET });
                }}
                className="button is-info is-light"
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState({ sortType: SortType.LENGTH });
                }}
                className="button is-info is-light"
              >
                Sort by length
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState({ isReversed: !isReversed });
                }}
                className="button is-info is-light"
              >
                Reverse
              </button>

              <button
                type="button"
                onClick={() => {
                  this.setState({
                    isReversed: false,
                    sortType: SortType.NONE,
                    lengthValue: 1,
                  });
                }}
                className="button is-danger is-light"
              >
                Reset
              </button>
            </div>

            <ul className="Goods content is-large block">
              {getReorderedGoods(
                goodsFromServer,
                sortType,
                isReversed,
                lengthValue,
              ).map(product => (
                <li
                  className="Goods__item"
                  key={product}
                >
                  {product}
                </li>
              ))}
            </ul>

            <div>
              <p className="text">Select min length of word:</p>

              <div className="select is-multiply is-success block">
                <select
                  name="minWordLength"
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    this.setState({ lengthValue: +event.target.value });
                  }}
                >
                  {[...Array(10)].map((_, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}
