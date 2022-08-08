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
  ALPABET,
  LENGTH,
}

// DON'T save goods to the state
type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component <{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: 0,
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;

    function getReorderedGoods(goods: string[]) {
      const visibleGoods = [...goods];

      return visibleGoods.sort((a, b) => {
        switch (sortType) {
          case SortType.ALPABET:
            return isReversed ? b.localeCompare(a) : a.localeCompare(b);
          case SortType.LENGTH:
            return isReversed ? b.length - a.length : a.length - b.length;
          default:
            return 0;
        }
      });
    }

    const preparedGoods
      = getReorderedGoods(goodsFromServer);

    return (
      <div className="App block notification is-primary">
        {!isStarted && (
          <button
            className="button is-danger"
            type="button"
            onClick={() => (this.setState({ isStarted: true }))}
          >
            Start
          </button>
        )}
        {isStarted && (
          <>
            <button
              type="button"
              className="button is-info mr-3"
              onClick={() => (this.setState({ sortType: 1 }))}
            >
              Sort alphabetically
            </button>
            <button
              className="button is-info mr-3"
              type="button"
              onClick={() => (this.setState({ sortType: 2 }))}
            >
              Sort by length
            </button>
            <button
              className="button is-info mr-3"
              type="button"
              onClick={() => (this.setState((prevState) => (
                { isReversed: !prevState.isReversed }
              )))}
            >
              Reverse
            </button>
            <button
              className="button is-info"
              type="button"
              onClick={() => (this.setState({
                sortType: 0,
                isReversed: false,
              }))}
            >
              Reset
            </button>
            <ul className="Goods">
              {preparedGoods.map(good => (
                <li
                  className="Goods__item"
                  key={good}
                >
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
