import { Component } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';

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
  ALPHABET,
  LENGTH,
}

// Use this function in the render method
function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  // Not to mutate the original array
  const visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;
    case SortType.LENGTH:
      visibleGoods.sort((a, b) => a.length - b.length);
      break;
    default:
      break;
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

// eslint-disable-next-line react/prefer-stateless-function
export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  render() {
    const goods = getReorderedGoods(goodsFromServer,
      this.state.sortType, this.state.isReversed);

    return (
      <div className="App">
        {!this.state.isStarted && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
          >
            Start
          </button>
        )}

        {this.state.isStarted && (
          <>
            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.ALPHABET });
              }}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setState({ sortType: SortType.LENGTH });
              }}
            >
              Sort by length
            </button>

            <button
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
              type="button"
              onClick={() => {
                this.setState({
                  isReversed: false,
                  sortType: SortType.NONE,
                });
              }}
            >
              Reset
            </button>

            <ul className="Goods">
              {goods.map(good => (
                <li className="Goods__item" key={uuid()}>
                  {good}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}
