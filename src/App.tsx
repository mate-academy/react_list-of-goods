import { Component } from 'react';

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

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((g1, g2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return g1.localeCompare(g2);
      case SortType.LENGTH:
        return g1.length - g2.length;
      default:
        return 0;
    }
  });

  return isReversed ? visibleGoods.reverse() : visibleGoods;
}

type State = {
  isReversed: boolean,
  sortType: SortType
};

export class App extends Component<{}, State> {
  state = {
    isReversed: false,
    sortType: SortType.NONE,
  };

  reverse = () => this.setState(state => ({ isReversed: !state.isReversed }));

  alphabet = () => this.setState({ sortType: SortType.ALPHABET });

  length = () => this.setState({ sortType: SortType.LENGTH });

  reset = () => this.setState({ isReversed: false, sortType: SortType.NONE });

  render() {
    const { sortType, isReversed } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App mt-6">
        <>
          <div className="buttons is-flex is-centered">
            <button
              type="button"
              className={`button is-outlined is-success is-rounded ${this.state.sortType !== SortType.ALPHABET && 'is-light'}`}
              onClick={this.alphabet}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              className={`button is-rounded is-danger is-outlined ${this.state.sortType !== SortType.LENGTH && 'is-light'}`}
              onClick={this.length}
            >
              Sort by length
            </button>

            <button
              type="button"
              className={`button is-rounded is-black is-outlined ${!this.state.isReversed && 'is-light'}`}
              onClick={this.reverse}
            >
              Reverse
            </button>

            {(sortType || isReversed)
              ? (
                <button
                  type="button"
                  className="button is-rounded is-ghost is-outlined"
                  onClick={this.reset}
                >
                  Reset
                </button>
              )
              : ''}
          </div>
          <div className="is-flex is-justify-content-center">
            <div className="has-text-centered">
              {goods.map(good => {
                return (
                  <div>
                    <div
                      data-cy="Good"
                      key={good}
                      className="box column is-info is-rounded mb-3"
                    >
                      {good}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
    );
  }
}
