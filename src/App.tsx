import { Component, ChangeEvent } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

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
  selected: number,
) {
  const visibleGoods = [...goods].filter(good => good.length <= selected);

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
  selected: number,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    selected: 1,
  };

  minLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  getStarted = () => {
    this.setState({
      isStarted: true,
    });
  };

  sortByAlphabet = () => {
    this.setState({
      sortType: SortType.ALPHABET,
    });
  };

  sortByLength = () => {
    this.setState({
      sortType: SortType.LENGTH,
    });
  };

  getReversed = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  groupByLength = (e: ChangeEvent<HTMLSelectElement>) => (
    this.setState({
      selected: +e.target.value,
    })
  );

  resetToDefault = () => {
    this.setState({
      isReversed: false,
      sortType: SortType.NONE,
      selected: 1,
    });
  };

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      selected,
    } = this.state;

    const goodsList = getReorderedGoods(
      goodsFromServer, sortType, isReversed, selected,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            className="
              App__start-button
              button
              is-primary"
            type="button"
            onClick={this.getStarted}
          >
            Start
          </button>
        )}

        {isStarted && (
          <div className="App__list list">
            <div className="list__options options">
              <button
                className="
                  options__button
                  button
                  is-info"
                type="button"
                onClick={this.sortByAlphabet}
              >
                Sort alphabetically
              </button>

              <button
                className="
                  options__button
                  button
                  is-success"
                type="button"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                className="
                  options__button
                  button
                  is-warning"
                type="button"
                onClick={this.getReversed}
              >
                Reverse
              </button>

              <button
                className="
                  options__button
                  button
                  is-danger"
                type="button"
                onClick={this.resetToDefault}
              >
                Reset
              </button>

              <div className="
                options__select
                select
                is-link"
              >
                <select
                  name="minLength"
                  className="select is-link"
                  value={selected}
                  onChange={this.groupByLength}
                >
                  {this.minLength.map(length => (
                    <option
                      key={length}
                      value={length}
                    >
                      {length}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <ul className="list__goods content">
              {goodsList.map((good) => (
                <li
                  className="list__goods-item"
                  key={good}
                >
                  {good}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
