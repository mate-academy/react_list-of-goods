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
  NONE = 'NONE',
  ALPHABET = 'ALPHABET',
  LENGTH = 'LENGTH',
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  let visibleGoods = [...goods];

  switch (sortType) {
    case SortType.ALPHABET:
      visibleGoods.sort((a, b) => a.localeCompare(b));
      break;

    case SortType.LENGTH:
      visibleGoods.sort((a, b) => (a.length - b.length));
      break;

    default:
      break;
  }

  if (isReversed) {
    visibleGoods = visibleGoods.reverse();
  }

  return (
    visibleGoods.map(item => (
      <li className="Goods__item" key={item}>{item}</li>
    ))
  );
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends React.Component<{}, State> {
  state: Readonly <State> = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  resetGoods = () => {
    this.setState({ isReversed: false, sortType: SortType.NONE });
  };

  reverseGoods = () => {
    this.setState((state) => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByHandler(sort:SortType): void {
    this.setState({ sortType: sort });
  }

  render() {
    const { isStarted, sortType, isReversed } = this.state;

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            onClick={() => {
              this.setState({ isStarted: true });
            }}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <button
              type="button"
              onClick={() => this.sortByHandler(SortType.ALPHABET)}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => this.sortByHandler(SortType.LENGTH)}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={this.reverseGoods}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={this.resetGoods}
            >
              Reset
            </button>
            <ul className="Goods">
              {getReorderedGoods(goodsFromServer, sortType, isReversed)}
            </ul>
          </>
        )}

      </div>
    );
  }
}
