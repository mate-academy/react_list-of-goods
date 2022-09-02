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
  Alphabet,
  Length,
  None,
}

type State = {
  isVisibleList: boolean,
  isReversed: boolean,
  sortBy: SortType,
};

function getSortedGoods(
  goods: string[],
  isReversed: boolean,
  sortBy: SortType,
) {
  const visibleGoods = [...goods];

  switch (sortBy) {
    case SortType.Alphabet:
      visibleGoods.sort(
        (good1, good2) => good1.localeCompare(good2),
      );
      break;

    case SortType.Length:
      visibleGoods.sort(
        (good1, good2) => good1.length - good2.length,
      );
      break;

    default:
      break;
  }

  if (isReversed) {
    return visibleGoods.reverse();
  }

  return visibleGoods;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    isVisibleList: false,
    isReversed: false,
    sortBy: SortType.None,
  };

  getStart = () => {
    this.setState(state => ({
      isVisibleList: !state.isVisibleList,
    }));
  };

  reverseList = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  sortByType = (type: SortType) => {
    this.setState({ sortBy: type });
  };

  resetChanges = () => {
    this.setState({
      isReversed: false,
      sortBy: SortType.None,
    });
  };

  render() {
    const { isVisibleList } = this.state;

    const sortedGoods = getSortedGoods(
      goodsFromServer,
      this.state.isReversed,
      this.state.sortBy,
    );

    return (
      <div className="App block">
        <h1
          className="
            App__title
            title
            is-2
          "
        >
          List of Goods
        </h1>

        {!isVisibleList && (
          <button
            className="
              button
              is-success
              is-medium
            "
            type="button"
            onClick={this.getStart}
          >
            Start
          </button>
        )}

        {isVisibleList && (
          <>
            <ul className="list">
              {sortedGoods.map(good => (
                <li className="item media" key={good}>
                  <p>{good}</p>
                </li>
              ))}
            </ul>

            <div className="buttons">
              <button
                className="button is-warning"
                type="button"
                onClick={this.reverseList}
              >
                Reverse
              </button>

              <button
                className="button is-link"
                type="button"
                onClick={() => this.sortByType(SortType.Alphabet)}
              >
                Sort alphabetically
              </button>

              <button
                className="button is-info"
                type="button"
                onClick={() => this.sortByType(SortType.Length)}
              >
                Sort by Length
              </button>

              <button
                className="button is-danger"
                type="button"
                onClick={this.resetChanges}
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
