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

interface State {
  goodsList: string[],
}

class GoodsList extends React.Component<{}, State> {
  state: State = {
    goodsList: goodsFromServer,
  };

  reverse = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].reverse(),
    }));
  };

  sortAlp = () => {
    this.setState((state) => ({
      goodsList: [...state.goodsList].sort((a, b) => a.localeCompare(b)),
    }));
  };

  sortByLength = () => {
    this.setState(state => ({
      goodsList: [...state.goodsList].sort((a, b) => a.length - b.length),
    }));
  };

  reset = () => {
    this.setState({
      goodsList: [...goodsFromServer],
    });
  };

  render() {
    const { goodsList } = this.state;

    return (
      <>
        <div className="App">
          <h1>Goods</h1>

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
            onClick={this.sortAlp}
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
        <ul>
          {goodsList.map((good) => (
            <li className={good} key={good}>
              {good}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default GoodsList;
