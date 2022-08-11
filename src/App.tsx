import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

const preparedGoods = goodsFromServer.map(name => ({
  name,
  id: uuidv4(),
}));

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type Good = {
  name: string;
  id: string;
};

// Use this function in the render method
const getReorderedGoods = (
  goods: Good[],
  sortType: SortType,
  isReversed: boolean,
) => {
  const visibleGoods = [...goods];

  if (sortType !== SortType.NONE) {
    visibleGoods.sort((a, b) => {
      switch (sortType) {
        case SortType.ALPHABET:
          return a.name.localeCompare(b.name);
        case SortType.LENGTH:
          return a.name.length - b.name.length;
        default:
          return 0;
      }
    });
  }

  return isReversed
    ? visibleGoods.reverse()
    : visibleGoods;
};

type State = {
  isStarted: boolean,
  isReversed: boolean,
  sortType: SortType,
};

export class App extends Component<{}, State> {
  state = {
    isStarted: false,
    isReversed: false,
    sortType: SortType.NONE,
  };

  start = () => this.setState({ isStarted: true });

  sortByName = () => this.setState({ sortType: SortType.ALPHABET });

  sortByLength = () => this.setState({ sortType: SortType.LENGTH });

  reverse = () => {
    this.setState(state => ({
      isReversed: !state.isReversed,
    }));
  };

  reset = () => {
    this.setState({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  render() {
    const { isStarted, isReversed, sortType } = this.state;
    const goods = getReorderedGoods(preparedGoods, sortType, isReversed);

    return (
      <div className="App level is-flex-direction-column">
        {!isStarted && (
          <button
            type="button"
            className="button is-success level-item"
            onClick={this.start}
          >
            Start
          </button>
        )}

        {isStarted && (
          <div className="level-item is-flex-direction-column">
            <div>
              <button
                type="button"
                className="button is-primary m-2"
                onClick={this.sortByName}
              >
                Sort alphabetically
              </button>

              <button
                type="button"
                className="button is-primary m-2"
                onClick={this.sortByLength}
              >
                Sort by length
              </button>

              <button
                type="button"
                className="button is-primary m-2"
                onClick={this.reverse}
              >
                Reverse
              </button>

              <button
                type="button"
                className="button is-primary m-2"
                onClick={this.reset}
              >
                Reset
              </button>
            </div>

            <ul className="Goods">
              {goods.map(({ name, id }) => (
                <li className="Goods__item" key={id}>{name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
