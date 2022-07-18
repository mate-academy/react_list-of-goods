/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react';
import './App.css';

const goodsFromServer: string[] = [
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
  NAME,
  LENGTH,
}

function getReorderedGoods(
  isReversed: boolean,
  sortBy: SortType,
) {
  const visibleProduct = [...goodsFromServer];

  switch (sortBy) {
    case SortType.NAME:
      visibleProduct.sort(
        (prod1, prod2) => prod1.localeCompare(prod2),
      );
      break;

    case SortType.LENGTH:
      visibleProduct.sort(
        (prod1, prod2) => prod1.length - prod2.length,
      );
      break;

    default:
  }

  if (isReversed) {
    visibleProduct.reverse();
  }

  return visibleProduct;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortBy: SortType,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isStarted: false,
    isReversed: false,
    sortBy: SortType.NONE,
  };

  getStart = () => {
    this.setState(state => ({
      isStarted: !state.isStarted,
    }));
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByHandler = (sortBy: SortType) => {
    this.setState({ sortBy });
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.NONE,
    });
  };

  render(): React.ReactNode {
    const { isReversed, isStarted, sortBy } = this.state;
    const visibleProduct = getReorderedGoods(
      isReversed,
      sortBy,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="button__start"
            onClick={this.getStart}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="card">
              <h1 className="card__title">List of Product</h1>
              <ol className="list">
                {visibleProduct.map(product => (
                  <li className="card__product" key={product}>
                    <p>{product}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="card__button">
              <button
                type="button"
                className="button"
                onClick={() => this.sortByHandler(SortType.NAME)}
              >
                Sort by name
              </button>

              <button
                type="button"
                className="button"
                onClick={() => this.sortByHandler(SortType.LENGTH)}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button button__reset"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}
