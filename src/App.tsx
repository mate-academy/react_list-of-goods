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

  if (sortType !== SortType.NONE) {
    if (sortType === SortType.ALPHABET) {
      visibleGoods.sort((g1, g2) => {
        return g1.localeCompare(g2);
      });
    }

    if (sortType === SortType.LENGTH) {
      visibleGoods.sort((g1, g2) => {
        return g1.length - g2.length;
      });
    }
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  start = () => this.setState({ isStarted: true });

  reverse = () => this.setState(state => ({ isReversed: !state.isReversed }));

  alphabet = () => this.setState({ sortType: SortType.ALPHABET });

  length = () => this.setState({ sortType: SortType.LENGTH });

  reset = () => this.setState({
    isReversed: false,
    sortType: SortType.NONE,
  });

  render() {
    const { sortType, isReversed, isStarted } = this.state;
    const goods = getReorderedGoods(goodsFromServer, sortType, isReversed);

    return (
      <div className="App mt-6">
        {!isStarted
          ? (
            <button
              className="button is-black is-large is-fullwidth is-outlined"
              type="button"
              onClick={this.start}
            >
              Start
            </button>
          )

          : (
            <>
              <div className="buttons is-desktop is-flex is-centered">
                <button
                  type="button"
                  className="button is-rounded is-success is-outlined"
                  onClick={this.alphabet}
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  className="button is-rounded is-danger is-outlined"
                  onClick={this.length}
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  className="button is-rounded is-black is-outlined"
                  onClick={this.reverse}
                >
                  Reverse
                </button>

                <button
                  type="button"
                  className="button is-rounded is-ghost is-outlined"
                  onClick={this.reset}
                >
                  Reset
                </button>
              </div>
              <div className="is-flex is-justify-content-center">
                <div className="has-text-centered">
                  {goods.map(good => {
                    return (
                      <div>
                        <div
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
          )}
      </div>
    );
  }
}
