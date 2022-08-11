import { ChangeEvent, Component } from 'react';
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

const minLengths = new Array(10).fill(0).map((_, i) => i + 1);

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
  selected: number,
  isSortedByLength: boolean,
  isSortedAlphabetically: boolean,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
    selected: 10,
    isSortedByLength: false,
    isSortedAlphabetically: false,
  };

  getReorderedGoods = (
    goods: string[],
    sortType: SortType,
    isReversed: boolean,
    selected: number,
    isSortedByLength: boolean,
    isSortedAlphabetically: boolean,
  ) => {
    const visibleGoods = goods.filter(good => good.length <= selected);

    visibleGoods.sort((firstWord, secondWord) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return isSortedAlphabetically
            ? firstWord.localeCompare(secondWord)
            : secondWord.localeCompare(firstWord);
        case SortType.LENGTH:
          return isSortedByLength
            ? secondWord.length - firstWord.length
            : firstWord.length - secondWord.length;
        default:
          return 0;
      }
    });

    return isReversed
      ? visibleGoods.reverse()
      : visibleGoods;
  };

  startedSort = () => (
    this.setState({ isStarted: true })
  );

  sortByLength = () => (
    this.setState(() => ({
      sortType: SortType.LENGTH,
    }))
  );

  sortAlphabetically = () => (
    this.setState(() => ({
      sortType: SortType.ALPHABET,
    }))
  );

  reverse = () => (
    this.setState(state => ({ isReversed: !state.isReversed }))
  );

  handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => (
    this.setState({ selected: Number(event.target.value) })
  );

  reset = () => (
    this.setState(
      { sortType: SortType.NONE, isReversed: false, selected: 10 },
    )
  );

  render() {
    const {
      isStarted,
      isReversed,
      sortType,
      selected,
      isSortedByLength,
      isSortedAlphabetically,
    } = this.state;
    const goods = this.getReorderedGoods(
      goodsFromServer,
      sortType,
      isReversed,
      selected,
      isSortedByLength,
      isSortedAlphabetically,
    );

    return (
      <div className="App">
        {!isStarted && (
          <button
            type="button"
            className="button is-success button-start"
            onClick={this.startedSort}
          >
            Start
          </button>
        )}

        {isStarted && (
          <>
            <div className="buttons">
              <button
                type="button"
                className="button is-info"
                onClick={this.sortAlphabetically}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-info"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-info"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-warning button-reset"
                onClick={this.reset}
              >
                Reset
              </button>

              <select
                name="minLength"
                className="select is-primary"
                value={selected}
                onChange={this.handleChangeSelect}
              >
                {minLengths.map(length => (
                  <option value={length} key={length}>
                    {length}
                  </option>
                ))}
              </select>
            </div>

            <ul className="Goods">
              {goods.map((good, i) => (
                <li className="Goods__item" key={minLengths[i]}>
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
