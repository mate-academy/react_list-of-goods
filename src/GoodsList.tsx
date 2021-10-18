import React from 'react';

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

interface State {
  listOfGoods: string[];
}

export class GoodsList extends React.Component<{}, State> {
  state: State = {
    listOfGoods: goodsFromServer,
  };

  reverse = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].reverse(),
    }));
  };

  sortAlphabet = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].sort((a, b) => a.localeCompare(b)),
    }));
  };

  reset = () => {
    this.setState({
      listOfGoods: [...goodsFromServer],
    });
  };

  sortByLength = () => {
    this.setState(state => ({
      listOfGoods: [...state.listOfGoods].sort((a, b) => a.length - b.length),
    }));
  };

  render() {
    const { listOfGoods } = this.state;

    return (
      <>
        <div className="App">
          <h1>List of goods</h1>
          <button
            className="button"
            type="button"
            onClick={this.reverse}
          >
            Reverse
          </button>

          <button
            className="button"
            type="button"
            onClick={this.sortAlphabet}
          >
            Sort alphabetically
          </button>

          <button
            className="button"
            type="button"
            onClick={this.sortByLength}
          >
            Sort by length
          </button>

          <button
            className="button"
            type="button"
            onClick={this.reset}
          >
            Reset
          </button>
        </div>

        <ul className="list">
          {listOfGoods.map(good => (
            <li
              className={good}
              key={good}
            >
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
