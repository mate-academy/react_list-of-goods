import React from 'react';
import './App.scss';
import classNames from 'classnames';

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

enum SortBy {
  Name = 'name',
  Length = 'length',
}

interface State {
  goods: string[];
  isGoodsListVisible: boolean;
  isReversed: boolean;
  sortBy: SortBy | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [...goodsFromServer],
    isGoodsListVisible: false,
    isReversed: false,
    sortBy: null,
  };

  start = (): void => {
    this.setState({ isGoodsListVisible: true });
  };

  reverse = (): void => {
    this.setState((state) => (
      { isReversed: !state.isReversed }
    ));
  };

  sortAlphabetically = (): void => {
    this.setState({ sortBy: SortBy.Name });
  };

  sortByLength = (): void => {
    this.setState({ sortBy: SortBy.Length });
  };

  reset = (): void => {
    this.setState({
      isReversed: false,
      sortBy: null,
    });
  };

  render() {
    const {
      goods,
      isGoodsListVisible,
      isReversed,
      sortBy,
    } = this.state;

    let visibleGoods: string[] = [...goods];

    switch (sortBy) {
      case SortBy.Name:
        visibleGoods.sort(
          (good1, good2) => good1.localeCompare(good2),
        );
        break;

      case SortBy.Length:
        visibleGoods.sort(
          (good1, good2) => good1.length - good2.length,
        );
        break;

      default:
        visibleGoods = [...goods];
        break;
    }

    if (isReversed) {
      visibleGoods.reverse();
    }

    return (
      <div className="App level">
        <button
          type="button"
          className={classNames(
            'button is-light is-outlined', 'level-item', {
              'App__hidden-button': isGoodsListVisible,
            },
          )}
          onClick={this.start}
        >
          Start
        </button>
        {isGoodsListVisible && (
          <div className="level-item">
            <ul>
              {visibleGoods.map(good => (
                <li
                  key={good}
                  className="subtitle is-4 level-item"
                >
                  {good}
                </li>
              ))}
            </ul>
            <div className="buttons">
              <button
                type="button"
                className="button is-link is-rounded"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-success is-rounded"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-info is-rounded"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-danger is-rounded"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
