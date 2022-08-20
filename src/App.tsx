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
  ALPHABET,
  LENGTH,
}

function getReorderedGoods(
  goods: string[],
  sortType: SortType,
  isReversed: boolean,
  minLength: number,
) {
  const visibleGoods = [...goods]
    .filter(good => good.length >= minLength);

  visibleGoods.sort((good1, good2) => {
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

  return visibleGoods;
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  minLength: number,
};

export class App extends React.Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    minLength: 1,
  };

  startRenderingList = () => {
    this.setState({ isStarted: true });
  };

  sortByLength = () => {
    this.setState({ sortType: SortType.LENGTH });
  };

  sortByAlphabet = () => {
    this.setState({ sortType: SortType.ALPHABET });
  };

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      minLength: 1,
    });
  };

  filterByLength = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      minLength: Number(event.target.value),
    });
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      minLength,
    } = this.state;

    const visibleGoods = getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      minLength,
    );

    return (
      <div className="App">
        {!isStarted
          ? (
            <button
              type="button"
              onClick={this.startRenderingList}
              className="button is-success"
            >
              Start
            </button>
          ) : (
            <>
              <div className="buttons">
                <button
                  type="button"
                  onClick={this.sortByAlphabet}
                  className="button is-primary is-rounded"
                >
                  Sort alphabetically
                </button>

                <button
                  type="button"
                  onClick={this.sortByLength}
                  className="button is-success is-rounded"
                >
                  Sort by length
                </button>

                <button
                  type="button"
                  onClick={this.reverse}
                  className="button is-info is-rounded"
                >
                  Reverse
                </button>

                <button
                  type="button"
                  onClick={this.reset}
                  className="button is-danger is-rounded"
                >
                  Reset
                </button>
                <select
                  name="minLength"
                  id="minLength"
                  value={minLength}
                  onChange={this.filterByLength}
                >
                  {
                    [...new Array(10)].map((item, index) => (
                      <option key={item} value={index + 1}>
                        {index + 1}
                      </option>
                    ))
                  }
                </select>
              </div>

              <ul className="Goods">
                {visibleGoods.map(good => (
                  <li className="Goods__item level-item" key={good}>
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
