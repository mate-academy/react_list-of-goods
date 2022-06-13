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

enum GoodSort {
  none,
  name,
  lenght,
}

type State = {
  goods: string[];
  visible: boolean;
  reversed: boolean;
  sorted: GoodSort;
};

class App extends React.Component<{}, State> {
  state = {
    goods: [...goodsFromServer],
    visible: false,
    reversed: false,
    sorted: GoodSort.none,
  };

  start = () => (
    this.setState({ visible: true })
  );

  reverse = () => {
    this.setState((state) => ({ reversed: !state.reversed }));
  };

  sortByName = () => {
    this.setState({ sorted: GoodSort.name });
  };

  sortByLenght = () => {
    this.setState({ sorted: GoodSort.lenght });
  };

  reset = () => {
    this.setState({
      visible: false,
      reversed: false,
      sorted: GoodSort.none,
    });
  };

  render() {
    const {
      goods,
      visible,
      reversed,
      sorted,
    } = this.state;

    let listOfGoods = [...goods];

    switch (sorted) {
      case GoodSort.name:
        listOfGoods.sort((product1, product2) => (
          product1.localeCompare(product2)));
        break;

      case GoodSort.lenght:
        listOfGoods.sort((product1, product2) => (
          product1.length - product2.length));
        break;

      default:
        listOfGoods = [...goods];
    }

    if (reversed) {
      listOfGoods.reverse();
    }

    return (
      <div className="App">
        <h1>Goods</h1>
        <button
          type="button"
          onClick={this.start}
          className="button"
        >
          Start
        </button>

        <div>
          <button
            type="button"
            onClick={this.reverse}
            className="button"
          >
            Reverse
          </button>

          <button
            type="button"
            onClick={this.sortByName}
            className="button"
          >
            Sort alphabetically
          </button>

          <button
            type="button"
            onClick={this.reset}
            className="button"
          >
            Reset
          </button>

          <button
            type="button"
            onClick={this.sortByLenght}
            className="button"
          >
            Sort by length
          </button>
        </div>

        {visible && (
          <ul>
            {listOfGoods.map((product) => (
              <li>
                {product}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
