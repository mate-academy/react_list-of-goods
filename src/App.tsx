import React from 'react';
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

const selectOptions: number[] = [];

for (let i = 1; i <= 10; i += 1) {
  selectOptions.push(i);
}

enum SortOrder {
  Reverse = 'REVERSE',
  Alpabetically = 'ALPH',
  Length = 'LENGTH',
  Initial = 'INITIAL',
}

type State = {
  goods: string[],
  isStarted: boolean,
  sortOrder: SortOrder,
  useFilter: number,
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    isStarted: false,
    sortOrder: SortOrder.Initial,
    useFilter: 1,
  };

  start = () => {
    this.setState({ isStarted: true });
  };

  setSortOrder = (order: SortOrder) => {
    this.setState({ sortOrder: order });
  };

  setFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = +event.currentTarget.value;

    this.setState({ useFilter: newValue });
  };

  organizeGoods = () => {
    const { goods, sortOrder, useFilter } = this.state;
    const filteredGoods = [...goods].filter(good => good.length >= useFilter);

    switch (sortOrder) {
      case SortOrder.Reverse:
        return [...filteredGoods].reverse();
      case SortOrder.Alpabetically:
        return [...filteredGoods].sort((goodA, goodB) => {
          return goodA.localeCompare(goodB);
        });
      case SortOrder.Length:
        return [...filteredGoods].sort((goodA, goodB) => {
          return goodA.length - goodB.length;
        });
      default:
        return filteredGoods;
    }
  };

  render() {
    const { isStarted, sortOrder } = this.state;
    const organizedGoods = this.organizeGoods();

    return (
      <div className="App">
        {!isStarted && (
          <button type="button" onClick={this.start}>
            START
          </button>
        )}
        {isStarted && (
          <div>
            <ul>
              {organizedGoods.map(good => (
                <li key={good}>
                  {good}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                this.setSortOrder(SortOrder.Reverse);
              }}
              disabled={sortOrder === SortOrder.Reverse}
            >
              Reverse
            </button>

            <button
              type="button"
              onClick={() => {
                this.setSortOrder(SortOrder.Alpabetically);
              }}
              disabled={sortOrder === SortOrder.Alpabetically}
            >
              Sort alphabetically
            </button>

            <button
              type="button"
              onClick={() => {
                this.setSortOrder(SortOrder.Length);
              }}
              disabled={sortOrder === SortOrder.Length}
            >
              Sort by length
            </button>

            <button
              type="button"
              onClick={() => {
                this.setSortOrder(SortOrder.Initial);
              }}
              disabled={sortOrder === SortOrder.Initial}
            >
              Reset
            </button>

            <div>
              Show goods with length starting from:
              {' '}
              <select onChange={this.setFilter}>
                {selectOptions.map(option => (
                  <option key={option} value={option}>
                    {`${option}`}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
